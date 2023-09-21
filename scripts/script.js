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
    } else {
        
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













