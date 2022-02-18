
const functionParaEnviar = window.document.getElementById("responder");

functionParaEnviar.addEventListener("click", function (esperar) {

    esperar.preventDefault();

    var imprimePergunta = Number(window.document.getElementById("pergunta").value);
    var imprimeResposta = window.document.getElementById("resposta");
    var asteriscos = '';

    for (var linha =+ 1; linha <= imprimePergunta; linha++) {
        for(var coluna = 1; coluna <= imprimePergunta; coluna++) {
            if (coluna == linha) {
                asteriscos += '*'
            }

        }

        imprimeResposta.innerHTML += `<p style="color: white; font-size: 20px;"><sup style="color: #ffb200; font-size: 10px;">(${linha}) </sup> ${asteriscos}</p>`
    }
})

function limpar () {

    var imprimeResposta = window.document.getElementById("resposta");

    imprimeResposta.innerHTML = '';

    pergunta.value = '';

}

