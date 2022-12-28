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
      "Title": "GCPC",
      "Type": "",
      "Content": [
        {
          "Title": "US Bank",
          "Link": "https://access.usbank.com/",
          "Send": "_blank",
        },
        {
          "Title": "CFMS-C",
          "Link": "https://cfmsalb.cfms.navy.mil/CFMSResprod/index.do",
          "Send": "_blank",
        },
        {
          "Title": "One Touch",
          "Link": "https://www.onetouch.navy.mil",
          "Send": "_blank",
        },
        {
          "Title": "PIEE",
          "Link": "https://piee.eb.mil/xhtml/unauth/home/login.xhtml",
          "Send": "_blank",
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
      "Title": "Members",
      "Type": "",
      "Content": [
        {
          "Title": "NREL",
          "Link": "https://locker.private.navyreserve.navy.mil/nrel/#/",
          "Send": "_blank",
        },
        {
          "Title": "KYLOC",
          "Link": "https://www.kyloc.com/usnr/",
          "Send": "_blank",
        },
        {
          "Title": "RUMS",
          "Link": "https://locker.private.navyreserve.navy.mil/rums/",
          "Send": "_blank",
        },
        {
          "Title": "Members",
          "Link": "/Members",
        },
        {
          "Title": "Route And Distance Map",
          "Link": "https://www.google.com/maps/dir//" + Command.Address + " " + Command.State + " " + Command.Zip,
          "Send": "_blank",
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
