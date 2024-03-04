import { question } from "readline-sync"

function qual_tunro(turno){
    if(turno === "m"||turno === "M"){
        return 'Bom dia!'
    }else if (turno === 'v' || turno === 'V'){
        return 'Boa tarde!'
    }else if(turno === 'n' || turno === 'N'){
        return 'Boa noite!'
    }else{
        return 'Valor inválido'
    }
}

function main(){
    const turno = question('Insira a primeira letra do seu turno: ')

    const validar = qual_tunro(turno)

    console.log(`
    Olá, ${validar}
    `)
}
main()