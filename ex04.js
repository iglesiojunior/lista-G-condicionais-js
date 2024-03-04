import { question } from "readline-sync"

function validar_media(nota1, nota2, resultado_media){

    if(resultado_media === 10){
        return 'Aprovado com distinção'
    }else if(resultado_media >= 7){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const nota1 = pegar_numero('Insira sua primeira nota: ')
    const nota2 = pegar_numero('Insira sua segunda nota: ')

    const resultado_media = (nota1+nota2)/2
    const validação = validar_media(nota1, nota2, resultado_media)

    console.log(`
    ============================
    Olá as suas notas:
    nota 1: ${nota1}
    nota2: ${nota2}
    média: ${resultado_media}
    situação: ${validação}
    ============================
    `)
}
main()