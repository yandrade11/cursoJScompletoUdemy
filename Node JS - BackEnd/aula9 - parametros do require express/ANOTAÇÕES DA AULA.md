<!--

SUPONDO A ROTA:       ROTA  /  REQ.PARMS     ?REQ.QUERYS&
http://facebook.com/profiles/nome.usuario?campanha=googleads&campanha=facebookads

---

REQ.QUERY = modificadores da mesma página, para marketing/afiliados por exemplo

? = começa uma req.querys
& = para fazer mais de uma req.querys

chave = campanha
valor = googleads & facebookads

---

REQ.BODY = utilizado em formulários de cadastro/login por exemplo, para fazer requisição de dados do usuário no corpo da página

OBS: tudo que é requisitado pelo req.body não vai na URL, por questão de segurança. Se não você teria algo como:

http://facebook.com/profiles/usuario?login=yuri&senha=12345

 -->
