import React from "react";
import "./styles/App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./components/Users/AddUser";
import User from "./components/Users/User";
import UpdateUser from "./components/Users/UpdateUserData";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/Users/Register";
import Login from "./components/Users/Login";

function App() {
  const isUserRegister = localStorage.getItem("isUserRegister");
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {isUserRegister? <Navbar />:""}         
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/addUser" component={AddUser} />
            <Route exact path="/user/:id" component={User} />
            <Route exact path="/updateUser/:id" component={UpdateUser} />
            <Route exact path="/" component={Register} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
