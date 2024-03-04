import { question } from "readline-sync"

function validar_media(nota1, nota2, resultado_media){
    if(resultado_media >= 0 && resultado_media<= 4){
        return ['E', 'Reprovado']
    }else if(resultado_media > 4 && resultado_media<= 6){
        return ['D', 'Reprovado']
    }else if(resultado_media > 6 && resultado_media<= 7.5){
        return['C', 'Aprovado']
    }else if(resultado_media > 7.5 && resultado_media<= 9){
        return ['B', 'Aprovado']
    }else if(resultado_media > 9 && resultado_media<= 10){
        return ['A', 'Aprovado']
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
    conceito: ${validação[0]}
    situação: ${validação[1]}
    ============================
    `)
}
main()