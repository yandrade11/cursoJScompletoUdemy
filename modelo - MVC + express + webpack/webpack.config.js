// WEBPACK.CONFIG.JS é um módulo do Node JS (todo arquivo para o Node é um módulo)

// importando módulo PATH do Node JS
// Common JS: forma usada no back-end para import/export de módulos JS
const path = require("path");

// export como módulo WEBPACK do Node JS
// export é como se fosse um "return/saída" do webpack, todo o resto é só funciona aqui dentro
module.exports = {
  mode: "production",
  entry: "./frontend/index.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js",
  },

  // utilizando o MÓDULO babel no webpack antes de gerar o bundle
  module: {
    // algumas regras podem ser determinandas com expressão-regular (ER)
    rules: [
      {
        //exclude: excluir node_modules do bundle, com ER
        exclude: /node_modules/,

        //test: extensões que quer recompilar no bundle, com ER
        test: /\.js$/,

        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // mapear erro no arquivo original e não no bundle.js (não precisar ver no arquivo completão compilado)
  devtool: "source-map",
};

// mode: 'development': MODO: arquivo gerado mais rapido, sem minificar

// mode: 'production': MODO: arquivo gerado minificado

// entry: caminho do(s) arquivo(s) originais a serem recompilados

// output: saída, bundle, deploy, versão de publicação, minificada e funcional para todos os navegadores

//      path.resolve(): caminho inteiro até a raiz do projeto em qualquer SO

//      __dirname: pasta raiz do arquivo que estamos

//*OBS: SEMPRE dar "ctrl + c" no terminal, antes de fechar o VSCode para não ficar executando o watch em segundo plano.
