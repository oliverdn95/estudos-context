import { Button } from "react-bootstrap";
import { useState } from "react";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompPai.css";

export function CompPai() {

  // Primeiramente definimos uma informação
  // que os componentes da hierarquia irão precisar
  const [batata, setBatata] = useState("batata");

  function repetir(){
    setBatata(batata + "a");
  }
  //props drilling = quando temos uma hierarquia
  //de componentes muito extensa para passar props
  //em cada componente

  return (
  <div className="pai">
    <h3>PAI</h3>
    <Button variant="dark" onClick={repetir}>Repetir</Button>
    <p>
      <b>Valor:
        {batata}
      </b>
    </p>
    {/* Fornece o "value" para a hierarquia */}
    <BatataContext.Provider value={batata}>
      <CompFilhoA />
      <CompFilhoB />
    </BatataContext.Provider>
  </div>
  );
}
