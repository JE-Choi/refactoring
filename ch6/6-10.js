import _ from 'lodash';

const reading = {customer: 'ivan', quantity: 10, month: 5, year: 2017};

export function acquireReading() {
    return reading;
}

export function baseRate(month, year) {
    if (year === 2017 && month === 5) return 0.1;
    return 0.2;
}

function calculateBaseCharge(reading) {
    return baseRate(reading);
}

function taxThreshold() {
    return 0.1;
}

export function enrichReading(original) {
    //얕은 복사만 이루어짐.
    // const result = {...original};
    // const result = Object.assign(original);

    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold());
    return result;
}