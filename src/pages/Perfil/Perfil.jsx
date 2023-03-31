import { useContext } from "react";
import "./Perfil.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Perfil() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
    <div id="perfil" className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>Perfil</h1>
    </div>
    );
}
