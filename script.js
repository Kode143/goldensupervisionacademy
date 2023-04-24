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
  function submitForm(event) {
    event.preventDefault();
    var form = document.forms['contact'];
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var messageContainer = document.getElementById('message-container');
        if (xhr.status === 200) {
          messageContainer.innerHTML = 'Message sent successfully!';
          messageContainer.style.color = 'green';
        } else {
          messageContainer.innerHTML = 'Failed to send message. Please try again.';
          messageContainer.style.color = 'red';
        }
      }
    };
    xhr.send(data);
  }