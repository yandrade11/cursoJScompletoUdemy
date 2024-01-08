O QUE É UM MIDDLEWARE NO EXPRESS?
R: uma função/classe que executa uma tarefa antes da requisição ser processada
Por exemplo:

- route.get('/', homeController.paginaInicial) = homeController.paginaInicial é o middleware
- verificar se usuário está registrado antes de logar

---

COMO USAR?
ESPECÍFICO (ROTA E GET): chamar função/classe no route.get('/', meuMiddleware, homeController.paginaInicial, meuMiddleware);

SERVIDOR (todas as rotas chamarão esse middleware): 

---

COOKIE: salvar registros (login por exemplo) no navegador
SESSION: salvar registros no banco, na sessão daquele usuário

---
