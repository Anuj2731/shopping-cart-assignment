const ShoppingCart = require("./ShoppingCart");
const axios = require("axios");

jest.mock("axios");

describe("ShoppingCart", () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    test("should add a product to the cart", async () => {
        axios.get.mockResolvedValueOnce({
            data: { id: "cornflakes", title: "Cornflakes", price: 4.99 }
        });

        await cart.addProduct("cornflakes", 2);

        expect(cart.getCart()).toEqual([
            { name: "cornflakes", quantity: 2, price: 4.99 }
        ]);
    });

    test("should calculate cart totals correctly", async () => {
        axios.get.mockResolvedValueOnce({
            data: { id: "cornflakes", title: "Cornflakes", price: 4.99 }
        });
        axios.get.mockResolvedValueOnce({
            data: { id: "weetabix", title: "Weetabix", price: 7.29 }
        });

        await cart.addProduct("cornflakes", 2);
        await cart.addProduct("weetabix", 1);

        const totals = cart.getCartTotals();

        expect(totals).toEqual({
            subtotal: "17.27",
            tax: "2.16",
            total: "19.43"
        });
    });
});