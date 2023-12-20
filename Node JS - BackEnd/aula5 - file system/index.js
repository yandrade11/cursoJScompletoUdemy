//requisição FILE SYSTEM: API do NodeJS
const fs = require("fs").promises;
const path = require("path");

//sempre retorna array
// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir); //files retorna array

  walk2(files, rootDir);
}

// function walk(files) {
//   //por acaso o for of tira do array e imprime cada um (fora do array)
//   for (let file of files) {
//     console.log(file);
//   }
// }

async function walk2(files, rootDir) {
  for (const file of files) {
    //path.resolve(rootDir, file) = 'D:/Empresas/MEDGRUPO/ESTUDOS/cursoJScompletoUdemy/Node JS - BackEnd/' + relative Path do File
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath); //.stat() traz informações dos arquivos/pastas

    //regex: verifica se algum arquivo é .git dentro de fileFullPath e ignora
    if (/\.git/g.test(fileFullPath)) continue;

    //regex: ignora node_modules
    if (/node_modules/g.test(fileFullPath)) continue;

    //se for diretório, lista e passa pro próximo sem passar do if
    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    //só funciona abaixo da leitura da pasta, pois se não encontrar .css ele não continua.
    //regex: nega todos que não sejam .css e $ significa "terminar com .css"
    if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath))
      continue;

    console.log(fileFullPath, stats.isDirectory()); //aqui retorna se é diretório ou não

    //OBS muito importante: se o arquivo/pasta verificada não existir o "continue" não funciona.
  }
}

readdir("D:/Empresas/MEDGRUPO/ESTUDOS/cursoJScompletoUdemy/");
