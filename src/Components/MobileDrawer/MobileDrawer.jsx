import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import Person2Icon from "@mui/icons-material/Person2";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import ForumIcon from "@mui/icons-material/Forum";
// import { Divider, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import LanguageIcon from "@mui/icons-material/Language";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../../Components/Images/logo.png";

// import { userAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import UserLogout from "../UserAuthentication/UserLogout/UserLogout";

const MobileDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon style={{color:"white"}}/>
          </IconButton>
        </div>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div className="right-sec-mobile">
            <div style={{ display: "flex", flexDirection: "column" }}></div>
            <img src={logo} alt="" />
            <div className="left-btns">
              <div>
                <p className="margin-left">Main</p>
              </div>
              <div>
                <HomeIcon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
                <button className="normalbtn">Dashborad</button>
              </div>
            </div>
            <div className="left-btns">
              <div style={{ paddingTop: "25px" }}>
                <p>Manage</p>
              </div>
              <div className="margin-left">
                <MessageIcon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
                <Link to="/Inbox">
                  <button className="normalbtn">Inbox</button>
                </Link>
              </div>
              <div className="margin-left">
                <HomeIcon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
                <button className="normalbtn">Channels</button>
              </div>
              <div className="margin-left">
                <Person2Icon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
                <button className="normalbtn">Bussiness Profile</button>
              </div>
              <div className="margin-left">
                <InsightsIcon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
                <button className="normalbtn">Insights</button>
              </div>
            </div>
            <div className="left-btns">
              <div style={{ paddingBottom: "10px", paddingTop: "25px" }}>
                <p>settings</p>
              </div>
              <div className="margin-left">
                <PersonOutlineIcon
                  sx={{ fontSize: "16px", marginBottom: "-5px" }}
                />{" "}
                <button className="normalbtn">Create Roles</button>
              </div>
              <div className="margin-left">
                <PersonAddAltIcon
                  sx={{ fontSize: "16px", marginBottom: "-5px" }}
                />{" "}
                <Link to="/CreateUser">
                  <button className="normalbtn">Create Users</button>
                </Link>
              </div>
              <div className="margin-left">
                <SettingsIcon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
                <button className="normalbtn">Settings</button>
              </div>
            </div>
            <div className="left-btns" style={{ marginTop: "10px" }}>
              <div className="margin-left">
                <PersonAddAltIcon
                  sx={{ fontSize: "16px", marginBottom: "-5px" }}
                />{" "}
                <Link to="/UserProfile">
                  {" "}
                  <button className="normalbtn">profile</button>
                </Link>
              </div>
              <UserLogout />
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileDrawer;
