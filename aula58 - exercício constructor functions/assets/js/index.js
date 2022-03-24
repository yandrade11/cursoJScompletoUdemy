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
      if (element.keyCode === 13) this.executeCount();
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
        display.value.slice(-1) === element.value
      )
        return;

      //mostrar caracter no display
      if (
        element.classList.contains("num-btn") ||
        element.classList.contains("open-parentheses-btn") ||
        element.classList.contains("close-parentheses-btn") ||
        element.classList.contains("point-btn")
      )
        callFunction.showElementDisplay(element.value);

      //operadores
      if (element.classList.contains("operator-btn"))
        callFunction.showElementDisplay(element.value);

      //limpar
      if (element.classList.contains("clear-btn")) callFunction.clearDisplay();

      //apagar
      if (element.classList.contains("erase-btn")) callFunction.delete();

      //executa conta
      if (element.classList.contains("equal-btn")) callFunction.executeCount();
    });
  };

  //função de uma linha também não precisa de chaves e ;
  this.showElementDisplay = (valor) => (display.value += valor);
  this.clearDisplay = () => (display.value = "");
  this.delete = () => (display.value = display.value.slice(0, -1));
  this.executeCount = () => {
    //eval() = executa qualquer código javascript dentro do parentese
    //portanto não é aconselhável utilizar pois facilita o trabalho de hackers
    let count = display.value;

    try {
      display.value = eval(count);

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
