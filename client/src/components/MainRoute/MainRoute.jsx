import { Link, Outlet } from "react-router-dom";
import "./MainRoute.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { BsListUl } from "react-icons/bs";
import { GoPersonAdd } from "react-icons/go";
import { FaTractor } from "react-icons/fa6";
import { MdOutlineNoteAdd } from "react-icons/md";

const MainRoute = () => {
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="layout">
      <div className="sidebar h-full  shadow-lg">
        <div className=" sticky top-0 z-40">
          <Sidebar
            className="h-screen  shadow-lg"
            onBackdropClick={() => setToggled(false)}
            toggled={toggled}
            breakPoint="lg"
            collapsed={collapsed}
            backgroundColor=" white"
          >
            <Menu className="  " closeOnClick={true}>
              <MenuItem
                className=" "
                component={<Link to="/" />}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              >
                Profile
              </MenuItem>
              <SubMenu
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                }
                label="Passenger"
              >
                <MenuItem icon={<BsListUl className=" w-10 h-10" />}>
                  All Passenger
                </MenuItem>
                <MenuItem
                  className=""
                  component={<Link to="addpassenger" />}
                  icon={<GoPersonAdd className="w-10 h-10" />}
                >
                  Add Passenger
                </MenuItem>
              </SubMenu>
              <SubMenu
                icon={<FaTractor className=" w-10 h-10" />}
                label="Tractor"
              >
                <MenuItem
                  component={<Link to="alltractor" />}
                  icon={<BsListUl className=" w-10 h-10" />}
                >
                  All Tractor History
                </MenuItem>
                <MenuItem
                  component={<Link to="addtractor" />}
                  icon={<MdOutlineNoteAdd className=" w-10 h-10" />}
                >
                  Add Tractor History
                </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      </div>
      <div className="body">
        <div className=" bg-[white] h-10 flex items-center justify-between py-6 shadow-lg ">
          <button className=" lg:hidden" onClick={() => setToggled(!toggled)}>
            <Hamburger
              size={30}
              rounded
              toggled={toggled}
              toggle={setToggled}
            />
          </button>
          <button
            className=" hidden  lg:block xl:block"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Hamburger
              size={30}
              rounded
              toggled={!collapsed}
              toggle={setCollapsed}
            />
          </button>
          <h1 className=" flex items-center">
            <img
              className="h-10 mr-1"
              src="https://cdn-icons-png.flaticon.com/128/9165/9165762.png"
              alt="logo"
            />
            <p className="mr-1 xl:mr-5 text-xl font-bold">Tilkapur-Travlse</p>
          </h1>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default MainRoute;
