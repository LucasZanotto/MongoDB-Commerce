const countDoc = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({
    franquia: "McDonalds",
    totalProdutos: countDoc,
  });
 
  db.resumoProdutos.findOne({}, { franquia: 1, totalProdutos: 1, _id: 0 });