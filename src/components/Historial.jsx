import { Link } from "react-router-dom";
import usarHistorial from "../hooks/usarHistorial";
import Cotizacion from "./Cotizacion";
import { FcHome } from "react-icons/fc";
import styleHis from "../styles/Historial.module.css";

const Historial = () => {
  const { historial, setHistorial } = usarHistorial();
  return (
    <>
      <h1 className={styleHis.titulo}>Historial de cotizaciones&ensp;<img src="./public/images/clipboard.webp" alt="" /></h1>
      <section id={styleHis.cotizaciones}>
        <ul className={styleHis.list}>
          {historial.map((elemento, indice) => (
            <Cotizacion key={indice} {...elemento} />
          ))}
        </ul>
      </section>
      <nav className={styleHis.home}>
          <Link to={"/"}>
            <FcHome />
          </Link>
        </nav>
    </>
  );
};

export default Historial;
