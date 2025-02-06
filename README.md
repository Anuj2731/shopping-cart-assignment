# Shopping Cart Assignment
This repository contains the implementation of a basic shopping cart with the following capabilities:

1. **Add a product to the cart**:
   - Specify the product name and quantity.
   - Retrieve the product price from the Price API.
   - Maintain cart state (totals, etc.).

2. **Calculate the state**:
   - Subtotal (sum of prices for all items).
   - Tax (12.5% of subtotal).
   - Total (subtotal + tax).

## How to Run the Code

### Prerequisites
- Node.js installed.
- The Price API running locally.

### Steps
1. Clone this repository:
   
   git clone <repository link>

2. Installing Dependencies:
   
   - npm install 
   - npm install axios jest

3. Run the Code:

   - npm run serve-products
   - node index.js
   - npm test