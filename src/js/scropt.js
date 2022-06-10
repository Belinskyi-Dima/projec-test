(() => {
  const hamburgerMenu = $(".mobile-menu");
  $(document).on("click", ".js-hamburger-cta", (e) => {
    console.log(hamburgerMenu);
    e.preventDefault();
    $(e.target).toggleClass("expanded");
    hamburgerMenu.toggleClass("mobile-menu");
  });
})();

$(".slider").slick({
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  centerPadding: "60px",
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "50px",
      },
    },
  ],
});
