/**
 * 클래스 선언부 먼저 작성
 */
export class Reading {
    #customer;
    #quantity;
    #month;
    #year;


    constructor(data) {
        this.#customer = data.customer;
        this.#quantity = data.quantity;
        this.#month = data.month;
        this.#year = data.year;
    }


    get customer() {
        return this.#customer;
    }

    get quantity() {
        return this.#quantity;
    }

    get month() {
        return this.#month;
    }

    get year() {
        return this.#year;
    }

    get baseRate() {
        if (this.#year === 2017 && this.#month === 5) return 0.1;
        return 0.2;
    }

    /**
     * - 외부에서 계산하지 않고, 클래스 내부에 위치시킨다.
     * - quantity은 private매개변수로 접근도 가능하지만, getter로 접근
     */
    get baseCharge() {
        return this.baseRate * this.quantity;
    }
    
    // 세율
    get taxThreshold() {
        return 0.1;
    }

    get taxableCharge() {
      return Math.max(0, this.baseCharge - this.taxThreshold);
    }
}

/**
 * 데이터와 사용처가 흩어져있어서
 * 뭔가.. 정리가 되지않음.
 * 어떤 누구도 정확한 책임을 지지않고 있음.
 */
const reading = new Reading({customer: 'ivan', quantity: 10, month: 5, year: 2017});

export function acquireReading() {
    return reading;
}