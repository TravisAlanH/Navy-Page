import React, { useState, useEffect } from "react";
import IPR from "./IPR";
import RPN from "./RPN";

export default function ViewIPRRPNDocs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("ContinuingServices") === null) {
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
      {data.map((item, index) => {
        if (item.id === "") {
          return null;
        }
        if (item.TYPE === "RPN") {
          return (
            <div key={index}>
              {console.log("RPN")}
              <IPR {...item} />
              <RPN {...item} />
            </div>
          );
        }
        return <IPR {...item} key={index} />;
      })}
    </div>
  );
}
