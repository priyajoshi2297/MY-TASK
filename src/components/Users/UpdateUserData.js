import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../actions/userAction";
import { useParams, useHistory } from "react-router-dom";

const UpdateUserData = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [website, setwebsite] = useState("");
  const [ids, setids] = useState(0);


  useEffect(() => {
    loaduser();
  }, []);
  useEffect(() => {
    if (user) {
      user.map((i)=>{
        setname(i.name);
        setaddress(i.address.suite);
        setemail(i.email);
        setusername(i.username);
        setwebsite(i.website);
        setids(id)
      })  
    }
  }, [user]);
  const loaduser = () => {
    dispatch(getUser(id));
  };
  const submitForm = (e) => {
    e.preventDefault();
    const update_user = {
      id: ids,
      name: name,
      address: address,
      email: email,
      username: username,
      website: website
    };

    dispatch(updateUser(update_user));
    history.push("/home");
  };
  return (
    <div className="container">
    
          <h1>Update User</h1>
         
          <form onSubmit={submitForm}>
          <center>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                    <input
                  type="text"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
                    <input
                  type="text"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
                    <input
                  type="text"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                    <input
                  type="text"
                  value={website}
                  onChange={(e) => setwebsite(e.target.value)}
                />
          
              <button style={{backgroundColor:"Tomato",padding:"0.7rem 0.7rem",border:"none",color:"white",fontSize:"1rem"}}>Update User</button>
            </center>
            </form>
    </div>
  );
};

export default UpdateUserData;
