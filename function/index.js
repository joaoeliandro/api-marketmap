const fs = require('fs');
const path = require('path');

class Marketmap {
  constructor(data) {
    this.data = data ? data : path.resolve(__dirname, '..', 'database', 'data-example.json');
    this.json = fs.readFileSync(this.data);
  }

  _readJson = () => {
    try {
      const products = JSON.parse(this.json);

      return products;
    } catch (error) {
      console.log(error.message);
    }
  }

  getProducts() {
    return this._readJson();
  }
};

module.exports = Marketmap;
