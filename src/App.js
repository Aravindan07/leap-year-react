import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [date, setDate] = useState("");
  const [isLeap, setIsLeap] = useState("");
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };
  const onClickHandler = (inputDate) => {
    let birthYear = Number(inputDate.split("-")[0]);
    if (birthYear === 0) {
      return setIsLeap(`Please enter the date`);
    }
    if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 4 === 0) {
      return setIsLeap(
        `Hey you are born in leap year\n.Feel free to share it on social media.`
      );
    }
    return setIsLeap(`Hey,you didn't born in leap year.`);
  };
  return (
    <div className="wrapper">
      <h2>Enter your date</h2>
      <p>
        We procees your birth year and shows you whether you born in leap year
        or not
      </p>
      <input
        id="date-input"
        type="date"
        value={date}
        onChange={onChangeHandler}
        required
      />
      <button id="submit-button" onClick={() => onClickHandler(date)}>
        Submit
      </button>
      <div className="output">{isLeap}</div>
    </div>
  );
}
