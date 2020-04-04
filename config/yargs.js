const argv = require('yargs').options({
        pais: {
            alias: 'p',
            demand: true,
            desc: 'códigos de país alfa-2 y alfa-3 iso 3166'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}