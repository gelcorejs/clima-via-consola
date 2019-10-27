const axios = require('axios');



const getLugarLatLog = async (direction) =>{
  const encodeUrl = encodeURI(direction);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {
      "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
      "x-rapidapi-key": "0212174cd7msh8608c259cb47cd3p1559efjsn8cf83568ae14"
    }
  });

  const resp = await instance.get();

  if( resp.data.Results.length === 0 ){
    throw new Error(`No hay resultados para  ${direction}`);
  }
  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lon = data.lon;
  return {
    direccion,
    lat,
    lon
  }
}

module.exports = {
  getLugarLatLog
}
