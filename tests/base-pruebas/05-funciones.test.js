import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
    test("getUser debe de retornar un objeto", () => {
        const testUser = {
            uid: "ABC123",
            username: "El_Papi1502",
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);

        // expect(testUser).toBe(user)
        /* Si vas a comparar Objetos, no se puede con toBe, porque aunque los objetos contengan la misma informacion hacen referencia a una estado en memoria diferente. Por eso, se debe usar toStrictEqual() */
    });

    test("getUsuarioActivo debe retornar un objeto", () => {
        
        const name = "Fernando";

        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const userActive = getUsuarioActivo(name)

        expect(testUser).toStrictEqual(userActive)
        

        
    });
});
