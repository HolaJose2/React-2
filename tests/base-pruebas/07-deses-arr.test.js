import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
    test("Esta prueba debe retornar un arreglo con un string y un numero", () => {
        
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe( "ABC" );
        expect(numbers).toBe( 123 );

        //Validar el tipo de dato que se espera
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        //expect.any(String) dice que espera cualquier tipo de string
        expect(letters).toEqual(expect.any(String))
    });
});
