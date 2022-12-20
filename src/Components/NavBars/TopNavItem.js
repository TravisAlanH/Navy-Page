import React from "react";
import { Link } from "react-router-dom";

export default function TopNavItem() {
  let vendors = JSON.parse(localStorage.getItem("ContinuingServices")) || [];
  return (
    <div className="NavBar">
      {/* DROP */}
      <div className="DropDown">
        <button className="DropBTN">Continuing Services</button>
        <div className="DropDownContent">
          <Link to="/IPR_List" className="NavListItemLink">
            Vendor List
          </Link>
          <Link to="/View_IPRRPN_Docs" className="NavListItemLink">
            Print Documents
          </Link>
          <Link to="/RPN_edit" className="NavListItemLink">
            Edit RPN Funding
          </Link>
        </div>
      </div>
      {/* DROP */}
      <div className="DropDown">
        <button className="DropBTN">Settings</button>
        <div className="DropDownContent">
          <Link to="/Settings" className="NavListItemLink">
            Command
          </Link>
          <Link to="/Data" className="NavListItemLink">
            Data
          </Link>
        </div>
      </div>
      {/* DROP */}
      <div className="DropDown">
        <button className="DropBTN">Vendor Links</button>
        <div className="DropDownContent">
          {vendors.map((item, index) => {
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
