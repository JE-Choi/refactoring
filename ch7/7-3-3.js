class Priority {
    #value;

    /**
     * warn: 생성자 내부에서 에러를 던지는 것은 보안에 취약하기 때문에, 이처럼 작성하는 것은 좋지 않다.
     */
    constructor(value) {
        /**
         *  - ts에서는 enum/유니온 타입을 사용하면 되지만, 동적으로 데이터가 입력되는 경우에는 필터링이 되지 않을 듯하여.. 이처럼 작성하는게 좋아보였으나
         *  - 강사님께서는 정말 필요한 경우에만 이처럼 작성하고 불필요한 복잡성은 좋지않다고 했다.
         */
        if(!Priority.legalValues().includes(value)){
            throw new Error(`${value} is invalid for Priority`);
        }
        this.#value = value;
    }
    static legalValues(){
        return ['low', 'normal', 'high', 'rush'];
    }

    get index(){
        return Priority.legalValues().indexOf(this.#value);
    }

    equals(other){
        return this.index === other.index;
    }

    higherThan(other){
        return this.index > other.index;
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

    isHighPriority(){
        return this.#priority.higherThan(new Priority('normal'));
    }
}

const orders = [
    new Order({priority: new Priority('normal')}),
    new Order({priority: new Priority('high')}),
    new Order({priority: new Priority('rush')}),
];

const highPriorityCount = orders.filter(
    (o) => o.isHighPriority()
).length;
console.log(highPriorityCount);