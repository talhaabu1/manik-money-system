import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AddPassenger from "../AddPassenger/AddPassenger";
import AddTractor from "../AddTractor/AddTractor";
import AllTractor from "../AllTractor/AllTractor";
import TractorDetail from "../TractorDetail/TractorDetail";

export const rotuer = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addpassenger",
        element: <AddPassenger />,
      },
      {
        path: "/addtractor",
        element: <AddTractor />,
      },
      {
        path: "/alltractor",
        element: <AllTractor />,
      },
      {
        path: "/tractordetails",
        element: <TractorDetail />,
      },
    ],
  },
]);
