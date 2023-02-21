import Home from "~/Pages/Home";
import FilmSchedule from "~/Pages/FilmSchedule";
import TheaterSchedule from "~/Pages/TheaterSchedule";
import TheaterSystem from "~/Pages/TheaterSystem";
import Promotion from "~/Pages/Promotion";
import config from "~/config";
import Event from "~/Pages/Event";
import Advertise from "~/Pages/Advertise";
import Recruitment from "~/Pages/Recruitment";
import Information from "~/Pages/Information";
import Account from "~/Pages/Account";
import Rules from "~/Pages/Rules";
import MemberRule from "~/Pages/MemberRule";
import TicketInstruction from "~/Pages/TicketInstruction";
import Policy from "~/Pages/Policy";
import UserSecurity from "~/Pages/UserSecurity";
import Register from "~/Pages/Register/Register";
import HomeLayout from "~/layouts/HomeLayout";
import PasswordForgot from "~/Pages/PasswordForgot";
import UnAuthorization from "~/Pages/UnAuthorization";
const publicRoutes = [
  {
    path: config.routes.Home,
    component: Home,
    layout: HomeLayout,
  },
  {
    path: config.routes.FilmSchedule,
    component: FilmSchedule,
    layout: HomeLayout,
  },
  {
    path: config.routes.TheaterSchedule,
    component: TheaterSchedule,
    layout: HomeLayout,
  },
  {
    path: config.routes.TheaterSystem,
    component: TheaterSystem,
    layout: HomeLayout,
  },
  {
    path: config.routes.Promotion,
    component: Promotion,
    layout: HomeLayout,
  },
  {
    path: config.routes.Event,
    component: Event,
    layout: HomeLayout,
  },
  {
    path: config.routes.Advertise,
    component: Advertise,
    layout: HomeLayout,
  },
  {
    path: config.routes.Recruitment,
    component: Recruitment,
    layout: HomeLayout,
  },
  {
    path: config.routes.Information,
    component: Information,
    layout: HomeLayout,
  },

  {
    path: config.routes.Rules,
    component: Rules,
    layout: HomeLayout,
  },
  {
    path: config.routes.MemberRule,
    component: MemberRule,
    layout: HomeLayout,
  },
  {
    path: config.routes.TicketInstruction,
    component: TicketInstruction,
    layout: HomeLayout,
  },
  {
    path: config.routes.Policy,
    component: Policy,
    layout: HomeLayout,
  },
  {
    path: config.routes.UserSecurity,
    component: UserSecurity,
    layout: HomeLayout,
  },
  {
    path: config.routes.Register,
    component: Register,
    layout: HomeLayout,
  },
  {
    path: config.routes.PasswordForgot,
    component: PasswordForgot,
    layout: HomeLayout,
  },
  {
    path: config.routes.UnAuthorization,
    component: UnAuthorization,
    layout: HomeLayout,
  },
];
export const privateRoutes = [
  {
    path: config.routes.Account,
    component: Account,
    layout: HomeLayout,
    role: "USER",
  },
  {
    path: config.routes.AdminHome,
    component: Account,
    layout: HomeLayout,
    role: "ADMIN",
  },
  {
    path: config.routes.ManagerHome,
    component: Account,
    layout: HomeLayout,
    role: "MANAGER",
  },
];
export default publicRoutes;
