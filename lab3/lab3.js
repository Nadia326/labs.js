'use strict'

for(let item in window) {
    console.log(item);
}
if(window.alert) {
    window.alert("alert");
}


//decorator
class Coffee {
    cost () {
      return 5
    }
}

const sugar = coffee => {
    const cost = coffee.cost()
    coffee.cost = () => cost + 1
  }
const coffee = new Coffee()
sugar(coffee)
console.log(coffee.cost())  




// adapter

class Cart {
    constructor() {}
    calculateTotal(items) {
        let total=0;
        for (let item of items){
        total+=item;
        }
        return total;
    }

}

class NewCart {
    constructor(coupon) {
        this.coupon = coupon;  
    }
    calculateTotalAndApplyCoupon(items) {
        let total =0;
        for(let item of items){
        total+=item;
        }
        return total*this.coupon;
    }
}

class CartAdapter extends NewCart{
    constructor(props) {
        super(props);
    }
    calculateTotal(items) {
        return this.calculateTotalAndApplyCoupon(items);
    }
   
}

let cart = new CartAdapter(0.5);
console.log(cart.calculateTotal([1, 2, 3]))

