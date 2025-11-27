//Carousel
$(document).ready(function () {

    $('#carousel-001').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },

            1200: {
                items: 2
            },

            1500: {
                items: 3
            }
        }
    })

    $('#carousel-002').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 30,
        nav: true,
        stagePadding: 25,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 1
            },

            1200: {
                items: 2
            },

            1500: {
                items: 2
            }
        }
    })

    $('#carousel-003').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 50,
        nav: true,
        stagePadding: 10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },

            1200: {
                items: 3
            },

            1500: {
                items: 3
            }
        }
    })

    $('#carousel-004').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 15,
        nav: false,
        center:true,
        stagePadding: 80,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 1
            },

            1200: {
                items: 2
            },

            1500: {
                items: 2
            }
        }
    })

    $('#carousel-005').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 30,
        stagePadding: 25,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            
            600: {
                items: 2
            },

            800: {
                items: 2
            },

            1200: {
                items: 5
            },

            1500: {
                items: 5
            }
        }
    })

    $('#carousel-007, #carousel-008, #carousel-009').owlCarousel({
        loop: false,
        autoplay: true,
        autoplayHoverPause:true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },

            1200: {
                items: 3
            },

            1500: {
                items: 4
            }
        }
    })

});


//Carousel center Active
var owl = $('#carousel-006').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    margin: 50,
    stagePadding: 30,    
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    responsive: {
        0: {
                items: 1
            },

            600: {
                items: 2
            },

            1200: {
                items: 3
            },

            1500: {
                items: 5
            }
    }
});

/****************************/

jQuery(document.documentElement).keydown(function (event) {    

    // var owl = jQuery("#carousel");

    // handle cursor keys
    if (event.keyCode == 37) {
       // go left
      owl.trigger('prev.owl.carousel', [400]);
      //owl.trigger('owl.prev');
    } else if (event.keyCode == 39) {
       // go right
        owl.trigger('next.owl.carousel', [400]);
       //owl.trigger('owl.next');
    }

});
