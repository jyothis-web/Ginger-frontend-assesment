
import React, { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
export const userAuth = createContext();
const Context = ({ children }) => {
const [auth, setAuth] = useState({ user: null, token: "" });
const [comment, setComment] = useState("");
const navigate = useNavigate();

//for authdetails
useEffect(() => {
    // Set initial auth state when component mounts
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, [setAuth]);

  useEffect(() => {
    setComment();
  }, []);

  useEffect(() => {
    const storedComment = localStorage.getItem("comment");
    if (storedComment) {
      setComment(storedComment);
    }
  }, []);
    // Fetch user details
    const fetchUser = async () => {
      try {
        const response =  auth;
        const user = response.data.user;
        console.log("user",user);
        setAuth({
          ...auth,
          user,
        });
        return response;
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
      }
    };

//for logout
const Handlelogout = () => {
    console.log(localStorage.getItem("auth"));
    try {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      console.log("sucessfully logout");
      localStorage.removeItem("auth");
      localStorage.removeItem("comment");
      localStorage.removeItem("avatarUrl");
 
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div>
      <userAuth.Provider
        value={{
          auth,
          setAuth,
          Handlelogout,
          comment, setComment,
          fetchUser
        }}
      >
        {children}
      </userAuth.Provider>
    </div>
  );
};

export default Context;
