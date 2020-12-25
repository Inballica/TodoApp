import React from "react";
import Filters from "./Components/Filters/Filters";
import TotalTodos from "./Components/TotalTodos/TotalTodos";

const FooterSection = () => {
  return (
    <div>
      <footer className='footer'>
        <TotalTodos />
        <Filters />
      </footer>
    </div>
  );
};

export default FooterSection;
