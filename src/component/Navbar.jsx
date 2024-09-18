import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TiShoppingCart } from "react-icons/ti";
import { MartContext } from "../contexts/MartContext";
import { AuthContext } from "../contexts/AuthContext";
//NavLink allows styling
//but Link doesn't allow styling

const Wrapper = styled.nav`
  // if the background is dark it should be black, if it is light it should be white
  background-color: ${(props) => (props.theme === "dark" ? "#333" : "#fff")};
  // if the background is dark the text color should be white and black when background is white
  color: ${(props) => (props.theme === "dark" ? "white" : "#333")};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
    list-style: none;
  }

  a {
    // if the background is dark the text color should be white and black when background is white
    color: ${(props) => (props.theme === "dark" ? "white" : "#333")};
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid orange;
      rotate: 50deg;
      transition: 0.3s;
    }
  }

  .active {
    border-bottom: 2px solid orange;
    color: orange;
  }

  .dropdownContainer {
    position: relative;

    ul {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #333;
      display: none;
      list-style: none;
      padding: 0.5rem;
      border-radius: 4px;
    }

    &:hover ul {
      display: block;
    }
  }

  .cartContainer {
    position: relative;
    width: 20px;
    height: 20px;

    p {
      position: absolute;
      top: -10px;
      right: 5px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .click {
    margin-left: 38rem;
    padding: 4px;
    border: none;
    color: white;
    background: orange;
    font-weight: bold;
  }
`;

const ToggleButton = styled.div`
  height: 30px;
  width: 50px;
  background: ${(props) => (props.theme === "dark" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#333")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Log = styled.div`
  padding: 4px;
  border: 1px solid black;
`;
const Navbar = () => {
  // destructure the state for the theme from themecontext
  // ThemeContext: Used to get the current theme (light or dark) and the toggleTheme function to switch between themes.
  const { theme, toggleTheme } = useContext(ThemeContext);

  // MartContext: Used to get the cart object, which is used to display the number of items in the shopping cart.
  // Destructure the cart state from MartContext to display the cart count
  const { cart } = useContext(MartContext);

  // AuthContext: Provides the logOut function, which is called when the "Log Out" button is clicked.

  // Destructure the logOut function from AuthContext to handle logout
  const { logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <Wrapper theme={theme}>
      <h1>AU</h1>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>

        <li className="dropdownContainer">
          <NavLink activeClassName="active" to="/services">
            Services
          </NavLink>

          <ul>
            <li>
              <Link to="/services/CarRepair">Car Repair</Link>
            </li>
            <li>
              <Link to="/services/CarHire">Car Hire</Link>
            </li>
          </ul>
        </li>

        <li className="dropdownContainer">
          <NavLink activeClassName="active" to="/student">
            Students
          </NavLink>
        </li>
        <li className="dropdownContainer">
          <NavLink activeClassName="active" to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/mart">
            Mart
          </NavLink>
        </li>
      </ul>
      {/* Theme toggle button */}
      <ToggleButton theme={theme} onClick={toggleTheme}>
        Toggle
      </ToggleButton>
      {/* Shopping cart icon with cart count */}
      <div className="cartContainer" onClick={goToCart}>
        <p>{cart?.length || 0}</p>
        <NavLink activeClassName="active" to="/cart">
          <TiShoppingCart />
        </NavLink>
      </div>
      {/* Log Out button */}
      <Log onClick={logOut}>Log Out</Log>
    </Wrapper>
  );
};

export default Navbar;
