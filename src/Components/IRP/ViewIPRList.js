import React, { useState, useEffect } from "react";
import CreateIRPData from "./CreateIRPData";
import ViewEditIPR from "./ViewEditIPR";
// import IPR from "./IPR";

export default function ViewIPRList() {
  const [data, setData] = useState([]);

  const [emptyMessage, setEmptyMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("ContinuingServices") === null) {
      setEmptyMessage("No Continuing Services, Button Below to Add a Vendor");
      return;
    }
    setData(
      JSON.parse(localStorage.getItem("ContinuingServices")).sort((a, b) =>
        a.Company > b.Company ? 1 : -1
      )
    );
  }, []);

  return (
    <div>
      <div className="ViewCurrentIPRGrid">
        {data.map((item, index) => {
          if (item.id !== "") {
            return <ViewEditIPR {...item} key={index} />;
          }
          return null;
        })}
      </div>
      <div>{emptyMessage}</div>
      <div className="CreateNewIPRDiv">
        <CreateIRPData />
      </div>
    </div>
  );
}
