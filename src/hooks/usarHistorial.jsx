import { useContext } from "react";
import ContextoHistorial from "../contexts/ContextoHistorial";

const usarHistorial = () => useContext(ContextoHistorial);

export default usarHistorial;