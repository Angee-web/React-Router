/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { MartContext } from "../../contexts/MartContext";

const Wrapper = styled.div`
padding: 5px;
border: 2px #ccc;
`
const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;

  img{
  width:200px;
  }
`;

const CartItemActions = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
    }
  }
`;

const CartCard = ({ item }) => {
    // destructure the functions that are needed
    const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(MartContext);

  return (
    <Wrapper>
        <CartItem>
            <CartItemDetails>
                <img src={item.image} />
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </CartItemDetails>
            <CartItemActions>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </CartItemActions>
          </CartItem>
    </Wrapper>
  )
}

export default CartCard