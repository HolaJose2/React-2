# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---------¡IMPORTANTE!---------
1. Para validar los tipos de datos de las propiedades de un componente, podemos usar "prop-types". Instalarlo.
2. Podemos definir los valores por defecto de las propiedades de un componente con "defaultProps"


----Pruebas Unitarias con JEST -----
1. jestjs.io es una libreria para hacer testing en JavaScript
2. Instalar paquete con npm.
3. Agregar el Script en package.json
4. jest --watchAll Se usa para ver los cambios que se hagan inmediatamente. 
5. Instalar intellisense (Ayuda autocompletado) npm add -D @types/jest
6. Instalar Babel, està en la documentacion de Jest. Para poder usar sintaxis de ECMAScript
7. Crear el archivo babel.config.js y agrega la configuracion que està en la documentacion de Jest
8. En caso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously. Cambiar la extensión de los archivos "jest.config.js" y "babel.config.js" a .cjs

----PARA HACER PRUEBAS CON ASYNC-AWAIT----
Hay que hacer una configuracion de jest. Debido a que fetch no se puede usar en los test.
1. Crear los archivos jest.config.js y jest.setup.js
2. Instalar el paquete whatwg-fetch o el node-fetch 

Debido a que Jest no es tan bueno para hacer pruebas unitarias con los componentes propios de React.
Entonces usamos "Testing Library", ya que es muy bueno para hacer evaluaciones en el DOM virtual.



