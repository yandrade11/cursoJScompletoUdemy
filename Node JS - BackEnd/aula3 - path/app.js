// __filename: nome do arquivo atual (absolut path)
// __dirname: nome da pasta atual (absolut path)

//Path: nativo do Node, instala utilizando NPM também
const path = require("path");
console.log('Dirname: ', path.resolve(__dirname));

//Para ter o caminho dinamicamente (poder utilizar em outros SO) utiilze o .resolve:
// você pode colocar , ".." para voltar uma pasta, como se fosse o "../../"
console.log('Anterior a Dirname: ', path.resolve(__dirname, ".."));

//Supondo que eu queira acessar a pasta de modelo do curso
//CUIDADO: se a pasta não existir, não voltará como erro
console.log('Curso/Modelo/Assets: ', path.resolve(__dirname, "..", "..", 'modelo', 'assets'));
