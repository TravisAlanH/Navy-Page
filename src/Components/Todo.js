import React, { useState } from "react";

export default function Todo() {
  const [adjustDate, setAdjustDate] = useState(0);

  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();

  today.setDate(today.getDate() + adjustDate);

  const yesterdayTwo = new Date();
  yesterdayTwo.setDate(today.getDate() - 2);
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const currentDate = new Date();
  currentDate.setDate(today.getDate() + 0);
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowTwo = new Date();
  tomorrowTwo.setDate(today.getDate() + 2);

  let DateArray = [yesterdayTwo, yesterday, currentDate, tomorrow, tomorrowTwo];

  function handleYesterday() {
    setAdjustDate(adjustDate - 1);
  }
  function handleTomorrow() {
    setAdjustDate(adjustDate + 1);
  }
  function handleCurrent() {
    setAdjustDate(0);
  }

  return (
    <div className="FlexRowCenterCenter">
      <div className="CalDisplay FlexColCenterCenter">
        <div className="MonthText">{month[today.getMonth()]}</div>
        <button onClick={handleYesterday}>Yesterday</button>
        <button onClick={handleTomorrow}>Tomorrow</button>
        <button onClick={handleCurrent}>Current</button>

        <div className="CalBoxDiv FlexRowCenterCenter">
          {DateArray.map((item, index) => {
            return (
              <div className="CalBox">
                <div className="Header">
                  <div className="DayNumber">{item.getDate()}</div>
                  <div className="DayText">{days[item.getDay()]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
