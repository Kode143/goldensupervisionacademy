  // Get the navbar toggle button and navbar element
  const navbarToggle = document.querySelector('.navbar-toggler');
  const navbar = document.querySelector('.navbar');

  // Add event listener to toggle button
  navbarToggle.addEventListener('click', () => {
    // Toggle the "navbar-active" class on the navbar
    navbar.classList.toggle('navbarNav-active');
  });


//   notice bar element

let noticeText = document.querySelector(".notice-text");
let noticeWidth = noticeText.offsetWidth;
let containerWidth = noticeText.parentElement.offsetWidth;

if (noticeWidth > containerWidth) {
    noticeText.style.animation = "slide 0s linear infinite";
}


var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  
  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  setInterval(function() {
    nextSlide()
  }, 3000);
  
  };
  
  window.onload = function() {
  responsiveSlider();  
  }

  // submiting contact form
  const contactForm = document.getElementById('contact-form');

  // Add an event listener for form submission
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Send a POST request to the Netlify server
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(contactForm)).toString()
    })
    .then(() => {
      // Show a success message using Toastify
      Toastify({
        text: 'Your message has been Sent!! Thank you for contacting us!',
        position: 'top-center',
       autoClose: 5000,
        backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
        className: 'success-toast'
      }).showToast();
  
      // Reset the form
      contactForm.reset();
    })
    .catch((error) => {
      console.error(error);
      // Show an error message using Toastify
      Toastify({
        text: 'An error occurred while sending the message. Please try again later.',
        position: 'top-center',
        autoClose: 5000,
        backgroundColor: 'linear-gradient(to right, #e74c3c, #c0392b)',
        className: 'error-toast'
      }).showToast();
    });
  });
  