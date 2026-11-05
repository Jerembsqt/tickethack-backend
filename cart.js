//fonction pour cart.test.js
function cart(items) {
    return items.reduce((total, item) => total + item.price, 0)
}

module.exports = {cart}