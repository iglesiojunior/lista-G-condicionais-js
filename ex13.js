import { question } from "readline-sync"

function encontrar_personagens(validar_respostas){
    if(validar_respostas === 5){
        return 'Você é o assasino!'
       }else if(validar_respostas <= 4 && validar_respostas>=3){
        return 'Você foi o cúmplice!!'
       }else if(validar_respostas <= 2 && validar_respostas > 0){
        return 'Você é considerado um suspeito do crime!!'
       }else if(validar_respostas === 0){
        return 'Você é inocente, parabéns!'
       }
}

function pontuação(a, b, c, d, e){
   let pontuação = 0
   if(a === 'sim'){pontuação += 1}
   if(b === 'sim'){pontuação +=1}
   if(c === 'sim'){pontuação +=1}
   if(d === 'sim'){pontuação +=1}
   if(e === 'sim'){pontuação +=1}

   return pontuação
}

function pegar_resposta(mensagem){
    return question(mensagem)
}

function main(){
    const pergunta_a = pegar_resposta("Telefonou para a vítima ?")
    const pergunta_b = pegar_resposta("Esteve no local do crime ?")
    const pergunta_c = pegar_resposta("Mora perto da vítima ?")
    const pergunta_d = pegar_resposta("Devia para a vítima ?")
    const pergunta_e = pegar_resposta("Já trabalhou com a vítima ?")

    const validar_respostas = pontuação(pergunta_a, pergunta_b, pergunta_c, pergunta_d, pergunta_e)
    const personagens = encontrar_personagens(validar_respostas)
    
    console.log(`
    Olá, você está sendo investigado sobre a morte do sr.Fortuna
    e você foi classificado(a) como...${personagens}
    `)
}
main()