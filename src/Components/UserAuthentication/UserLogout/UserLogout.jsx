import React, { useContext } from 'react'
import SettingsIcon from "@mui/icons-material/Settings";
import { userAuth } from '../../../Context/AuthContext';

const UserLogout = () => {
    const { Handlelogout } = useContext(userAuth);

  return (
    <div> <div className="margin-left">
    <SettingsIcon sx={{ fontSize: "16px", marginBottom: "-5px" }} />{" "}
    <button className="normalbtn" onClick={Handlelogout}>logout</button>
  </div></div>
  )
}

export default UserLogout