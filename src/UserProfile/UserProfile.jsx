import { useContext, useEffect, useState } from "react";
import "./UserProfile.css";
// import { Avatar, IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";
import { userAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import bannerimg from "../../../../assets/Images/banner/banner-img.png";

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { auth } = useContext(userAuth);

  let image = auth?.user?.image?.imagePath;
  const UserId = auth?.user?._id;
  useEffect(() => {
    const storedAvatarUrl = localStorage.getItem("avatarUrl");
  
    if (storedAvatarUrl) {
      setImagePreview(storedAvatarUrl);
    } else if (image) {
      const absoluteImageUrl = `https://ginger-backend.onrender.com/${image}`;
      setImagePreview(absoluteImageUrl);
      localStorage.setItem("avatarUrl", absoluteImageUrl);
    } else {
      setImagePreview("url_to_default_image"); // Replace with the URL of your default image
    }
  }, [image]);
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(file);
      // Update the image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImage(null);
      const storedAvatarUrl = localStorage.getItem("avatarUrl");
      setImagePreview(storedAvatarUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profileImage) {
      return; // No image selected, handle accordingly
    }

    const formData = new FormData();
    formData.append("file", profileImage);

    // Use Axios to send the formData to your backend API
    try {
      const response = await axios.post(
        `https://ginger-backend.onrender.com/Gingerauth//UpdateProfileImage/${UserId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedUser = response.data.user;

      if (updatedUser.image && updatedUser.image.imagePath) {
        const absoluteImageUrl = `https://ginger-backend.onrender.com/${updatedUser.image.imagePath}`;
        setImagePreview(absoluteImageUrl);
        localStorage.setItem("avatarUrl", absoluteImageUrl);
      }

      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-main-div">
      <Link to="/Dashboard">
        <div>got to dashboard</div>
      </Link>
      <div className="userprofile-card">
        <div>
          <div className="imgicon">
            <img
              src={imagePreview}
              alt=""
              style={{
                width: "101%",
                height: "101%",
                borderRadius: "50%",
                objectFit: "cover",
                // marginBottom: "30px",
              }}
            />
          </div>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="avatar-input"
            onChange={handleFileChange}
          />
          <label htmlFor="avatar-input">
            <AddAPhotoIcon
              className="addphotoicon"
              sx={{
                color: "#00A264",
              }}
            />
          </label>
        </div>
        <div>
          {" "}
          <button
            onClick={handleSubmit}
            className="greenbtn"
            style={{ marginTop: "15px" }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
