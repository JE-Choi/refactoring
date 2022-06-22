export function price(order) {
    // 기본가격
    const basePrice = order.quantity * order.itemPrice;
    //수량할인
    // quantityDiscount 짧은 버전도 문맥상 맞다면, 짧은 변수명 추천
    const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    //배송비
    const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
    return basePrice - discount + shipping;
}
