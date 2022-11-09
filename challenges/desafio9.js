db.produtos.find(
  { "valoresNutricionais.0.tipo": { $lt: 500 } },
   { nome: 1 },
);