import React, { useEffect, useState } from "react";
import { IoHome, IoMail, IoGift, IoSettings } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "./NavItem";
import Logo from "../../components/common/Logo";

const SideNav = ({ onClose }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState("Dashboard");
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: IoHome },
    { type: "text", name: "Manage Booking" },
    { name: "Bookings", path: "/admin/bookings", icon: IoMail },
    { name: "Booking History", path: "/admin/booking-history", icon: IoGift },
    { name: "Verify Users", path: "/admin/verify-users", icon: IoGift },
    { type: "text", name: "Manage Services" },
    { name: "Brands", path: "/admin/brands", icon: IoSettings },
    { name: "Body Types", path: "/admin/body-types", icon: IoSettings },
    { name: "Cars", path: "/admin/cars", icon: IoSettings },
    { type: "text", name: "Site Management" },
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
    const selectedItem = menuItems.find((item) =>
      location.pathname.includes(item.path)
    );
    if (selectedItem) {
      setIsSelected(selectedItem.name);
    }
  }, [location.pathname, menuItems]);

  return (
    <div className="flex flex-col w-[250px] h-full rounded-[1rem]">
      <div className="h-[4.875rem] px-[10px] py-[32px] flex items-center justify-center">
        <Logo to="/" showName={true} />
      </div>

      <hr className="mx-[24px] mt-0 mb-5" />

      <div className="ml-[16px]">
        <nav className="flex flex-col w-full max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar pr-[16px]">
          {menuItems.map((item) =>
            item.type === "text" ? (
              <h6
                key={item.name}
                className="mt-3 mb-1 font-bold text-xs uppercase pl-[1.5rem] ml-[0.5rem]"
                style={{
                  lineHeight: "1.25",
                  opacity: 0.6,
                }}
              >
                {item.name}
              </h6>
            ) : (
              <NavItem
                key={item.name}
                name={item.name}
                SelectedIcon={item.icon}
                isSelected={isSelected}
                path={item.path}
                onClick={onClose}
              />
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
