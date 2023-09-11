// Programação Orientada a Objeto

//superclasse
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

//criando método no prop
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    this.extrato();

    return console.log(`Saldo da CP Insuficiente: ${this.saldo.toFixed(2)}`);
  }

  this.saldo -= valor;
  this.extrato();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.extrato();
};

Conta.prototype.extrato = function () {
  console.log(
    `Agência: ${this.agencia}   Conta: ${
      this.conta
    }  |  Saldo: R$${this.saldo.toFixed(2)}` //duas casas decimais
  );
};

const conta1 = new Conta(1111, "4675-0", 1000);
// conta1.depositar(20);
// conta1.sacar(100);

//-----------------------------------------------

// Especializando as contas (conta corrente e conta poupança) com herança da superclasse Conta
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

//clonando prototype para objeto vazio com construtor da superclasse
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
const cc1 = new ContaCorrente(1112, "7895-2", 0, 100);

//POLIMORFISMO: reescrevendo método sacar na classe ContaCorrente
ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    this.extrato();

    return console.log(`Saldo da CC Insuficiente: ${this.saldo.toFixed(2)}`);
  }

  this.saldo -= valor;
  this.extrato();
};

//------------------------------------------------

//aqui na CP é usado o método original e não o que foi mudado para CC
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
const cp1 = new ContaPoupanca(1113, "7899-0", 0);

cc1.depositar(10);
cc1.sacar(90);
cc1.sacar(90);

console.log();

cp1.depositar(10);
cp1.sacar(110);
cp1.sacar(1);
