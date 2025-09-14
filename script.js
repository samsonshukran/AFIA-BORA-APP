
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
 





































     document.addEventListener('DOMContentLoaded', function() {
            const vaccineCard = document.getElementById('vaccineCard');
            const messageAlert = document.getElementById('messageAlert');
            const closeAlert = document.getElementById('closeAlert');
            const notificationBadge = document.getElementById('notificationBadge');
            const messageCount = document.getElementById('messageCount');
            
            let notificationCount = 3;
            
            // Show message alert when card is clicked
            vaccineCard.addEventListener('click', function() {
                messageAlert.classList.add('show');
            });
            
            // Close alert when close button is clicked
            closeAlert.addEventListener('click', function() {
                messageAlert.classList.remove('show');
                
                // Reset notification count and update badge
                notificationCount = 0;
                updateNotificationBadge();
            });
            
            // Function to update notification badge
            function updateNotificationBadge() {
                if (notificationCount > 0) {
                    notificationBadge.textContent = notificationCount;
                    messageCount.textContent = notificationCount;
                    notificationBadge.style.display = 'flex';
                } else {
                    notificationBadge.style.display = 'none';
                }
            }
            
            // Initialize notification badge
            updateNotificationBadge();
        });

    








        /* POPUP INFORMATION AT QUICK ACTION */

         const popup = document.getElementById('popup');
    const infoBtn = document.getElementById('infoBtn');
    const closeBtn = document.getElementById('closeBtn');

    infoBtn.addEventListener('click', () => popup.classList.add('show'));
    closeBtn.addEventListener('click', () => popup.classList.remove('show'));

    popup.addEventListener('click', e => {
      // Close only if you click the dark background
      if (e.target === popup) popup.classList.remove('show');
    });


    


