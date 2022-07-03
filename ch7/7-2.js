/**
 * 7.2 컬렉션 캡슐화하기
 * - 캡슐화하지 않았을 때의 문제점.
 *     - setter를 사용하지 않고, 컬렉션을 얻기만 하면 외부에서 Person 데이터를 수정할 수 있다.
 *         - 외부에서 Person에서 얻은 컬렉션을 사용할 때, 컬렉션의 기능을 사용해야 할것이 추가될 때마다.. Person에서 api를 열어줘야 한다는 것이 번거롭기는 하지만..
 *         - Person입장에서는 자기도 모르는 사이에 자신의 데이터가 수정/삭제/추가된다면 당황스럽기 때문에... 번거롭더라도.. 캡슐화하고, 필요할 api를 열어주는 것이 유지보수성이 좋을 것 같다.
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

  addCourse(course){
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent){
    const index = this.#courses.indexOf(course);
    if(index === -1){
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
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
const course = new Course('리팩토링', true);
jieun.addCourse(course);
console.log(jieun.courses.length);
jieun.removeCourse(course, ()=>{console.log("해당 코스는 없습니다.")});
console.log(jieun.courses.length);
jieun.removeCourse(course, ()=>{console.log("해당 코스는 없습니다.")});
