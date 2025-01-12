export class Slider {
constructor() {
this.slideIndex = 0;
this.slides = document.getElementsByClassName("slider-item");
this.showSlides(this.slideIndex);
}

showSlides(n) {
if (n >= this.slides.length) {
this.slideIndex = 0;
}
if (n < 0) {
this.slideIndex = this.slides.length - 1;
}
for (let i = 0; i < this.slides.length; i++) {
this.slides[i].style.display = "none";
}
this.slides[this.slideIndex].style.display = "block";
}

plusSlides(n = 1) {
this.showSlides((this.slideIndex += n));
}

moinsSlides(n = 1) {
this.showSlides((this.slideIndex -= n));
}

currentSlide(n) {
this.showSlides((this.slideIndex = n));
}
}
