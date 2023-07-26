import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

function Sidebar() {

  const menus = [
    { name: "Theme", path: "/members" },
    { name: "al", path: "/" }
  ];

  return (
    <div className="text-right">
      {menus.map((menu, index) => {
        return (
          <div>
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
            />
            <hr className="p-1"/>
          </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;