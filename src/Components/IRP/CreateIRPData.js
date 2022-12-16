import React from "react";
import { v4 as uuid } from "uuid";

export default function CreateIRPData() {
  //   const [submitStatus, setsubmitStatus] = useState(New);

  const unique_id = uuid();

  let data = {
    id: "",
    POC: "",
    Address: "",
    Address2: "",
    State: "",
    Zip: "",
    Phone: "",
    Qty: "",
    UI: "",
    UP: "",
    Description: "",
    Priority: "",
    Department: "",
    Date: "",
    Just: "",
    OF: "",
    IJS: "",
    WS: "",
    F: "",
    PS: "",
    FFS: "",
    HAZ: "",
    AUL: "",
  };

  function handleSubmit(e) {
    // e.preventDefault();

    data.id = unique_id;
    data.POC = e.target.elements.POC.value;
    data.Address = e.target.elements.Address.value;
    data.Address2 = e.target.elements.Address2.value;
    data.State = e.target.elements.State.value;
    data.Zip = e.target.elements.Zip.value;
    data.Phone = e.target.elements.Phone.value;
    data.Qty = e.target.elements.QTY.value;
    data.UI = e.target.elements.UI.value;
    data.UP = e.target.elements.UP.value;
    data.Description = e.target.elements.Description.value;
    data.Priority = e.target.elements.Priority.value;
    data.Department = e.target.elements.Department.value;
    data.Date = e.target.elements.Date.value;
    data.Just = e.target.elements.Just.value;

    data.OF = e.target.elements.OF.value;
    data.IJS = e.target.elements.IJS.value;
    data.WS = e.target.elements.WS.value;
    data.F = e.target.elements.F.value;
    data.PS = e.target.elements.PS.value;
    data.FFS = e.target.elements.FFS.value;
    data.HAZ = e.target.elements.HAZ.value;
    data.AUL = e.target.elements.AUL.value;

    if (localStorage.getItem("ContinuingServices") === null) {
      let testData = [data];
      localStorage.setItem("ContinuingServices", JSON.stringify(testData));
    } else {
      let added = JSON.parse(localStorage.getItem("ContinuingServices"));
      added.push(data);
      localStorage.setItem("ContinuingServices", JSON.stringify(added));
    }
  }

  return (
    <div className="IPRDataBox noPrint">
      <form onSubmit={handleSubmit} id="formData">
        <input
          type="text"
          className="IPRData2"
          name="POC"
          placeholder="Point of Contact"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="Address"
          placeholder="Address"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="Address2"
          placeholder="Address2"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="State"
          placeholder="State"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="Zip"
          placeholder="Zip"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="Phone"
          placeholder="Phone"
        />
        <input
          type="text"
          className="IPRData2"
          name="QTY"
          placeholder="QTY"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="UI"
          placeholder="UI"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="UP"
          placeholder="UP"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="Description"
          placeholder="Description"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="Priority"
          placeholder="Priority"
          // required
        />
        <input
          type="text"
          className="IPRData2"
          name="Department"
          placeholder="Department"
          // required
        />
        <input
          type="date"
          className="IPRData2"
          name="Date"
          placeholder="11/22/2022"
          // required
        />
        <input
          type="text"
          className="IPRData4"
          name="Just"
          placeholder="Justification"
          // required
        />
        {/* <input
          type="radio"
          className="IPRData2"
          name="Radio"
          placeholder="true"
          required
        /> */}
        <select className="IPRData2" name="OF" placeholder="true">
          <option>N/A</option>
          <option>Yes, Attached</option>
        </select>
        <select className="IPRData2" name="IJS" placeholder="true">
          <option>N/A</option>
          <option>Yes, Attached</option>
        </select>
        <select className="IPRData2" name="WS" placeholder="true">
          <option>N/A</option>
          <option>Yes, Attached</option>
        </select>
        <select className="IPRData2" name="F" placeholder="true">
          <option>N/A</option>
          <option>Yes, Attached</option>
        </select>
        <select className="IPRData2" name="PS" placeholder="true">
          <option>N/A</option>
          <option>Yes, Attached</option>
        </select>
        <select className="IPRData2" name="HAZ" placeholder="true">
          <option>HN/A</option>
          <option>Yes, Attached</option>
        </select>
        <select className="IPRData2" name="AUL" placeholder="true">
          <option>N/A</option>
          <option>Yes, Attached</option>
        </select>
        <input
          type="text"
          className="IPRData2"
          name="FFS"
          placeholder="FFS"
          // required
        />
        <input type="submit" value="submit" name="submit" />
        {/* <input type={UpdateCheck} value="update" name="update" /> */}
      </form>
    </div>
  );
}

// OF: "",
// IJS: "",
// WS: "",
// F: "",
// PS: "",
// FFS: "",
