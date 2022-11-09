db.produtos.find(
  { "valoresNutricionais.3.tipo": 
  { $gte: 30, $lte: 40 } },
   { nome: 1 },
);