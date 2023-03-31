import { CompFilhoD } from "../CompFilhoD/CompFilhoD";
import { CompFilhoE } from "../CompFilhoE/CompFilhoE";
import "./CompFilhoC.css";

export function CompFilhoC() {
  return (
    <div className="filho-c">
      <h5>FILHO C</h5>
      <CompFilhoD />
      <CompFilhoE />
    </div>
  );
}
