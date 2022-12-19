import React from "react";
import { useNavigate } from "react-router-dom";

export default function RNPDataEdit() {
  let data;
  if (localStorage.getItem("NPNData") === null) {
    data = {
      ACRN: "",
      GA: "",
      BFYEFY: "",
      APPN: "",
      SBHD: "",
      OBJCLASS: "",
      BCN: "",
      BLANK: "",
      SA: "",
      AAA: "",
      TT: "",
      PAA: "",
      COSTCOST: "",
    };
  } else {
    data = JSON.parse(localStorage.getItem("NPNData"));
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    data.ACRN = e.target.elements.ACRN.value;
    data.GA = e.target.elements.GA.value;
    data.BFYEFY = e.target.elements.BFYEFY.value;
    data.APPN = e.target.elements.APPN.value;
    data.SBHD = e.target.elements.SBHD.value;
    data.OBJCLASS = e.target.elements.OBJCLASS.value;
    data.BCN = e.target.elements.BCN.value;
    data.BLANK = e.target.elements.BLANK.value;
    data.SA = e.target.elements.SA.value;
    data.AAA = e.target.elements.AAA.value;
    data.TT = e.target.elements.TT.value;
    data.PAA = e.target.elements.PAA.value;
    data.COSTCOST = e.target.elements.COSTCOST.value;

    let testData = data;
    localStorage.setItem("NPNData", JSON.stringify(testData));

    navigate(0);
  }

  return (
    <div>
      <form className="FlexColCenterCenter" onSubmit={handleSubmit}>
        <fieldset className="IPRFieldSet">
          <legend>Data for RPN Documents</legend>

          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>ACRN</span>
            </label>
            <input name="ACRN" type="text" placeholder={data.ACRN} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>GA</span>
            </label>
            <input name="GA" type="text" placeholder={data.GA} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>BFYEFY</span>
            </label>
            <input name="BFYEFY" type="text" placeholder={data.BFYEFY} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>APPN</span>
            </label>
            <input name="APPN" type="text" placeholder={data.APPN} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>SBHD</span>
            </label>
            <input name="SBHD" type="text" placeholder={data.SBHD} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>OBJCLASS</span>
            </label>
            <input name="OBJCLASS" type="text" placeholder={data.OBJCLASS} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>BCN</span>
            </label>
            <input name="BCN" type="text" placeholder={data.BCN} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>BLANK</span>
            </label>
            <input name="BLANK" type="text" placeholder={data.BLANK} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>SA</span>
            </label>
            <input name="SA" type="text" placeholder={data.SA} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>AAA</span>
            </label>
            <input name="AAA" type="text" placeholder={data.AAA} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>TT</span>
            </label>
            <input name="TT" type="text" placeholder={data.TT} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>PAA</span>
            </label>
            <input name="PAA" type="text" placeholder={data.PAA} />
          </div>
          <div className="Grid22RPNData">
            <label className="RNPDataLabel">
              <span>COSTCOST</span>
            </label>
            <input name="COSTCOST" type="text" placeholder={data.COSTCOST} />
          </div>

          <input type="submit" value="Submit" name="submit" />
        </fieldset>
      </form>
    </div>
  );
}
