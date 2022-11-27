/*4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
parcelamento for em 5 vezes, o acréscimo será de 20%. */

let preco = 1000;
let total = null;
let prestacao = null;

let parcela = 3;

if (parcela == 3) {
  total = preco * 1.1;
  prestacao = total / parcela;
} else if (parcela == 5) {
  total = preco * 1.2;
  prestacao = total / parcela;
} else {
  alert("Defina em 3x ou 5x");
}

alert(`
    VALOR PRODUTO: ${preco}
    VALOR PARCELA : ${prestacao}
    NÚMEROS PARCELAS : ${parcela}
    TOTAL : ${total} `);
