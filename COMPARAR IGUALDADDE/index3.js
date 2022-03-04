// AULA 43 - Iguadade endereço

function endereco(rua, cidade, cep){
    this.rua = rua,
    this.cep = cep,
    this.cidade = cidade
}

const endereco1 = new endereco('julia de oliveira fonseca', '13468660', 'americana')
const endereco2 = new endereco('julia de oliveira fonseca', '13468660', 'americana')


function saoIguais(endereco1, endereco2){
    // comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1,endereco2))

function temEnderecoMemoriaIguais( endereco1, endereco2){
return endereco1 === endereco2
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2))