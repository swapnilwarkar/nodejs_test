class User {
  constructor(accountId) {
    this.accountId = accountId;
  }
}

class Product {
  constructor(type, version) {
    this.type = type;
    this.version = version;
  }
}

module.exports = { User, Product };

