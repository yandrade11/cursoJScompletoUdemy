O QUE É UM WEBPACK:
R: 


COMO CRIAR WEBPACK (BOILEPLANT)


PASSO 0: criar arquitetura
PASSO 1: abrir terminal
PASSO 2: npm init -y (o -y é para não perguntar nada no terminal)

PASSO 3: npm i --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli

- i: install
- --save-dev: salvar nas devDependencies do package.json
- @babel/preset-env: lib do babel
- @babel/core: core do babel
- @babel/cli: 

PASSO 4: npm i regenerator-runtime core-js

- regenerator-runtime: recurso para rodar promise/async/await em navegadores antigos
- core-js: core do JS na versão mais atualizada para rodar em IE6 (e outros browser bem antigos)

PASSO 5: abrir o index.js e importar regenerator-runtime e core-js
- import 'core-js/stable';
- import 'regenerator-runtime/runtime';

PASSO 6: npm i style-loader css-loader
PASSO 7: escrever o webpack.config.js
