import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./components/Products/Products";
import Community from "./components/Community/Community";

import MyPage from "./components/Mypage/MyPage";
import Signup from "./components/Signup";
import MyCalendar from "./components/Mypage/MyCalendar";
import TodoList from "./components/Mypage/Todos";
import Cart from "./components/Cart";
import Home from "./components/MyHome/Home";
import Details from './components/Products/Details';

export default function App() {
  return (
    <Router>
        <Routes>
        <Route path="/Details" element={<Details/>}/>
          <Route exact path="/" element={<Header />} />
          <Route path="/Products/*" element={<Products/>}/>
          <Route path="/Community/*" element={<Community />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/MyCalendar" element={<MyCalendar />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
    </Router>
  );
}
        

