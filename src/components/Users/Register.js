import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    const register_user_details = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    localStorage.setItem('added-register-users', JSON.stringify(register_user_details));

    console.log(register_user_details)
    history.push("/Login");
  };
  return (
    
<div class="container">
          <h1>Register</h1>
          {localStorage.getItem("isUserRegister") ?<span> You are already registerd </span> : "" }
          
            <form onSubmit={submitForm}>
              <center>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                <input
                                  type="number"

                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
                    <input
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                    <input
                  type="text"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                   
                <button style={{backgroundColor:"Tomato",padding:"0.7rem 0.7rem",border:"none",color:"white",fontSize:"1rem"}}>Save</button>

                {localStorage.getItem("isUserRegister") ?<span>  <Link className="navbar-brand" to="/login">
                Already registerd ? Login here     
                 </Link> </span> : "" }
 

               
              </center>          
            </form>
          </div>
    
  );
};

export default Register;
