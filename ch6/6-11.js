// 사용 예:
const product = {
    basePrice: 10,
    discountRate: 0.1,
    discountThreshold: 10,
};

const shippingMethod = {
    discountThreshold: 20,
    feePerCase: 5,
    discountedFee: 3,
};

class Order {
  #product;
  #shippingMethod;
  #quantity;

  constructor({product, shippingMethod, quantity}) {
    this.#product = product;
    this.#shippingMethod = shippingMethod;
    this.#quantity = quantity;
  }

  // 기본 제품 가격
  get basePrice() {
    return this.#product.basePrice * this.#quantity;
  }

  // 할인률
  get discount() {
    return Math.max(this.#quantity - this.#product.discountThreshold, 0) *
        this.#product.basePrice *
        this.#product.discountRate;
  }

  // 개별 배송비 계산
  get shippingPerCase() {
    return this.basePrice > this.#shippingMethod.discountThreshold
        ? this.#shippingMethod.discountedFee
        : this.#shippingMethod.feePerCase;
  }

  // 총 배송비 계산 
  get shippingCost() {
    return this.#quantity * this.shippingPerCase;
  }

  // 총 가격
  get priceOrder() {
    return this.basePrice - this.discount + this.shippingCost;
  }
}

let order = new Order({product, quantity: 5, shippingMethod});
console.log(order.priceOrder); // 65
