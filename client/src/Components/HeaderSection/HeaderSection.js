import React from "react";
import Header from "./Components/Header/Header";
import InputTodos from "./Components/InputTodos/InputTodos";
import { useLocation } from "react-router-dom";

const HeaderSection = () => {
  const location = useLocation();
  return (
    <div>
      <header className='header'>
        <Header />

        {(location.pathname === "/" ||
          location.pathname === "/active" ||
          location.pathname === "/completed") && <InputTodos />}
      </header>
    </div>
  );
};

export default HeaderSection;
