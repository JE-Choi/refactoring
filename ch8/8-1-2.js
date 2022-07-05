/**
 * 8.1 함수 옮기기
 * - 중첩된 함수는 trackSummary내부에서만 쓰일 필요없고 외부에서 재활용될 가능성이 있다.
 */
export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.type.overdraftCharge();
    return result;
  }

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }

  /**
   * this.type에 의존되어있으니까,
   * AccountType로 옮김
   * => 근데, AccountType에만 관련있지 않고, daysOverdrawn...baseCharge에도 연관이 되어있으니까 Account에 있어도 괜찮을 듯.
   */
  overdraftCharge(daysOverdrawn) {
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    }
    const baseCharge = 10;
    return daysOverdrawn <= 7 ? baseCharge : baseCharge + (daysOverdrawn - 7) * 0.85;
  }
}
