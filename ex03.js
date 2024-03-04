import { question } from "readline-sync"

function eh_vogal_consoante(letra){
    if(letra === "a"||letra === "e"||letra === "i"||letra === "o"||letra === "u"){
        return 'vogal'
    }else{
        return 'Consoante'
    }
}

function main(){
    const letra = question('Insira uma letra: ')

    const validar = eh_vogal_consoante(letra)

    console.log(`
    Olá, a letra inserida é uma ${validar}
    `)
}
main()