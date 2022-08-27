// IMPORT SECTION----------------------------------------------------------

import {navbar,date,footer} from "../EXPORT_HUB/navbar.js";    
// console.log(navbar);
// console.log(date)
document.getElementById("loginfullbody").innerHTML = navbar()
document.getElementById("date").innerHTML=date()
document.getElementById("footersection").innerHTML=footer()


  // LOGIN PART---------------------------------------------------------------

  let userdata = JSON.parse(localStorage.getItem("userinfo")) || []
    //    console.log(userdata)
   document.getElementById("btnsignin").addEventListener("click",signin)
  
   function signin() {
    console.log("HI")
     let email1 = document.querySelector("#email").value
     let pass1 = document.querySelector("#password").value
 
     if (email1.length == 0 || pass1.length == 0) {
       alert("Please fill data")
     } 
     else {
       let flag = false;
       userdata.map((el) => {
         // console.log(el)
        if (el.email == email1 && el.password == pass1) {
          window.location.href ="index.html" 
           flag = true;
         }
       })
       if (flag) {
         alert("Login succesful")
       }
       else {
         alert("Incorrect Data")
       }
     }
   }



 //SLIDE SHOW FUNCTION --------------------------------------------------------------------

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); 
}