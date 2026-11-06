const {checkCity} = require('./cities');

// trips.json : 2000 trajets reliant seulement 4 villes existantes : Bruxelles, Lyon, Marseille et Paris
describe('checkCity', () => {
    it('returns true for an existing city', () => {
        expect(checkCity('Bruxelles')).toBe(true);
    });

    it('returns false for unknown city', () => {
        expect(checkCity('Berlin')).toBe(false)
    });

    it('case insensitive', () => {
        expect(checkCity('paris')).toBe(true)
    })
})