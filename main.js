let currentIndex = 0;
let totalImages = document.querySelectorAll(".slider-image").length;

function showImage(index) {
  let translateValue = -index * 100 + "%";
  currentIndex = index;

  document.getElementById("image-slider").style.transform =
    "translateX(" + translateValue + ")";
  document.getElementById("prev").style.display =
    currentIndex === 0 ? "none" : "block";
  document.getElementById("next").style.display =
    currentIndex === totalImages - 1 ? "none" : "block";
}

function nextImage() {
  if (currentIndex < totalImages - 1) {
    showImage(currentIndex + 1);
  }
}

function prevImage() {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  }
}

showImage(0);
