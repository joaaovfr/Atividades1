/*9. Faça um programa que receba 10 números, calcule e imprima a soma dos números pares e a soma dos números primos.*/

let numero = null;
let par = null;
let impar = null;

for (let i = 1; i <= 10; i++) {
  numero = parseInt(prompt("Digite um número:"));

  if (numero % 2 == 0) {
    par += numero;
  } else {
    impar += numero;
  }
}
alert("A soma dos números pares é: " + par);
alert("A soma dos números ímpares é: " + impar);
