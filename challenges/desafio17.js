db.resumoProdutos.updateMany({},
  { $set: { franquia: ["McDonalds", "totalProdutos"] } });
 
  db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });