
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


async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); //to catch other server errors
        }
        let data = await response.json();
        console.log(data);
        displayWeather(data); // Calling the displayWeather function with the JSON data
        return data;
    } catch (error) {
        console.error('There was an error!', error);
    }
}

fetchWeather();


    function displayWeather(weatherData) {
        // Extracting the required information from weatherData
        const temperature = `${weatherData.main.temp.toFixed(1)}\u00B0C`; // Adding degree symbol
        const description = weatherData.weather[0].description;
        const iconCode = weatherData.weather[0].icon;

        // Create a new image element
    const weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/w/${iconCode}.png`;

    // Create elements to display temperature and description
    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Temperature: ${temperature}`;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${description}`;

    // Find the appropriate container on the webpage
    const weatherContainer = document.getElementById('weather-container'); // Replacing 'weather-container' with container ID
    weatherContainer.appendChild(weatherIcon);
    weatherContainer.appendChild(temperatureElement);
    weatherContainer.appendChild(descriptionElement);

    }

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