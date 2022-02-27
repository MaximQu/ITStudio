$('.burger').on('click', () => {
   $('.nav__list').toggleClass('active');
})


$(window).on('scroll', function () {
   var scroll = $(window).scrollTop();
   if (scroll < 400) {
     $(".header").removeClass("fixed");
   } else {
     $(".header").addClass("fixed");
   }
});
