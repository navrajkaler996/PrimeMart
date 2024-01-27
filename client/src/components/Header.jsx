import React from "react";

const Header = () => {
  return (
    <div id="header" className="max-w-full">
      <div id="header__main" className="h-[6rem]  bg-primary">
        <div id="header__main-2logo" className="flex: 20%;"></div>

        <div id="header__search" className="flex: 40%;"></div>

        <div className="flex: 1;"></div>
      </div>

      <div className="h-[4rem]  bg-primary mt-[2px]"></div>
    </div>
  );
};

export default Header;
