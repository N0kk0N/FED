// // JavaScript Document
// console.log("hi");

// // SLIDESHOW

// var previousButton
// var nextButton
// var slideShow   

// previousButton = document.querySelector("main div:first-of-type ul li:first-of-type button");
// nextButton = document.querySelector("main div:first-of-type ul li:last-of-type button");
// slideShow = document.querySelector("main div:first-of-type figure");

// previousButton.onclick = previousSlide;

// function previousSlide() {
//     slideShow.classList.add("animationPaused");
//     console.log("terug");
// }

// nextButton.onclick = nextSlide;

// function nextSlide () {
//     slideShow.classList.add("animationPaused");
//     console.log("volgende");
// }

// HAMBURGER MENU VERSCHIJNEN

var menuButton = document.querySelector('header nav div button');
var hamburgerMenu = document.querySelector('header .hamburger_menu');
var closeButton = document.querySelector('header .hamburger_menu ul:first-of-type li:last-of-type button')

menuButton.addEventListener("click", function() {
  hamburgerMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", function() {
  hamburgerMenu.style.display = "none";
  document.body.style.overflow = "auto";
});


// HAMBURGER MENU ACTIVITEITEN BUTTON

var activiteitenButton = document.querySelector('header .hamburger_menu ul:nth-of-type(2) li:first-of-type button');
var activiteiten = document.querySelector('header .hamburger_menu .activiteiten');
var firstArrowSVG = document.querySelector('header .hamburger_menu ul:nth-of-type(2) li:first-of-type button svg');

activiteitenButton.addEventListener("click", function() {
  if (activiteiten.style.display === "block") {
    activiteiten.style.display = "none";
    firstArrowSVG.style.transform = 'rotate(0deg)';
    activiteitenButton.style.borderBottom = "2px solid lightgrey"
  } else {
    activiteiten.style.display = "block";
    firstArrowSVG.style.transform = "rotate(180deg)";
    activiteitenButton.style.borderBottom = "none"
  }
});

// HAMBURGER MENU OVER ONS BUTTON

var overOnsButton = document.querySelector('header .hamburger_menu ul:nth-of-type(2) li:nth-of-type(5) button');
var overOns = document.querySelector('header .hamburger_menu .over_ons');
var secondArrowSVG = document.querySelector('header .hamburger_menu ul:nth-of-type(2) li:nth-of-type(5) button svg');

overOnsButton.addEventListener("click", function() {
  if (overOns.style.display === "block") {
    overOns.style.display = "none";
    secondArrowSVG.style.transform = 'rotate(0deg)';
    overOnsButton.style.borderBottom = "2px solid lightgrey"
  } else {
    overOns.style.display = "block";
    secondArrowSVG.style.transform = "rotate(180deg)";
    overOnsButton.style.borderBottom = "none"
  }
});


// SCROLL SYSTEEM NIEUWS ARTIKELEN

var scrollContainer = document.querySelector('main section:nth-of-type(3) section');
var scrollPrevButton = document.querySelector('main section:nth-of-type(3) ul:last-of-type li:first-of-type button');
var scrollNextButton = document.querySelector('main section:nth-of-type(3) ul:last-of-type li:last-of-type button');

scrollPrevButton.addEventListener('click', () => {
    var imageWidth = scrollContainer.offsetWidth;
    var currentScrollLeft = scrollContainer.scrollLeft;
    var prevScrollLeft = currentScrollLeft - imageWidth;
  
    if (prevScrollLeft >= 0) {
      scrollContainer.scroll({ left: prevScrollLeft, behavior: 'smooth' });
      console.log('vorige');
    } 
    else {
      scrollContainer.scroll({ left: 0, behavior: 'smooth' });
      console.log('terug naar eerste');
    }
  });
  

scrollNextButton.addEventListener('click', () => {
  var imageWidth = scrollContainer.offsetWidth;
  var currentScrollLeft = scrollContainer.scrollLeft;
  var nextScrollLeft = currentScrollLeft + imageWidth;
  
  if (nextScrollLeft < scrollContainer.scrollWidth) {
    scrollContainer.scroll({ left: nextScrollLeft, behavior: 'smooth' });
    console.log('volgende');
  }
});















