import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import authImage from "../assets/images/loginImages.svg";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;

  .authImage {
    background-color: #00024c;
    padding: 20px;
    color: white;
  }
`;

// the auth componenet consists of all the secured routes
const Auth = () => {
  // destructure the userdata from the authcontext
  const { userData } = useContext(AuthContext);

  // if the userdata is available ie if the form has been filled and submitted successfully to the backend, the user should be directed to the home page to show they are logged in
  if (userData) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper>
      <div className="form">
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <div className="authImage">
        <img src={authImage} alt="logo suppose dey here" />
      </div>
    </Wrapper>
  );
};

export default Auth;
