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
const publicRoutes = [
  {
    path: config.routes.Home,
    component: Home,
  },
  {
    path: config.routes.FilmSchedule,
    component: FilmSchedule,
  },
  {
    path: config.routes.TheaterSchedule,
    component: TheaterSchedule,
  },
  {
    path: config.routes.TheaterSystem,
    component: TheaterSystem,
  },
  {
    path: config.routes.Promotion,
    component: Promotion,
  },
  {
    path: config.routes.Event,
    component: Event,
  },
  {
    path: config.routes.Advertise,
    component: Advertise,
  },
  {
    path: config.routes.Recruitment,
    component: Recruitment,
  },
  {
    path: config.routes.Information,
    component: Information,
  },
  {
    path: config.routes.Account,
    component: Account,
  },
  {
    path: config.routes.Rules,
    component: Rules,
  },
  {
    path: config.routes.MemberRule,
    component: MemberRule,
  },
  {
    path: config.routes.TicketInstruction,
    component: TicketInstruction,
  },
  {
    path: config.routes.Policy,
    component: Policy,
  },
  {
    path: config.routes.UserSecurity,
    component: UserSecurity,
  },
];
export default publicRoutes;
