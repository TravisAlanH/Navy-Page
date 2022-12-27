import React from "react";
import { Link } from "react-router-dom";

export default function NavDrop({ Title, Content, Type }) {
  if (Type === "Vendors") {
    let vendors = JSON.parse(localStorage.getItem("ContinuingServices")) || [];
    return (
      <div className="DropDown">
        <button className="DropBTN">Vendor Links</button>
        <div className="DropDownContent">
          {vendors.map((item, index) => {
            if (item.WEB === "" || item.Title === "") {
              return null;
            }
            return (
              <a className="NavListItemLink" href={"https://" + item.WEB} target="_blank" rel="noreferrer" key={index}>
                {item.Company}
              </a>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="DropDown">
          <button className="DropBTN">{Title}</button>
          <div className="DropDownContent">
            {Content.map((item, index) => {
              if (item.Title === "") {
                return null;
              }
              if (item.Send === "_blank") {
                return (
                  <a className="NavListItemLink" href={item.Link} target="_blank" rel="noreferrer" key={index}>
                    {item.Title}
                  </a>
                );
              }
              return (
                <Link to={item.Link} className="NavListItemLink" key={index}>
                  {item.Title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
