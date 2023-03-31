import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoD.css";

export function CompFilhoD() {

  const batata = useContext(BatataContext);

  return (
    <div className="filho-d">
      <h6>FILHO D</h6>
      <p className="text-danger">{batata}</p>
    </div>
  );
}
