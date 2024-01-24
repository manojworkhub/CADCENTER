
// this add event listener for while clicking hambar change into x and nav slide show and log is fixed in same place 
var ham = document.querySelector(".hambar")
ham.addEventListener('click', myFunction)

function myFunction() {

    // change class for hambar to x mark converter 
    var x = document.querySelector(".hambar")
    x.classList.toggle("change");
    // ab class for while clicking hambar fix in same position 
    x.classList.toggle("x")

    // come class is for nav slide from left 
    var nav = document.getElementById("nav")
    nav.classList.toggle("come")
    // log id for while clickin hambar logo cant move fixed in same position 
    let log = document.querySelector(".log")
    log.id = "logfix"

}


// this is for home background selction 
var home = document.getElementById("home")
var about = document.getElementById("about")
var course = document.getElementById("course")
var contect = document.getElementById("contect")
var dropdown = document.getElementById('dropdown')

home.addEventListener("click", () => {
    home.classList.add("active")
    about.classList.remove("active")
    course.classList.remove("active")
    contect.classList.remove("active")
    dropdown.style.height = "0px"
})

about.addEventListener("click", () => {
    home.classList.remove("active")
    about.classList.add("active")
    course.classList.remove("active")
    contect.classList.remove("active")
    dropdown.style.height = "0px"
})
course.addEventListener("click", () => {
    home.classList.remove("active")
    about.classList.remove("active")
    course.classList.add("active")
    contect.classList.remove("active")

    dropdown.style.height = "147px"
})
contect.addEventListener("click", () => {
    home.classList.remove("active")
    about.classList.remove("active")
    course.classList.remove("active")
    contect.classList.add("active")
    dropdown.style.height = "0px"
})


//************************** image slider for section one ******************************//



let slidePosition = 0;
const slides = document.querySelectorAll(".spliceitem");
const totalSlider = slides.length;
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

function updatePosition() {
  slides.forEach(slide => {
    slide.classList.remove("activeimg");
    slide.classList.add("hidden");
  })
  slides[slidePosition].classList.add("activeimg");
}

btnPrev.addEventListener('click', function () {
  PrevSlide();
});


btnNext.addEventListener('click', function () {
  NextSlide();
});

function PrevSlide() {
  if (slidePosition == 0) {
    slidePosition = totalSlider - 1;
  } else {
    slidePosition--;
  }
  updatePosition();

}

function NextSlide() {
  if (slidePosition == totalSlider - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updatePosition();

}

// setInterval(()=>{
//     if(slidePosition==totalSlider-1){
//       slidePosition=0;
//     }else{
//       slidePosition++;
//     }
//     updatePosition();
//   },9000);