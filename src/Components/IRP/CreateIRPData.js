import React from "react";
import { v4 as uuid } from "uuid";

export default function CreateIRPData() {
  //   const [submitStatus, setsubmitStatus] = useState(New);

  const unique_id = uuid();

  let data = {
    id: "",
    Company: "",
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
    TYPE: "",
    PriorAmount: "-",
  };

  function handleSubmit(e) {
    // e.preventDefault();

    data.id = unique_id;
    data.Company = e.target.elements.Company.value;
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
    data.TYPE = e.target.elements.TYPE.value;

    if (localStorage.getItem("ContinuingServices") === null) {
      let testData = [data];
      localStorage.setItem("ContinuingServices", JSON.stringify(testData));
    } else {
      let added = JSON.parse(localStorage.getItem("ContinuingServices"));
      added.push(data);
      added.sort((a, b) => (a.Company > b.Company ? 1 : -1));
      localStorage.setItem("ContinuingServices", JSON.stringify(added));
    }
  }

  return (
    <div className="IPRDataBox noPrint">
      <form onSubmit={handleSubmit} id="formData">
        <fieldset className="IPRFieldSet">
          <legend>
            <input type="text" name="Company" placeholder="Company" />
          </legend>
          <div className="GridLayoutIPR">
            <div className="Grid22">
              <label className="IPRLabelDataInput">POC</label>
              <input
                type="text"
                className="IPRData2 IPRDataInput"
                name="POC"
                placeholder={"POC"}
              />
              <label className="IPRLabelDataInput">Address</label>
              <input
                type="text"
                className="IPRData2"
                name="Address"
                placeholder={"Address"}
              />
              <label className="IPRLabelDataInput">Address2</label>
              <input
                type="text"
                className="IPRData2"
                name="Address2"
                placeholder={"Address2"}
              />
              <label className="IPRLabelDataInput">State</label>
              <input
                type="text"
                className="IPRData2"
                name="State"
                placeholder={"State"}
              />
              <label className="IPRLabelDataInput">Zip</label>
              <input
                type="text"
                className="IPRData2"
                name="Zip"
                placeholder={"Zip"}
              />
              <label className="IPRLabelDataInput">Phone</label>
              <input
                type="text"
                className="IPRData2"
                name="Phone"
                placeholder={"Phone"}
              />
            </div>
            <div className="Grid22">
              <label className="IPRLabelDataInput">QTY</label>
              <input
                type="text"
                className="IPRData2"
                name="QTY"
                placeholder={"Qty"}
              />
              <label className="IPRLabelDataInput">Unit of Issue</label>
              <input
                type="text"
                className="IPRData2"
                name="UI"
                placeholder={"UI"}
              />
              <label className="IPRLabelDataInput">Unit Price</label>
              <input
                type="text"
                className="IPRData2"
                name="UP"
                placeholder="UP"
              />
              <label className="IPRLabelDataInput">Description</label>
              <input
                type="text"
                className="IPRData2"
                name="Description"
                placeholder="Description"
              />
              <label className="IPRLabelDataInput">Justification</label>
              <input
                type="textarea"
                className="IPRData4"
                name="Just"
                placeholder="Justification"
              />

              <label className="IPRLabelDataInput">Priority</label>
              <input
                type="text"
                className="IPRData2"
                name="Priority"
                placeholder="Priority"
              />
            </div>
            <div className="Grid22">
              <label className="IPRLabelDataInput">Department</label>
              <input
                type="text"
                className="IPRData2"
                name="Department"
                placeholder="Department"
              />
              <label className="IPRLabelDataInput">Date</label>
              <input
                type="date"
                className="IPRData2"
                name="Date"
                placeholder={"Date"}
              />

              <label className="IPRLabelDataInput">Office Supplies</label>
              <select className="IPRData2" name="OF" placeholder="N/A">
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">Janitorial</label>
              <select className="IPRData2" name="IJS" placeholder="N/A">
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">Wireless Services</label>
              <select className="IPRData2" name="WS" placeholder="N/A">
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">Furniture</label>
              <select className="IPRData2" name="F" placeholder="N/A">
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
            </div>
            <div className="Grid22">
              <label className="IPRLabelDataInput">Printing Service</label>
              <select className="IPRData2" name="PS" placeholder="N/A">
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">Hazmat</label>
              <select className="IPRData2" name="HAZ" placeholder="N/A">
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">AUL</label>
              <select className="IPRData2" name="AUL" placeholder="N/A">
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">FSS Contract</label>
              <input
                type="text"
                className="IPRData2"
                name="FFS"
                placeholder="FFS"
                defaultValue="N/A"
                // required
              />
              <label className="IPRLabelDataInput">DOC TYPE</label>
              <select className="IPRData2" name="TYPE" defaultValue="OPTAR">
                <option>RPN</option>
                <option>OPTAR</option>
              </select>

              <input type="submit" value="Submit" name="submit" />
            </div>
          </div>
        </fieldset>
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
