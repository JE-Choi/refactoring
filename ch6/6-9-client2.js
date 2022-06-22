import { acquireReading } from './6-9.js';

const reading = acquireReading();

/**
 * 내야하는 세금 계산
 * - 음수이면 0으로 반환한다.
 */
export const taxableCharge = reading.taxableCharge;
console.log(taxableCharge)
