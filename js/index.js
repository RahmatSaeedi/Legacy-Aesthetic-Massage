$(document).ready(function()
{
   $('#Overlay-menu-overlay').overlay({hideTransition:true});
   $('#Overlay-menu').on('click', function(e)
   {
      $.overlay.toggle($('#Overlay-menu-overlay'));
      return false;
   });
   $("#Massage-and-services-slideshow").conveyerbelt({speed:2, spacing: 8});
   $("#Call-now-button").button({icon: 'ui-primary', iconPosition: 'beginning'});
});
