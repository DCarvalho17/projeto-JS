function mostrarMensagem() {
    alert("Bem-vindo à PodexFit! Aqui começa sua transformação!");
}

function assinar(plano) {
    alert("Você escolheu o plano " + plano + "!");
}

function verTreino() {

    let treino = document.getElementById("treino").value;
    let resultado = document.getElementById("resultado");

    if (treino === "") {
        resultado.innerHTML = "Selecione um treino.";
        return;
    }

    resultado.innerHTML =
        "Seu treino selecionado é: <strong>" + treino + "</strong>";
}

function enviarFormulario() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "") {
        mensagem.innerHTML = "Preencha todos os campos.";
        return;
    }

    mensagem.innerHTML =
        "Obrigado, " + nome + "! Entraremos em contato pelo e-mail " + email + ".";
}