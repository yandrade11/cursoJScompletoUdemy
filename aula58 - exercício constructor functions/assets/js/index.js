function Calculator(display) {
  this.display = display;

  this.start = () => {
    alert("Bem-vindo a calculadora do Yuri");

    this.handleClick();
    this.pressEnterToExecute();
  };

  //forma diferente de fazer método com arrow e com function
  this.pressEnterToExecute = function () {
    display.addEventListener("keyup", (element) => {
      if (element.keyCode === 13) {
        this.executeCount();
      }
    });
  };

  this.handleClick = () => {
    //this = calculadora
    document.addEventListener("click", function (event) {
      const element = event.target;

      //a cada clique mantém o focus no display
      display.focus();

      //não repetir caracter
      if (
        element.classList.contains("non-repeat") &&
        display.value.slice(-1) === element.value //trocar display.value por variável
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
        callFunction.showElementDisplay(element.value);
      }

      //operadores
      if (element.classList.contains("operator-btn")) {
        callFunction.showElementDisplay(element.value);
      }

      //limpar
      if (element.classList.contains("clear-btn")) callFunction.clearDisplay();

      //apagar
      if (element.classList.contains("erase-btn"))
        display.value = display.value.slice(0, -1); //trocar display.value por variável

      //executa conta
      if (element.classList.contains("equal-btn")) {
        callFunction.executeCount();
      }
    });
  };

  this.clearDisplay = () => {
    display.value = ""; //trocar display.value por variável
  };

  this.showElementDisplay = (valor) => {
    display.value += valor; //trocar display.value por variável
  };

  this.executeCount = () => {
    //eval() = executa javascript no código dentro do parentese
    let count = display.value; //trocar display.value por variável

    try {
      display.value = eval(count); //trocar display.value por variável

      if (!count) {
        alert("Cálculo inválido.");
        return;
      }

      display.valor = count;
    } catch (error) {
      alert("Cálculo inválido.");
    }
  };
}

const callFunction = new Calculator(document.querySelector(".inputValue"));
callFunction.start();
