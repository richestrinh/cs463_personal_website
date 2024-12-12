// app.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Get all images
    const images = document.querySelectorAll('img');
  
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    // Observe each image
    images.forEach(image => {
      observer.observe(image);
    });
  });