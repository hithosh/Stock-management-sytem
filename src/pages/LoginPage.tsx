import * as React from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import imagelogin from "./../images/app-front.png";

class LoginPage extends React.Component {
  render() {
    return (
      <div >
        <img src={imagelogin} alt="login"/>
          <Signin/>
          
      </div>
    );
  }
}

export default LoginPage;