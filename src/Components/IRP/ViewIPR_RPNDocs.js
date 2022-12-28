// import { lastDayOfQuarter } from "date-fns";
import React, { useState, useEffect } from "react";
import IPR from "./IPR";
import RPN from "./RPN";

export default function ViewIPRRPNDocs() {
  const [data, setData] = useState([]);
  const [reBuild, setReBuild] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("ContinuingServices") === null) {
      return;
    }
    setData(JSON.parse(localStorage.getItem("ContinuingServices")).sort((a, b) => (a.Company > b.Company ? 1 : -1)));
  }, []);

  function HandleDate() {
    data.map((item) => {
      console.log(item);
      if (item.id === "") {
        return null;
      }
      return (item.Date = document.getElementById("HandleDateChange").value);
    });
    setReBuild(!reBuild);
  }

  function PrintRPN() {
    document.getElementById("RPN").classList.remove("noPrint");
    document.getElementById("IPR").classList.add("noPrint");
  }
  function PrintIPR() {
    document.getElementById("RPN").classList.add("noPrint");
    document.getElementById("IPR").classList.remove("noPrint");
  }
  function PrintAll() {
    document.getElementById("RPN").classList.remove("noPrint");
    document.getElementById("IPR").classList.remove("noPrint");
  }

  return (
    <div>
      <div className="TogglePrints noPrint">
        <div className="TogglePrintHeader">Select Documents to Print</div>
        <div className="FlexRowCenterCenter">
          <div className="RadioDiv">
            <label>ALL</label>
            <input type="radio" name="PrintRadio" className="PrintRadio" onChange={PrintAll} checked />
          </div>
          <div className="RadioDiv">
            <label>RPN</label>
            <input type="radio" name="PrintRadio" className="PrintRadio" onChange={PrintRPN} />
          </div>
          <div className="RadioDiv">
            <label>OPR</label>
            <input type="radio" name="PrintRadio" className="PrintRadio" onChange={PrintIPR} />
          </div>
        </div>
        <div className="FlexRowCenterCenter">
          <label>Set All Dates</label>
          <input type={"date"} id="HandleDateChange" onChange={HandleDate} />
        </div>
      </div>
      {data.map((item, index) => {
        if (item.id === "") {
          return null;
        }
        if (item.TYPE === "RPN") {
          return (
            <div key={index}>
              {console.log("RPN")}
              <IPR {...item} id="IPR" />
              <RPN {...item} id="RPN" />
            </div>
          );
        }
        return <IPR {...item} key={index} />;
      })}
    </div>
  );
}
