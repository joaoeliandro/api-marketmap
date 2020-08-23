const fs = require('fs');
const path = require('path');

class Marketmap {
  constructor(listProducts) {
    this.listProducts = JSON.parse(fs.readFileSync(listProducts));
    this.data = path.resolve(__dirname, '..', 'database', 'dataset.json');
    this.json = fs.readFileSync(this.data);
  }

  _getProducts = () => {
    try {
      const products = JSON.parse(this.json);

      return products;
    } catch (error) {
      console.log(error.message);
    }
  }

  _classifierProducts = () => {
    const products = this._getProducts();
    const listProducts = this.listProducts.map(product => product.produto);
    
    const classifier = products.filter(product => {
      for( let produto of listProducts) 
        if (produto === product.produto) return true;
    });

    const sortClassifierProducts = classifier.sort(
      (productA, productB) => productA.corredor - productB.corredor);

    return sortClassifierProducts;
  }

  getRoutes() {
    return this._classifierProducts();
  }
};

module.exports = Marketmap;
