function soma(arg1: number, arg2:number): number
{
    return arg1 + arg2;
}

document.addEventListener('DOMContentLoaded', () => {
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
        const resultado = soma(10, 3); // Exemplo de argumentos
        resultadoDiv.textContent = `Soma: ${resultado}`;
    }
});