db.produtos.find(
  { valoresNutricionais:
   {
    $elemMatch: 
     {
        tipo: "calorias",
$and: [
           { quantidade: { $lte: 500 } },
          ],
     },
   },
   },
   { nome: 1, _id: 0 },
);