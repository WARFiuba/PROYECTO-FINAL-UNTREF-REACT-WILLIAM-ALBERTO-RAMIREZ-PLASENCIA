import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cotizador from "./components/Cotizador";
import ContextoHistorial from "./contexts/ContextoHistorial";
import Historial from "./components/Historial";
import ContextoCotizador from "./contexts/ContextoCotizador";
import { useState } from "react";
import usarLocalStorage from "./hooks/usarLocalStorage";

function App() {
  const [elementos, setElementos] = useState({
    metros2: 20,
    propiedad: 0,
    ubicacion: 0,
    nombrePropiedad: "",
    nombreUbicacion: "",
  });
  const [historial, setHistorial] = usarLocalStorage("cotizaciones", []);
  return (
    <>
      <ContextoHistorial.Provider value={{ historial, setHistorial }}>
        <ContextoCotizador.Provider value={{ elementos, setElementos }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<Cotizador />} />
              <Route path="/historial" element={<Historial />} />
            </Routes>
          </BrowserRouter>
        </ContextoCotizador.Provider>
      </ContextoHistorial.Provider>
    </>
  );
}
export default App;
