import { useState } from "react";
import Calendar from "react-calendar";
import "./MyCalendar.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Link to="/">
        <div>
          <img
            className="bannerLogo"
            src={logo}
            width="50px"
            height="50px"
            alt="logo"
          />
        </div>
      </Link>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}

export default MyCalendar;