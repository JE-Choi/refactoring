/**
 * 객체자체가 문제 <br/>
 * 🧨객체는 참조값으로 전달하기 때문에, 수정가능해서 위험!!
 */
let defaultOwner = {firstName: '마틴', lastName: '파울러'};

// lastName, firstName
/**
 * 클래스를 이용해서
 * 어떤 데이터는 가변, 불변이라는걸 명시하고 제한할 수 있다.
 *
 */
class Person {
    #firstName;
    #lastName;

    constructor({firstName, lastName}) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }


    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }
}

// 불변성
export function getDefaultOwner() {
    return new Person(defaultOwner);
}