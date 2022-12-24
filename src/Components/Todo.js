import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import LabelWInput from "./BaseComponents/LabelWInput";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const navigate = useNavigate();
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

  // function formatDate(date) {
  //   var d = new Date(date),
  //     month = "" + (d.getMonth() + 1),
  //     day = "" + d.getDate(),
  //     year = d.getFullYear();

  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;

  //   return [year, month, day].join("-");
  // }

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

  const NewEvent = ["Task", "Comments", "Email"];
  let data = { "ID": uuid() };

  function AddTask(e) {
    e.preventDefault();

    NewEvent.forEach((element) => {
      data[element] = document.getElementById(element).value;
      document.getElementById(element).value = "";
    });
    data["Date"] = document.getElementById("Date").value;
    navigate(0);
  }

  let PlaceHolder = {};
  NewEvent.forEach((element) => {
    PlaceHolder[element] = "";
  });

  return (
    <div className="FlexColCenterCenter">
      <div className="FlexRowCenterCenter">
        <div className="CalDisplay FlexColCenterCenter">
          <div className="MonthText">{month[today.getMonth()]}</div>
          <button onClick={handleYesterday}>Yesterday</button>
          <button onClick={handleTomorrow}>Tomorrow</button>
          <button onClick={handleCurrent}>Current</button>

          <div className="CalBoxDiv FlexRowCenterCenter">
            {DateArray.map((item, index) => {
              return (
                <div className="CalBox" key={index}>
                  <div className="Header">
                    <div className="DayNumber">{item.getDate()}</div>
                    <div className="DayText">{days[item.getDay()]}</div>
                    {/* map over "event" localStorage Save, if formattedDate(item.toISOString) === event.Date return jsx Element */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="NewTaskFormDiv">
        <form onSubmit={AddTask}>
          {NewEvent.map((item, index) => {
            return <LabelWInput command={item} dataInput={""} key={index} />;
          })}{" "}
          <input type={"date"} id="Date" />
          <input type={"submit"} />
        </form>
      </div>
    </div>
  );
}
