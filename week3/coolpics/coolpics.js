// Menu toggle function
const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach(menu => {
    menu.classList.toggle("hide");
  });
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menuItems = document.querySelectorAll(".menu-button");
  if (window.innerWidth < 1000) {
    menuItems.forEach(menu => menu.classList.remove("hide"));
  } else {
    menuItems.forEach(menu => menu.classList.add("hide"));
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Viewer template function
function viewerTemplate(pic, alt) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
}

// View handler function
function viewHandler(event) {
  // Create a variable to hold the element that was clicked on from event.target
  const clickedElement = event.target;

  // Get the src attribute from that element and 'split' it on the "-"
  const src = clickedElement.src;
  const srcParts = src.split("-");

  // Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
  const newSrc = srcParts[0] + "-full.jpeg";

  // Insert the viewerTemplate into the top of the body element
  document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, clickedElement.alt));

  // Add a listener to the close button (X) that calls a function called closeViewer when clicked
  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);
}

// Close viewer function
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove();
  }
}

// Add event listener to gallery images
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(image => {
  image.addEventListener("click", viewHandler);
});
