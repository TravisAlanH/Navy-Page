import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewEditIPR({
  id,
  Company,
  POC,
  Address,
  Address2,
  State,
  Zip,
  Phone,
  Qty,
  UI,
  UP,
  Description,
  Priority,
  Department,
  Date,
  Just,
  OF,
  IJS,
  WS,
  F,
  PS,
  FFS,
  HAZ,
  AUL,
  TYPE,
  PriorAmount,
  WEB,
}) {
  //   const [submitStatus, setsubmitStatus] = useState(New);

  function deleteItem(deletedItem) {
    let updateData = JSON.parse(localStorage.getItem("ContinuingServices"));
    updateData.map((item, index) => {
      if (item.id === deletedItem) {
        updateData.splice(index, 1);
      }
      window.location.reload();

      return item;
    });
    console.log(updateData);
    if (updateData.length === 0) {
      localStorage.removeItem("ContinuingServices");
      window.location.reload();
    } else {
      localStorage.setItem("ContinuingServices", JSON.stringify(updateData));
    }
  }

  const navigate = useNavigate();

  function handleUpdate(e) {
    e.preventDefault();

    let find = e.target.elements.id.value;
    console.log(find);

    let updateData = JSON.parse(localStorage.getItem("ContinuingServices"));

    updateData.map((item) => {
      if (item.id === find) {
        item.Company = e.target.elements.Company.value;
        item.POC = e.target.elements.POC.value;
        item.Address = e.target.elements.Address.value;
        item.Address2 = e.target.elements.Address2.value;
        item.State = e.target.elements.State.value;
        item.Zip = e.target.elements.Zip.value;
        item.Phone = e.target.elements.Phone.value;
        item.Qty = e.target.elements.QTY.value;
        item.UI = e.target.elements.UI.value;
        item.UP = e.target.elements.UP.value;
        item.Description = e.target.elements.Description.value;
        item.Priority = e.target.elements.Priority.value;
        item.Department = e.target.elements.Department.value;
        item.Date = e.target.elements.Date.value;
        item.Just = e.target.elements.Just.value;
        item.OF = e.target.elements.OF.value;
        item.IJS = e.target.elements.IJS.value;
        item.WS = e.target.elements.WS.value;
        item.F = e.target.elements.F.value;
        item.PS = e.target.elements.PS.value;
        item.FFS = e.target.elements.FFS.value;
        item.HAZ = e.target.elements.HAZ.value;
        item.AUL = e.target.elements.AUL.value;
        item.TYPE = e.target.elements.TYPE.value;
        item.PriorAmount = e.target.elements.PriorAmount.value;
        item.WEB = e.target.elements.WEB.value.replace(/^https?:\/\//, "");
      }
      return item;
    });
    updateData.sort((a, b) => (a.Company < b.Company ? 1 : -1));
    localStorage.setItem("ContinuingServices", JSON.stringify(updateData));
    navigate(0);
  }

  useEffect(() => {
    if (TYPE === "RPN") {
      document.getElementById("show").style.display = "flex";
      document.getElementById("showInput").style.display = "flex";
    } else {
      document.getElementById("show").style.display = "none";
      document.getElementById("showInput").style.display = "none";
    }
  }, [TYPE]);

  return (
    <div className="IPRDataBox noPrint">
      <form onSubmit={handleUpdate} id="formData">
        <fieldset className="IPRFieldSet">
          <legend>
            <input type="text" name="Company" defaultValue={Company} />
          </legend>
          <input type="hidden" name="id" defaultValue={id} />
          <div className="GridLayoutIPR">
            <div className="Grid22">
              <label className="IPRLabelDataInput">WebPage</label>
              <input
                type="text"
                className="IPRData2"
                name="WEB"
                placeholder={WEB}
              />
              <label className="IPRLabelDataInput">POC</label>
              <input
                type="text"
                className="IPRData2 IPRDataInput"
                name="POC"
                defaultValue={POC}
              />
              <label className="IPRLabelDataInput">Address</label>
              <input
                type="text"
                className="IPRData2"
                name="Address"
                defaultValue={Address}
              />
              <label className="IPRLabelDataInput">Address2</label>
              <input
                type="text"
                className="IPRData2"
                name="Address2"
                defaultValue={Address2}
              />
              <label className="IPRLabelDataInput">State</label>
              <input
                type="text"
                className="IPRData2"
                name="State"
                defaultValue={State}
              />
              <label className="IPRLabelDataInput">Zip</label>
              <input
                type="text"
                className="IPRData2"
                name="Zip"
                defaultValue={Zip}
              />
              <label className="IPRLabelDataInput">Phone</label>
              <input
                type="text"
                className="IPRData2"
                name="Phone"
                defaultValue={Phone}
              />
            </div>
            <div className="Grid22">
              <label className="IPRLabelDataInput">QTY</label>
              <input
                type="text"
                className="IPRData2"
                name="QTY"
                defaultValue={Qty}
              />
              <label className="IPRLabelDataInput">Unit of Issue</label>
              <input
                type="text"
                className="IPRData2"
                name="UI"
                defaultValue={UI}
              />
              <label className="IPRLabelDataInput">Unit Price</label>
              <input
                type="text"
                className="IPRData2"
                name="UP"
                defaultValue={UP}
              />
              <label className="IPRLabelDataInput">Description</label>
              <input
                type="text"
                className="IPRData2"
                name="Description"
                defaultValue={Description}
              />
              <label className="IPRLabelDataInput">Justification</label>
              <input
                type="textarea"
                className="IPRData4"
                name="Just"
                defaultValue={Just}
              />

              <label className="IPRLabelDataInput">Priority</label>
              <input
                type="text"
                className="IPRData2"
                name="Priority"
                defaultValue={Priority}
              />

              <label className="IPRLabelDataInput">Department</label>
              <input
                type="text"
                className="IPRData2"
                name="Department"
                defaultValue={Department}
              />
            </div>
            <div className="Grid22">
              <label className="IPRLabelDataInput">Date</label>
              <input
                type="date"
                className="IPRData2"
                name="Date"
                defaultValue={Date}
              />

              <label className="IPRLabelDataInput">Office Supplies</label>
              <select className="IPRData2" name="OF" defaultValue={OF}>
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">Janitorial</label>
              <select className="IPRData2" name="IJS" defaultValue={IJS}>
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">Wireless Services</label>
              <select className="IPRData2" name="WS" defaultValue={WS}>
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">Furniture</label>
              <select className="IPRData2" name="F" defaultValue={F}>
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>

              <label className="IPRLabelDataInput">Printing Service</label>
              <select className="IPRData2" name="PS" defaultValue={PS}>
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">Hazmat</label>
              <select className="IPRData2" name="HAZ" defaultValue={HAZ}>
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
            </div>
            <div className="Grid22">
              <label className="IPRLabelDataInput">AUL</label>
              <select className="IPRData2" name="AUL" defaultValue={AUL}>
                <option>N/A</option>
                <option>Yes, Attached</option>
              </select>
              <label className="IPRLabelDataInput">FSS Contract</label>
              <input
                type="text"
                className="IPRData2"
                name="FFS"
                placeholder="FFS"
                defaultValue={FFS}
                // required
              />

              <label className="IPRLabelDataInput">RPN</label>
              <select className="IPRData2" name="TYPE" defaultValue={TYPE}>
                <option>RPN</option>
                <option>OPTAR</option>
              </select>
              <label className="IPRLabelDataInput" id="show">
                Prior Funding Amount
              </label>
              <input
                type="text"
                name="PriorAmount"
                defaultValue={PriorAmount}
                id="showInput"
              />

              <input type="submit" value="Update" name="submit" />
              <button
                onClick={() => {
                  deleteItem(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
