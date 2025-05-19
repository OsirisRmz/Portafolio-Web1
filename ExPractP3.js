function calculaPropina() {
    const total = document.getElementById('total').value;
    const propina = document.getElementById('propina').value;
    const resultado = document.getElementById('resultado');

    if (total && propina) {
        const propinaCalculada = (total * propina) / 100;
        const totalConPropina = parseFloat(total) + propinaCalculada;
        resultado.textContent = `Propina: $${propinaCalculada.toFixed(2)} - Total con propina: $${totalConPropina.toFixed(2)}`;
    } else {
        resultado.textContent = 'Por favor, ingresa ambos valores.';
    }
}
