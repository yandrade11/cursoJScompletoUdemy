// new Object: toda função construtora tem um Object.prototype

const objA = {
  chaveA: "A",
  // __proto__: Object.prototype -> todo objeto também recebe um proto (igual prototype)
};

const objB = {
  chaveB: "B",
};

const objC = new Object();
objC.chaveC = "C";

//fazer proto de objB receber prototype de objA
Object.setPrototypeOf(objB, objA);

//imprimir chaveA pelo objB (isso só funciona, se a chave da propriedade do ojbB não tiver o mesmo nome da chave da propriedade do objA)
console.log("objB.chaveA: ", objB.chaveA);

//nesse caso, o __proto__ de objB não é mais Object.prototype, agora ele é o __proto__ de objA
console.log("objB.__proto__: ", objB.__proto__);

//e o __proto__ de objA sim é o Object.prototype (herança)
console.log("objA.__proto__: ", objA.__proto__);

//agora a herança fica: proto chave C -> proto chave B -> proto chave A -> Object.prototype
Object.setPrototypeOf(objC, objB);

//OBS: NÃO É RECOMENDÁVEL você utilizar manipulação no __proto__, inclusive atrapalha performance

//a forma mais recomendada é:
console.log('getPrototypeOf(): ', Object.getPrototypeOf(objA));
