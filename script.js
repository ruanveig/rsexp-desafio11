/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/


let n1 = prompt("Insira o primeiro número: ")
let n2 = prompt("Insira o segundo número: ")

function sum(n1,n2){
 let total = Number(n1) + Number(n2)
 return total 
}

function sub(n1,n2){
  let total = Number(n1) - Number(n2)
  return total 
 }

 function mult(n1,n2){
  let total = Number(n1) * Number(n2)
  return total 
 }

 function div(n1,n2){
  let total = Number(n1) / Number(n2)
  return total 
 }

 function rem(n1,n2){
  let total = Number(n1) % Number(n2)
  return total 
 }

alert(`O valor da soma é : ${sum(n1,n2)}`)
alert(`O valor da subtração é : ${sub(n1,n2)}`)
alert(`O valor da multiplicação é : ${mult(n1,n2)}`)
alert(`O valor da divisão é : ${div(n1,n2)}`)
alert(`O valor do resto da divisão é : ${rem(n1,n2)}`)




if(n1 == n2){
  alert(`Os números ${n1} e ${n2} são iguais.`)
} 
else if(n1 != n2){
  alert(`Os números ${n1} e ${n2} são diferentes.`)
}

if(sum(n1,n2) % 2 == 0){
  alert(`A soma dos números ${n1} e ${n2} é par.`)
}
else{
  alert(`A soma dos números ${n1} e ${n2} é ímpar.`)
}