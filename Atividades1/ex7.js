/*7. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: 
ótimo: 3
 bom: 2 
regular: 1*/

let pesquisas = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

let idades = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50];

let totalOtimo = 0;

let qtdOtimo = 0;

let qtdRegular = 0;
let qtdBom = 0;

for (let i = 0; i < pesquisas.length; i++) {
  const pesquisa = pesquisas[i];
  const idade = idades[i];

  if (pesquisa == 3) {
    totalOtimo += idade;
    qtdOtimo++;
  }
  if (pesquisa == 1) {
    qtdRegular++;
  }
  if (pesquisa == 2) {
    qtdBom++;
  }
}

mediaOtimo = totalOtimo / qtdOtimo;

alert(`
A media das pessoas que respoderam ótimo: ${mediaOtimo}
pessoas que votaram regular ${qtdRegular}
% de votos que votaram bom : ${(qtdBom * 100) / pesquisas.lenght}`);
