// les 4 villes existantes
const cities = ['Bruxelles', 'Lyon', 'Marseille', 'Paris'];

function checkCity(cityName) {
    const city = cities.some(city => city.toLowerCase() === cityName.toLowerCase());
    return city
}

module.exports = {checkCity};   