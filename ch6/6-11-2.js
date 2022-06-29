import fs from 'fs';

/**
 * 함수로 나눌 때, 의미가 있는 범위로 나누는 것이 중요하다.
 */
function parseCommand(args) {
    if (!args[2]) {
        throw new Error('파일 이름을 입력하세요');
    }

    const fileName = `./${args[2]}.json`;
    if (!fs.existsSync(fileName)) {
        throw new Error('파일이 존재하지 않습니다');
    }

    return {
        fileName,
        countReadyOnly: args.includes('-r')
    }
}

/**
 * 주문개수
 */
function countOrders({countReadyOnly, fileName}) {
    const rawData = fs.readFileSync(fileName);
    const orders = JSON.parse(rawData);
    // 한줄로 표현 가능한 조건문이라면, 3항으로 합치기
    const filered = countReadyOnly ? orders.filter((order) => order.status === 'ready').length : orders;
    console.log(filered.length)
}

/**
 * 2. 사용자에게 입력 → 유효성 검사
 * 3. 필요한 로직 처리
 */
function run(args) {
    const command = parseCommand(args);
    countOrders(command);
}

// 1. run 함수를 생성 => 노드의 process 의존성 제거
run(process.argv);