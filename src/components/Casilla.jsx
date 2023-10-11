import '../style/Home.css'
import { useState, useEffect } from 'react';
export function Casilla({caracterInicial, caracterFinal, estilo}){
    const [letra, setLetra] = useState(caracterInicial); // Inicialmente es 'x'

    useEffect(() => {
        // Cambia a diferentes caracteres cada 100 milisegundos
        const intervalo = setInterval(() => {
            setLetra(String.fromCharCode(Math.random() * (122 - 97) + 97));
        }, 100);

        // Después de 1.5 segundo, cambia a 'a' y limpia el intervalo
        setTimeout(() => {
            clearInterval(intervalo);
            setLetra(caracterFinal);
        }, 1000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalo);
    }, []); // Dependencias vacías para que se ejecute solo al montar el componente
    return(
        <div className={estilo}>
            {letra}
        </div>
    )
}