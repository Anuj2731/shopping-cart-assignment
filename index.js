const ShoppingCart = require("./ShoppingCart");

async function run() {
    const cart = new ShoppingCart();

    await cart.addProduct("cornflakes", 1);
    await cart.addProduct("cornflakes", 1);
    await cart.addProduct("weetabix", 1);

    console.log("Cart Items:", cart.getCart());

    console.log("\nCart Totals:");
    const totals = cart.getCartTotals();
    console.log("Subtotal:", totals.subtotal);
    console.log("Tax (12.5%):", totals.tax);
    console.log("Total:", totals.total);
}

run();