let Main = document.querySelector(".title");
let Aboutme = document.querySelector(".column1");
let Skills = document.querySelector(".column2");
let Project = document.querySelector(".column3");
let n = document.querySelector(".Name");
let e = document.querySelector(".Email");
let m = document.querySelector(".Message");

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.slide-wrapper', {
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
  window.addEventListener('resize', () => {
    swiper.update();
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
function Contact(){
  document.querySelectorAll(".error-message").forEach(el => el.remove());
  if (n.value.trim() === ""){
    showError(".Name","Name is required!")
  
  }else if (e.value.trim() === ""){
    showError(".Email","Email is required!")
  }else{
    alert("Submitted succesfull!");
  }
}
function showError(selector, message) {
  let inputField = document.querySelector(selector);
  let error = document.createElement("div");
  error.className = "error-message";
  error.style.color = "red";
  error.style.fontSize = "14px";
  error.style.marginTop = "5px";
  error.innerText = message;
  inputField.parentNode.appendChild(error);
}