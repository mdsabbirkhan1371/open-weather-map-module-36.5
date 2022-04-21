const API_KEY = `0cd8870cac00de2b0ee686ee39541201
`;
const searchCityTempreature = () => {
    const city = document.getElementById('search-city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempreature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTempreature = tempreature => {
    setInnerText('city', tempreature.name)
    setInnerText('temp', tempreature.main.temp)
    setInnerText('condition', tempreature.weather[0].main)

    // set icon 
    const url = ` http://openweathermap.org/img/wn/${tempreature.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon')
    weatherIcon.setAttribute('src', url)
    // console.log(tempreature)
}