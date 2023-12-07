export default class ValidaCPF {
  constructor(cpfEnviado) {
    //forma melhor escrita, mas sem proteção de dados
    // this.cpfLimpo = cpfEnviado.replace(/\D+/g, "");

    Object.defineProperty(this, "cpfLimpo", {
      enumerable: false, //protegendo dado no output
      get: function () {
        //retirando "." e "-"
        return cpfEnviado.replace(/\D+/g, "");
      },
    });
  }

  validar() {
    if (!this.cpfLimpo) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.criaDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.criaDigito(cpfSemDigitos + digito1);

    const novoCPF = cpfSemDigitos + digito1 + digito2;
    return novoCPF === this.cpfLimpo;
  }

  isSequencia() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  // se um método não utiliza THIS (ou seja, nada da instância/construtor) ele pode ser um método estático
  static criaDigito(cpfSemDigitos) {
    const cpfArray = Array.from(cpfSemDigitos);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, valor) => {
      ac += regressivo * Number(valor);
      regressivo--;

      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  //protegendo dados do usuário e console (não funciona 100%)
  static limpaCPF(input, cpfLimpo) {
    input = "***.***.***-**";
    cpfLimpo = "***.***.***-**";

    //aqui ele esconde o cpf
    console.log(cpfLimpo);

    return cpfLimpo;
  }
}

const btn = document.querySelector(".botaoEnviar");
const input = document.querySelector(".inputCPF");

btn.addEventListener("click", () => {
  const cpf = new ValidaCPF(input.value);
  cpf.validar() ? alert("CPF Válido") : alert("CPF Inválido");

  ValidaCPF.limpaCPF(input.value, cpf.cpfLimpo);

  //ainda mostra o cpf
  // console.log(cpf.cpfLimpo);
});
