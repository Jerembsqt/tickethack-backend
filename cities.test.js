// le fichier trips.json (importé dans la base de données) contient 2000 trajets reliant 4 villes : Bruxelles, Lyon, Marseille et Paris
it('Checking if city exists', () => {
    const cityName = ['Bruxelles', 'Lyon', 'Marseille', 'Paris'];
    expect(checkCity(cityName)).toBe('Bruxelles'||'Lyon' || 'Marseille' ||'Paris')
})