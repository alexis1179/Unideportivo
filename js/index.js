    let carousel = document.querySelector(".offers-carousel-container");
    let btnNext = document.querySelector("#next_btn");
    let btnPrev = document.querySelector("#prev_btn");
    let pixelTranslate = 0;
    let seacher = document.querySelector(".searcher");

    btnNext.onclick = function(){
        if(pixelTranslate >= (-729)){
            pixelTranslate = pixelTranslate-288;
            carousel.style.transform = "translateX("+pixelTranslate+"px)"; 
            carousel.style.transition = ".2s ease-out";
        }
    }

    btnPrev.onclick = function(){
        if(pixelTranslate <= -288){
            pixelTranslate =pixelTranslate+288;
            carousel.style.transform = "translateX("+pixelTranslate+"px)"; 
            carousel.style.transition = ".2s ease-out";
        }
    }

    window.onscroll = function() {
        if(window.scrollY >= 500){
            seacher.classList.add("active")
        }
        else
        seacher.classList.remove("active");
      
      };