db.produtos.deleteMany(
  { curtidas: { $lt: 50 } },
  { nome: 1 },
);

db.produtos.find({}, { nome: 1 });