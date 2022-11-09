db.produtos.find(
  { vendidos: { $gt: 50, $lt: 100 } }, { nome: 1, vendidos: 1 },
).sort({ nome: 1, vendidos: 1 });
