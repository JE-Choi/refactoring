/**
 * 7.3 기본형을 객체로 바꾸기
 */
class Priority {
    #level;

  constructor(priority) {
    this.#level = priority;
  }

  isHigh = () => {
    return 'high' === this.#level || 'rush' === this.#level;
  }
}

export class Order {
    #priority;
    constructor(data) {
        this.#priority = data.priority;
    }

    get priority(){
      return this.#priority;
    }
}

const orders = [
    new Order({priority: new Priority('normal')}),
    new Order({priority: new Priority('high')}),
    new Order({priority: new Priority('rush')}),
];

const highPriorityCount = orders.filter(
    (o) => o.priority.isHigh()
).length;
console.log(highPriorityCount);