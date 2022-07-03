/**
 * 7.6 클래스 인라인하기
 * 역할이 없는데, class화 되어있고 위임만 하는 경우에는 통합하는게 나을 수 있다.
 */
export class Shipment {
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

const shipment = new Shipment(999, 'Maersk');
console.log(shipment.display);

shipment.shippingCompany = 'COSCO';
console.log(shipment.display);
