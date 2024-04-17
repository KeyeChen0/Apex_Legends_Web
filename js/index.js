let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("Slides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  Array.from(slides).forEach(slide => slide.style.display = "none");
  Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function nav_gallery(n) {
  const galleries = ["gallery1", "gallery2", "gallery3", "gallery4", "gallery5"];

  galleries.forEach((galleryId, index) => {
    const gallery = document.getElementById(galleryId);
    gallery.style.display = (index + 1 === n) ? "grid" : "none";
  });
}



