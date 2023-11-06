import { Link } from "react-router-dom";
import usarHistorial from "../hooks/usarHistorial";
import Cotizacion from "./Cotizacion";
import { FcHome } from "react-icons/fc";
import styleHis from "../styles/Historial.module.css";
const Historial = () => {
  const { historial, setHistorial } = usarHistorial();
  return (
    <>
      <h1>Historial de cotizaciones</h1>
      <section id={styleHis.cotizaciones}>
        <ul className={styleHis.list}>
          {historial.map((elemento, indice) => (
            <Cotizacion key={indice} {...elemento} />
          ))}
        </ul>
        <nav id="home">
          <Link to={"/"}>
            <FcHome />
          </Link>
        </nav>
      </section>
    </>
  );
};

export default Historial;
