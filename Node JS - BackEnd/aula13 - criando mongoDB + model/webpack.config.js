const path = require("path");

module.exports = {
  mode: "production",
  entry: "./frontend/index.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js",
  },

  // utilizando o MÓDULO babel no webpack antes de gerar o bundle
  module: {
    rules: [
      {
        //exclude: excluir node_modules do bundle, com REGEX
        exclude: /node_modules/,
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

  devtool: "source-map",
};

// mode: 'development': MODO: arquivo gerado mais rapido, sem minificar

// mode: 'production': MODO: arquivo gerado minificado

// entry: caminho do(s) arquivo(s) originais a serem recompilados

// output: saída, bundle, deploy, versão de publicação, minificada e funcional para todos os navegadores



//*OBS: SEMPRE dar "ctrl + c" no terminal, antes de fechar o VSCode para não ficar executando o watch em segundo plano.
