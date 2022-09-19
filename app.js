const express = require('express');
const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

const products = [];


app.post("/products", (request, response) => {

  const { name, price } = request.body;

  const product = {
    name,
    price,
    id: randomUUID(),
  }

  products.push(product) 
  
  return response.json(product)
})

app.get("/products", (request, response) => {
 return response.json(products)
})

app.get("/produts/:id", (request, response) => {
  const { id } = request.params;
  const product = products.find((product) => product.id === id);
  return response.json(product);

})
app.get("/produts/:id", (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  return response.json({ message: "Produto alterado com sucesso" });

});

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"))