//.promises retorna como promise
const fs = require("fs").promises;

//exportando em Common JS
module.exports = (path, data) => {
  //fs.writeFile(caminho do arquivo, data/dado, options, callback)
  // fs.writeFile(pathFile, "Frase 1", { flag: "w", encoding: "utf8" });
  fs.writeFile(path, data /*, { flag: "w", encoding: "utf8" }*/);
  //      flag: 'w' = sobrescreve o arquivo (caso já exista) - DEFAULT
  //      flag: 'a' = adiciona ao invés de sobrescrever
  //      encoding: 'utf8' não precisa ter pois é DEFAULT
};
