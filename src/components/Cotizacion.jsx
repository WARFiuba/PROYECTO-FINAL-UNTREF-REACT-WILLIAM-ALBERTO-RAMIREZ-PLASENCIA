import stylecoti from "../styles/Cotizacion.module.css";

const Cotizacion = (propiedades) => {
  console.log(propiedades);
  return (
    <>
      <li className={stylecoti.elements}>
        {Object.keys(propiedades).map((propiedad, indice) => (
          <p key={indice}>
            {propiedad === "nombrePropiedad" && `Propiedad:`}
            {propiedad === "nombreUbicacion" && `Ubicación:`}
            {propiedad === "cuenta" && `Precio: $`}
            {propiedad !== "nombreUbicacion" &&
              propiedad !== "nombrePropiedad" &&
              propiedad !== "cuenta" &&
              `${propiedad}:`}
            {propiedades[propiedad]}
          </p>
        ))}
      </li>
    </>
  );
};
export default Cotizacion;
