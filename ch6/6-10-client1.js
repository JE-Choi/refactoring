import { acquireReading, enrichReading } from './6-10.js';

// 날것의 데이터
const rawReading = acquireReading();
// 미리 계산되어있는 데이터의 객체
const reading = enrichReading(rawReading);

console.log(reading.baseCharge);
console.log(reading.taxableCharge);
