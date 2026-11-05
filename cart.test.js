const {cart} = require('./cart')

// fonction qui calcule la somme de tous les trajets dans le panier
it('Total cart', () => {
    const items = [
    { departure: 'Marseille', arrival: 'Bruxelles', date: { $date: '2026-11-02T19:35:55.662Z' }, price: 112 },
    { departure: 'Marseille', arrival: 'Paris',     date: { $date: '2026-11-02T19:45:57.830Z' }, price: 88 },
    { departure: 'Bruxelles', arrival: 'Marseille', date: { $date: '2026-11-02T20:00:19.872Z' }, price: 49 },
  ];
    expect(cart(items)).toBe(249);
})

//cas limites
it('Empty cart', () => {
    expect(cart([])).toBe(0);
})

it('Single item', () => {
    expect(cart([{departure: 'Paris', arrival: 'Lyon', price: 71}])).toBe(71);
})