import { question } from "readline-sync"

function eh_maisbarato(produto1, produto2, produto3){
    if(produto1 < produto2 && produto1 < produto3){
        return 'o produto 1 por ser o mais barato!'
    }else if(produto2 < produto1 && produto2 < produto3){
        return 'o produto 2 por ser o mais barato'
    }else if(produto3 < produto2 && produto3 < produto1){
       return 'o produto 3 por ser o mais barato'
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const produto1  = pegar_numero('Insira o valor do primeiro produto: ')
    const produto2  = pegar_numero('Insira o valor do segundo produto: ')
    const produto3  = pegar_numero('Insira o valor do terceiro produto: ')

    const mais_barato = eh_maisbarato(produto1, produto2, produto3)

    console.log(`
    Olá, de acordo com a pesquisa de preços, o produto mais indicado é ${mais_barato}
    `)

}
main()