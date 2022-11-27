/*10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
total de homens;
total de mulheres;
média das idades dos homens;
média dos pesos das mulheres.*/

let idades = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let pesos = [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.8, 9.5, 10.5];
let sexos = ["M", "F", "M", "F", "M", "F", "M", "F", "M", "F"];

let totalH = 0;
let totalM = 0;

let idadeH = 0;
let pesoF = 0;

for (let i = 0; i < idades.length; i++) {
  let idade = idades[i];
  let peso = pesos[i];
  let sexo = sexos[i];

  if (sexo == "M") {
    totalH++;
  }

  if (sexo == "F") {
    totalM++;
  }

  if (sexo == "M") {
    idadeH += idade;
  }

  if (sexo == "F") {
    pesoF += peso;
  }
}

let mediaH = idadeH / totalH;
let mediaPeso = pesoF / totalM;

alert(`O total de sexo masculino: ${totalH}
O total de mulheres : ${totalM}
A média das idade dos homens é: ${mediaH}
A média dos peso das Mulheres é: ${mediaPeso}`);
