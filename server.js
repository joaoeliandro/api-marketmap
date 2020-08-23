const express = require('express');
const path = require('path');
const Marketmap = require('./function');

const app = express();

const data = path.resolve(__dirname, 'database', 'data-example.json');

app.get('/products-route', (request, response) => {
  const marketmap = new Marketmap(data);

  return response.json(marketmap.getRoutes());
});

app.listen(3333, () => {
  console.log('🚀 server started!');
});