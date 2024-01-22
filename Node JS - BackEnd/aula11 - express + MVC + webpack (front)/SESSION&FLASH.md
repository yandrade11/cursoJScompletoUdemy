Projeto em MVC (Model/View/Controller) com Express, Webpack e boilerplant

**atualmente sem controller, ainda não vimos a parte de mongoDB

O QUE SÃO SESSÕES?
R: cookies, páginas salvas no banco para abrir mais rápido posteriormente (por exemplo login e senha quando você já loga automaticamente por ter logado antes e ter clicado em "manter salvo").

O QUE É O FLASH-MESSAGES (obsoleto por causa do react)
R: mensagens rápidas que logo são apagadas, pro usuário. 

exemplo: digitou CPF errado, recebe a mensagem de CPF inválido, na próxima vez que atualizar essa mensagem não aparecerá novamente.

geralmente essas mensagens ficam no botão de submit.

lebrando que cada vez que você da um submit, você cria uma nova sessão, portanto se você digitar novamente cpf errado, aparecerá a mensagem novamente.