import { question } from "readline-sync"

function calcular_liquido(salario_bruto){
    if(salario_bruto <= 900){
        return [0, salario_bruto*0.1, salario_bruto*0.11, '0%']
    }else if(salario_bruto <= 1500 && salario_bruto>900){
        return[(salario_bruto*0.05),salario_bruto*0.1, salario_bruto*0.11, '5%']
    }else if(salario_bruto <= 2500 && salario_bruto > 1500){
        return [(salario_bruto*0.1),salario_bruto*0.1, salario_bruto*0.11, '10%']
    }else{
       return [(salario_bruto*0.2),salario_bruto*0.1, salario_bruto*0.11, '20%']
    }
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const valor_hora = pegar_numero('Insira o valor da sua hora de trabalho: ')
    const horas_trabalhadas = pegar_numero('Insira suas horas trabalhadas: ')
    const salario_bruto = valor_hora*horas_trabalhadas

    const descontos = calcular_liquido(salario_bruto)

    console.log(`
    ===========================================
    seu salário bruto: R$${salario_bruto}
    (-)IR(${descontos[3]}): R$${descontos[0]}
    (-)INSS(10%): R$${descontos[1]}
    (-)FGTS(11%): R$${descontos[2]}
    total de descontos: R$${descontos[0]+descontos[1]}
    salário líquido: R$${salario_bruto -(descontos[0]+descontos[1])}
    ===========================================
    `)
}
main()