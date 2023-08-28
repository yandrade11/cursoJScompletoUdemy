function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    //mostrando cpf limpo no console
    enumerable: true,
    get: function () {
      //retirando "." e "-"
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

//criando método valida no objeto via prototype
ValidaCPF.prototype.valida = function () {
  if (!this.cpfLimpo) return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCPF = cpfParcial + digito1 + digito2;
  return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;

  const total = cpfArray.reduce((ac, valor) => {
    ac += regressivo * Number(valor);
    regressivo--;

    return ac;
  }, 0);

  //se o cálculo de um dos dígitos for maior que 9, será 0
  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

const cpf = new ValidaCPF("070.987.720-03");

cpf.valida() ? console.log("CPF Válido") : console.log("CPF Inválido");
