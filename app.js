const lugar = require('./lugar/lugar');
const clima = require('./clima/clima.js');
const argv  = require('yargs').options({
  direction:{
    alias: 'd',
    desc: 'Direccion de la Ciudad Para Obtener el Clima',
    demand: true
  }
}).argv;
//argv.direction

/**lugar.getLugarLatLog(argv.direction)
  .then(console.log)

clima.getClima(19.570000,-99.040001)
  .then(console.log)
  .catch(console.log)
*/

const getInfo = async (dir) =>{

  try{
    const cords = await lugar.getLugarLatLog(dir);
    const temp  = await clima.getClima(cords.lat, cords.lon);
    return `El clima en ${cords.direccion} es ${temp}`;
  }catch(err){
    return `No  se Encontro el Clima en ${dir}`;
  }
}

getInfo(argv.direction)
  .then(console.log)
  .catch(console.log);
