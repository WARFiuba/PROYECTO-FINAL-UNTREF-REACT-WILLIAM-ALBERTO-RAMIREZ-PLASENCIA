import usarCotizador from "../hooks/usarCotizador";
import OptStyle from "../styles/Opciones.module.css"
const Opciones = ({datos, label, categoria, nombre}) => {
    const{elementos, setElementos} = usarCotizador()
    return (
        <>
            <label className={OptStyle.label} htmlFor={categoria}>Seleccione {categoria == "propiedad" ? "el tipo de" : "su"} {label}</label>
            <select className={OptStyle.options} name={categoria} id={categoria} defaultValue={0} onChange={(e) => setElementos({...elementos, [categoria]: isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value), [nombre]: e.target.options[e.target.selectedIndex].text})}>
                <option disabled value={0}>...</option>
                {datos.map((elemento, indice) =>
                    <option key={indice} value={elemento.factor}>{elemento.tipo}</option>
                )}
            </select>
        </>
    );
};
export default Opciones;