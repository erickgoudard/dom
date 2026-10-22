let numeroSecreto = Math.floor(Math.random()* 10) + 1;

function verificar() {
    let palpite = document.getElementById("inputnumero").value;
    let mensagem = document.getElementById("mensagem");

if (palpite == numeroSecreto) {
    mensagem. innerText = "🎉 você acertou!";
}  else  if (palpite < numeroSecreto) {
    mensagem.innerText = "Tente um número maior!";
} else {
    mensagem.innerText = "Tente um número menor!";
}

}