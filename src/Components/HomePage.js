import React from "react";
import ViewIPRList from "./IRP/ViewIPRList";
import TopNav from "./NavBars/TopNav";

export default function HomePage() {
  return (
    <div>
      <div className="UnderNav"></div>
      <TopNav />
      <ViewIPRList />
    </div>
  );
}
