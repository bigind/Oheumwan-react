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
    <div className="sidebar">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;