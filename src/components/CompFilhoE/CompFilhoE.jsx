import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoE.css";

//hook useContext = capturar o valor fornecido
//por algum Provider

export function CompFilhoE() {


  //capturando os dados do "Value" do Provider
  const batata = useContext(BatataContext);

  return (
  <div className="filho-e">
    <h6>FILHO E</h6>
    <p>Valor:
      {batata}
    </p>
  </div>
  );
}
