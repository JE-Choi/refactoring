export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  /**
   * isPriority
   * - true: 조금더 빠른 시간으로 예약
   *
   * flag매개변수의 생성은 좋지않다.
   * - 정말 어쩔 수 없다면?
   * - customer는 필수값
   * - isPriority에 기본값을 줘서 옵셔널값으로 작동하도록
   */
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
