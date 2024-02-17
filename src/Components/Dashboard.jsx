import React, { useContext, useEffect } from "react";
import "./Dashboard.css";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import Person2Icon from "@mui/icons-material/Person2";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ForumIcon from "@mui/icons-material/Forum";
import { Divider, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../Components/Images/logo.png";
import UserLogout from "./UserAuthentication/UserLogout/UserLogout";
import { userAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const { setAuth, auth, comment } = useContext(userAuth);
  const storedAvatarUrl = localStorage.getItem("avatarUrl");
  return (
    <div className="dash-board">
      <div className="right-sec">
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
            <PersonAddAltIcon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
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
            <PersonAddAltIcon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
            <Link to="/UserProfile">
              {" "}
              <button className="normalbtn">profile</button>
            </Link>
          </div>
          <UserLogout />
        </div>
      </div>
      <div className="left-sec">
        <div className="left-sec-flex">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {storedAvatarUrl ? (
              <img
                src={storedAvatarUrl}
                style={{ width: "50px",height:"50px", borderRadius: "50%" }}
                alt="User Avatar"
              />
            ) : (
              <AccountCircleIcon sx={{ fontSize: "50px" }} />
            )}

            <div>
              <div>welcome {auth.username} </div>
              <div>{auth.email}</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "15px" }}>
            <LanguageIcon fontSize="12px" className="icon-header" />
            <MessageIcon fontSize="12px" className="icon-header" />
            <SearchIcon fontSize="12px" className="icon-header" />
            <NotificationsIcon fontSize="12px" className="icon-header" />
          </div>
        </div>
        <Divider sx={{ borderColor: "white" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "white",
              marginLeft: "40px",
              marginBottom: "10px",
              marginTop: "6px",
            }}
          >
            Dashboard
          </h3>
          <p style={{ marginRight: "40px" }}>Dashboard/list</p>
        </div>
        <div className="card-arrange">
          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {comment}
            </Typography>
          </div>
          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod.
            </Typography>
          </div>

          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod.
            </Typography>
          </div>

          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod.
            </Typography>
          </div>

          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod.
            </Typography>
          </div>

          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod.
            </Typography>
          </div>

          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod.
            </Typography>
          </div>

          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor.
            </Typography>
          </div>

          <div className="card">
            <ForumIcon
              sx={{
                fontSize: "30px",
                paddingLeft: "250px",
                paddingTop: "10px",
              }}
              color="white"
            />
            <h3>components</h3>

            <Typography variant="subtitle" sx={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor.
            </Typography>
          </div>
        </div>
        <Divider sx={{ marginTop: "15px", borderColor: "white" }} />
        <h6 style={{ textAlign: "center" }}>copyright @ ginger</h6>
      </div>
    </div>
  );
};

export default Dashboard;
