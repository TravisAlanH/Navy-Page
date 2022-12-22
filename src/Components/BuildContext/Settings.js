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
        <input type={"submit"} />
      </form>
    </div>
  );
}
