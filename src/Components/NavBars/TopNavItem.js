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
          "Send": "",
        },
        {
          "Title": Command.RegionName || "REGION",
          "Link": "https://www.private.navyreserve.navy.mil/RCC/" + Command.RegionLink + "/Pages/NRH_Default.aspx",
          "Send": "_blank",
        },
        {
          "Title": "Todo",
          "Link": "/Todo",
          "Send": "",
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
      "Title": "Manage Members",
      "Type": "",
      "Content": [
        {
          "Title": "Members",
          "Link": "/Members",
        },
      ],
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
  return (
    <div className="NavBar">
      {drop.map((item, index) => {
        return <NavDrop {...item} key={index} />;
      })}
    </div>
  );
}
