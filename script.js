
    let currentSlide = 0;
    const slides = document.querySelectorAll(".highlight-slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
      slides[currentSlide].classList.remove("active");
      dots[currentSlide].classList.remove("active");
      currentSlide = index;
      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");
    }

    // Auto-rotate every 5 seconds
    setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    }, 5000);
 








    












