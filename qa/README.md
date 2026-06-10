# Legacy Aesthetic — QA / Staging on Proxmox

Host a review copy of the site at **https://review.legacy-massage.ca** using a
Debian **LXC + Docker** (nginx) on your Proxmox server, exposed through a
**Cloudflare Tunnel** (no port-forwarding, your home IP stays hidden). The QA
copy sends `noindex`, so it won't show up in Google.

What's in this bundle:

```
legacy-qa/
├─ docker-compose.yml   # nginx (static) + cloudflared (tunnel)
├─ nginx.conf           # clean URLs, gzip, caching, noindex
├─ .env.example         # where the tunnel token goes
├─ site/                # the built website (Astro dist/)
└─ README.md            # this file
```

Updating the site later = replace the contents of `site/` (changes serve live).

---

## 1. Create the LXC container (on the Proxmox host)

You can use the GUI (**Create CT**) or the shell. Either way you MUST enable
**nesting** (and keyctl) so Docker runs inside the container.

**GUI:** Create CT → Debian 12 template → 2 cores / 2 GB RAM / 8 GB disk →
network DHCP → after creating, open **Options → Features** and tick **nesting**
and **keyctl**.

**Shell (run on the Proxmox node):**

```bash
# Get a Debian 12 template if you don't have one
pveam update && pveam download local debian-12-standard_12.7-1_amd64.tar.zst

# Create an unprivileged container with Docker support (nesting + keyctl)
pct create 910 local:vztmpl/debian-12-standard_12.7-1_amd64.tar.zst \
  --hostname legacy-qa \
  --cores 2 --memory 2048 --swap 512 \
  --rootfs local-lvm:8 \
  --net0 name=eth0,bridge=vmbr0,ip=dhcp \
  --features nesting=1,keyctl=1 \
  --unprivileged 1 --onboot 1 \
  --ssh-public-keys ~/.ssh/id_rsa.pub      # or use --password to set one

pct start 910
pct exec 910 -- ip a          # note the container's LAN IP
```

> Container ID `910` and template version are examples — adjust to your setup.

---

## 2. Install Docker (inside the container)

```bash
pct enter 910          # or: ssh root@<lxc-ip>
apt update && apt install -y curl
curl -fsSL https://get.docker.com | sh
docker --version       # confirm it works
```

---

## 3. Copy this bundle into the container

From your workstation (where `legacy-qa-bundle.tar.gz` was created):

```bash
scp legacy-qa-bundle.tar.gz root@<lxc-ip>:/opt/
```

Then inside the container:

```bash
cd /opt && tar -xzf legacy-qa-bundle.tar.gz && cd legacy-qa
```

---

## 4. Create the Cloudflare Tunnel

In the Cloudflare dashboard:

1. **Zero Trust → Networks → Tunnels → Create a tunnel** → connector
   **Cloudflared** → name it `legacy-qa` → **Save**.
2. On the install screen, **copy the token** (the long string after `--token`).
3. Add a **Public Hostname**:
   - **Subdomain:** `review`  **Domain:** `legacy-massage.ca`
   - **Type:** `HTTP`  **URL:** `web:80`
   - Save. (Cloudflare auto-creates the DNS record.)

> `web:80` is the nginx service name on the compose network — cloudflared reaches
> it directly, so nothing is exposed to the internet except through the tunnel.

Then drop the token into `.env`:

```bash
cp .env.example .env
nano .env        # paste:  TUNNEL_TOKEN=eyJ...your-token...
```

---

## 5. Start it

```bash
docker compose up -d
docker compose logs -f cloudflared    # look for "Registered tunnel connection"
```

- **Public:** https://review.legacy-massage.ca
- **LAN test:** http://&lt;lxc-ip&gt;:8080

Send customers the public link. Done.

---

## Updating the QA site

When you change the site, rebuild on your workstation and refresh `site/`:

```bash
# on your workstation (repo root)
npm run build
# re-make the bundle, OR copy just the new build over:
rsync -a --delete dist/ root@<lxc-ip>:/opt/legacy-qa/site/
```

nginx serves the mounted folder live, so the new build is visible immediately —
no restart needed. (If you replaced the whole folder, run
`docker compose restart web`.)

---

## Stop / remove

```bash
docker compose down                 # stop the QA stack
# remove the whole container from the Proxmox host:
pct stop 910 && pct destroy 910
```

---

## Notes

- **Not indexed:** nginx sends `X-Robots-Tag: noindex` and serves a
  `Disallow: /` robots.txt, and page canonicals point at the production domain —
  so this QA copy won't compete with or appear instead of the real site.
- **Want a password later?** Add **Cloudflare Access** (Zero Trust → Access →
  Applications) on `review.legacy-massage.ca` to require an email code — no code
  change needed.
- **Booking links** (tel:/sms:) and all internal links work normally on the QA
  host since they're root-relative.
