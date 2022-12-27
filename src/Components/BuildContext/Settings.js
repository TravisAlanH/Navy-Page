import React from "react";
import { useNavigate } from "react-router-dom";
import LabelWInput from "../BaseComponents/LabelWInput";

export default function Settings() {
  const navigate = useNavigate();

  const CommandArray = ["Command", "Address", "State", "Zip", "Phone", "POC"];

  function HandleSubmit(e) {
    e.preventDefault();

    let data = {};

    CommandArray.forEach((element) => {
      data[element] = document.getElementById(element).value;
    });
    let Region = document.getElementById("Region");
    data["RegionLink"] = Region.value;
    data["RegionName"] = "REDCOM " + Region.options[Region.selectedIndex].text;
    localStorage.setItem("Command", JSON.stringify(data));
    navigate(0);
  }

  let PlaceHolder = {};
  CommandArray.forEach((element) => {
    PlaceHolder[element] = "";
  });

  let loadData = JSON.parse(localStorage.getItem("Command")) || PlaceHolder;

  return (
    <div className="FlexColCenterCenter">
      <form onSubmit={HandleSubmit}>
        {CommandArray.map((item, index) => {
          let load = Object.values(loadData)[index];
          return <LabelWInput command={item} dataInput={load} key={index} />;
        })}
        <div className="FlexRowCenterEnd">
          <label>Region</label>
          <select name="Region" id="Region">
            <option value={"NRMA_GL"}>Great Lakes</option>
            <option value={"NRMA_NFK"}>Norfolk</option>
            <option value={"NRNW"}>Everett</option>
            <option value={"NRSE_JAX"}>Jacksonville</option>
            <option value={"NRSW_FW"}>Fort Worth</option>
            <option value={"NRSW"}>SanDiego</option>
          </select>
        </div>
        <input type={"submit"} />
      </form>
    </div>
  );
}
