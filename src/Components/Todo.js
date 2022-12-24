import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import LabelWInput from "./BaseComponents/LabelWInput";
import { useNavigate } from "react-router-dom";
import { add } from "date-fns";

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

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  let today = new Date();
  today = add(today, { days: adjustDate });
  const currentDate = add(today, { days: 0 });
  const yesterday = add(today, { days: -1 });
  const tomorrow = add(today, { days: 1 });
  const yesterdayTwo = add(today, { days: -2 });
  const tomorrowTwo = add(today, { days: 2 });

  let DateArray = [yesterdayTwo, yesterday, currentDate, tomorrow, tomorrowTwo];

  const NewEvent = ["Task", "Comments", "Email"];
  let data = {};
  let event = JSON.parse(localStorage.getItem("TodoList")) || [];

  function AddTask(e) {
    e.preventDefault();
    data["ID"] = uuid();

    NewEvent.forEach((element) => {
      data[element] = document.getElementById(element).value;
      document.getElementById(element).value = "";
    });
    data["Date"] = document.getElementById("Date").value;
    navigate(0);
    event.push(data);
    localStorage.setItem("TodoList", JSON.stringify(event));
    console.log(JSON.parse(localStorage.getItem("TodoList")));
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
          <button
            onClick={() => {
              setAdjustDate(adjustDate - 1);
            }}
          >
            Yesterday
          </button>
          <button
            onClick={() => {
              setAdjustDate(adjustDate + 1);
            }}
          >
            Tomorrow
          </button>
          <button
            onClick={() => {
              setAdjustDate(0);
            }}
          >
            Current
          </button>

          <div className="CalBoxDiv FlexRowCenterCenter">
            {DateArray.map((item, index) => {
              return (
                <div className="CalBox" key={index}>
                  <div className="Header">
                    <div className="DayNumber">
                      {month[item.getMonth()]}
                      {item.getDate()}
                    </div>
                    <div className="DayText">{days[item.getDay()]} </div>
                    {event.map((event, index) => {
                      if (event.Date === formatDate(item.toISOString())) {
                        return (
                          <div key={index} className="EventItem">
                            <div className="EventType">
                              <span
                                className="Dot"
                                style={{ backgroundColor: "red" }}
                              ></span>
                            </div>
                            <div className="EventContent">{event.Task}</div>
                          </div>
                        );
                      }
                      return null;
                    })}
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
