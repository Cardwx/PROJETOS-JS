
const altura = document.getElementById('txtAltura')
const peso = document.getElementById('txtPeso')
var resposta = document.getElementById('resposta')

function calcular(){
   let imc = peso.value/(altura.value * altura.value)
    
    if(imc < 18.5){
        resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você é considerado Magro`  

    }else if  ( imc > 18.5 && imc <= 24.9){
        resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você é considerado normal`
    } else if (imc >25 && imc <= 29.9){
        resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você possui Sobrepeso`
    }
    else if (imc > 30 && imc <= 39.9){
        resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você possui obesidade `
    }
    else if (  imc  > 40){
        resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você possui obesidade grave`
    } else{

        alert('Insira um valor válido!! ')
    }
}