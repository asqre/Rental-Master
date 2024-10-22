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
  const [isSelected, setIsSelected] = useState("Dashboard");
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: IoHome },
    { name: "Bookings", path: "/admin/bookings", icon: IoMail },
    { name: "Booking History", path: "/admin/booking-history", icon: IoGift },
    { name: "Verify Users", path: "/admin/verify-users", icon: IoGift },
    { name: "Brands", path: "/admin/brands", icon: IoSettings },
    { name: "Body Types", path: "/admin/body-types", icon: IoSettings },
    { name: "Cars", path: "/admin/cars", icon: IoSettings },
    {
      name: "Admin Management",
      path: "/admin/admin-management",
      icon: IoSettings,
    },
    { name: "Social Media", path: "/admin/social-media", icon: IoSettings },
    { name: "Settings", path: "/admin/settings", icon: IoSettings },
    { name: "Logout", path: "/logout", icon: HiOutlineLogout },
  ];

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    const capitalizedPath =
      currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

    setIsSelected(capitalizedPath);
  }, [location.pathname]);

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
                path={item.path}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
