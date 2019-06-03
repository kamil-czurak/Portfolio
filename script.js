$(function () {
  $(document).scroll(function () {
    if ($(document).scrollTop() >= 650 ) {
        $('nav').addClass('navbar_scrolled');
        $('#nav_overlay').css({'border-bottom':'1px solid #f5f5f5'});
    }
    else
    {
    	   $('nav').removeClass('navbar_scrolled');
         $('#nav_overlay').css({'border-bottom':'0'});
    }	
    var home = $('#background_overlay').height();
   	var projects = $('#projects').height();
   	var skills = $('#skills').height();
   	var contact = $('#contact').height();
   	var d = $(document).scrollTop();
   	if(home-200>d)
   	{
   		$('.nav_link').parent().removeClass('active');
        $('[data-id="home"]').parent().addClass('active');
   	}
   	else if(home-200<d && home+projects-200>d)
    {
    	$('.nav_link').parent().removeClass('active');
        $('[data-id="projects"]').parent().addClass('active');
    }
    else if(home+projects-200<d && home+projects+skills-300>d)
    {
    	$('.nav_link').parent().removeClass('active');
        $('[data-id="skills"]').parent().addClass('active');
    }
    else if(home+projects+skills-300<d )
    {
    	$('.nav_link').parent().removeClass('active');
        $('[data-id="contact"]').parent().addClass('active');
    }

    if($(window).scrollTop() + $(window).height() == $(document).height())
    {
      $('.nav_link').parent().removeClass('active');
      $('[data-id="contact"]').parent().addClass('active');
    } 
  });
    $(".nav_link").click(function (){
        var directory = $(this).attr('href');
        if(directory=='#home')
            $("html, body").animate({ scrollTop: 0 }, "slow");
        else
            $('html, body').animate({
                scrollTop: $(directory).offset().top-80
            }, 1000);
    });

    $('#hamburger_btn').click(function(){
      if($(this).hasClass('change'))
      {
          $('#hamburger_btn').removeClass('change');
          $('#nav_list').fadeOut();
      }
      else
      {
          $('#hamburger_btn').addClass('change');
          $('#nav_list').css({'display':'flex'});
      }
  })
    $('#nav_list li a').click(function(){
      if($('#hamburger_btn').is(':visible'))
      {
        $('#nav_list').fadeOut();
        $('#hamburger_btn').removeClass('change');
      } 
    })

});