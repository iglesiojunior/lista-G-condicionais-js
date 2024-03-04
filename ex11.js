import { question } from "readline-sync"

function separar_num(num){
    const centenas = Math.trunc(num/100)
    const dezenas1 = Math.trunc((num%100)/10)
    const unidades1 = (num%100)%10
    const dezenas2 = Math.trunc(num/10)
    const unidades2 = num%10
    if(num >= 1000){
        return 'Porfavor, insira um número válido'
    }else if(num>99 && num<1000){
        return `${num}= ${centenas} centenas, ${dezenas1} dezenas e ${unidades1} unidades`
    }else if(num>9 && num <= 99){
        return `${num}= ${dezenas2} dezenas e ${unidades2} unidades`
    }else{
        return`${num}= ${num} unidades`
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const num = pegar_numero("insira um número menor que 1000: ")

    const separação = separar_num(num)

    console.log(`${separação}`)
}
main()