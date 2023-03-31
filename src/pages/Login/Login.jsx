import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Login.css";

export function Login() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
    <div id="login" className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>Login</h1>
    </div>
    );
}
