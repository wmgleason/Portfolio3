$(document).ready(function (){
    //     $('.menu-toggler').on('click', function () {
    //       $(this).toggleClass('open');
    //       $('.top-nav').toggleClass('open');
    //     });
    //     // Fades happen when scrolling both up and down - to stop it when scrolling up, add once: true here
    // AOS.init({
    //     easing: "ease",
    //     duration: 1800
    //     });
    // });

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
    // $('.menu-toggler').on('click', function () {
    //     $(this).toggleClass('open');
    //     $('.top-nav').toggleClass('open');
    // });
    // $('.top-nav .nav-link').on('click', function (){
    //     $("menu-toggler").removeClass('open');
    //     $('.top-nav').removeClass('open');
    // });
    // $('nav a[href*="#"]').on('click', function (){
    //     $("html, body").animate( keyframes: {
    //         scrollTop: $($(this).attr("href")).offset().top - 100
    //     }, options: 2000);
    // });
    // $('#up').on('click', function () {
    //     $("html, body").animate(keyframes: {
    //         scrollTop: 0
    //     }, options: 2000);
    // });

// Fades happen when scrolling both up and down - to stop it when scrolling up, add once: true here
    AOS.init({
        easing: "ease",
        duration: 1800
    });
});

// const icon = document.getElementById("toggler");
// const nav = document.getElementById("navbar");
// // functions
// nav.style.display = "none";
// const showNav = (e) => {
//   e.target.parentElement.classList.toggle("change-backGround");
//   e.target.classList.toggle("clicked");
//   //setTimeout ==> because when i display:none for elements not animated so i delay it to be smooth
//   e.target.classList.contains("clicked")
//     ? ((nav.style.cssText = "dispaly: flex;"),
//       setTimeout(() => (nav.style.transform = "translateY(0)"), 300))
//     : ((nav.style.transform = "translateY(-100%)"),
//       setTimeout(() => (nav.style.display = "none"), 700));
// };
// //events
// icon.addEventListener("click", showNav);