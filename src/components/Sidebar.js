import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

function Sidebar() {

  const menus = [
    { name: "Login", path: "/" },
    { name: "Theme", path: "/members" },
    { name: "캐시 관리", path: "/cashes" }
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