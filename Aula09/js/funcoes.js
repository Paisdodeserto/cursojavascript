// function media(array_numeros){ //recebe um array de números
//     let rs = 0; //inicia a variável com 0
//     for(let i = 0; i < array_numeros.length; i++){ //pega um valor dentro do array e soma com o anterior
//         rs += array_numeros[i]; //soma os valores do array
//     }
//     return rs / array_numeros.length; //após somar divido pela quantidade de números
// };

// const media2 = function(array_numeros){ 
//     let rs = 0;
//     for(let i = 0; i < array_numeros.length; i++){
//         rs += array_numeros[i];
//     }
//     return rs / array_numeros.length; 
// };

// const media3 = (array_numeros) =>{
//     let rs = 0;
//     for(let i = 0; i < array_numeros.length; i++){
//     rs += array_numeros[i];
// }
// return rs / array_numeros.length;
// };

// function exibir(cli,p){ //forEach sempre pede dois parametros para tratar
//     console.log(cli.nome);
//     console.log(cli.produtos);
// };

// function getUsers(){ //busca no bd os usuários e trás para nós
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
            
//             resolve([
//                 {user:"João",email:"joao@gmail.com"},
//                 {user:"Paulo",email:"paulo@gmail.com"}
//             ]);
//         },2000)
//     });
// }

// function mostrar(usuarios){ //mostra no console os usuários pesquisados no getUsers
//     console.clear();
//     console.log(usuarios)
// }

// const resultado = getUsers();
// resultado.then(mostrar);


function listarFilmes(){
    return new Promise((resolve, reject) =>{
        resolve(listaFilmes);
        reject("Erro ao tentar executar");
});
}

listarFilmes().then((x)=>{
    console.log(x);
}).catch((e)=>{
    console.error(e);
});
