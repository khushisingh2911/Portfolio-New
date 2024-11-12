// spline.js

// Function to load the Spline model
function loadSplineModel() {
    const container = document.querySelector('.spline-container');
    const iframe = document.createElement('iframe');

    iframe.src = "https://my.spline.design/robotfollowcursorforlandingpage-afeb36aaace9186a8603300e5f70e7d3/";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.allow = "fullscreen";

    container.appendChild(iframe);
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', loadSplineModel);
