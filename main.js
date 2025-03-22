let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
        $('#carouselExampleFade').carousel('next');
    }, 5000); // 5 seconds interval
}

const addEventOnElements = function (elements, event, handler) {
    elements.forEach(element => {
        element.addEventListener(event, handler);
    });
}

const heroSliderNextBtn = document.querySelector('.carousel-control-next');
const heroSliderPrevBtn = document.querySelector('.carousel-control-prev');

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
    clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);




// Select the container element
const container = document.querySelector('.colume2');

// Select the images inside the container
const images = container.querySelectorAll('img');

// Store the default transform style for images
const defaultTransform = 'translate(0px, 0px)';

// Add mouse move event listener to the container
container.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY, target } = e;
  const { offsetWidth: width, offsetHeight: height } = target;

  // Calculate the percentage of the mouse's position within the container
  const xPercent = (offsetX / width) * 100;
  const yPercent = (offsetY / height) * 100;

  // Apply movement to each image based on mouse position
  images.forEach((img) => {
    const moveX = (xPercent - 50) * 0.3; // Adjust multiplier for more or less movement
    const moveY = (yPercent - 50) * 0.3; // Adjust multiplier for more or less movement

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// Reset image position when mouse leaves the container
container.addEventListener('mouseleave', () => {
  images.forEach((img) => {
    img.style.transition = 'transform 0.3s ease'; // Smooth transition back to default position
    img.style.transform = defaultTransform; // Reset transform to default position
  });
});

// Optional: Optionally, you can add a mouseenter event to make the transition smooth when mouse enters
container.addEventListener('mouseenter', () => {
  images.forEach((img) => {
    img.style.transition = 'transform 0.3s ease'; // Ensure the transition is smooth when the mouse enters
  });
});





// Get all the navbar links
const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
// Get navbar collapse and toggler button elements
const navbarCollapse = document.getElementById('navbarSupportedContent4');
const navbarToggler = document.querySelector('.navbar-toggler');

// Add click event listeners to all navbar links
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent default anchor behavior to avoid jumping
        e.preventDefault();

        // Get the target section ID from the link's href attribute
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Check if the target section exists
        if (targetSection) {
            // Get the height of the navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            // Scroll to the target section with an offset for the navbar
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }

        // Check if the screen size is mobile and if the navbar is expanded
        if (window.innerWidth <= 992 && navbarCollapse.classList.contains('show')) {
            // Collapse the navbar by triggering the toggle button click
            navbarToggler.click();
        }
    });
});

