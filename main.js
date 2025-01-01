let Main = document.querySelector(".title");
let Aboutme = document.querySelector(".column1");
let Skills = document.querySelector(".column2");
let Project = document.querySelector(".column3");
document.addEventListener('DOMContentLoaded', () => {
new Swiper('.slide-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    initialSlide: 0,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets : true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1300:{
            slidesPerView:3
        }
    }
  });
});
function main(){
  Main.scrollIntoView({
    behavior:"smooth",
    block: "center",
    inline: "center" 
  });
}
function about_me(){
  Aboutme.scrollIntoView({
    behavior:"smooth",
    block: "center",
    inline: "center" 
  });
}
function Ski(){
  Skills.scrollIntoView({
    behavior:"smooth",
    block: "center",
    inline: "center" 
  });
}
function Proj(){
  Project.scrollIntoView({
    behavior:"smooth",
    block: "center",
    inline: "center" 
  });
}