$(document).ready(function()
{
   $("#Massage-and-services-slideshow").conveyerbelt({speed:2, spacing: 8});
   $("#Call-now-button").button({icon: 'ui-primary', iconPosition: 'beginning'});
   $('#Overlay-menu-overlay').overlay({hideTransition:true});
   $('.Overlay-menu').drilldownmenu({backText: 'Back'});
   $('.Overlay-menu .drilldown-back > a').addClass('wb-theme-button');
   $('#Overlay-menu').on('click', function(e)
   {
      $.overlay.toggle($('#Overlay-menu-overlay'));
      return false;
   });
});
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S3DTHKED1J');
