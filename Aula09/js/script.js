// var n = [12,35,6,8,10,45]
// console.log(Math.round(media(n)));
// console.log(Math.round(media2(n)));
// console.log(Math.round(media3(n)));

// const btnMensagem = document.createElement("button");
// btnMensagem.innerHTML = "Mensagem";
// btnMensagem.onclick = () => alert("Oi"); //arrow function => como tem apenas um comando pode tirar a chave

// const btnMsg = document.createElement("button");
// btnMsg.innerHTML = "Nova Mensagem";
// btnMsg.addEventListener("click", () => alert("Olá"));

// info.forEach((cli,p)=>{ //para cada (forEach) cliente dentro de info mande para a funcção (cli,p) tratar. cli=cliente, p=posição do cliente
//     console.log(cli.nome);
//     console.log(cli.idade);
//     console.log(`A posição do cliente acima é ${p}`);
// });

// info.forEach(function(cli,p){
//     console.log(`A posição é ${p}`);
//     console.log(cli.nome);
// });

// info.forEach(exibir);

// // document.body.appendChild(btnMensagem);
// // document.body.appendChild(btnMsg);

// info.map((cliente,i)=>{
//     var divCli = document.createElement('div');
//     divCli.setAttribute("class","divCli");
//     divCli.innerHTML = `<h2>Nome: ${cliente.nome}</h2>`;
//     divCli.innerHTML += `<p class="idade">Idade: ${cliente.idade}</p>`;
//     cliente.produtos.map((prod,ix)=>{
//         divCli.innerHTML += `<ul>
//                                 <li>${prod.nome}</li>
//                                 <li>${prod.marca}</li>
//                                 <li>${prod.preco}</li>
//                             </ul>`;
//     })
    


//     document.body.appendChild(divCli);
// });