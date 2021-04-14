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

// Todo
// 1. Fix close all subNavs


function navToggleClickEventHandler(event) {
  toggleMainNav(this);
}

function navToggleKeydownHandler(event) {
  const toggleButton = event.target;

  switch (event.key) {
    // Actual button, so Spacebar is captured already...

    case "Esc":
    case "Escape":
      closeMainNav(toggleButton);
      break;
    default:
      return;
  }
}

function subNavClickEventHandler(event) {
  const subNav = this.parentNode.querySelector('.subnav');

  if (subNav !== null) {
    event.preventDefault();
    toggleSubNav(this, subNav);
  }
}

function subNavKeydownHandler(event) {
  let subNav;
  let currentNavItem;
  
  if (this.classList.contains('.subNav')) {
    subNav = this;
    currentNavItem = this.querySelector('a');
  } else {
    subNav = this.parentNode.querySelector('.subnav');
    currentNavItem = event.target;
  }
  
  console.log(subNav);
  console.log(currentNavItem);

  switch (event.key) {
    case "Spacebar":
    case " ":
      // Open subnav and jump to first item
      toggleSubNav(currentNavItem, subNav);
      break;
    case "Esc":
    case "Escape":
      closeSubNav(currentNavItem, subNav);
      break;
    default:
      return;
  }
}

function closeMainNav(button) {
  button.setAttribute('aria-expanded', 'false');
  navWrapper.setAttribute('aria-hidden', 'true');
  navWrapper.classList.add('noshow');
}

function openMainNav(button) {
  button.setAttribute('aria-expanded', 'true');
  navWrapper.setAttribute('aria-hidden', 'false');
  navWrapper.classList.remove('noshow');
}

function toggleMainNav(button) {
  if (button.getAttribute('aria-expanded') === 'true') {
    closeMainNav(button);
  } else {
    openMainNav(button);
  }
}

function closeSubNav(link, subNav) {
  link.setAttribute('aria-expanded', 'false');
  subNav.setAttribute('aria-hidden', 'true');
  subNav.classList.add('noshow');
}

function openSubNav(link, subNav) {
  link.setAttribute('aria-expanded', 'true');
  subNav.setAttribute('aria-hidden', 'false');
  subNav.classList.remove('noshow');
}

function toggleSubNav(link, subNav) {
  // Close all subnavs
  // WIP
  const subNavs = [
    ...document.querySelectorAll('.nav-main .subnav')
  ];
  // subNavs.forEach(siblingSubNav => {
  //   let siblingLink = siblingSubNav.parentNode.querySelector('a');
  //   closeSubNav(siblingLink, siblingSubNav);
  // });

  // Now open the proper subnav
  if (subNav !== null) {
    if (link.getAttribute('aria-expanded') === 'true') {
      closeSubNav(link, subNav);
    } else {
      openSubNav(link, subNav);
    }
  }
}

function setupSubNavItem(subNavItem) {
  let link = subNavItem.querySelector('a');
  let subNav = subNavItem.querySelector('.subnav');

  link.setAttribute('aria-expanded', 'false');
  link.setAttribute('role', 'button');
  subNav.removeAttribute('hidden');
  subNav.setAttribute('aria-hidden', 'true');
  subNav.classList.add('noshow');
  // subNav.setAttribute('aria-label', link.innerText + " submenu");
  // subNav.setAttribute('tabindex', '-1');
}

function setupNavLink(navLink) {
  navLink.addEventListener('click', subNavClickEventHandler);
  navLink.parentNode.addEventListener('keydown', subNavKeydownHandler);
}

function setupNavToggle(navToggle, navWrapper) {
  navToggle.setAttribute('aria-expanded', "false");
  navWrapper.classList.add('noshow');

  if(window.screen.width < 768) {
    
  }
  
  navToggle.addEventListener('click', navToggleClickEventHandler);
  navToggle.addEventListener('keydown', navToggleKeydownHandler);
}


// Do Main Magic...
const header = document.querySelector('.a11y-nav');
header.classList.add('has-js-loaded');
const mainNav = document.querySelector('.nav-main');
const navWrapper = document.querySelector('.nav-wrapper');

let subNavItems = [
  ...document.querySelectorAll('.has-subnav')
];
subNavItems.forEach(subNavItem => setupSubNavItem(subNavItem));

let navLinks = [
  ...document.querySelectorAll('.nav-main > ul > li > a')
];
navLinks.forEach(navLink => setupNavLink(navLink));

const navToggle = document.querySelector('.nav-toggle');
setupNavToggle(navToggle, navWrapper);
