(() => {
	// const menuBtnRef = document.querySelector("[data-menu-button]");
	// const mobileMenuRef = document.querySelector("[data-menu]");
	// const mobileBtnClose = document.querySelector("[data-menu-close]");
   const hamburgerMenu = $('.mobile-menu')


	$(document).on('click', '.js-hamburger-cta', (e)=>{
		// alert("aaa")
		// console.log(this);
		console.log(hamburgerMenu);
		e.preventDefault();
		$(e.target).toggleClass('expanded');
		hamburgerMenu.toggleClass('mobile-menu')
	});

	// menuBtnRef.addEventListener("click", () => {
	//   mobileMenuRef.classList.toggle("is-open");
	// });
 
	// mobileBtnClose.addEventListener("click", () => {
	//   mobileMenuRef.classList.toggle("is-open");
	// });
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
