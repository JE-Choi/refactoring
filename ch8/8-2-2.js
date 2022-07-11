/**
 * 8.2 필드 옮기기
 */
class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;

  }

  get interestRate() {
    return this.type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
    this._nameString = nameString;
  }

  get nameString() {
    return this._nameString;
  }

  get interestRate() {
    return this._interestRate;
  }
}
