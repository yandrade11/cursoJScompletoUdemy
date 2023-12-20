const fs = require("fs").promises;

//exportando em Common JS
module.exports = (path) => fs.readFile(path, "utf8");
