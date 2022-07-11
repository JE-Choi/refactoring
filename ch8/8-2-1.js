/**
 * 8.2 필드 옮기기
 */
export class Customer {
  #name;
  #contract; // 계약
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday(), discountRate);
  }

  get discountRate() {
    return this.#contract.discountRate;
  }

  becomePreferred() {
    this.#contract.discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount - amount * this.#contract.discountRate;
  }

  dateToday() {
    return new Date();
  }
}

/**
 * 계약의 할인율이기 때문에, discountRate은 CustomerContract내부로
 */
class CustomerContract {
  #startDate;
  #discountRate; // 할인율
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }


  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(value) {
    this.#discountRate = value;
  }
}

let customer = new Customer('jieun', 0.1);
console.log(customer.discountRate); // 0.1
customer.becomePreferred();
console.log(customer.discountRate); // 0.13
let applyDiscount = customer.applyDiscount(10000);
console.log(applyDiscount); // 8700
console.log(customer.dateToday());