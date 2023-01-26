function corFundo() {
  var cor = document.getElementById("txtCor").value;
  cor = cor.toLowerCase(); //COLOCA TODAS AS LETRAS EM MINÚSCULA
  var vcor = ""; 
  

  if (cor == "red") {
    vcor = "#FF0000";
  } 
  else if (cor == "black") {
    vcor = "#000000";
  } 
  else if (cor == "green") {
    vcor = "#00FF00";
  } 
  else {
     vcor = "#FFFFFF";
    alert("A cor não existe na paleta!!");
  }
  document.body.style.backgroundColor = vcor; //recebendo a cor de fundo digitada pelo usuário, guarda na variável vcor e aplica na página
}

// DRY - Don't repeat yourself (Não seja repetitivo)
// REFATORAR - escrever o código para melhorar a performance

function textoClaro(){
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("label")[0].style.color = "white";
}

function textoEscuro(){
    document.getElementsByTagName("h1")[0].style.color = "darkred";
    document.getElementsByTagName("label")[0].style.color = "darkred";
}

