
// IMPORTING NAVBAR--------------------------------------------------------

    // import navbar from "../EXPORT_HUB/navbar.js";
    import {navbar,date} from "../EXPORT_HUB/navbar.js";
     
    console.log(navbar);
    console.log(date)
    document.getElementById("fullbody").innerHTML=navbar()
    document.getElementById("date").innerHTML=date()
   
    
      
// SLIDE SHOW FUNCTION --------------------------------------------------------------------

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