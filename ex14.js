import { question } from "readline-sync"

function calcular_descontos(qual_combustivel, litros) {
    let preço_combustível = 0;
    let combustível = "";
  
    if (qual_combustivel === "A" || qual_combustivel === "a") {
      preço_combustível = litros <= 20 ? 1.843 * litros : 1.805 * litros;
      combustível = "álcool";
    } else if (qual_combustivel === "G" || qual_combustivel === "g") {
      preço_combustível = litros <= 20 ? 2.40 * litros : 2.35 * litros;
      combustível = "gasolina";
    } else {}
  
    return [preço_combustível, combustível];
  }
  
  function pegar_numero(mensagem) {
    return Number(question(mensagem))
  }
  
  function main() {
    const qual_combustivel = question("Insira G para gasolina e A para álcool:")
    const litros = pegar_numero("Insira a quantidade de litros de combustível que você deseja: ")
  
    const preço_desconto = calcular_descontos(qual_combustivel, litros)
    console.log(`
      =============================================
      Olá, sua quantidade de ${preço_desconto[1]}
      será: R$${preço_desconto[0].toFixed(2)}
      =============================================
    `)
  }
  
  main();