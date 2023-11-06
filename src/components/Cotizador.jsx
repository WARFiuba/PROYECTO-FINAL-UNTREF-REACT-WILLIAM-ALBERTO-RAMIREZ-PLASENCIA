import Opciones from "./Opciones";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import usarCotizador from "../hooks/usarCotizador";
import Swal from "sweetalert2";
import usarHistorial from "../hooks/usarHistorial";
import { FcHome } from "react-icons/fc";
import { FaFloppyDisk } from "react-icons/fa6";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import stylecot from "../styles/Cotizador.module.css";

let valorPoliza = 0;
const Cotizador = () => {
  const form = useRef();
  const [precio, setPrecio] = useState(0);
  const { elementos, setElementos } = usarCotizador();
  const { historial, setHistorial } = usarHistorial();
  const calculo = () => {
    const { metros2, propiedad, ubicacion } = elementos;
    if (metros2 < 20 || propiedad == 0 || ubicacion == 0) {
      Swal.fire("Error", "debes completar los datos", "error");
    }
    const cuenta = 35.86 * metros2 * propiedad * ubicacion;
    setPrecio(cuenta);
  };
  const guardar = () => {
    setHistorial([
      ...historial,
      {
        fecha: new Date().toDateString(),
        nombrePropiedad: elementos.nombrePropiedad,
        nombreUbicacion: elementos.nombreUbicacion,
        metros2: elementos.metros2,
        cuenta: (
          35.86 *
          elementos.metros2 *
          elementos.propiedad *
          elementos.ubicacion
        ).toFixed(2),
      },
    ]);
    setPrecio(0);
  };
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const leer = async () =>
      setDatos(await (await fetch("/datos.json")).json());
    leer();
  }, []);
  useEffect(() => {
    form.current.reset();
  }, [historial]);
  return (
    <>
      <nav id={stylecot.historial}>
        <Link to={"/historial"}>
          <img src="./public/clipboard.webp" alt="historial" />
        </Link>
      </nav>

      <h1 className={stylecot.titulo}>
        Seguros del hogar&ensp;<FcHome />
      </h1>

      <form
        ref={form}
        id={stylecot.container}
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <h2>Completa los datos solicitados</h2>
        <Opciones
          nombre={"nombrePropiedad"}
          categoria={"propiedad"}
          datos={datos.filter(({ categoria }) => categoria == "propiedad")}
          label="propiedad"
        />
        <Opciones
          nombre={"nombreUbicacion"}
          categoria={"ubicacion"}
          datos={datos.filter(({ categoria }) => categoria == "ubicacion")}
          label="ubicacion"
        />
        <label className={stylecot.label} htmlFor="metros2">
          Ingrese los Metros cuadrados
        </label>
        <input
          className={stylecot.metters}
          name="metros2"
          id="metros2"
          type="number"
          min={20}
          defaultValue={20}
          required={true}
          onChange={(e) =>
            setElementos({
              ...elementos,
              metros2: isNaN(parseInt(e.target.value))
                ? 20
                : parseInt(e.target.value) < 20
                ? 20
                : parseInt(e.target.value),
            })
          }
        />
        <button className={stylecot.btn} onClick={calculo}>
          cotizar
        </button>
        {precio != 0 && (
          <section className={stylecot.result}>
            <p className={stylecot.text}>
              Precio estimado: ${precio.toFixed(2)}
            </p>
            <button type="button" className={stylecot.guardar} onClick={guardar}>
              <img className={stylecot.floppy} src="./public/floppydisk.webp" alt="guardar" />
            </button>
          </section>
        )}
      </form>
    </>
  );
};
export default Cotizador;
