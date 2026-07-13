//Função tradicional
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 10));

let resultado = soma(5, 10);
console.log(resultado);

//Funcao sem retorno
function saudaudacao() {
  console.log("Bem vindo ao sistema");
}

saudaudacao();

//Arrow function
const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(2, 10));

//Arrow function - Forma curta
const dobrar = (numero) => numero * 2;
console.log(dobrar(50));

//Exemplo prático - Verificar idade
const verificarIdade = (idade) => {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
};

console.log(verificarIdade(21));
