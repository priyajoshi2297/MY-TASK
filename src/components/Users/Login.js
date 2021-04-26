import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [alert, setalert] = useState("");
  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    var jsonString = JSON.parse(localStorage.getItem("added-register-users"));
    var retrievedDatas = [];
    retrievedDatas.push(jsonString)
    retrievedDatas.map((i)=>{
        if((i.email  == email) && (i.password == password)){
            history.push("/home");
        }
        else{
            setalert("Error Please Enter valid login id and password")
        }    
    })
    localStorage.setItem("isUserRegister",true)
  };
  return (            
        <div className="container">
                <h1>Login</h1>
                    <form onSubmit={submitForm}>
                    <center>               
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
                        <br></br>
                        <span> {alert} </span>
                    </center>          
                    </form>
                </div>
            
  );
};

export default Login;
