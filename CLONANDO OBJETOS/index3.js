// AULA 37 -  CLONAR objetos, podendo adicionar outros elementos tbm


/*const novoObjeto = Object.assign({

    bateria: 5000
}, celular)
console.log(novoObjeto);

// ou pode ser feito assim

const objeto2 = {... celular}
console.log(objeto2) */

const celular = {

    marcaCelular : 'Asus',
    anoCelular : '2004',

    ligar: function(){
        console.log('Ligando... ')
    }

}

const novoObjeto ={...celular}
console.log(novoObjeto)