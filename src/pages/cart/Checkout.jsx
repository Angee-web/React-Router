/* eslint-disable react/prop-types */
import styled from "styled-components";
import { MartContext } from "../../contexts/MartContext";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Backdrop)`
  .container {
    display: flex;
    justify-contents: center;
    gap: 10px;
    background: #fff;
    border-radius: 8px;
    width: 80vw;
    height: 80vh;
    padding: 5px;

    h3 {
      font-weight: bold;
    }

    .form {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 15px;
      width: 50px;
    }

    .order {
      flex: 1;
      margin-top: 20px;
      line-height: 25px;
      background: orange;
      color: white;
      padding: 5px;

      .orderList {
        border-top: 1px solid #ccc;

        .list {
          border-bottom: 1px solid #ccc;
        }
      }
    }

    .close-button {
      height: 20px;
      margin-bottom: 39rem;
      padding: 4px;
      border: none;
      background: red;
      color: white;
      font-weight: bold;
      cursor: pointer;
      align-self: flex-end;
    }
  }
`;

const Checkout = ({ closeModal }) => {
  // Destructure the cart from the context
  const { cart, clearCart } = useContext(MartContext);

  // For the subtotal price
  const subTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum;
  };

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    lgt: "",
    paymentMethod: "",
  });

  const notify = (msg) => toast(msg);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.phoneNumber &&
      formData.lgt &&
      formData.paymentMethod
    ) {
      // Clear the cart
      clearCart();
      notify("Order placed successfully");

      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        lgt: "",
        paymentMethod: "",
      });
    } else {
      notify("Please fill in all fields");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <button className="close-button" onClick={closeModal}>
          X
        </button>

        <div className="form">
          <h3>Shipping Address Within Lagos</h3>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            required
            onChange={handleInputChange}
          />

          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            required
            onChange={handleInputChange}
          />

          <label htmlFor="lgt">Local Government Area:</label>
          <select id="lgt" name="lgt" required onChange={handleInputChange}>
            <option value=""> Local Government Area</option>
            <option value="Agege">Agege</option>
            <option value="Ajeromi-Ifelodun">Ajeromi-Ifelodun</option>
            <option value="Alimosho">Alimosho</option>
            <option value="Amuwo-Odofin">Amuwo-Odofin</option>
            <option value="Apapa">Apapa</option>
            <option value="Badagry">Badagry</option>
            <option value="Epe">Epe</option>
            <option value="Eti-Osa">Eti-Osa</option>
            <option value="Ibeju-Lekki">Ibeju-Lekki</option>
            <option value="Ifako-Ijaiye">Ifako-Ijaiye</option>
            <option value="Ikeja">Ikeja</option>
            <option value="Ikorodu">Ikorodu</option>
            <option value="Kosofe">Kosofe</option>
            <option value="Lagos Island">Lagos Island</option>
            <option value="Lagos Mainland">Lagos Mainland</option>
            <option value="Mushin">Mushin</option>
            <option value="Ojo">Ojo</option>
            <option value="Oshodi-Isolo">Oshodi-Isolo</option>
            <option value="Shomolu">Shomolu</option>
            <option value="Surulere">Surulere</option>
          </select>

          <label htmlFor="age">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            onChange={handleInputChange}
          />

          <label htmlFor="number">Phone Number:</label>
          <input
            type="text"
            id="number"
            name="phoneNumber"
            required
            checked={formData.phoneNumber === "phoneNumber"}
            onChange={handleInputChange}
          />

          <div className="pay">
            <h4>Payment Method:</h4>
            <div>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  checked={formData.paymentMethod === "Credit Card"}
                  onChange={handleInputChange}
                />
                Credit Card
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  checked={formData.paymentMethod === "PayPal"}
                  onChange={handleInputChange}
                />
                PayPal
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Bank Transfer"
                  checked={formData.paymentMethod === "Bank Transfer"}
                  onChange={handleInputChange}
                />
                Bank Transfer
              </label>
            </div>
          </div>

          <button onClick={handleOrder}> Place Order</button>
        </div>

        <div className="order">
          <h3>Your Order Summary</h3>
          <p>Subtotal: ${subTotal().toFixed(2)}</p>
          <div className="orderList">
            {cart.map((item) => (
              <div className="list" key={item.id}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer />
    </Wrapper>
  );
};

export default Checkout;
