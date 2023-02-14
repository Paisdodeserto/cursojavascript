window.document.body.onload = function() {
    //vamos chamar a função soma com a passagem de números de um array
    var numeros = [10,30,5,8,20];
    soma(numeros);

    //var valores = prompt("Digite números separados por vírgula");
    /*
    O comando split aplicado a variável valores é capaz de quebrar os números digitados pelo usuário onde há vírgula
    e assim gerar um array com esses números.
    */
    // var n = valores.split(",");
    // console.log(n);

    // var np = []
    // for (var i = 0; i < n.length; i++) {
    // np.push(parseInt(n[i]));
    // }
    // console.log(np);
    // maior(np);
    // menor(np);

    const inputNome = document.createElement("Input");
    inputNome.setAttribute("placeholder", "Digite o seu nome: ");
    inputNome.onblur = function(){
        //escolher onde quero que saia o resultado.
        inputNome.value = mensagem(inputNome.value);
        console.log(inputNome.value);
        window.document.title = mensagem(inputNome.value);
    }
        window.document.body.appendChild(inputNome);

        // var nome = prompt("Digite o seu nome: ");
        // inputNome.value = msg(nome);

        // var ano = prompt("Digite um ano: ");
        // inputNome.value = anobisexto(ano);

    // console.log(Math.round(1 + Math.random() * 254));

    window.document.body.innerHTML = paletaCores(50,100);
}

