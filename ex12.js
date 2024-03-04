import { question } from "readline-sync"

function eh_decimal(num){
    if (num*2 === Math.trunc(num*2)){
        return 'Inteiro'
    }else{
        return 'Decimal'
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num = pegar_numero('Insira um número: ')

    const validação = eh_decimal(num)

    console.log(`
    ============================
    Olá, seu número: ${num}
    é: ${validação}
    ============================
    `)
}
main()