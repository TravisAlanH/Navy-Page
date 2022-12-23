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
  const test = new Date();

  console.log(
    today.toISOString().split("T")[0].replace(/-/g, "/") ===
      test.toISOString().split("T")[0].replace(/-/g, "/")
  );

  const yesterdayTwo = new Date();
  yesterdayTwo.setDate(today.getDate() - 2);
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowTwo = new Date();
  tomorrowTwo.setDate(today.getDate() + 2);

  function mod(n) {
    return ((n % 7) + 7) % 7;
  }

  let DateArray = [yesterdayTwo, yesterday, today, tomorrow, tomorrowTwo];

  let DateName = [];

  DateArray.map((item, index) => {
    return DateName.push(days[mod(item.getDate())]);
  });

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

  // console.log(DateName);

  // console.log(DateArray);

  return (
    <div className="FlexRowCenterCenter">
      {/* <div>{days[mod(date.getDate() + offset[0])]} </div> */}
    </div>
  );
}
