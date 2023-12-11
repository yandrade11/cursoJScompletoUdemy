//exportando função anônima direto
module.exports = function (x, y) {
  return x * y;
};

//para acessar essa função desse lado:
console.log("executando no export: ", module.exports(2, 2));


