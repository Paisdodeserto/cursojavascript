/*
A função carregar dados é utilizada para carregar e exibir os dados relacionados a idade, cidade e produtos 
em controles select do html e, para isso estamos usando uma estrutura de repetição fazendo contagem de 
18 a 90 anos para a idade enquanto que para a cidade e produtos usamos o laço for para ler o array de cidades
e produtos.
*/
function carregarDados(){
    /*
    Foi criado constantes como referência aos controles de formulário html. A ideia é não ficar reescrevendo
    o comando document.getElementById várias vezes.
    */
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const cidade = document.getElementById("cidade");
    const produto = document.getElementById("prod");

    //foi adicionado um option ao select da idade
    idade.innerHTML = `<option>Selecione a sua idade</option>`;
    /*
    Para preencher a idade de 18 a 90 anos, fizemos estrutura de repetição com for, onde é criado um elemento 
    option com a idade de 18 a 90 anos dentro do select da idade
    */
    for (let i = 18; i <= 90; i++){
        idade.innerHTML += `<option value = ${i}>${i}</option>`;
    }

    //foi adicionado um option ao select da cidade
    cidade.innerHTML = `<option>Selecione uma filial</option>`;
    /*
    Esta estrutura de repetição foi criada para ler todo o conteúdo do array cidades e obter uma cidade por vez
    e assim criar um controle option para cada cidade e adicionar ao controle select.
    */
    for (let i = 0; i <= 3; i++){
        cidade.innerHTML += `<option value = ${cidades[i]}>${cidades[i]}</option>`;
    }

    //foi adicionado um option ao select da produto
    prod.innerHTML = `<option>Selecione o produto</option>`;
    /*
    Nesta estrutura de repetição estamos obtendo os produtos do array produtos. Exibindo os nomes dos produtos 
    por meio do controle option. Neste caso o nome do produto é uma propriedade do array produtos, assim foi 
    necessário adicionar um ponto depois do conchetes para acessar esta propriedade.
    Também foi adicionado ao controle option o atributo value, que determina qual o valor da opção selecionada
    pelo usuário. No value foi atribuído o valor do id e do produto.
    */
    for (let i = 0; i <= 2; i++){
        prod.innerHTML += `<option value =${produtos[i].idproduto}>${produtos[i].nomeproduto}</option>`;
    }
}


/*
Essa função é utilizada para encontrar um determinado produto no array de produtos quando o usuário seleciona
um produto na página html. Selecionando o produto, o id do produto é passado via parâmetro para esta função e
então é utilizada uma estrutura de repetição para localizar o produto no array e exibí-lo em uma div.
*/
//id é uma variável que recebe o valor enviado de this.value
function exibirProduto(id){
    // console.log(id); = teste para saber se está recebendo a informação de this.value
    const rsprod = document.getElementById("rsprod");

    /*
    O for realiza uma leitura de ponta a ponta a fim de encontrar o id passado para a função no array de produtos
    comparando o id passado com o id presente no array de produtos. Ao encontrar o id que o usuário passou, a 
    estrutura de repetição é forçada a parar com o comando break e os dados do produto são adicionados a div que
    está na página.
    */

    for (let i = 0; i <= 2; i++){
        if (produtos[i].idproduto == id){
            // console.log(produtos[i].marca);
            rsprod.innerHTML =produtos[i].nomeproduto;
            rsprod.innerHTML += produtos[i].marca;
            rsprod.innerHTML += produtos[i].preco;
            
            break; //força a parada do laço (for)
        }
    }
}