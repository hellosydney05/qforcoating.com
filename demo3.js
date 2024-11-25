    // Smooth Scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
    

  //main body//

  // JavaScript for changing the image when the button is clicked
document.getElementById("change-image").addEventListener("click", function() {
    var img = document.getElementById("image");
    // Change image source
    if (img.src.includes("placeholder")) {
        img.src = "https://via.placeholder.com/400/ff0000/ffffff?text=New+Image";
    } else {
        img.src = "https://media.designcafe.com/wp-content/uploads/2020/05/15151705/living-room-interior-design-in-industrial-style-living-room.jpg";
    }
});

  //slide show//

let currentIndex = 0;

        function moveSlide(direction) {
            const slides = document.querySelectorAll('.slider-images img');
            const totalSlides = slides.length;
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalSlides - 5;
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }

            const slider = document.querySelector('.slider-images');
            const slideWidth = slides[0].clientWidth;
            slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        }

  // Optional: Chat button functionality can be added here (like opening a chat window)
  document.getElementById("chat-button").addEventListener("click", function() {
      alert("Chat with us feature coming soon!");
  });
  
    