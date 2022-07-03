/**
 * 7.8 중개자 제거하기
 * - Department는 데이터를 set,get만 하고 있기 때문에 통합하는것이 나을 수 있다. (역할이 없었음)
 */
class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager(){
    return this.#manager;
  }

  get chargeCode(){
    return this.#chargeCode;
  }
}

// export class Department {
//   #manager;
//   #chargeCode;
//   constructor(manager, chargeCode) {
//     this.#manager = manager;
//     this.#chargeCode = chargeCode;
//   }
//
//   get chargeCode() {
//     return this.#chargeCode;
//   }
//
//   set chargeCode(arg) {
//     this.#chargeCode = arg;
//   }
//
//   get manager() {
//     return this.#manager;
//   }
//
//   set manager(arg) {
//     this.#manager = arg;
//   }
// }

const person = new Person('Tom', 'aManager', '999');
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
