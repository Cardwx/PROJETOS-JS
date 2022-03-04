function contar(){
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('cont')
//alert('oi')
if(passo.value.length == 0 || inicio.value.length == 0 
    || passo.value == 0 ||inicio.value == 0){
    alert('Insira valores válidos')
}else {
        res.innerHTML = 'Contando:'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
        for(let c = i; c <= f; c += p ){
            res.innerHTML += ` ${c} \u{1F449} `
        }
            res.innerHTML += ` FIM \u{1F3c1} `
    }else{
        for(let c = i; c >= f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
        


}