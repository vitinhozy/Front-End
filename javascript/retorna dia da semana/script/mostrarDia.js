function mostrarDia() {
    const numero = parseInt(document.getElementById('numero').value);
    const dias = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
    
    if (numero >= 1 && numero <= 7) {
        document.getElementById('resultado').textContent = dias[numero - 1];
    } else {
        document.getElementById('resultado').textContent = "Número inválido. Escolha entre 1 e 7.";
    }
}