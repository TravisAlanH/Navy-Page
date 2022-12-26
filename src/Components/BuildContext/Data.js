import React from "react";
import { useNavigate } from "react-router-dom";
import AJV from "ajv";
import RPNSchema from "./Schema/RPNAccountingSchema.json";
import ContinuingServicesSchema from "./Schema/ContinuingServicesSchema.json";
import CommandSchema from "./Schema/CommandSchema.json";
import TodoSchema from "./Schema/TodoSchema.json";

const ajv = new AJV();

export default function Data() {
  const navigate = useNavigate();
  const copyText = "Copy";
  const SaveText = "Save";

  const dataArray = ["ContinuingServices", "RPN", "Command", "TodoList"];
  const schemaData = [
    ContinuingServicesSchema,
    RPNSchema,
    CommandSchema,
    TodoSchema,
  ];

  function CopyData(e) {
    var copyText = document.getElementById(e);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  function SaveData(data, location, Schema) {
    var inputText = document.getElementById(data).value;
    console.log(inputText);

    const validate = ajv.compile(Schema);

    if (!validate(JSON.parse(inputText))) {
      alert(
        "Data is NOT Valid Please Check Input File and Try again : NO DATA SAVED"
      );
      navigate(0);
      return;
    }

    localStorage.setItem(location, inputText);
    console.log("save");
    navigate(0);
  }

  return (
    <div className="FlexColCenterCenter">
      {dataArray.map((item, index) => {
        return (
          <fieldset className="FlexRowCenterCenter DataField" key={index}>
            <legend>
              <h3>{item} Data</h3>
            </legend>
            {/* Copy Section */}
            <div className="FlexColStartStart">
              Current Data
              <textarea
                rows="8"
                cols="40"
                id={item + "Area"}
                defaultValue={localStorage.getItem(item)}
              ></textarea>
              <button onClick={() => CopyData(item + "Area")}>
                {copyText}
              </button>
            </div>
            {/* Input Section */}
            <div className="FlexColStartStart">
              Input Data and Save
              <textarea rows="8" cols="40" id={item}></textarea>
              <button onClick={() => SaveData(item, item, schemaData[index])}>
                {SaveText}
              </button>
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}
