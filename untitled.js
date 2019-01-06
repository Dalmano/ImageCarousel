let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

//clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//Initialise slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

  
  //Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
  
//startSlide();

//var slideIndex = 0;
//showSlides();

//function showSlides(){
//var i;
//var slides = document.getElementsByClassName("slide");
//for (var i = 0; i < slides.length; i++) {
//slides[i].style.display = "none";
 //}
//slideIndex++;
//if (slideIndex > slides.length) {slideIndex = 1}
 //slides[slideIndex-1].style.display="block";
//setTimeout(showSlides, 1500);
//}





startSlide();

var slideIndex = 0;
var slideInterval = setInterval(showSlides,2500);


//showSlides();

function showSlides(){
var i;
var slides = document.getElementsByClassName("slide");
for (var i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
 }
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
 slides[slideIndex-1].style.display="block";
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(showSlides, 2500);
}

pauseButton.onclick = function() {
  if(playing){
    pauseSlideshow();
  }
  else {
    playSlideshow();
  }
};

showSlides();















    
