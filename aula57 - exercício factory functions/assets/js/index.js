function createCalculator() {
  return {
    display: document.querySelector(".inputValue"),

    start() {
      alert("Bem-vindo a calculadora do Yuri");

      this.handleClick();
      this.pressEnterToExecute();
    },

    pressEnterToExecute() {
      this.display.addEventListener("keyup", (element) => {
        if (element.keyCode === 13) {
          this.executeCount();
        }
      });
    },

    handleClick() {
      //this = calculadora
      document.addEventListener(
        //this = evento do botão
        "click",
        function (event) {
          const element = event.target;

          //a cada clique mantém o focus no display
          this.display.focus();

          //não repetir caracter
          if (
            element.classList.contains("non-repeat") &&
            this.display.value.slice(-1) === element.value //trocar this.display.value por variável
          ) {
            return;
          }

          //mostrar caracter no display
          if (
            element.classList.contains("num-btn") ||
            element.classList.contains("open-parentheses-btn") ||
            element.classList.contains("close-parentheses-btn") ||
            element.classList.contains("point-btn")
          ) {
            //this = document
            this.showElementDisplay(element.value);
          }

          //operadores
          if (element.classList.contains("operator-btn")) {
            this.showElementDisplay(element.value);
          }

          //limpar
          if (element.classList.contains("clear-btn")) this.clearDisplay();

          //apagar
          if (element.classList.contains("erase-btn"))
            this.display.value = this.display.value.slice(0, -1); //trocar this.display.value por variável

          //executa conta
          if (element.classList.contains("equal-btn")) {
            this.executeCount();
          }
        }.bind(this) //recurso para fazer o this voltar a ser calculadora
        //se eu usasse arrowFunction no 'click' não precisaria do bind
      );
    },

    clearDisplay() {
      this.display.value = ""; //trocar this.display.value por variável
    },

    showElementDisplay(valor) {
      this.display.value += valor; //trocar this.display.value por variável
    },

    executeCount() {
      //eval() = executa javascript no código dentro do parentese
      let count = this.display.value; //trocar this.display.value por variável

      try {
        this.display.value = eval(count); //trocar this.display.value por variável

        if (!count) {
          alert("Cálculo inválido.");
          return;
        }

        this.display.valor = count;
      } catch (error) {
        alert("Cálculo inválido.");
      }
    },
  };
}

const calculator = createCalculator();
calculator.start();
