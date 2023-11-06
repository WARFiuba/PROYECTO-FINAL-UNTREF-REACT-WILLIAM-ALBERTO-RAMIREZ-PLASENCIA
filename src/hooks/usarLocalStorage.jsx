import { useState, useEffect } from "react";

const usarLocalStorage = (clave, valorInicial) => {
    const obtener = () => {
        if(localStorage.getItem(clave)){
            return JSON.parse(localStorage.getItem(clave))
        }
        localStorage.getItem(clave, JSON.stringify(valorInicial));
        return valorInicial
    }
    const [valor, setValor] = useState(() => obtener());

    useEffect(() => localStorage.setItem(clave, JSON.stringify(valor)), [valor])
    return [valor, setValor];
};

export default usarLocalStorage;