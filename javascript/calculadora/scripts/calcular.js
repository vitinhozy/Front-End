function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operador = document.getElementById('operador').value;
    let resultado;

    if (operador === "+") resultado = num1 + num2;
    else if (operador === "-") resultado = num1 - num2;
    else if (operador === "*") resultado = num1 * num2;
    else if (operador === "/") resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";

    document.getElementById('resultado').textContent = resultado;
}