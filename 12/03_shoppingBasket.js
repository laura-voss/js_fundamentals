class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(item) {
    this.basket.push(item);
  }

  getTotalPrice() {
    let total = 0;
    this.basket.map((item) => (total += item.price));
    return total;
  }
}

module.exports = ShoppingBasket;


// Implement the classes Candy and ShoppingBasket so you 
// can require them into node and get the following behaviour:

// const ShoppingBasket = require('./shoppingBasket');
// const Candy = require('./candy');


// > const candy = new Candy('Mars', 4.99);

// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97
