import React from "react";
import NavDrop from "./NavDrop";

let Command = JSON.parse(localStorage.getItem("Command"));

export default function TopNavItem() {
  let drop = [
    {
      "Title": Command.Command,
      "Content": [
        {
          "Title": "Home",
          "Link": "/Home",
        },
        {
          "Title": "Todo",
          "Link": "/Todo",
        },
      ],
    },
    {
      "Title": "Continuing Services",
      "Content": [
        {
          "Title": "Vendor List",
          "Link": "/IPR_List",
        },
        {
          "Title": "Print Documents",
          "Link": "/View_IPRRPN_Docs",
        },
        {
          "Title": "Edit RPN Funding",
          "Link": "/RPN_edit",
        },
      ],
    },
    {
      "Title": "Settings",
      "Content": [
        {
          "Title": "Command",
          "Link": "/Settings",
        },
        {
          "Title": "Data",
          "Link": "/Data",
        },
      ],
    },
  ];
  let vendors = JSON.parse(localStorage.getItem("ContinuingServices")) || [];
  return (
    <div className="NavBar">
      {drop.map((item, index) => {
        return <NavDrop {...item} key={index} />;
      })}

      <div className="DropDown">
        <button className="DropBTN">Vendor Links</button>
        <div className="DropDownContent">
          {vendors.map((item, index) => {
            if (item.WEB === "") {
              return null;
            }
            return (
              <a
                className="NavListItemLink"
                href={"https://" + item.WEB}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                {item.Company}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
