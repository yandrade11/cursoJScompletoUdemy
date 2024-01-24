const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  res.render("login");
};

exports.register = function (req, res) {
  //instanciando classe e passando os dados digitados como argumento
  const login = new Login(req.body);

  //passando dados por dentro da classe
  res.send(login.body);
  //   res.send("olá");
};

// exports.validate = (req, res) => {
//   const login = new Login(req.body);

//   res.send(login.body);
// };
