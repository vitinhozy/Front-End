function verificarAprovacao() {
    const nota = parseFloat(document.getElementById('nota').value);
    const resultado = nota >= 7 ? "Aprovado" : "Reprovado";
    document.getElementById('resultado').textContent = resultado;
}