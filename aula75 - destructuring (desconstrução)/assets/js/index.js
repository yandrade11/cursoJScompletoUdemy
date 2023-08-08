// DESTRUCTURING (DESCONSTRUÇÃO DE ARRAYS)

const produto = { nome: "Caneca", preco: 1.8 };

//ou seja, dessa forma eu tiro as chaves e valores de dentro dos arrays
for (let [key, value] of Object.entries(produto)) {
  console.log(key, value);
}
