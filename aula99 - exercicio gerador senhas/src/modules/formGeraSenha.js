import geraSenha from "./geradores";

const qtd = document.querySelector(".qtd");
const numeros = document.querySelector(".num");
const maiusculas = document.querySelector(".uppercase");
const minusculas = document.querySelector(".lowercase");
const simbolos = document.querySelector(".symbol");

const button = document.querySelector(".btn");
const senhaGerada = document.querySelector(".senha-gerada");

export default function handleButton() {
  button.addEventListener("click", () => {
    senhaGerada.innerHTML = geraSenha(
      qtd.value,
      maiusculas.checked,
      minusculas.checked,
      numeros.checked,
      simbolos.checked
    );

    // console.log(senhaGerada);

    if (senhaGerada.textContent === "") {
      alert("Você precisa marcar pelo menos um tipo de caracter");
    }
  });
}
