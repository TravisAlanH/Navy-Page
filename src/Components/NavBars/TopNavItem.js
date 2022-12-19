import React from "react";
import { Link } from "react-router-dom";

export default function TopNavItem() {
  return (
    <div className="NavBar">
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
