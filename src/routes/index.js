import { useRoutes } from "react-router-dom";

// project import TODO: implement login
//import LoginRoutes from './LoginRoutes';
import MainRoutes from "./MainRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function AllRoutes() {
  //return useRoutes([MainRoutes, LoginRoutes]);
  return useRoutes([MainRoutes]);
}
