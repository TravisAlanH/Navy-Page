import React from "react";

export default function Todo() {
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

  function mod(n) {
    console.log(n);
    return ((n % 7) + 7) % 7;
  }

  console.log(month);

  let DateArray = [
    today.getDate() - 2,
    today.getDate() - 1,
    today.getDate(),
    today.getDate() + 1,
    today.getDate() + 2,
  ];

  let DateName = [
    days[mod(today.getDay() - 2)],
    days[mod(today.getDay() - 1)],
    days[mod(today.getDay())],
    days[mod(today.getDay() + 1)],
    days[mod(today.getDay() + 2)],
  ];
  console.log(DateName);

  let offset = [-1, 0, 0, 0, 1];

  DateArray.map((item, index) => {
    const lastDateCurrent = new Date();
    const adjustDate = new Date();
    adjustDate.setDate(1);
    adjustDate.setHours(-1);
    lastDateCurrent.setMonth(lastDateCurrent.getMonth() + 1);
    lastDateCurrent.setDate(1);
    lastDateCurrent.setHours(-1);
    if (item < 0) {
      return (DateArray[index] = adjustDate.getDate() + offset[index]);
    }
    if (item === 0) {
      return (DateArray[index] = adjustDate.getDate());
    }
    if (item > lastDateCurrent.getDate()) {
      lastDateCurrent.setMonth(lastDateCurrent.getMonth() + 1);
      lastDateCurrent.setDate(1);
      return (DateArray[index] = lastDateCurrent.getDate() + offset[index]);
    }
    return DateArray[index];
  });

  console.log(DateArray);

  return (
    <div className="FlexRowCenterCenter">
      {/* <div>{days[mod(date.getDate() + offset[0])]} </div> */}
    </div>
  );
}
