import React, { useState } from "react";
import shortid from "shortid";
import { createUser } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [website, setwebsite] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      id: shortid.generate(),
      name: name,
      address: address,
      email: email,
      username: username,
      website: website
    };

    dispatch(createUser(new_post));
    history.push("/home");
  };
  return (
    
<div class="container">
          <h1>Add User</h1>
            <form onSubmit={submitForm}>
              <center>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                    <input
                  type="text"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
                    <input
                  type="text"
                  placeholder="Enter User Name"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
                    <input
                  type="text"
                  placeholder="Enter Email Id"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                    <input
                  type="text"
                  placeholder="Enter Website Name"
                  value={website}
                  onChange={(e) => setwebsite(e.target.value)}
                />
                <button style={{backgroundColor:"Tomato",padding:"0.7rem 0.7rem",border:"none",color:"white",fontSize:"1rem"}}>Add New Post</button>
              </center>          
            </form>
          </div>
    
  );
};

export default AddUser;
