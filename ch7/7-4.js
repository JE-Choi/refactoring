/**
 * 7.4 임시 변수를 질의 함수로 바꾸기
 * 필요에의해서 임시변수를 질의함수로 추출한다.
 */
class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice(){
    return this.#quantity * this.#item.price;
  }
  get discountFactor (){
    return this.basePrice > 1000 ? 0.95: 0.98;
  }
  get price() {
    return this.basePrice * this.discountFactor;
  }
}
