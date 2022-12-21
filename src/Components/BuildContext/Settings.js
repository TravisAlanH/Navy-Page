import React from "react";
import { useNavigate } from "react-router-dom";

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
  console.log(loadData);

  return (
    <div className="FlexColCenterCenter">
      <form onSubmit={HandleSubmit}>
        {CommandArray.map((item, index) => {
          return (
            <div className="FlexRowCenterEnd" key={index}>
              <label>{item}</label>
              <input
                type="text"
                id={item}
                placeholder={item}
                defaultValue={Object.values(loadData)[index]}
              />
            </div>
          );
        })}
        <input type={"submit"} />
      </form>
    </div>
  );
}
