const axios = require('axios');


const getCovidData = async(pais) => {


    const instance = axios.create({
        baseURL: `https://covid-19-data.p.rapidapi.com/country/code?code=${ pais }`,
        headers: { 'x-rapidapi-key': 'e6538b77aamsh28aaaa143eb05d5p144fcejsn4f9914a06c31' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ pais }`);
    }

    const resultados = {
        pais: resp.data[0].country,
        confirmados: resp.data[0].confirmed,
        recuperados: resp.data[0].recovered,
        criticos: resp.data[0].critical,
        muertos: resp.data[0].deaths,
        latitud: resp.data[0].latitude,
        longitud: resp.data[0].longitude,

    }

    return resultados;

};


module.exports = {
    getCovidData
};