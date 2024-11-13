

const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const cardWidth = 300 + 20; 

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});


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
        
        const maxDistance = 300; 
        const minDistance = 150; 

        icons.forEach((icon) => {
          
          const angle = Math.random() * 9 * Math.PI; 
          const distance =
            Math.random() * (maxDistance - minDistance) + minDistance; 

          const x = distance * Math.cos(angle); 
          const y = distance * Math.sin(angle); 

          
          icon.style.opacity = '1'; 
          icon.style.transform = `translate(${x}px, ${y}px)`; 
        });

        skillsIcons.classList.add('scattered');
        observer.disconnect(); 
      }
    });
  },
  {
    threshold: 0.5, 
  }
);

observer.observe(experienceSection);
