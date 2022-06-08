$(window).on("load", function() {
    // preload
    $("#preload").fadeOut(500);
});
$(document).ready(function() {
    // jquery UI
    $("#datepicker").datepicker();
    $("#person").selectmenu();
    $("#time").selectmenu();
    // tabs menu active
    $('#menu .header-menu-list .menu-list ul li:first-child a').addClass('active');
    $('#menu .header-menu-list .menu-list ul li a').click(function() {
        $('#menu .header-menu-list .menu-list ul li a').removeClass('active');
        $(this).addClass('active');
    });
    // counter about
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // carousel testimonials
    $('#owl-testimonals').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoHeight: true,
        dots: false,
        autoplay: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        smartSpeed: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
                autoHeight:true
            }
        }
    });
    // carousel chefs
    $('#owl-chefs').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
     // carousel about
    $('#owl-about').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // tabs menu
    $('.menu-item > .item-list').not(':first-of-type').hide();
    $('.menu-list ul li a').click(function(e) {
        e.preventDefault();
    });
    $('.menu-list ul li').each(function(i) {
        $(this).attr('data-tab', 'tab' + i);
    });
    $('.menu-item > .item-list').each(function(i) {
        $(this).attr('data-tab', 'tab' + i);
    });
    $('.menu-list ul li').on('click', function() {
        var datatab = $(this).data('tab');
        $('.menu-list ul li').removeClass('active');
        $(this).addClass('active');
        $('.menu-item > .item-list').hide();
        $('.menu-item > .item-list[data-tab=' + datatab + ']').show();
    });
    // scroll booking table
    $(".header-menu li a[href*=#], .popup").on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
        return false;
    });
    // scroll fixed menu
    $(window).scroll(function() {
        var headerTop = $('.header-top').height();
        if ($(this).scrollTop() >= headerTop) {
            $('.header-bottom').addClass('fixedmenu');
        } else {
            $('.header-bottom').removeClass('fixedmenu');
        }
    });
    // magnificPopup
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
    // scroll top
    $('#link-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#link-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#link-top').fadeIn();
        } else {
            $('#link-top').fadeOut();
        }
    });
    // mobile menu
    $("#openmenu").click(function(e) {
        e.preventDefault();
        $(".flex-row.nav").animate({
            'left': 0
        }, 500);
    });
    $("#closemenu").click(function(e) {
        e.preventDefault();
        $(".flex-row.nav").animate({
            'left': '-300px'
        }, 500);
    });
    // scroll mobile menu
    $(".header-menu li a[href*=#], .nav .popup").on("click", function(){
        $(".flex-row.nav").animate({
      'left': '-300px'
    }, 500);
    });
    // ajax booking table
    $('button[name="reservation"]').click(function(e){
       e.preventDefault();
       var nameguest =  $('input[name="nameguest"]').val();
       var phoneguest = $('input[name="phoneguest"]').val();
       if(nameguest == '' && phoneguest !== '') {
           $('input[name="nameguest"]').css({'border': '1px solid #f00'});
           $('.result').fadeIn().html('<span class="error">"Név" mező kitöltése kötelező..</span>');
           $('input[name="nameguest"]').focus(function(){
               $(this).removeAttr('style');
               $('.result').fadeOut();
           });
       }
       else if(phoneguest == '' && nameguest !== '') {
           $('input[name="phoneguest"]').css({'border': '1px solid #f00'});
           $('.result').fadeIn().html('<span class="error">"Telefonszám" mező kitöltése kötelező.</span>');
           $('input[name="phoneguest"]').focus(function(){
               $(this).removeAttr('style');
               $('.result').fadeOut();
           });
       }
       else if(nameguest == '' && phoneguest == '') {
           $('input[name="phoneguest"], input[name="nameguest"]').css({'border': '1px solid #f00'});
           $('.result').fadeIn().html('<span class="error">"Név" és "Telefonszám" mező kitöltése kötelező.</span>');
           $('input[name="phoneguest"]').focus(function(){
            $(this).removeAttr('style');
            $('.result').fadeOut();
         });
           $('input[name="nameguest"]').focus(function(){
            $(this).removeAttr('style');
            $('.result').fadeOut();
        });

       }
        else if(nameguest !== '' && phoneguest !== '') {
            var month = $('.ui-datepicker-month').text();
            var year = $('.ui-datepicker-year').text();
            var qtyguest = $('select[name="qtyguest"]').val();
            var timereservation = $('select[name="timereservation"]').val();
         $.ajax({
            url: '../booking.php',
            type: 'POST',
            data: {
                month: month,
                year: year,
                qtyguest: qtyguest,
                timereservation: timereservation,
                nameguest: nameguest,
                phoneguest: phoneguest
            },
            dataType: 'html',
            success: function(data) {
                 if(data == 'send') {
                    $('.result').fadeIn().html('<span class="send">Köszönjük a foglalását, hamarosan felvesszük önnel  kapcsolatot.</span>');
                    $('input[name="nameguest"]').val('');
                    $('input[name="phoneguest"]').val('');
                 }
            }
         }); // ajax

       }
    });
}); //ready