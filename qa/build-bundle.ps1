# Builds the site and assembles ../legacy-qa-bundle.tar.gz for Proxmox deployment.
# Usage (from repo root or anywhere):  pwsh qa/build-bundle.ps1
$ErrorActionPreference = 'Stop'
$qa = $PSScriptRoot
$root = Split-Path -Parent $qa

Write-Host 'Building site (npm run build)...' -ForegroundColor Cyan
Push-Location $root
try { npm run build } finally { Pop-Location }

$stageRoot = Join-Path $qa '.stage'
$stage = Join-Path $stageRoot 'legacy-qa'
if (Test-Path $stageRoot) { Remove-Item $stageRoot -Recurse -Force }
New-Item -ItemType Directory -Force -Path (Join-Path $stage 'site') | Out-Null

foreach ($f in 'docker-compose.yml', 'nginx.conf', '.env.example', 'README.md') {
  Copy-Item (Join-Path $qa $f) $stage
}
Copy-Item (Join-Path $root 'dist\*') (Join-Path $stage 'site') -Recurse -Force

$bundle = Join-Path $root 'legacy-qa-bundle.tar.gz'
if (Test-Path $bundle) { Remove-Item $bundle -Force }
tar -czf $bundle -C $stageRoot legacy-qa
Remove-Item $stageRoot -Recurse -Force

$size = [math]::Round((Get-Item $bundle).Length / 1MB, 2)
Write-Host "Bundle ready: $bundle ($size MB)" -ForegroundColor Green
