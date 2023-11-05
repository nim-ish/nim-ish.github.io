// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add fade-in class to elements in the viewport
function addFadeInClass(elements) {
  elements.forEach(element => {
    if (isInViewport(element) && !element.classList.contains('fade-in')) {
      element.classList.add('fade-in');
    }
  });
}

// Elements to animate on scroll
const aboutMeSection = document.getElementById('about-me');
const projectsSection = document.getElementById('projects');
const extracurricularsSection = document.getElementById('extracurriculars');

// Initial check for elements in viewport
addFadeInClass([aboutMeSection, projectsSection, extracurricularsSection]);

// Event listener for scroll to trigger animations
window.addEventListener('scroll', () => {
  addFadeInClass([aboutMeSection, projectsSection, extracurricularsSection]);
});

// Scroll to top button visibility logic
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to top functionality
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


scrollBtn.addEventListener("click", () => {
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Parallax effect
const parallaxBg = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  parallaxBg.style.backgroundPositionY = offset * 0.7 + 'px';
});

// JavaScript to add 'animate-on-scroll' class to elements in viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-on-scroll');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});
