import React from "react";

export default function CreateIRPData({
  id,
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
      console.log("er");
      localStorage.removeItem("ContinuingServices");
      window.location.reload();
    } else {
      localStorage.setItem("ContinuingServices", JSON.stringify(updateData));
    }
  }

  function handleUpdate(e) {
    e.preventDefault();

    let find = e.target.elements.id.value;
    console.log(find);

    let updateData = JSON.parse(localStorage.getItem("ContinuingServices"));

    updateData.map((item) => {
      if (item.id === find) {
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
      }
      return item;
    });

    localStorage.setItem("ContinuingServices", JSON.stringify(updateData));
  }

  return (
    <div className="IPRDataBox noPrint">
      <form onSubmit={handleUpdate} id="formData">
        <input type="hidden" name="id" defaultValue={id} />
        <div className="GridLayoutIPR">
          <div className="FlexColCenterCenter">
            <label>asdf</label>
            <input
              type="text"
              className="IPRData2"
              name="POC"
              defaultValue={POC}
            />
            <input
              type="text"
              className="IPRData2"
              name="Address"
              defaultValue={Address}
            />
            <input
              type="text"
              className="IPRData2"
              name="Address2"
              defaultValue={Address2}
            />
            <input
              type="text"
              className="IPRData2"
              name="State"
              defaultValue={State}
            />
            <input
              type="text"
              className="IPRData2"
              name="Zip"
              defaultValue={Zip}
            />
            <input
              type="text"
              className="IPRData2"
              name="Phone"
              defaultValue={Phone}
            />
          </div>
          <div className="FlexColCenterCenter">
            <input
              type="text"
              className="IPRData2"
              name="QTY"
              defaultValue={Qty}
            />

            <input
              type="text"
              className="IPRData2"
              name="UI"
              defaultValue={UI}
            />
            <input
              type="text"
              className="IPRData2"
              name="UP"
              defaultValue={UP}
            />

            <input
              type="text"
              className="IPRData2"
              name="Description"
              defaultValue={Description}
            />

            <input
              type="textarea"
              className="IPRData4"
              name="Just"
              placeholder={Just}
            />
          </div>
          <div className="FlexColCenterCenter">
            <input
              type="text"
              className="IPRData2"
              name="Priority"
              defaultValue={Priority}
            />
            <input
              type="text"
              className="IPRData2"
              name="Department"
              defaultValue={Department}
            />
            <input
              type="date"
              className="IPRData2"
              name="Date"
              defaultValue={Date}
            />
          </div>
          <div className="FlexColCenterCenter">
            <select className="IPRData2" name="OF" defaultValue={OF}>
              <option>N/A</option>
              <option>Yes, Attached</option>
            </select>
            <select className="IPRData2" name="IJS" defaultValue={IJS}>
              <option>N/A</option>
              <option>Yes, Attached</option>
            </select>
            <select className="IPRData2" name="WS" defaultValue={WS}>
              <option>N/A</option>
              <option>Yes, Attached</option>
            </select>
            <select className="IPRData2" name="F" defaultValue={F}>
              <option>N/A</option>
              <option>Yes, Attached</option>
            </select>
            <select className="IPRData2" name="PS" defaultValue={PS}>
              <option>N/A</option>
              <option>Yes, Attached</option>
            </select>
            <select className="IPRData2" name="HAZ" defaultValue={HAZ}>
              <option>N/A</option>
              <option>Yes, Attached</option>
            </select>
            <select className="IPRData2" name="AUL" defaultValue={AUL}>
              <option>HN/A</option>
              <option>Yes, Attached</option>
            </select>
            <input
              type="text"
              className="IPRData2"
              name="FFS"
              placeholder="FFS"
              defaultValue={FFS}
              // required
            />
          </div>
          <input type="submit" value="Update" name="submit" />
        </div>
      </form>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
