import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "../HomePage";
import RNPDataEdit from "../IRP/RNPDataEdit";
import ViewIPRList from "../IRP/ViewIPRList";
import ViewIPRRPNDocs from "../IRP/ViewIPR_RPNDocs";
// import Todo from "../Todo";
import Data from "./Data";
import Settings from "./Settings";

export default function RouterPath() {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigate replace to="/Home" />} />
      <Route exact path="/Home" element={<HomePage />}></Route>
      {/* <Route exact path="/Todo" element={<Todo />}></Route> */}

      <Route exact path="/IPR_List" element={<ViewIPRList />}></Route>
      <Route
        exact
        path="/View_IPRRPN_Docs"
        element={<ViewIPRRPNDocs />}
      ></Route>
      <Route exact path="/RPN_edit" element={<RNPDataEdit />}></Route>
      <Route exact path="/Data" element={<Data />}></Route>
      <Route exact path="/Settings" element={<Settings />}></Route>
    </Routes>
  );
}
