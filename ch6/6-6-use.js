import { getDefaultOwner } from './6-6.js';
import { getDefaultOwner as getDefaultOwner2 } from './6-6-2.js';

const owner = getDefaultOwner();
console.log(owner);
owner.firstName = '지은';
// 반환받은 객체내부 값은 변경되지만
console.log(owner);
//  함수 다시 호출할 때는 다시 초기화됨.
console.log(getDefaultOwner());

let owner2 = getDefaultOwner2();
// owner2.firstName = '지은'; // 변하지 않음. => 에러발생
console.log(owner2.firstName, owner2.lastName);
