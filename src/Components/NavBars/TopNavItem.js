import React from "react";

export default function TopNavItem() {
  return (
    <ul id="nav" className="noPrint">
      <li>
        <a href="#">Percoidei</a>
        <ul>
          <li>
            <a href="#">Remoras</a>
          </li>
          <li>
            <a href="#">Tilefishes</a>
          </li>
          <li>
            <a href="#">Bluefishes</a>
          </li>
          <li>
            <a href="#">Tigerfishes</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#">Anabantoidei</a>
        <ul>
          <li>
            <a href="#">Climbing perches</a>
          </li>
          <li>
            <a href="#">Labyrinthfishes</a>
          </li>
          <li>
            <a href="#">Kissing gouramis</a>
          </li>
          <li>
            <a href="#">Pike-heads</a>
          </li>
          <li>
            <a href="#">Giant gouramis</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
