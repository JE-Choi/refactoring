/**
 * 7.3 기본형을 객체로 바꾸기
 * - order기준에서 높은 우선순위를 계산하는거니까..
 * - Priority에 있는 것보다는.. Order가 역할을 가지는게 맞는듯..하였으나..
 * - Priority에 기능이 생긴다면? Order가 계속 Priority에 대한 로직까지 처리하기 때문에.. 처음부터 Priority를 만드는게 좋지않을까?
 */
export class Order {
    #priority;

    constructor(data) {
        this.#priority = data.priority;
    }

    get priority() {
        return this.#priority;
    }

    isHighPriority = () => {
        return 'high' === this.#priority || 'rush' === this.#priority;
    }
}

const orders = [
    new Order({priority: 'normal'}),
    new Order({priority: 'high'}),
    new Order({priority: 'rush'}),
];

const highPriorityCount = orders.filter(
    (o) => o.isHighPriority()
).length;
console.log(highPriorityCount);