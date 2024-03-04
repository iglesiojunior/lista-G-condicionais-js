import { question } from "readline-sync"

function validar_digito(digito_semana){
    if(digito_semana === 1){
        return 'Domingo'
    }else if(digito_semana === 2){
        return 'Segunda'
    }else if(digito_semana === 3){
        return 'Terça'
    }else if(digito_semana === 4){
        return 'Quarta'
    }else if(digito_semana === 5){
        return 'Quinta'
    }else if(digito_semana === 6){
        return 'Sexta'
    }else if(digito_semana === 7){
        return 'Sábado'
    }else{
        return 'Dígito inválido'
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
 const digito_semana = pegar_numero('Insira um dígito de 1 a 7: ')

 const validação = validar_digito(digito_semana)
 console.log(`O dígito ${digito_semana} equivale a: ${validação}`)
}
main()