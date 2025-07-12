// selecionando todos os meus elementos
let titulo = document.querySelector("h1");
let inputCompra = document.querySelector(".compra");
let inputDiferenca = document.querySelector(".diferenca");

let btnCalcular = document.querySelector(".btnCalcular");
let btnLimpar = document.querySelector(".btnLimpar");

let textDiferenca = document.querySelector(".diferencaTotal");

// array que armazena o total de compras no dia
let arrayTotal = [];

// funcao que retorna a difereça
function calculoDiferenca() {
  let CxCompra = parseFloat(inputCompra.value);
  let CxDiferenca = parseFloat(inputDiferenca.value);
  let resultado = CxDiferenca - CxCompra + CxCompra;
  return resultado;
}

// funcao que limpa input e valor total
function limpar() {
  inputCompra.value = "";
  inputDiferenca.value = "";
  textDiferenca.textContent = `diferença total:`;
  arrayTotal = [];
  location.reload()
}

// criação das tabelas de preço
let tabela = document.querySelector(".table");
let ol = document.createElement("ol");

btnCalcular.addEventListener("click", function () {
  // armazena a diferença
  let resto = calculoDiferenca();
  console.log(resto);
  //   todo o resto e colocado em um array deixando ele no final do array
  arrayTotal.push(calculoDiferenca());
  console.log(arrayTotal);
  //   metdo que soma todos o elementos do resto e armazena em um novo array somando tudo
  let somaTotal = arrayTotal.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );

  //   mostra o total de todas as direnças
  textDiferenca.textContent = `TOTAL:${formatarValor(somaTotal)}`;

  //   dentro da tabela eu coloco um ol
  tabela.appendChild(ol);
  //   crio um li
  let li = document.createElement("li");
  //   coloco essa li dentro de um ol
  ol.appendChild(li);
  //   immprimo na tela o resto
  li.textContent = formatarValor(resto);
});

btnLimpar.addEventListener("click", limpar);

// conveter o valor colocando os R$
function formatarValor(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
