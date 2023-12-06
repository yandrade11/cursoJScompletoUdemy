//import no ES6 não precisa de extensão do arquivo

//como resolver nome de variável repetida: nome as nome2 (exemplo)
import {
  nome as nomeImportado,
  sobrenome,
  idade,
  soma,
} from "./moduloExport.js";

//para dar erro e obrigar a usar o "as"
const nome = "Vegildo";

console.log(
  "Import simples: \n",
  nomeImportado,
  nome,
  sobrenome,
  idade,
  `soma: ${soma(2, 3)}`
);

//-----------------------COM CLASSE--------------------------//
import { nome2, sobrenome2, idade2, soma2, Pessoa } from "./moduloExport.js";

const p1 = new Pessoa("Leo", "Braga", 34, soma2(5, 5));
console.log("Import com classe: ", p1);

//--------------COMO IMPORTAR TUDO DE UM EXPORT--------------//
import * as MeuModulo from "./moduloExport.js";
console.log("Import com Modulo inteiro: ", MeuModulo);

//------------------COMO IMPORTAR O DEFAULT------------------//

//default não precisa usar o mesmo nome da variável/função/classe e nem de especificação do que é (não precisa usar {})
import qualquerCoisa from "./moduloExport.js";
console.log("Import default: ", qualquerCoisa("Enzo", "Andrade", 9));
