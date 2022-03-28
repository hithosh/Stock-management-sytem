import * as React from "react";
import Signup from "../components/Signup";
import imagelogin from "./../images/app-front.png";

class RegisterUserPage extends React.Component {
  render() {
    return (
      <div >
        <img src={imagelogin} alt="login"/>
          <Signup/>
          
      </div>
    );
  }
}

export default RegisterUserPage;