$(document).ready(function(){

    $("a.Mobile-overlay-nav-item").click(function(){
        $(this).parents().find('.Mobile-overlay-menu').toggleClass('active');
    
        });
        $("button.Mobile-bar-menu").click(function(){
         $(this).parents().find('.Mobile-overlay-menu').toggleClass('active');
       });
       $(".dropdown-menu-mobile").click(function(){
        $(this).find('.child-menus').slideToggle();
      });
       
    
       });