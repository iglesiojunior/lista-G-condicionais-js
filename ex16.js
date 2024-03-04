import { question } from "readline-sync";

function calcular_preços(tipo_carne, quantidade) {
    let preço_carne = 0;
  
    if (tipo_carne === "file" || tipo_carne === "File") {
      preço_carne = quantidade <= 5 ? 4.90 * quantidade : 5.80 * quantidade;
    } else if (tipo_carne === "alcatra" || tipo_carne === "Alcatra") {
      preço_carne = quantidade <= 5 ? 5.90 * quantidade : 6.80 * quantidade;
    } else if (tipo_carne === "picanha" || tipo_carne === "Picanha") {
      preço_carne = quantidade <= 5 ? 6.90 * quantidade : 7.80 * quantidade;
    }
  
    return preço_carne;
  }
  
  function pegar_numero(mensagem) {
    return Number(question(mensagem));
  }
  
  function main() {
    const tipo_carne = question("Insira o tipo de carne entre: filé, alcatra, picanha:");
    const quantidade = pegar_numero("Insira quantos kg você deseja: ");
  
    const preços = calcular_preços(tipo_carne, quantidade);
    const desconto_cartão = preços * 0.95;
  
    console.log(`
      ===========================================
                   Cupom fiscal
      informações da compra:
      tipo de carne: ${tipo_carne}
      quantidade: ${quantidade}kg
      preço da compra: R$${preços.toFixed(2)}
      desconto cartão Tabajara: R$${desconto_cartão.toFixed(2)}
      ===========================================
    `);
  }
  
  main();