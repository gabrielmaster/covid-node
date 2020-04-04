const argv = require("./config/yargs").argv;
const covid = require("./config/covid");

const resultado = covid.getCovidData(argv.pais);

resultado.then(console.log).catch(console.log);