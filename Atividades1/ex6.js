/*6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:
a maior e a menor altura do grupo;
a média de altura;
o número de pessoas com mais de 1.81 de altura.*/

let alturas = [
  2, 1.7, 1.8, 2.0, 1.5, 1.7, 1.8, 2.0, 1.5, 1.7, 2.8, 2.1, 1.3, 1.6, 1.7,
];

let maiorAltura = 0;
let menorAltura = 5;
let total = 0;

for (let i = 0; i < alturas.length; i++) {
  const element = alturas[i];

  if (element > maiorAltura) {
    maiorAltura = element;
  }
  if (element < menorAltura) {
    menorAltura = element;
  }
  // total += element --- MODO MAIS FÁCIL /////
  total = element + total;
}
let media = total / alturas.length;

alert(`A maior altura é: ${maiorAltura}
        A menor altura é: ${menorAltura}
        A média de alturas é: ${media}`);
