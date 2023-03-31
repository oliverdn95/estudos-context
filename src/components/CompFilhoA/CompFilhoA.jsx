import { CompFilhoC } from "../CompFilhoC/CompFilhoC";
import "./CompFilhoA.css";

export function CompFilhoA(props) {
  return (
  <div className="filho-a">
    <h4>FILHO A</h4>
    <CompFilhoC />
  </div>
  );
}
