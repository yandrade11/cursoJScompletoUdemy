COMO RODAR SEU SERVER? (tem que reiniciar toda vez que tiver alteração)

PASSO 1: acessar no terminal (via cd) o path do server.js
PASSO 2: digitar no terminal node server.js ---> caso o terminal já esteja na pasta do arquivo

<!-- OBS: sempre parar execução do server (ctrl + c) no final -->

---

COMO INSTALAR NODEMON? (nodemon fica escutando o .js que você quiser e não precisa reiniciar o server)
R: npm install --save-dev nodemon

---

COMO RODAR SEU SERVER COM NODEMON?
npx nodemon server.js (ou arquivo que quer escutar)

OU (forma mais utilizada):
npm start (quando você instalou o nodemon no package.json ele criou o 'start' para escutar a 'main') ---> main = server.js

<!-- OBS: você pode alterar o package.json para escutar algo específico, não escutar algo, etc... -->

---
