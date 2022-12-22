import React from "react";
import { Link } from "react-router-dom";
import NavDrop from "./NavDrop";

export default function TopNavItem() {
  const drop = [
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

    // <ul id="nav" className="noPrint">
    //   <li className="NavList">
    //     <a href=" " className="NavLinkHead">
    //       Continuing Services
    //     </a>
    //     <ul className="NavUnorderedList">
    //       <li className="NavListItem">
    //         <Link to="/IPR_List" className="NavListItemLink">
    //           Vendor List
    //         </Link>
    //       </li>
    //       <li className="NavListItem">
    //         <Link to="/View_IPRRPN_Docs" className="NavListItemLink">
    //           Print Documents
    //         </Link>
    //       </li>
    //     </ul>
    //   </li>
    // </ul>
  );
}
