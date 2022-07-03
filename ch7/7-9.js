/**
 * 7.9 알고리즘 교체하기
 * - 알고리즘을 교체할 때는, 해당 함수의 테스트코드가 있어야한다.
 */
function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find((p) => candidates.includes(p) || '');
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));