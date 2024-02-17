import './App.css';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from "react-router-dom";
import UserRegister from './Components/UserAuthentication/UserRegister/UserRegister';
import { Toaster } from 'react-hot-toast';
import UserLogin from './Components/UserAuthentication/UserLogin/UserLogin';
import Inbox from './Components/Inbox/Inbox';
import CreateUser from './Components/CreateUser/createUser';
import UserProfile from './UserProfile/UserProfile';
function App() {
  return (
    <div className="App">
        <Toaster
        containerStyle={{
          position: "absolute",
          top: "0px",
          left: "-60px",
        }}
      />
      <Routes>
      <Route path="/" element={<UserRegister/>} />
      <Route path="/UserLogin" element={<UserLogin/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Inbox" element={<Inbox/>} />
      <Route path="/CreateUser" element={<CreateUser/>} />
      <Route path="/UserProfile" element={<UserProfile/>} />
      </Routes>
    
    </div>
  );
}

export default App;
