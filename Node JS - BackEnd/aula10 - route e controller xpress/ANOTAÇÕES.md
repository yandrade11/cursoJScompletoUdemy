MVC:

MODEL -> base de dados
VIEW -> frontEnd
CONTROLLER -> funções/classes/tratamentos
ROUTER -> aponta a rota express e importa o controller


---

PASSO 1: CRIAR ROTAS (express.Router()), EXPORTAR E IMPORTAR CONTROLLER;
PASSO 2: CRIAR CONTROLLER (específico para cada area do app), CRIAR FUNÇÕES e IMPORTAR O ROUTER;
PASSO 3: CRIAR O SERVER.JS