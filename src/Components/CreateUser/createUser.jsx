import React, { useState } from "react";
import axios from "axios";
//import { cart } from "../../../Contex";
import { Button, } from "@mui/material";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CreateUser = () => {
  //const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState("");
  //const { categories, getCategories } = useContext(cart);


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Create a preview image URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData to handle file upload
    const formData = new FormData();
    formData.append("file", image);
    formData.append("name", name);
    console.log(formData);

    try {
      const response = await axios.post(
        `http://localhost:8000/GingerCreateUser/createUser`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle successful response
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="create-product">
      <Link to="/Dashboard"><div>got to dashboard</div></Link>
    <h2>Create New User</h2>
    <div style={{marginLeft:"30px",maxWidth:"300px" }}>
      <form onSubmit={handleSubmit}>
        
        <br />
        <label style={{ marginBottom: "25px" }}>
         Logo:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
             style={{ marginBottom: "25px" }}
          />
        </label>
        {previewImage && (
          <div>
            <p>Preview:</p>
            <img
              src={previewImage}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          </div>
        )}
        <br />
  
        <label style={{ marginBottom: "25px" }}>
          Name:
          <input
          placeholder="user name"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            style={{ width: "100%",marginBottom: "25px" }}
          />
        </label>
        <br />
        <br />   
        <Button variant="outlined" type="submit" style={{ width: "100%",marginBottom: "25px" }}>
          Create new user 
        </Button>
      </form>
    </div>
  </div>
  );
};

export default CreateUser;
