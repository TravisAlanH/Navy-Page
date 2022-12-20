import React from "react";
import { useNavigate } from "react-router-dom";

export default function Data() {
  const navigate = useNavigate();

  function CopyData(e) {
    var copyText = document.getElementById(e);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  function SaveData(data, location) {
    var inputText = document.getElementById(data).value;
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
          <textarea rows="8" cols="40" id="ContinuingServicesCopyArea">
            {localStorage.getItem("ContinuingServices")}
          </textarea>
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
          <textarea rows="8" cols="40" id="NPNDataCopyArea">
            {localStorage.getItem("NPNData")}
          </textarea>
          <button onClick={() => CopyData("NPNDataCopyArea")}>Copy</button>
        </div>
        {/* Input Section */}
        <div className="FlexColStartStart">
          Input Data and Save
          <textarea rows="8" cols="40" id="RPNTextInputArea"></textarea>
          <button onClick={() => SaveData("RPNTextInputArea", "NPNData")}>
            Save
          </button>
        </div>
      </fieldset>
      {/* DATA SECTION END */}
    </div>
  );
}
