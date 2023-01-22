/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* "Shinobi"

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import Employees from "views/Employees/Employees";
import UsersParent from "views/Users/UsersParent";
// import EmployeeParent from "latihan-component/ParentChildEmployee/EmployeeParent";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
// import { FiLogOut } from 'react/icons/fi';
import { ExternalLinkIcon } from "@chakra-ui/icons";

var dashRoutes = [
  {
    path: "/users",
    name: "Users",
    rtlName: "shinobi",
    icon: <StatsIcon color='inherit' />,
    component: UsersParent,
    layout: "/admin",
  },
  // {
  //   path: "/EmployeeParent",
  //   name: "Employees",
  //   rtlName: "shinobi",
  //   icon: <StatsIcon color='inherit' />,
  //   component: EmployeeParent,
  //   layout: "/admin",
  // },
  {
    path: "/employees",
    name: "Employees",
    rtlName: "shinobi",
    icon: <StatsIcon color='inherit' />,
    component: Employees,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "shinobi",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "shinobi",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "shinobi",
    icon: <CreditIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "shinobi",
    icon: <SupportIcon color='inherit' />,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "shinobi",
    state: "pageCollapse",
    views: [
      {
        // path: "/profile",
        path: "#",
        name: "Profile",
        rtlName: "shinobi",
        icon: <PersonIcon color='inherit' />,
        // secondaryNavbar: true,
        component: Profile,
        // layout: "/admin",
        layout: "#",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "shinobi",
        icon: <RocketIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "shinobi",
        icon: <DocumentIcon color='inherit' />,
        // secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
      {
        path: "/signout",
        name: "Sign Out",
        rtlName: "shinobi",
        icon: <ExternalLinkIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
