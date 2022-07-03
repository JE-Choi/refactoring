/**
 * 7.2 컬렉션 캡슐화하기
 * - 캡슐화하지 않았을 떄의 문제점.
 *     - setter를 사용하지 않고, 컬렉션을 얻기만 하면 외부에서 Person 데이터를 수정할 수 있다.
 */
export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
  }

  set courses(courses) {
    this.#courses = courses;
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const jieun = new Person('지은');
jieun.courses.push(new Course('리팩토링', true));
console.log(jieun.courses.length);
jieun.courses = [new Course('리팩토링', true)];
console.log(jieun.courses.length);

