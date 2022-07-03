/**
 * 7.7 위임숨기기
 * - 외부에서는 내부 속성인 department를 몰라도, 필요한 정보에 접근할 수 있는것이 좋다.
 *     - 🧨ex) person.department.manager
 * - 특정한 클래스가 has-a관계라면 (Composition(구성)), 내부를 캡슐화해서 외부에서는 api만 알면 사용할 수 있도록 하는것이 좋다.
 *     - 😁 ex) person.manager
 */
class Person {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }

  get name() {
    return this.#name;
  }

  get department() {
    return this.#department;
  }

  set department(arg) {
    this.#department = arg;
  }

  get manager(){
    return this.#department.manager;
  }

  get chargeCode(){
    return this.#department.chargeCode;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person('Tom', new Department('aManager', '999'));
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
