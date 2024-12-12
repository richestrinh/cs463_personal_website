// app.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Get all images and the contact section
    const images = document.querySelectorAll('img');
    const sectionContact = document.querySelector('#sectionContact');
    const nameElement = document.getElementById('name');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          nameElement.classList.add('horizTranslate');
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

    // Observe the contact section
    if (sectionContact) {
      observer.observe(sectionContact);
    }
  });
// Add effect on #name id

toggleButton.addEventListener('click', function() {
    if (this.innerHTML === 'Play') {
        this.innerHTML = 'Pause';
        
    } else {
        this.innerHTML = 'Play';
        const computedStyle = window.getComputedStyle(nameElement);
        const marginLeft = computedStyle.getPropertyValue('margin-left');
        nameElement.style.marginLeft = marginLeft;
        nameElement.classList.remove('horizTranslate');
    }
});