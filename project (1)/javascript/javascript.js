function search() {
    var searchInput = document.getElementById("searchInput").value;
    // Perform your search functionality here
    console.log("Searching for: " + searchInput);
  }
  window.addEventListener('DOMContentLoaded', function() {
    const slideshowImages = document.querySelectorAll('.slideshow img');
    let currentImageIndex = 0;
  
    function showNextImage() {
      slideshowImages[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
      slideshowImages[currentImageIndex].classList.add('active');
    }
  
    setInterval(showNextImage, 3000); // Change image every 3 seconds
  });
    