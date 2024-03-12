Projeto em MVC (Model/View/Controller) com Express, Webpack e boilerplant

\*\*atualmente sem controller, ainda não vimos a parte de mongoDB

---

OBS: EJS funciona parecido com html, mas você pode "ativar/desativar" js nele

1. você pode mostrar conteúdo na página específica (index por exemplo) através da controller, usando um objeto como segundo parâmetro do "res.render()";

2. você também pode mostrar conteúdo para todas as páginas, através de um middleware com res.locals.nomeVariavel = ;

3. também posso usar res.locals.nomeVariavel especificamente na controller, para index, por exemplo

SINTAXE EJS

<%= &>: escapa TAGS html
<%- &>: executa TAGS ao invés de escapar
<% %>: para usar if, for, etc...
<%# %>: comentário em EJS
<%- include('caminho/Include'); %>: importa trecho do código no html
