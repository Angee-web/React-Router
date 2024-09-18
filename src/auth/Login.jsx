import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import companyName from "../assets/images/companyNameLogo.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { storeToLocalStorage } from "../utils/index";

const Wrapper = styled.div`
  background-color: #fff;
  margin: 20px 40px;

  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .logoImgWrapper {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  // state for the email and password for the login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // toast notification unction
  const notify = (msg) => toast(msg);

  // destructure the userdata state from the authcontext
  const { userData, setUserData } = useContext(AuthContext);

  const handleLogin = async (e) => {
    // prevent the default action of the form
    e.preventDefault();
    // use the login endpoint to log into the app and attach the req body
    try {
      const res = await axios.post(
        // "https://student-app-3baw.onrender.com/api/v1/auth/login/student",
        "http://localhost:3001/api/v1/auth/login/student",
        {
          email,
          password,
        }
      );

      if (res.data.status === "success") {
        notify("Login Successful");
        // on successful login store the userdata to the local storage of the app
        storeToLocalStorage("userData", res.data.data);
        // set the userdata that has been entered
        setUserData(res.data.data);
        // navigate to the home page
        navigate("/");
      }
      console.log(res);
    } catch (err) {
      notify("Login Failed");
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div className="logoContainer">
        <div className="logoImgWrapper">
          <img src={logo} alt="" />
          <img src={companyName} alt="" />
        </div>
        <div>Dark mode</div>
      </div>
      <div>
        {/* navigate to the register page onclick */}
        <button onClick={() => navigate("/auth/register")}>Sign Up</button>
      </div>

      <div>
        <form className="form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>

        <ToastContainer />
      </div>
    </Wrapper>
  );
};

export default Login;
