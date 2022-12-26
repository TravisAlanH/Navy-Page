import React from "react";
import NavDrop from "./NavDrop";

let Command = JSON.parse(localStorage.getItem("Command")) || {
  "Command": "Command",
};

export default function TopNavItem() {
  let drop = [
    {
      "Title": Command.Command || "Command",
      "Type": "",
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
      "Type": "",
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
      "Title": "Vendor Linksss",
      "Type": "Vendors",
      "Content": [],
    },
    {
      "Title": "Settings",
      "Type": "",
      "Content": [
        {
          "Title": "Edit Command",
          "Link": "/Settings",
        },
        {
          "Title": "Page Data",
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
    </div>
  );
}
