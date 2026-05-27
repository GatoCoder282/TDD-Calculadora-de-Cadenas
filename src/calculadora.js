function calculadora_de_cadenas(cadena, separador) {
    if (cadena === '') {
        return 0;
    }

    if (separador === '') {
        let resultado = 0;

        for (let i = 0; i < cadena.length; i++) {
            resultado += Number(cadena[i]);
        }

        return resultado;
    }

    const separadores = [',', '-'];

    if (separador) {
        separadores.push(separador);
    }

    const patronSeparadores = new RegExp(separadores.map((valor) => valor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'));

    return cadena
        .split(patronSeparadores)
        .reduce((resultado, numero) => resultado + Number(numero), 0);
}

export default calculadora_de_cadenas;