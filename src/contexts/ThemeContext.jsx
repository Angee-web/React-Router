/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// this component is designed to change the color theme of the app wherever it is implemented
export const ThemeContext = createContext();

// component is used to pass down the theme state and the toggleTheme function to any child components that consume this context.
// Any component wrapped by ThemeContextProvider can now access the current theme and the function to toggle the theme.
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // function to change the theme of the component from light to dark
  //  It checks the current theme (prevTheme) and switches it to the opposite theme. If the current theme is "light", it changes to "dark", and vice versa.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
