// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5  ? 2 : 1;
}

/**
 * 좀더 추상화된 이름이거나 재사용이 필요하다면 함수로 추출
 * - 아니면 굳이?
 */
const isBestDriver = (dvr) => {
  return dvr.numberOfLateDeliveries > 5;
}

// 예제 2 - 너무 세밀하게 나눠진 함수
/**
 * Q: 6. 함수 인라인하기 - 만약에 gatherCustomerData 내용이 엄청 길었다면? [#1](https://github.com/JE-Choi/refactoring/issues/1)
 */
function reportLines(customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}

function gatherCustomerData(out, customer) {
  out.push(['name', customer.name]);
  out.push(['location', customer.location]);
}
