import { question } from "readline-sync"

function qual_sexo(sexo){
    if(sexo === 'f' || sexo === 'F'){
        return 'Feminino'
    }else if(sexo === 'm' || sexo === 'M'){
        return 'Masculino'
    }else{
        return 'sexo inválido'
    }
}

function main(){
    const sexo = question('Insira a primeira letra de um sexo: ')

    const validar = qual_sexo(sexo)

    console.log(`O sexo que você inseriu foi: ${validar}`)
}
main()