const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelector(".img-slider");
const srcs = [
  "./landscape/inazuma 2.jpg",
  "./landscape/inazuma.jpg",
  "./landscape/liyue 2.png",
  "./landscape/liyue 3.png",
  "./landscape/liyue.jpg",
  "./landscape/monstad (2).jpg",
  "./landscape/monstad.jpg",
  "./landscape/sumeru 2.jpg",
  "./landscape/sumeru 3.png",
  "./landscape/sumeru.jpg",
];

let sliderNav= function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })
    btns[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i)
    slides.src = srcs[i];
    });
});

