const filme = { 
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

exibirPropriedade(filme);
function exibirPropriedade(obj){
    for (prop in obj)
        if(typeof obj[prop] == 'string')
            console.log(prop,obj[prop])
}