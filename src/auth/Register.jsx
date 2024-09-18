import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import companyName from "../assets/images/companyNameLogo.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

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

const Register = () => {
  const navigate = useNavigate();
  // state for req body for sign up
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [otherName, setOtherName] = useState();
  const [age, setAge] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [lastName, setLastName] = useState();

  const notify = (msg) => toast(msg);

  // userData from authcontext
  const { userData, setUserData } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    // validation checks
    if (!email || !password || !name || !lastName || !age || !phoneNumber) {
      notify("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://student-app-3baw.onrender.com/api/v1/auth/create-account/student",
        {
          first_name: name,
          other_name: otherName,
          last_name: lastName,
          age,
          phone_number: phoneNumber,
          email,
          password,
        }
      );

      if (res.data.status === "success") {
        notify("Sign Up Successful");
        // Store user data in AuthContext
        setUserData(res.data.data);

        // Redirect to the login page or dashboard
        navigate("/auth/login");
      }
      console.log(res);
    } catch (err) {
      notify("Sign Up Failed. Please try again.");
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
        {/* navigate to login page onclick */}
        <button onClick={() => navigate("/auth/login")}>Log In</button>
      </div>

      <div>
        <form className="form">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="oname">Other Name:</label>
          <input
            type="text"
            id="oname"
            name="oname"
            required
            onChange={(e) => setOtherName(e.target.value)}
          />

          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            required
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            onChange={(e) => setAge(e.target.value)}
          />

          <label htmlFor="number">Phone Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

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

          <button type="submit" onClick={handleRegister}>
            Sign Up
          </button>
        </form>

        <ToastContainer />
      </div>
    </Wrapper>
  );
};

export default Register;

// OR

// const Register = () => {
//   const navigate = useNavigate();
//   // state for req body for sign up
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     otherName: '',
//     age: '',
//     phoneNumber: '',
//     lastName: ''
//   });

//   const notify = (msg) => toast(msg);

//   // userData from authcontext
//   const { userData, setUserData } = useContext(AuthContext);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // validation checks
//     const { email, password, name, lastName, age, phoneNumber } = formData;
//     if (!email || !password || !name || !lastName || !age || !phoneNumber) {
//       notify("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "https://student-app-3baw.onrender.com/api/v1/auth/create-account/student",
//         {
//           first_name: formData.name,
//           other_name: formData.otherName,
//           last_name: formData.lastName,
//           age: formData.age,
//           phone_number: formData.phoneNumber,
//           email: formData.email,
//           password: formData.password,
//         }
//       );

//       if (res.data.status === "success") {
//         notify("Sign Up Successful");
//         // Store user data in AuthContext
//         setUserData(res.data.data);

//         // Redirect to the login page or dashboard
//         navigate("/auth/login");
//       }
//       console.log(res);
//     } catch (err) {
//       notify("Sign Up Failed. Please try again.");
//       console.log(err);
//     }
//   };

//   return (
//     <Wrapper>
//       <div className="logoContainer">
//         <div className="logoImgWrapper">
//           <img src={logo} alt="" />
//           <img src={companyName} alt="" />
//         </div>
//         <div>Dark mode</div>
//       </div>
//       <div>
//         {/* navigate to login page onclick */}
//         <button onClick={() => navigate("/auth/login")}>Log In</button>
//       </div>

//       <div>
//         <form className="form" onSubmit={handleRegister}>
//           <label htmlFor="name">First Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             onChange={handleChange}
//             value={formData.name}
//           />

//           <label htmlFor="otherName">Other Name:</label>
//           <input
//             type="text"
//             id="otherName"
//             name="otherName"
//             onChange={handleChange}
//             value={formData.otherName}
//           />

//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             required
//             onChange={handleChange}
//             value={formData.lastName}
//           />

//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             required
//             onChange={handleChange}
//             value={formData.age}
//           />

//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="text"
//             id="phoneNumber"
//             name="phoneNumber"
//             required
//             onChange={handleChange}
//             value={formData.phoneNumber}
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             onChange={handleChange}
//             value={formData.email}
//           />

//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//             onChange={handleChange}
//             value={formData.password}
//           />

//           <button type="submit">
//             Sign Up
//           </button>
//         </form>

//         <ToastContainer />
//       </div>
//     </Wrapper>
//   );
// };