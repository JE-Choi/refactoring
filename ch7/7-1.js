/**
 * 레코드 캡슐화하기 (레코드 == key, value를 가진)
 * - 불변성이 잘 지켜짐.
 * - 코드의 의도가 잘 드러남.
 */
class Organization {
    #name;
    #country;

    constructor({name, country}) {
        this.#name = name;
        this.#country = country;
    }


    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get country() {
        return this.#country;
    }

    set country(value) {
        this.#country = value;
    }

    /**
     * 전체 데이터를 #data로 멤버변수로 두고 반환해줄 수 있지만
     * name, country가 불변하지 않기 때문에, #data는 최신값을 보장해 주지 못한다.
     * 때문에 객체는 직접 생성해서 반환한다.
     */
    get rawData() {
        return {name: this.name, country: this.country};
    }
}

/**
 * 프로젝트 내부에서 필요한 model이라면 객체를 생성자로 넘겨서 객체를 생성하기보다는 인자로 전달함.
 * 강사분은 인자를 객체보다는 직접 받는걸 선호하는 듯하다.
 *  왜? 깔끔하다?..?
 */
const organization = new Organization({name: 'Acme Gooseberries', country: 'GB'});

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
//  get rawData