import {
    getHeroeById,
    getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroesById debe retornar un heroe por ID", () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
    });

    test("getHeroesById debe retornar undefined si no existe el ID", () => {
        const id = 100;
        const heroe = getHeroeById(id);

        // toBeFalsy() evalua que sea igual a null, undefined o false
        expect(heroe).toBeFalsy();
    });

    test("getHeroesByOwner debe retornar los heroes de DC", () => {
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });

    test("getHeroesByOwner debe retornar los heroes de Marvel", () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    });
});
