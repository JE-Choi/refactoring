import fs from 'fs';

/**
 * 스크립팅할 때 단계
 * 1. 사용자에게 입력을 받아옴
 * 2. 유효성 검사
 * 3. 필요한 로직 처리
 */

/**
 * 일단, 외부 모듈에 대한 의존성을 없애자.
 * 사용하는 쪽에서는 fs가 뭔지 몰라도 된다.
 */
class File {
    #fileName;

    constructor(fileName) {
        this.#fileName = fileName;
    }

    isExist() {
        return fs.existsSync(this.#fileName);
    }

    read() {
        return fs.readFileSync(this.#fileName);
    }

}

/**
 * process에서 fileName을 구함.
 */
const getFileNameArgByProcess = () => {
    const result = process.argv[2];
    if (!result) {
        throw new Error('파일 이름을 입력하세요');
    }
    return result;
}

const createFile = (fileName) => {
    const file = new File(`./${fileName}.json`);
    if (!file.isExist()) {
        throw new Error('파일이 존재하지 않습니다');
    }
    return file;
}
const printResult = (orders) => {
  if (process.argv.includes('-r')) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}
const fileNameArg = getFileNameArgByProcess();
const file = createFile(fileNameArg);
const rawData = file.read();
const orders = JSON.parse(rawData);
printResult(orders);
