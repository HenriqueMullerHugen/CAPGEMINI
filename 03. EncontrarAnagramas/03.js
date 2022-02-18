
const functionParaEnviar = window.document.getElementById("enviar");

functionParaEnviar.addEventListener("click", function (esperar) {

    esperar.preventDefault();

    var imprimePergunta = window.document.getElementById("pergunta").value;
    var imprimeResposta = window.document.getElementById("resposta");

    imprimePergunta = [imprimePergunta.toLowerCase().match(/(.)(?=.*\1)/gi).join(" - ")];

    imprimeResposta.innerHTML += `<p><span style="font-family: 'Redressed', cursive; font-size: 25px;"> · Os</span> anagramas (caracteres repetidos duas vezes) encontrados foram: <b style="font-size: 18px;">${imprimePergunta}</b></p>`

})

function limpar () {

    var imprimeResposta = window.document.getElementById("resposta");

    imprimePergunta.value = "";
    imprimeResposta.innerHTML = "";

}