$('.counter_num').counterUp({
    delay: 10,
    time: 1000,
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


// var owl = $('.owl-carousel .owl-carousel');
// owl.owlCarousel({
//     loop:true,
//     nav:true,
//     margin:10,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },            
//         960:{
//             items:5
//         },
//         1200:{
//             items:6
//         }
//     }
// });