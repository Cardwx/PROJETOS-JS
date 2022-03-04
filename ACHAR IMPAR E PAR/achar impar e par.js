
exibirTipo(10);
function exibirTipo(limite){
    for(let cont = 0 ; cont <= 10; cont++){
       if (cont % 2 ==0){
            console.log(`${cont} é PAR`)
       }
       else{
        console.log(`${cont} é ÍMPAR`)
   }
    }
}