let numeroSecreto;
let maxTentativas;
let tentativas;

function iniciarJogo() {

    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    maxTentativas = 10;
    tentativas = 0;

    console.log("Número secreto:", numeroSecreto);

    document.getElementById("tentativasRestantes")
        .textContent = `Tentativas restantes: ${maxTentativas}`;
}

function chutar() {

    const dicas = document.getElementById("dicas");
    const tentativasRestantes = document.getElementById("tentativasRestantes");
    const resultado = document.getElementById("resultado");
    const input = document.getElementById("numeroChutado");

    const valor = Number(input.value);

    if (valor < 1 || valor > 100 || isNaN(valor)) {
        resultado.textContent = "Número inválido, 1 - 100!";
        return;
    }

    tentativas++;

    if (valor === numeroSecreto) {
        resultado.textContent = "🎉 Você acertou!";
        dicas.textContent = "";
        input.disabled = true;
        return;
    }

    if (valor > numeroSecreto) {
        dicas.textContent = "O número secreto é menor!";
    } else {
        dicas.textContent = "O número secreto é maior!";
    }

    const restantes = maxTentativas - tentativas;

    tentativasRestantes.textContent =
        `Tentativas restantes: ${restantes}`;

    if (restantes <= 0) {
        resultado.textContent =
            `Você perdeu! O número era ${numeroSecreto}`;
        input.disabled = true;
    }

}

window.onload = iniciarJogo;