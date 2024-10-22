import React, { useEffect, useState } from "react";
import { IoHome, IoMail, IoGift, IoSettings } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "./NavItem";
import Logo from "../../components/common/Logo";

const SideNav = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState('Dashboard');
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: IoHome },
    { name: "Envelopes", path: "/admin/envelopes", icon: IoMail },
    { name: "Prizes", path: "/admin/prizes", icon: IoGift },
    { name: "Setting", path: "/admin/setting", icon: IoSettings },
  ];

//   useEffect(() => {
//     const currentPath = location.pathname.split("/")[2];
//     setIsSelected(currentPath);
//   }, [location.pathname]);

  return (
    <>
      <div className="flex flex-col w-[250px] h-full">
        <div className="h-[4.875rem] px-[24px] py-[32px] flex items-center justify-center">
          <Logo to="true" />
        </div>

        <hr className="mx-[24px] mt-0 mb-5" />

        <div className="flex flex-col items-center justify-center mx-[16px]">
          <div className="flex flex-col w-full">
            {menuItems.map((item) => (
              <NavItem
                key={item.name}
                name={item.name}
                SelectedIcon={item.icon}
                isSelected={isSelected}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
