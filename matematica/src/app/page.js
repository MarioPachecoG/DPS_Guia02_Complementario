"use client";
import { useState } from "react"; 
import styles from "./page.module.css";

export default function Home() {   
  const [numero1, setNumero1] = useState('');   
  const [numero2, setNumero2] = useState('');   
  const [resultado, setResultado] = useState(null);    

  const operar = (operacion) => {   
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    
    if (isNaN(n1) || (isNaN(n2) && operacion !== "raiz")) {
      setResultado("⚠️ Ingrese números válidos");
      return;
    }

    let res;
    switch (operacion) {
      case "sumar":
        res = n1 + n2;
        break;
      case "restar":
        res = n1 - n2;
        break;
      case "multiplicar":
        res = n1 * n2;
        break;
      case "dividir":
        res = n2 !== 0 ? n1 / n2 : "⚠️ Error: División por cero";
        break;
      case "potencia":
        res = Math.pow(n1, n2);
        break;
      case "raiz":
        res = n1 >= 0 ? Math.sqrt(n1) : "⚠️ Error: No se puede calcular raíz de un número negativo";
        break;
      default:
        res = null;
    }

    setResultado(`Resultado: ${res}`);
  };

  const reset = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };

  return (    
    <main className={styles.main}>   
      <div className={styles.calculadora}>   
        <h2 className={styles.title}>Calculadora React</h2>
        <div className={styles.numeros}>   
          <label className={styles.text}>Número 1:</label>           
          <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />   
        </div>   
        <div className={styles.numeros}>   
          <label className={styles.text}>Número 2:</label>           
          <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />   
        </div>   
        <div className={styles.botones}>   
          <button className={styles.button} onClick={() => operar("sumar")}>Sumar</button>   
          <button className={styles.button} onClick={() => operar("restar")}>Restar</button>   
          <button className={styles.button} onClick={() => operar("multiplicar")}>Multiplicar</button>   
          <button className={styles.button} onClick={() => operar("dividir")}>Dividir</button>   
          <button className={styles.button} onClick={() => operar("potencia")}>Potencia</button>   
          <button className={styles.button} onClick={() => operar("raiz")}>Raíz</button>   
        </div>   
        <button className={styles.reset} onClick={reset}>Reiniciar</button>   
        {resultado && <div className={styles.resultado}>{resultado}</div>}   
      </div>   
    </main>   
  );   
}
