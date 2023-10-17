import { FirstApp } from "../src/FirstApp";
import { render } from "@testing-library/react";
//Render es una funcion para renderizar el componente en memoria.
/*
Para poder usar esta funcion, debemos hacer una configuracion:
    1 - Agregar en el archivo jest.config.cjs (testEnvironment: 'jest-environment-jsdom')
    2 - Agregar en el archivo babel.config.js ["@babel/preset-react", { runtime: "automatic" }]
    3 - Instalar npm add -D @babel/preset-react
*/

describe("Pruebas en FirstApp", () => {
    test("Debe de hacer match con el snapshot", () => {
        const title = "Hola, Soy Goku";
        render(<FirstApp title={title} />);
    });
});
