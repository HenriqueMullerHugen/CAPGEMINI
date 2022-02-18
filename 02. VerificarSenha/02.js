 

 const funcaoEnviar = window.document.getElementById('enviar');

funcaoEnviar.addEventListener("click", function (esperar) {

    esperar.preventDefault();

    var input = window.document.getElementById('forca');

    if(input.type == "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }

})

function executar () {
    
    var password = window.document.getElementById('forca').value;
    var imprimeResposta = window.document.getElementById('resposta');

    if (password.length <= 5){
        imprimeResposta.innerHTML = `<p>sua senha deve conter, no mínimo, <b>seis caracteres de qualquer tipo</b>.</p>`
    }

    if (password.length == 6){
        imprimeResposta.innerHTML = `<p>senha de proteção <b>FRACA</b>. Para aumentar a segurança, adicione <b>um caracter do tipo letra em maiúsculo</b>.</p>`
    }
    
    if((password.length == 7) && (password.match(/[A-Z]+/))){
        imprimeResposta.innerHTML = `<p>senha de proteção <b>MÉDIA</b>. Para aumentar a segurança, siga os requisitos mínimos:</p><p><b>seis caracteres de qualquer tipo, mais: uma em maiúscula, um número e um caracter especial</b>.</p>`
    }

    if((password.length == 8)){
        imprimeResposta.innerHTML = `<p>senha de proteção <b>MÉDIA</b>. Para aumentar a segurança, siga os requisitos mínimos:</p><p><b>seis caracteres de qualquer tipo, mais: uma em maiúscula, um número e um caracter especial</b>.</p>`
    }

    if((password.length == 9) && (password.match(/[A-Z]+/)) && (password.match(/[!@#$%^&*()-+]+/)) && (password.match(/[123456789]+/))){
        imprimeResposta.innerHTML = `<p>senha de proteção <b>FORTE</b>. Para aumentar a segurança, siga os requisitos mínimos:</p><p><b>seis caracteres de qualquer tipo, mais: duas em maiúscula, três números e dois caracteres especiais</b>.</p>`
    }

    if((password.length == 10) || (password.length == 11) || (password.length == 12)){
        imprimeResposta.innerHTML = `<p>senha de proteção <b>FORTE</b>. Para aumentar a segurança, siga os requisitos mínimos:</p><p><b>seis caracteres de qualquer tipo, mais: duas em maiúscula, três números e dois caracteres especiais</b>.</p>`
    }
    
    if((password.length == 13) && (password.match(/[A-Z]+/)) && (password.match(/[A-Z]+/)) && (password.match(/[!@#$%^&*()-+]+/)) && (password.match(/[!@#$%^&*()-+]+/)) && (password.match(/[123456789]+/)) && (password.match(/[123456789]+/)) && (password.match(/[123456789]+/))){
        imprimeResposta.innerHTML =  `<p>senha de proteção <b>MÁXIMA</b>. Sua conta estará muito mais segura agora, só lhe resta cadastrar seus dados!</b></p>`;
    }

}

function mascara (telefone) {

    if(telefone.value.length == 0){
        telefone.value = "(" +telefone.value;
    }

    if(telefone.value.length == 3){
        telefone.value = telefone.value + ")";
    }

    if(telefone.value.length == 4){
        telefone.value = telefone.value + " ";
    }

    if(telefone.value.length == 10){
        telefone.value = telefone.value + "-";
    }

}