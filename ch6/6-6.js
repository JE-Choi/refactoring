/**
 * 객체자체가 문제
 * 🧨객체는 참조값으로 전달하기 때문에, 수정가능해서 위험!!
 */
let defaultOwner = {firstName: '마틴', lastName: '파울러'};

// 불변성
/**
 * 단, 아래처럼 하면 얕은 복사가 이루어지기 때문에
 * 더 깊은 객체들은 참조값을 쓰고 있음.
 */
export function getDefaultOwner() {
    // Object.assign(defaultOwner); 또는
    return {...defaultOwner};
}
