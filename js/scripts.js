
console.log('javascript connected!');
// when the pause button is clicked, pause the carousel
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    console.log("button is clicked!");
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
}) 

/*
document.addEventListener('DOMContentLoaded', function () {
    console.log('javascript connected!');

    // Initialize the carousel
    const homeCarousel = new bootstrap.Carousel(document.getElementById('homeCarousel'), {
        interval: 2000,
        pause: false
    });

    // Handle pause button click
    const carouselPause = document.getElementById('carouselPause');
    carouselPause.addEventListener('click', function () {
        console.log('pausing the carousel');
        homeCarousel.pause();
    });

    // Handle play button click
    const carouselPlay = document.getElementById('carouselPlay');
    carouselPlay.addEventListener('click', function () {
        console.log('cycle the carousel');
        homeCarousel.cycle();
    });
});
*/