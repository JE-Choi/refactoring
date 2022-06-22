/**
 * 함수에서 필요한건 state뿐인데
 * 너무 큰 객체를 받으니까, 필요한 데이터만 받도록 수정
 * - 외부 객체와의 의존도 낮춤.
 * - 재사용성 높아짐.
 */
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
