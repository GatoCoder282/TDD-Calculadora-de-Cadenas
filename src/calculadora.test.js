import calculadora_de_cadenas from './calculadora';

test('Calculadora de cadenas: "" debe ser igual a 0', () => {
    expect(calculadora_de_cadenas("")).toBe(0);
});

test('Calculadora de cadenas: "2" debe ser igual a 2', () => {
    expect(calculadora_de_cadenas("2")).toBe(2);
});

test('Calculadora de cadenas: "123" debe ser igual a 6', () => {
    expect(calculadora_de_cadenas("123", "")).toBe(6);
});

test('Calculadora de cadenas: "1,2,3" debe ser igual a 6', () => {
    expect(calculadora_de_cadenas("1,2,3", ",")).toBe(6);
});