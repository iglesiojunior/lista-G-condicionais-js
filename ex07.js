import { question } from "readline-sync"

function calcular_aumento(salario){
    if(salario <= 280 ){
        return [salario+(salario*0.2), salario*0.2, '20%']
    }else if(salario>280 && salario<=700){
        return [salario+(salario*0.15),salario*0.15, '15%']
    }else if(salario>700 && salario<1500){
        return [salario+(salario*0.1), salario*0.1, '10%']
    }else{
        return [salario+(salario*0.05), salario*0.05, '5%']
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
 const salario =  pegar_numero('Insira seu salário: ')

 const aumento = calcular_aumento(salario)

 console.log(`
 ===================================
 Olá, seu salário de R$:${salario}
 terá o seguinte aumento: ${aumento[2]}
 com um valor de: R$${aumento[1]}
 e seu novo salário será de: R$${aumento[0]}
 ===================================
 `)
}
main()