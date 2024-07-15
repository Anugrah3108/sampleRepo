const API_KEY = "256156d28a4575e841a3cce2fdfc060b";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const opt = document.getElementById("opt");

const getWeather = async (city) => {
  console.log("Featching weather for city");
  console.log(city);
  // try{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    // throw new (Error)("City not found");
    alert("City not found!");
  }
  console.log(data);
  // }catch(err){
  //     console.error(err);
  // }

  opt.innerHTML = `
    <div>
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    </div>`;
};
// ?. : optional chaining

btn.onclick = () => {
  getWeather(input.value);
};
