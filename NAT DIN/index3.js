// AULA 36 - Natureza dinâmica
// podendo-se alterar elementos dentro de um vetor/array

const mouse = {
    cor: 'red',
    marcar: 'dazz'
}

mouse.velocidade = 5000
mouse.trocarDPI = function () {
        console.log('Mudando DPI')
}

    delete mouse.velocidade
    delete mouse.trocarDPI
    console.log(mouse)