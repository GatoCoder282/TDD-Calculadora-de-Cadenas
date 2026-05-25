import calculadora_de_cadenas from './calculadora';

test('Calculadora de cadenas: "" debe ser igual a 0', () => {
    expect(calculadora_de_cadenas("")).toBe(0);
});

test('Calculadora de cadenas: "123" debe ser igual a 6', () => {
    expect(calculadora_de_cadenas("123")).toBe(6);
});