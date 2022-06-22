/**
 * 범위에서 벗어나는 것만 읽음.
 */
export function readingsOutsideRange(station, range) {
    return station.readings.filter((r) => !range.contains(r.temp));
}

/**
 * 객체안에 유용한 함수를 만들 수는 없는지?
 */
export class NumberRange {
    #min;
    #max;

    constructor({min, max}) {
        this.#min = min;
        this.#max = max;
    }


    get min() {
        return this.#min;
    }

    get max() {
        return this.#max;
    }

    /**
     * 범위에포함되는가
     */
    contains = (number) => {
        return number >= this.#min && number <= this.#max;
    }
}

const station = {
    name: 'ZB1',
    readings: [
        {temp: 47, time: '2016-11-10 09:10'},
        {temp: 53, time: '2016-11-10 09:20'},
        {temp: 58, time: '2016-11-10 09:30'},
        {temp: 53, time: '2016-11-10 09:40'},
        {temp: 51, time: '2016-11-10 09:50'},
    ],
};
/**
 * 온도
 * - 순수 데이터 객체: 데이터만 담고 있는 객체 => class로 변환
 */
const operationPlan = new NumberRange({min: 51, max: 53});

const result = readingsOutsideRange(
    station,
    operationPlan
);
console.log(result);
