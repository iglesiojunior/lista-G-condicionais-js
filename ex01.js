import { question } from "readline-sync"

function eh_negativo(num){
    if(num < 0){
        return 'negativo'
    }else {
        return 'positivo'
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num = pegar_numero('Insira um número: ')

    const validar = eh_negativo(num)

    console.log(`
    Olá o seu número ${num} é ${validar}
    `)
}
main()