/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// This component is designed to manage the state of a shopping cart in a React app, making it easy to add, remove, and clear items from the cart across different components.

export const MartContext = createContext(null);

const MartContextProvider = ({ children }) => {
  // initialize state for the cart
  const [cart, setCart] = useState([]);

  // function to add an item (a car object) to the cart. It takes a car object as a parameter and updates the cart state by appending the new car to the existing array of cars.
  const addToCart = (car) => {
    // find the item and contain the item
    const existingItem = cart.find((item) => item.id === car.id);

    // cart.map(...) is used to iterate over each item in the cart array.
    // For the item that matches the car.id, its quantity is incremented by 1 from 0.
    // The other items in the cart remain unchanged.if it exists set the cart ie update it
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      // if the Item Does Not Exist, Add It to the Cart:
    } else {
      setCart([...cart, { ...car, quantity: 1 }]);
    }
  };

  // remove an item from the cart using the filter method based on the id as the parameter
  const removeFromCart = (carId) => {
    setCart(cart.filter((car) => car.id !== carId));
  };

  // This function clears the entire cart by setting the cart state to an empty array.
  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (carId) => {
    // setcart is called to update the cart
    // map over every item in the array to check if the id of the current item matches the carId
    // if it does increase it by one
    setCart(
      cart.map((item) =>
        item.id === carId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (carId) => {
    // Use setCart to update the cart state
    setCart(
      cart
        // Map over each item in the cart array
        .map((item) =>
          // If the item's id matches carId and its quantity is greater than 1,
          // create a new item object with the quantity decreased by 1.
          // Otherwise, return the item unchanged.
          item.id === carId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        // After mapping, filter out any items that have a quantity of 0.
        // This ensures that items with a quantity of 0 are removed from the cart.
        .filter((item) => item.quantity > 0)
    );
  };
  

  return (
    // the component is used to pass down the cart state and the functions setCart, addToCart, removeFromCart, and clearCart to any child components that consume this context.
    // Any component wrapped by MartContextProvider can now access and modify the cart's state.

    <MartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </MartContext.Provider>
  );
};

export default MartContextProvider;
