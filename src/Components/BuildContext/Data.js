import React from "react";
import { useNavigate } from "react-router-dom";
import AJV from "ajv";
import RPNSchema from "./Schema/RPNAccountingSchema.json";

const ajv = new AJV();

export default function Data() {
  const navigate = useNavigate();

  function CopyData(e) {
    var copyText = document.getElementById(e);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  function SaveData(data, location, Schema) {
    var inputText = document.getElementById(data).value;

    const validate = ajv.compile(Schema);

    if (!validate(JSON.parse(inputText))) {
      alert(
        "Data is NOT Valid Please Check Input File and Try again : NO DATA SAVED"
      );
      navigate(0);
      return;
    }

    console.log(inputText);
    if (inputText === "") {
      alert(
        "Data is NOT Valid Please Check Input File and Try again : NO DATA SAVEDdddddd"
      );
      localStorage.removeItem(location);
      navigate(0);
      return;
    }

    localStorage.setItem(location, inputText);
    navigate(0);
  }

  return (
    <div className="FlexColCenterCenter">
      {/* DATA SECTION START */}
      <fieldset className="FlexRowCenterCenter DataField">
        <legend>
          <h3>Continuing Services Data</h3>
        </legend>
        {/* Copy Section */}
        <div className="FlexColStartStart">
          Current Data
          <textarea
            rows="8"
            cols="40"
            id="ContinuingServicesCopyArea"
            defaultValue={localStorage.getItem("ContinuingServices")}
          ></textarea>
          <button onClick={() => CopyData("ContinuingServicesCopyArea")}>
            Copy
          </button>
        </div>
        {/* Input Section */}
        <div className="FlexColStartStart">
          Input Data and Save
          <textarea
            rows="8"
            cols="40"
            id="ContinuingServicesInputArea"
          ></textarea>
          <button
            onClick={() =>
              SaveData("ContinuingServicesInputArea", "ContinuingServices")
            }
          >
            Save
          </button>
        </div>
      </fieldset>
      {/* DATA SECTION END */}

      {/* RPN */}

      {/* DATA SECTION START */}
      <fieldset className="FlexRowCenterCenter DataField">
        <legend>
          <h3>RPN Accounting Data</h3>
        </legend>
        {/* Copy Section */}
        <div className="FlexColStartStart">
          Current Data
          <textarea
            rows="8"
            cols="40"
            id="NPNDataCopyArea"
            defaultValue={localStorage.getItem("NPNData")}
          ></textarea>
          <button onClick={() => CopyData("NPNDataCopyArea")}>Copy</button>
        </div>
        {/* Input Section */}
        <div className="FlexColStartStart">
          Input Data and Save
          <textarea rows="8" cols="40" id="RPNTextInputArea"></textarea>
          <button
            onClick={() => SaveData("RPNTextInputArea", "NPNData", RPNSchema)}
          >
            Save
          </button>
        </div>
      </fieldset>
      {/* DATA SECTION END */}
    </div>
  );
}
