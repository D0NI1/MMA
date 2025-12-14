  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainMenu = document.getElementById('mainMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
      
        document.querySelectorAll('#mainMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    let slideInterval;
    
    
    function showSlide(index) {
        
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    
    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
  
    function prevSlide() {
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }
    
 
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    
   
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
            resetInterval();
        });
    });
    
   
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideShow();
    }
    
    
    showSlide(0);
    startSlideShow();
    
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slideshowContainer.addEventListener('mouseleave', () => {
        startSlideShow();
    });
});
