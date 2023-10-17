// test("Esta prueba no debe de fallar", () => {
//     if (1 === 1) {
//         throw new Error("No puede dividir entre cero");
//     }
// });

// Los test tiene se dividen en 3 partes:

describe("Pruebas en <DemoComponent/>", () => {
    test("Esta prueba no debe de fallar", () => {
        
        // 1. Inicializacion
        const message1 = "Hola mundo";

        // 2. Estimulo
        const message2 = message1.trim();

        // 3. Observar el comportamiento... esperado
        expect(message1).toBe(message2);
        
    });
});
