// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth' // Smooth scroll to the target section
      });
    });
  });
  
  // Initialize ScrollReveal for Animations
  ScrollReveal().reveal('.beer-item', {
    delay: 200, // Delay before animation starts
    distance: '50px', // Distance to animate
    origin: 'bottom', // Animation starts from the bottom
    interval: 100, // Delay between each item
    easing: 'ease-in-out', // Smooth easing
  });
  
  ScrollReveal().reveal('.menu-section', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 100,
    easing: 'ease-in-out',
  });
  
  // Add Hover Effects to Beer Bottles (Optional)
  const beerImages = document.querySelectorAll('.beer-item img');
  
  beerImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.transform = 'scale(1.1)';
      image.style.boxShadow = '0 4px 15px rgba(255, 204, 0, 0.5)';
    });
  
    image.addEventListener('mouseleave', () => {
      image.style.transform = 'scale(1)';
      image.style.boxShadow = 'none';
    });
  });