// // JavaScript Document
// console.log("hi");

// HAMBURGER MENU VERSCHIJNEN

var menuButton = document.querySelector('header nav div button');
var hamburgerMenu = document.querySelector('header .hamburger_menu');
var closeButton = document.querySelector('header .hamburger_menu ul:first-of-type li:last-of-type button')

menuButton.addEventListener("click", function() {
  hamburgerMenu.style.display = "block";
  document.body.style.overflow = "hidden";
  menuButton.setAttribute("aria-expanded", "true");
});

closeButton.addEventListener("click", function() {
  hamburgerMenu.style.display = "none";
  document.body.style.overflow = "auto";
  menuButton.setAttribute("aria-expanded", "close");
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
    activiteitenButton.setAttribute("aria-expanded", "false")
  } else {
    activiteiten.style.display = "block";
    firstArrowSVG.style.transform = "rotate(180deg)";
    activiteitenButton.style.borderBottom = "none";
    activiteitenButton.setAttribute("aria-expanded", "true");
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
    overOnsButton.setAttribute("aria-expanded", "false")
  } else {
    overOns.style.display = "block";
    secondArrowSVG.style.transform = "rotate(180deg)";
    overOnsButton.style.borderBottom = "none";
    overOnsButton.setAttribute("aria-expanded", "true");
  }
});


// UITKLAP MENU ACTIVITEITEN MET HULP VAN CHATGPT

var activiteitenUitklapButton = document.querySelector("header nav ul li:first-of-type button");
var activiteitenSVG = document.querySelector("header nav ul li:first-of-type button svg");
var activiteitenUitklapMenu = document.querySelector("header nav ul li:first-of-type ul");

var kinderfeestjes = document.querySelector("header nav > ul li:nth-of-type(2)");

// Functie om het activiteiten menu te sluiten
function sluitActiviteitenMenu() {
  activiteitenUitklapMenu.style.display = "none";
  activiteitenUitklapButton.setAttribute("aria-expanded", "false")
  activiteitenSVG.style.transform = 'rotate(0deg)';
}

// Eventlistener voor het activiteiten menu openen/sluiten
activiteitenUitklapButton.addEventListener("click", function(event) {
  event.stopPropagation(); // Voorkom dat het klikken op de knop de body-click event activeert

  if (activiteitenUitklapMenu.style.display === "flex" || activiteitenUitklapMenu.style.display === "") {
    sluitActiviteitenMenu();
  } else {
    activiteitenUitklapMenu.style.display = "flex";
    activiteitenUitklapButton.setAttribute("aria-expanded", "true")
    activiteitenSVG.style.transform = 'rotate(180deg)';
  }
});

// Eventlistener voor body click om het activiteiten menu te sluiten
document.body.addEventListener("click", function(event) {
  // Controleer of het geklikte element zich buiten het activiteiten menu bevindt
  if (!activiteitenUitklapMenu.contains(event.target)) {
    sluitActiviteitenMenu();
  }
});


// UITKLAP MENU OVER ONS MET HULP VAN CHATGPT

var overOnsUitklapButton = document.querySelector("header nav ul li:nth-of-type(4) button");
var overOnsSVG = document.querySelector("header nav ul li:nth-of-type(4) button svg");
var overOnsUitklapMenu = document.querySelector("header nav ul li:nth-of-type(4) ul");

// Functie om het over ons menu te sluiten
function sluitOverOnsMenu() {
  overOnsUitklapMenu.style.display = "none";
  overOnsUitklapButton.setAttribute("aria-expanded", "false")
  overOnsSVG.style.transform = 'rotate(0deg)';
}

// Eventlistener voor het over ons menu openen/sluiten
overOnsUitklapButton.addEventListener("click", function(event) {
  event.stopPropagation(); // Voorkom dat het klikken op de knop de body-click event activeert

  if (overOnsUitklapMenu.style.display === "flex" || overOnsUitklapMenu.style.display === "") {
    sluitOverOnsMenu();
  } else {
    overOnsUitklapMenu.style.display = "flex";
    overOnsUitklapButton.setAttribute("aria-expanded", "true")
    overOnsSVG.style.transform = 'rotate(180deg)';
  }
});

// Eventlistener voor body click om het over ons menu te sluiten
document.body.addEventListener("click", function(event) {
  // Controleer of het geklikte element zich buiten het over ons menu bevindt
  if (!overOnsUitklapMenu.contains(event.target)) {
    sluitOverOnsMenu();
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

















