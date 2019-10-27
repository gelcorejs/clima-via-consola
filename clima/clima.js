//api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=592536ca8b6cbd49fe6e20df5a2656a2&units=metric

const axios = require('axios');


const getClima = async (lat,lon) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&appid=592536ca8b6cbd49fe6e20df5a2656a2&units=metric`);

  return resp.data.main.temp;

}

module.exports = {
  getClima
}
