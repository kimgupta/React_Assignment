import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from "../../images/illustration 1.png";
import UserIcon from "../../images/user.svg";
import EyeIcon from "../../images/eye.svg";
import SunIcon from "../../images/sun.svg";
import SunIconLight from "../../images/sun copy.svg"
// import logo from "../../images/Layer 2.svg";
import vector1 from "../../images/Vector 2.png";
import vector2 from "../../images/Vector 3.png";
import vector3 from "../../images/Elements-organic-shape-line-dash-3.svg";
// import lightlogo from "../../images/Montex Logo 1.png";


const LoginPage=()=>{

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleThemeToggle = () => {
      setIsDarkTheme((prevTheme) => !prevTheme);
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Get the history object from react-router-dom
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (username === "admin" && password === "admin") {
        // Navigate to Hello page if both username and password are correct
        toast.success('Login Successful', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(function () {
            navigate("/hello");
          }, 3000);
      } else {
        toast.error('Invalid Credentials try User: admin Password: admin', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      }
    };

    return(
        <>
            <section id="login-page" className={isDarkTheme ? "dark-theme" : ""}>
                <div className="wrapper-card">
                    <div id="left-card" className={`left-card ${isDarkTheme ? 'dark-theme' : ''}`}>
                        <img style={{position:"absolute",top:"0",left:"2%"}} src={vector1} alt="" />
                        <img style={{position:"absolute",bottom:"0",right:"0",width:"300px"}} src={vector2} alt="" />
                        <img style={{position:"absolute",bottom:"10%",left:"10%",width:"80px"}} src={vector3} alt="" />
                        <img style={{position:"absolute",top:"10%",right:"10%",transform:"rotate(-50deg)",width:"80px"}} src={vector3} alt="" />
                        <div>
                            <h1 style={{fontWeight:"900"}}>One Stop, Many Solution</h1>
                            <p>One Solution that Speed up your Device Reports and Make Efficient way to organize your data.</p>
                            <img style={{objectFit:"cover"}} src={image1} alt="" />
                        </div>
                    </div>


                    <div className="right-card">
                        <button  className={`sun-btn ${isDarkTheme ? 'dark-theme' : ''}`} onClick={handleThemeToggle}> {isDarkTheme ? (
                                        <img className="dark-logo" src={SunIconLight} alt="" />
                                    ) : (
                                        <img className="logo" src={SunIcon} alt="" />
                                    )}</button>
                        <div className="form">
                            <form onSubmit={handleFormSubmit}>
                                <div style={{lineHeight:"40px"}}>
                                <h2 style={{ color: '#a1e887' ,fontSize:"4.4rem"}}>Login</h2>
                                {/* {isDarkTheme ? (
                                        <img className="dark-logo" src={lightlogo} alt="" />
                                    ) : (
                                        <img className="logo" src={logo} alt="" />
                                    )} */}
                                    <p className="para">Sign In to your account</p>    
                                </div>
                                <div className="input-feild-wrapper">
                                    <div className="input-field-container" >
                                        <input className="input-field"
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={handleUsernameChange}
                                        />
                                        <img src={UserIcon} alt="" className="user-icon" />
                                    </div>
                                    <div className="input-field-container" >
                                        <input 
                                            className="input-field"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <img src={EyeIcon} alt="" className="user-icon" />
                                    </div>
                                    <div className="" style={{display:"flex", flexDirection:"row", justifyContent:"space-between",width:"100%"}}>
                                        <div style={{display:"flex", flexDirection:"row", gap:"8px", fontSize:"1.5rem"}}>
                                            <input type="checkbox" />
                                            <p>Remeber me </p>  
                                        </div>
                                        <div>
                                            <p style={{color:"#65B127",fontSize:"1.4rem"}}>Forgot Password</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={`login-btn ${isDarkTheme ? 'dark-theme' : ''}`} type="submit">Login</button>
                            </form>
                        </div>
                        <div className="footer">
                            <p>2023 All rights reserved</p>
                            <p>Privacy Policy</p>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
                    style={{fontSize:"14px"}}
                />
        </>
    );
};


export default LoginPage;