document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const cityName = document.querySelector('#search-input').value;

    if (!cityName) {
        alert('Please enter a city name.');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=60f2a1212e59094737723a743a8ee5ba`);
        const data = await response.json();

        if (data.cod === '404') {
            throw new Error('City not found.');
        }

        const { main, description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { name, country } = data.sys;

        document.querySelector('#weather-result').innerHTML = `
            <h2>${name}, ${country}</h2>
            <h3>${main}</h3>
            <p>${description}</p>
            <p>Temperature: ${temp}°K</p>
            <p>Humidity: ${humidity}%</p>
        `;
    } catch (error) {
        alert(error.message);
    }
});