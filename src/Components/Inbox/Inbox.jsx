import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userAuth } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { Card } from "@mui/material";

const Inbox = () => {
  const [message, setMessage] = useState("");
  const { auth, comment, setComment } = useContext(userAuth);
  //   console.log(auth);
  //   console.log(comment);
  const UserId = auth?.user?._id;

  // Update the comment state when auth.user.message changes
  useEffect(() => {
    const userMessage = auth?.user?.message;

    // Only set comment if userMessage is null or undefined
    if (userMessage === null || userMessage === undefined) {
      setComment(userMessage);
    }
    // eslint-disable-next-line 
  }, [auth?.user?.message,setComment]);
  console.log(UserId);
  const handleUpdateMessage = async () => {
    try {
      const response = await axios.post(
        `https://ginger-backend.onrender.com/Gingerauth/create-message/${UserId}`,
        { message }
      );

      const updatedComment = response.data.message;
      console.log(updatedComment);
      if (response.data.success) {
        console.log("Message updated successfully");
        toast.success("Message updated successfully");
        setComment(updatedComment);
        // Save updated comment to local storage
        localStorage.setItem("comment", updatedComment);
      } else {
        console.error(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        gap: "30px",
      }}
    >
      <label htmlFor="message">Update Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleUpdateMessage}>Update Message</button>
      <div>
        {" "}
        Comment
        <Card sx={{ minWidth: "200px", minHeight: "100px" }}>
          {comment}
        </Card>{" "}
      </div>
    </div>
  );
};

export default Inbox;
