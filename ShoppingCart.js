const axios = require("axios");

class ShoppingCart {
    constructor() {
        this.cart = [];
        this.taxRate = 0.125; // 12.5%
    }

    async addProduct(productName, quantity) {
        try {
            const response = await axios.get(`http://localhost:3001/products/${productName}`);
            console.log(`API Response for ${productName}:`, response.data); // Log the response

            // Extract the price from the response object
            const productPrice = response.data.price;

            this.cart.push({
                name: productName,
                quantity,
                price: productPrice
            });

        } catch (error) {
            console.error(`Error fetching price for ${productName}:`, error.message);
            console.error("Error details:", error.response?.data || error); // Log detailed error
        }
    }

    getCart() {
        return this.cart;
    }

    getSubtotal() {
        return this.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    }

    getTax() {
        return this.getSubtotal() * this.taxRate;
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }

    getCartTotals() {
        const subtotal = this.getSubtotal();
        const tax = this.getTax();
        const total = this.getTotal();

        return {
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2)
        };
    }
}

module.exports = ShoppingCart;