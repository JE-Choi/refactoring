/**
 * 범위에서 벗어나는 것만 읽음.
 */
export function readingsOutsideRange(station, range) {
    return station.readings.filter((r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling);
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
 * - 순수 데이터 객체: 데이터만 담고 있는 객체
 */
const operationPlan = {
    temperatureFloor: 51,
    temperatureCeiling: 53,
};

const result = readingsOutsideRange(
    station,
    operationPlan
);
console.log(result);
