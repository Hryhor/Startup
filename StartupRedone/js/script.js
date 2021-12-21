$(function(){
  /*$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})*/
$(function(){
  $('.slider').slick({
    arrows : false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  })

});
});/*jquery*/
