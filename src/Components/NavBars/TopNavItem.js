import React from "react";
import { Link } from "react-router-dom";

export default function TopNavItem() {
  return (
    <ul id="nav" className="noPrint">
      <li>
        <a href=" ">IPR</a>
        <ul>
          <li>
            <Link to="/IPR_List">List</Link>
          </li>
          <li>
            <Link to="/View_IPRRPN_Docs">Docs</Link>
          </li>
        </ul>
      </li>

      <li>
        <a href=" ">Anabantoidei</a>
        <ul>
          <li>
            <a href=" ">Climbing perches</a>
          </li>
          <li>
            <a href=" ">Labyrinthfishes</a>
          </li>
          <li>
            <a href=" ">Kissing gouramis</a>
          </li>
          <li>
            <a href=" ">Pike-heads</a>
          </li>
          <li>
            <a href=" ">Giant gouramis</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
