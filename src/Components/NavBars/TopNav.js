import React from "react";
import TopNavItem from "./TopNavItem";

export default function TopNav() {
  return (
    <div className="noPrint">
      <div className="UnderNav"></div>
      <div className="TopNavBar FlexRowStartCenter">
        <TopNavItem />
      </div>
    </div>
  );
}
