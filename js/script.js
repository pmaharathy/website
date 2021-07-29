/*====================================
          Preloader
=====================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*=====================================
            Team
======================================*/
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: false,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});

/*======================================
           Progress Bars
========================================*/           
$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy()
    }, {
        offset: 'bottom-in-view'
    });
});


/*======================================
         Responsive Tabs
========================================*/    
$(function () {
   
    $("#services-tabs").responsiveTabs({
    animation: 'slide',
 });

});
 
/*======================================
            Portfolio
========================================*/    
$(window).on('load', function () {
   
    //Initialize Isotope
    $("#isotope-container").isotope({
    });
    
    // filter items on button click 
    $("#isotope-filters").on('click', 'button', function() {
       
      // get filter value
      var filterValue =$(this).attr('data-filter');
      
        $("#isotope-container")
            .isotope({filter: filterValue});
        
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
        
     });
 });

/*======================================
            Magnifier
========================================*/ 
$(function () {
   
  $("#portfolio-wrapper").magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery: {
        enabled: true
    },
      
  });
    
});

/*=====================================
            Testimonial
======================================*/
$(function () {
   $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 900,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        
    });
});

/*=====================================
            Stats
======================================*/
$(function () {
   $(".counter").counterUp ({
        delay: 10,
        time: 1000
    });
});

/*=====================================
         Clients
======================================*/
$(function () {
   $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 900,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
     
    });
});

/*=====================================
         Navigation
======================================*/

/* Show & Hide White Navigation */
$(function() {
    
  //show/hide nav on page load
      showHideNav();
    
    $(window).scroll(function(){
      
    //show/hide nav on page load
        showHideNav();
    
  });
    
    function showHideNav(){
        
        if( $(window).scrollTop() > 50) {
        
        //Show white nav
        $("nav").addClass("white-nav-top");
        
        //Show dark logo
        $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            
        //Show back to top button
        $("#back-to-top").fadeIn();
        
    } else {
        
        //Hide white nav
        $("nav").removeClass("white-nav-top");
        
        //Show logo
        $(".navbar-brand img").attr("src", "img/logo/logo.png");
        
        //Hide back-to-top button
        $("#back-to-top").fadeOut();
    }
   
  }

});

//smooth scrolling
$(function () {
    
    $("a.smooth-scroll").click(function (event) {
        
        event.preventDefault();
        
        //get section id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    
    });
    
});

/*=====================================
        Animation
======================================*/
//animate on scroll
$(function () {
    new WOW().init();
    
});

//home animation on page load 
$(window).on('load', function() {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-1").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
    
    
});

