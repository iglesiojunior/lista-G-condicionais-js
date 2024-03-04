import { question } from "readline-sync"

function calcular_descontos(preço_frutas, morangos, maçãs){
    if(morangos+maçãs >= 8 || preço_frutas >= 25){
        return preço_frutas*0.9
    }else{
        return 'Não tem direito a descontos'
    }
}

function calcular_preços(morangos, maçãs){
    const preço_menormorango = morangos*2.50
    const preço_menormaçãs = maçãs*1.80
    const preço_maiormorango = morangos*2.20
    const preço_maiormaçãs = maçãs*1.50
    
    if(morangos <= 5 && maçãs <= 5){
        return (preço_menormorango+preço_menormaçãs)
    }else if(morangos > 5 && maçãs > 5){
        return (preço_maiormorango+preço_maiormaçãs)
    }else if(morangos <= 5 && maçãs > 5){
        return (preço_menormorango+preço_maiormaçãs)
    }else if(morangos > 5 && maçãs <= 5){
        return (preço_maiormorango+preço_menormaçãs)
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const morangos = pegar_numero('Insira a quantidade de kg de morangos adquiridos: ')
    const maçãs = pegar_numero('Insira a quantidade de morangos adquiridos: ')

    const preço_frutas = calcular_preços(morangos, maçãs)
    const preço_final = calcular_descontos(preço_frutas)

    console.log(`
    ===================================================
    Olá, sua compra de frutas teve o seguinte preço:
    preço: ${preço_frutas.toFixed(2)}
    com desconto(10%): ${preço_final.toFixed(2)}
    ===================================================
    `)
}
main()