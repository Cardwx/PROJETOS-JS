// java script


//criar um objeto endereço, rua, cep, cidade

let endereco = {
   rua : 'Julia de oliveira fonseca',
   cep: '13568660',
   cidade: 'Americana',   

}

 function exibirEndereço (endereco){
   for (let chave in endereco)
   console.log(chave, endereco[chave])
}

console.log(exibirEndereço(endereco))