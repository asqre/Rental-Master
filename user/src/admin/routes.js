import AdminManagement from "./pages/AdminManagement";
import BodyTypes from "./pages/BodyTypes";
import Booking from "./pages/Booking";
import BookingHistory from "./pages/BookingHistory";
import Brands from "./pages/Brands";
import Cars from "./pages/Cars";
import Dashboard from "./pages/Dashboard";
import Offers from "./pages/Offers";
import Setting from "./pages/Setting";
import SocialManagement from "./pages/SocialManagement";
import VerifyUser from "./pages/VerifyUser";

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        name: "Dashboard",
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        name: "Bookings",
        path: "/bookings",
        element: <Booking />,
      },
      {
        name: "Booking History",
        path: "/booking-history",
        element: <BookingHistory />,
      },
      {
        name: "Verify Users",
        path: "/verify-users",
        element: <VerifyUser />,
      },
      {
        name: "Brands",
        path: "/brands",
        element: <Brands />,
      },
      {
        name: "Body Types",
        path: "/body-types",
        element: <BodyTypes />,
      },
      {
        name: "Cars",
        path: "/cars",
        element: <Cars />,
      },
      {
        name: "Offers",
        path: "/offers",
        element: <Offers />,
      },
      {
        name: "Admins/ Users",
        path: "/admin-management",
        element: <AdminManagement />,
      },
      {
        name: "Social Media",
        path: "/social-media",
        element: <SocialManagement />,
      },
      {
        name: "Settings",
        path: "/settings",
        element: <Setting />,
      },
    ],
  },
  // {
  //   layout: "auth",
  //   pages: [
  //     {
  //       name: "Login",
  //       path: "/login",
  //       element: <Login />,
  //     },
  //   ],
  // },
];
