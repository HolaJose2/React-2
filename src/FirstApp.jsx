import PropTypes from "prop-types"; 
/*Los PropTypes son una forma de validar los tipos de datos de las propiedades que se pasan a un componente.Las PropTypes se utilizan para especificar qué tipos de datos se esperan para cada prop, lo que ayuda a prevenir errores */

export const FirstApp = ({ title, subTitle, name }) => {
   return (
      <>
         <h1>{title}</h1>
         <p>{subTitle}</p>
         <p>{name}</p>
      </>
   );
};

//Componente.propTypes
FirstApp.propTypes = {
   //propTypes es una propiedad de los componentes
   title: PropTypes.string.isRequired,
   subTitle: PropTypes.string,
};


//Podemos definir los valores por defecto de esta manera, que es mas eficiente ya que primero valida los propTypes.

FirstApp.defaultProps = {
   name: "Jose garcia",
   subTitle: "No hay subtitulo",
   // title: "No hay titulo",
};
