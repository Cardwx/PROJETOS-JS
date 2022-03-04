// serve para realizar o cadastro de multiplas informações atraves de um unico ato, passando os dados da função como parametro
// aula 34 factory functions

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
            ligar(){
                console.log("Fazendo ligação...")
            }
    }
}


// aula 35
// pascal case - UmDoisTresQuatro
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function (){
        console.log("Fazendo ligação... ")
    }
}

const celular = new Celular('Asus', 5.5, 5000)
console.log(celular)