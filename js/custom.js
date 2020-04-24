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
  function smooth_scroll(offset) {
   
    if (offset) {
      var offset = offset;
    } else {
      offset = 0;
    }

    //var smooth_scroll = $('');
   $('.nav-inner a, .Mobile-overlay-nav-item').on('click', function(e){
      e.preventDefault();

      var get_href      = $(this).attr('href');
      var target_offset = $(get_href);

      $('html,body').animate({
        scrollTop: $(target_offset).offset().top - offset
      }, {
        duration: 4000,
        complete: function() {
   
        },
      }
      );
    });
  };
  $(".nav-inner a, .Mobile-overlay-nav-item").on('click', smooth_scroll(0));


   });


    
   
