import React from "react";

export default function LabelWInput({
  Name,
  Type,
  dataInput,
  Element,
  Row,
  Col,
}) {
  let returnElement;
  switch (Element) {
    case "input":
      returnElement = (
        <div className="FlexRowCenterEnd">
          <label>{Name}</label>
          <input
            type={Type}
            id={Name}
            placeholder={Name}
            defaultValue={dataInput}
          />
        </div>
      );
      break;
    case "textarea":
      returnElement = (
        <div className="FlexRowCenterEnd">
          <label>{Name}</label>
          <input
            type={Type}
            id={Name}
            placeholder={Name}
            defaultValue={dataInput}
            rows={Row}
            column={Col}
          />
        </div>
      );
      break;
    case "view":
      returnElement = (
        <div className="FlexRowCenterEnd">
          <label>{Name}</label>
          <input
            type={Type}
            id={Name}
            placeholder={Name}
            defaultValue={dataInput.Name}
            rows={Row}
            column={Col}
          />
        </div>
      );
      break;
    default:
      break;
  }

  return returnElement;
  //   return (
  //     <div className="FlexRowCenterEnd">
  //       <label>{Name}</label>
  //       <input
  //         type={Type}
  //         id={Name}
  //         placeholder={Name}
  //         defaultValue={dataInput}
  //       />
  //     </div>
  //   );
}
