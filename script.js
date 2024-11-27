function copyEmail() {
    const email = 'valriviaband@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.style.opacity = 1;
        setTimeout(() => {
            copyMessage.style.opacity = 0;
        }, 2000);
    });
}
    // Select elements
    const galleryImages = document.querySelectorAll('.gallery img');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupClose = document.getElementById('popup-close');

    // Show popup when an image is clicked
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            popup.style.display = 'flex';
            popupImage.src = image.getAttribute('data-full');
        });
    });

    // Close popup
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside the content
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
