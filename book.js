
// Select carousel elements
const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const cardWidth = 300 + 20; // Card width + gap (adjust if gap changes)

// Event listener for left arrow
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

// Event listener for right arrow
rightArrow.addEventListener('click', () => {
    if (currentIndex < track.children.length - 1) {
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});




const experienceSection = document.querySelector('.experience-section');
const skillsIcons = document.querySelector('.skills-icons');
const icons = document.querySelectorAll('.skills-icons .icon');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Adjust these values to control the distance between icons
        const maxDistance = 300; // Maximum scatter distance from center
        const minDistance = 150; // Minimum scatter distance from center

        icons.forEach((icon) => {
          // Generate random angle and distance
          const angle = Math.random() * 9 * Math.PI; // Random angle in radians (0 to 2π)
          const distance =
            Math.random() * (maxDistance - minDistance) + minDistance; // Random distance in range

          const x = distance * Math.cos(angle); // X-coordinate
          const y = distance * Math.sin(angle); // Y-coordinate

          // Apply transform and opacity for scattering
          icon.style.opacity = '1'; // Make visible
          icon.style.transform = `translate(${x}px, ${y}px)`; // Scatter randomly
        });

        skillsIcons.classList.add('scattered');
        observer.disconnect(); // Stop observing once effect is applied
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the section is visible
  }
);

observer.observe(experienceSection);
