/**
 * 문제
 * - 주석으로 코드가 설명되어있음.
 * - 코드가 분리되어있지 않았어서, 테스팅하기도 어려웠음.
 */
export function printOwing(invoice) {
  //  사용하는 쪽과 멀리있는 변수
  let outstanding = 0;

  // 배너를 출력
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // 합계
  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  //  지급날짜를 계산 + 객체를 수정 (가능하면, 기존객체는 불변하는게 좋음.)
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // 세부사항 출력
  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
