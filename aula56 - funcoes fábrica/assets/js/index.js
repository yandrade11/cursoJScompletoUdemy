//FACTORY FUNCTION (FUNÇÃO FÁBRICA)

function criaPessoa(nome, sobrenome) {
  return {                                          
    nome,
    sobrenome,
    fala: function (assunto) {                         
      return `${nome} ${sobrenome} está falando ${assunto}.`;               // quando você passa por parâmetro/argumento o "Nome" não precisa utilizar o "this"
    }
  }
}

const p1 = criaPessoa('Yuri', 'Andrade');
console.log(p1.fala('de futebol'));

//==============================================//

function criaPessoa2() {
  return {                                                                  // objeto
    nome: 'Yuri',
    sobrenome: 'Andrade',

    get nomeCompleto() {                                                    // utilizando GET para PEGAR valor do retorno da função (fingindo não ser função)
      return `${this.nome} ${this.sobrenome}`;
    },

    fala() /* ou fala: function (assunto) */ {                              // função dentro de objeto é um método (assim como em classe)
      return `${this.nomeCompleto} está falando sobre seu peso 
      ${this.peso}kg, altura ${this.altura}cm e seu IMC ${this.imc()}.`;    // this = ESSE OBJETO | utilize this para acessar "nome" que é uma propriedade do objeto 
    },                                                                       
                                                        
    altura: 1.79,
    peso: 75,
    imc() {                                                                 
      const indice = this.peso / (this.altura ** 2);

      return indice.toFixed(2);
    }     
    
    // outra forma de usar o imc como valor (console.log abaixo comentado) usando getter (obter valor)
    /* 
      get imc() {                                                                 
        const indice = this.peso / (this.altura ** 2);

        return indice.toFixed(2);
      } 
    */
  }
}

const p2 = criaPessoa2();
console.log(p2.fala());
// console.log(p2.imc);

//==============================================//


