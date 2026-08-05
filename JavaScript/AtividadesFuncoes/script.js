//01
const dobro = (numero) => numero * 2;
console.log(dobro(5));

//02
const verificarMedia = (a, b) => {
  if ((a + b) / 2 >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
};

console.log(verificarMedia(6, 8));

//03
const MaiorNumero = (a,b) =>{
  if(a > b){
    return a;
  }else if(b > a){
    return b;
  }else{
    return "Os dois números são iguais!"
  }
}

  console.log(MaiorNumero(8,20));

  //04
  const ConverterTemperatura = (fahrenheint)  => (fahrenheint * (9/5)) + 32
  console.log(ConverterTemperatura(100));

  //05
  const login = (usuario, senha) => {
    if(usuario === "admin" && senha === 1234){
      return "Login Realizado!";
    }else{
      return "Usuário ou senha errados!"
    }
  }

  console.log(login("admin", 123));