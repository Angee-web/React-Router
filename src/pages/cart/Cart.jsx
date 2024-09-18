import { useContext, useState } from "react";
import { MartContext } from "../../contexts/MartContext";
import CartCard from "./CartCard";
import Checkout from "./Checkout";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .click {
    padding: 4px;
    border: none;
    color: white;
    background: orange;
    font-weight: bold;
  }

  .cartContent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  h2 {
    font-size: 30px;
  }

  .top {
    display: flex;
    margin-left: 38rem;
    gap: 8px;
  }
`;

const Cart = () => {
  // destructure cart from martcontext
  const { cart } = useContext(MartContext);

  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function to calculate and return the total price of items in the cart
  const totalPrice = () => {
    let sum = 0; // fnitialize sum variable to accumulate the total price
    cart.forEach((item) => {
      sum += item.price * item.quantity; // multiply price by quantity and add to sum
    });
    return sum; // return the calculated total price
  };

  // function to handle checkout button click and open the modal
  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  // function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="top">
        {/* Display the total price calculated by the totalPrice function to two decimal places */}
        <h4>Total Price: ${totalPrice().toFixed(2)}</h4>
        <button className="click" onClick={handleCheckout}>
          Checkout
        </button>
      </div>

      <h2>Your Cart</h2>
      <div className="cartContent">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => <CartCard key={item.id} item={item} />)
        )}
      </div>

      {/* Render the Checkout modal if isModalOpen is true */}
      {isModalOpen && <Checkout closeModal={closeModal} />}
    </Wrapper>
  );
};

export default Cart;
