const path = require("path");
//importando ler.js em CommonJS
const ler = require("./modules/ler");

//criando caminho
//const pathFile = path.resolve(__dirname, '..', 'teste.txt'); // para criar(escrever) em texto
const pathFile = path.resolve(__dirname, "pessoas.json"); //com path.resolve não se coloca "/"

async function lerArquivo(path) {
  const data = await ler(path);

  return data;
}

//--------------TRATANDO DATA(DADOS) DIRETO--------------//

// const dataFile = lerArquivo(pathFile)
//   .then((data) => console.log(data))
//   .catch(e => e);

//---TRATANDO DATA(DADOS) COM FUNÇÃO/CLASSE NO .THEN()---//

async function lerArquivo2(path) {
  const data = await ler(path);

  mostraJSON(data);
}

function mostraJSON(data) {
  //console.log(data); //ainda retorna como json

  data = JSON.parse(data);

  //só exemplificando que da pra fazer de outras formas (e retornar como texto)
  data.forEach((chave) => {
    const valor = chave.nome;
    console.log(valor);
  });
}
lerArquivo2(pathFile);
