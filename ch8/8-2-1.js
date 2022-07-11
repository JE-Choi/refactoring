export class Customer {
  #name;
  #discountRate; // 할인율
  #contract; // 계약
  constructor(name, discountRate) {
    this.#name = name;
    this.#discountRate = discountRate;
    this.#contract = new CustomerContract(this.dateToday());
  }

  get discountRate() {
    return this.#discountRate;
  }

  becomePreferred() {
    this.#discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount - amount * this.#discountRate;
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  constructor(startDate) {
    this.#startDate = startDate;
  }
}

let customer = new Customer('jieun', 0.1);
console.log(customer.discountRate); // 0.1
customer.becomePreferred();
console.log(customer.discountRate); // 0.13
let applyDiscount = customer.applyDiscount(10000);
console.log(applyDiscount); // 8700
console.log(customer.dateToday());