import React, { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todos.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/main_logo.jpg";
// import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Todos = () => {
  const buttonData = [
    { label: "PRODUCTS", path: "/Products" },
    { label: "COMMUNITY", path: "/Community" },
    { label: "TODO LIST", path: "/Todos" },
  ];

  const tileClassName = ({ date }) => {
    if (date.getDay() === 0) {
      return "sundayTile";
    } else if (date.getDay() === 6) {
      return "saturdayTile";
    } else if (date.getMonth() === value.getMonth()) {
      return "currentMonthTile";
    }
    return null;
  };

  const no = useRef(1);

  const [todos, setTodos] = useState([]);
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text: text,
        done: false,
      },
    ]);
  };

  const onDel = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <span className="banner">
        <Link to="/">
          <div>
            <img className="bannerLogo" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="banner_btnItems">
          <div className="left-buttons">
            {buttonData.map((button) => (
              <button
                className="bannerBtn"
                key={button.path}
                onClick={() => navigateTo(button.path)}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className="right-buttons">
            <button className="bannerBtn" onClick={() => navigateTo("/SignUp")}>
              SIGN UP
            </button>
            <button className="bannerBtn" onClick={() => navigateTo("/LogIn")}>
              LOG IN
            </button>
          </div>
        </div>
      </span>
      {/* 이하 코드는 배너 밑부분 */}
      <div className="todo_container">
        <div className="todo_leftSide">
          <span className="tab">월간 운동 횟수</span>
          <span className="tab">체지방률 변화</span>
          <span className="tab">월간 상태</span>
          <div className="Todos">
            <h1>TODO LIST</h1>
            <TodoInput onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
          </div>
        </div>
        <div className="todo_rightSide">
          <Calendar
            className="calendar-parent"
            value={value}
            onChange={onChange}
            locale="en-US"
            showNeighboringMonth={false}
            nextLabel={<HiChevronRight />}
            prevLabel={<HiChevronLeft />}
            next2Label={null}
            prev2Label={null}
            tileClassName={({ date }) => tileClassName({ date })}
            tileContent={({ date }) => (
              <div className={`currentMonthTile ${tileClassName({ date })}`} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Todos;
