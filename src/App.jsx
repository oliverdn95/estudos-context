import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Perfil } from "./pages/Perfil/Perfil";
import { ThemeContext } from "./contexts/ThemeContext"
import { useState } from "react";

export function App() {

  //true = tema escuro ativo
  //false = tema claro ativo
  const [temaEscuro, setTemaEscuro] = useState(false);
  //alternar entre true e false toda vez
  //que for chamada
  function alternar(){
    if(temaEscuro === true){
      setTemaEscuro(false);
    } else {
      setTemaEscuro(true);
    }
    //console.log(temaEscuro);
  }

  return (<>
    <ThemeContext.Provider value={{temaEscuro: temaEscuro, alternar: alternar}}>
      <BrowserRouter>
        <NavBar temaEscuro={temaEscuro} alternar={alternar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    
  </>);
}
/**
 * 
 * <Propriedades 
    cidade="Ubajara"
    estado="CE"
    preco= {9}
    ligado={false}
    info={[1, 2, 3]}
    objeto={{ nome: "Almir", idade: 19}}
    />
 * 
*/