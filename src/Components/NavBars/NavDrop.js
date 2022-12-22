import React from "react";
import { Link } from "react-router-dom";

export default function NavDrop({ Title, Content }) {
  return (
    <div>
      <div className="DropDown">
        <button className="DropBTN">{Title}</button>
        <div className="DropDownContent">
          {Content.map((item, index) => {
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
