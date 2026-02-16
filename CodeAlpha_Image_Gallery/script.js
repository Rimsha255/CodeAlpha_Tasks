// Select all gallery images
const images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

// Create Lightbox
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

const img = document.createElement("img");
lightbox.appendChild(img);

// Create close button
const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.classList.add("close");
lightbox.appendChild(closeBtn);

// Create next button
const nextBtn = document.createElement("span");
nextBtn.innerHTML = "&#10095;";
nextBtn.classList.add("next");
lightbox.appendChild(nextBtn);

// Create prev button
const prevBtn = document.createElement("span");
prevBtn.innerHTML = "&#10094;";
prevBtn.classList.add("prev");
lightbox.appendChild(prevBtn);

document.body.appendChild(lightbox);

// Open lightbox
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add("active");
  });
});

function showImage() {
  img.src = images[currentIndex].src;
}

// Next image
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

// Previous image
prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target !== img) {
    lightbox.classList.remove("active");
  }
});
