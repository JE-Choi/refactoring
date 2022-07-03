/**
 * 7.7 클래스 추출하기
 * - 클래스 1개당 하나의 역할/책임/도메인을 가지는 것이 좋음.
 * - 내부적으로 TemplephoneNumber을 가지고 사용하다가, 외부에서도 필요하면 export하면 됨.
 */
class TemplephoneNumber{
  #areaCode;
  #number;

  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  get number() {
    return this.#number;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

class Person {
  #name;
  #templephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#templephoneNumber = new TemplephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#templephoneNumber.toString;
  }
}

const person = new Person('지은', '010', '12345678');
console.log(person.name);
console.log(person.telephoneNumber);
