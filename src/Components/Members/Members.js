import React, { useState } from "react";
import LabelWInputObject from "../BaseComponents/LabelWInputObject";
import { v4 as uuid } from "uuid";

export default function Members() {
  const [rerender, setRerender] = useState(false);

  const [searchText, setSearchText] = React.useState("");

  //   const MemberData = ["Name", "Hotel", "Comment"];
  const MemberData = [
    {
      "Name": "Name",
      "Type": "text",
      "Element": "input",
      "Row": 10,
      "Col": 10,
    },
    { "Name": "Hotel", "Type": "text", "Element": "input" },
    { "Name": "Comment", "Type": "text", "Element": "input" },
    { "Name": "Date", "Type": "date", "Element": "input" },
  ];

  let NewData = {};
  let Members = JSON.parse(localStorage.getItem("Members")) || [];

  function handleSubmit(e) {
    NewData["ID"] = uuid();
    MemberData.map((item) => {
      NewData[item.Name] = document.getElementById(item.Name).value;
      return null;
    });
    Members.push(NewData);
    localStorage.setItem("Members", JSON.stringify(Members));
    setRerender(!rerender);
  }

  function handleUpdate(e) {
    Members.map((item) => {
      if (item.ID === e.target.elements.ID.value) {
        console.log("h");
        item.Name = e.target.elements.Name.value;
        item.Comment = e.target.elements.Comment.value;
        item.Hotel = e.target.elements.Hotel.value;
        item.Date = e.target.elements.Date.value;
      }
      return item;
    });
    localStorage.setItem("Members", JSON.stringify(Members));
    setRerender(!rerender);
  }

  function handleDelete(ID) {
    Members.map((item, index) => {
      if (item.ID === ID) {
        Members.splice(index, 1);
      }
      return item;
    });
    localStorage.setItem("Members", JSON.stringify(Members));
    setRerender(!rerender);
  }

  let RenderedMembers = Members.filter(({ Name }) => Name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div>
      {/* ADD MEMBERS */}
      <div>
        <form onSubmit={handleSubmit}>
          {MemberData.map((item, index) => {
            return <LabelWInputObject {...item} dataInput={index} key={index} />;
          })}
          <input type={"submit"} />
        </form>
      </div>
      <label>Search</label>

      <input type="text" value={searchText} onChange={({ target }) => setSearchText(target.value)} />
      {/* VIEW MEMBERS */}
      <div className="Grid4">
        {RenderedMembers.map((item, index) => {
          return (
            <div className="FlexRowCenterCenter" key={index}>
              <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={item.ID} style={{ display: "none" }} name="ID" />
                <label>Name</label>
                <input type={"text"} defaultValue={item.Name} name="Name" />
                <label>Comment</label>
                <input type={"text"} defaultValue={item.Comment} name="Comment" />
                <label>Hotel</label>
                <input type={"text"} defaultValue={item.Hotel} name="Hotel" />
                <label>Date</label>
                <input type={"date"} defaultValue={item.Date} name="Date" />
                <input type={"submit"} />
              </form>
              <button onClick={() => handleDelete(item.ID)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
