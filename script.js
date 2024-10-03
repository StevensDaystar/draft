let slideIndex = 0;  
let slideTimeout; // Declare a variable to hold the timeout reference  
showSlides(slideIndex);  

function nextSlide() {  
    showSlides(slideIndex += 1);  
}  

function prevSlide() {  
    showSlides(slideIndex -= 1);  
}  

function showSlides(n) {  
    let slides = document.getElementsByClassName("slide");  

    if (n >= slides.length) {  
        slideIndex = 0;  
    }  
    if (n < 0) {  
        slideIndex = slides.length - 1;  
    }  

    for (let i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  

    slides[slideIndex].style.display = "block";  

    // Clear the existing timeout if it exists  
    clearTimeout(slideTimeout);  
    
    // Set a new timeout for the next slide  
    slideTimeout = setTimeout(nextSlide, 10000); // Automatically transition to the next slide after 10 seconds  
}  

// Start the automatic slide transition  
slideTimeout = setTimeout(nextSlide, 10000); // Automatically transition to the next slide after 10 seconds  
