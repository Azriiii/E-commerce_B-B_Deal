import React from "react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51M4k9ZD5B44V6bAjqiF8fbbn3IGuXcE0ZoEBKYRU4Zvgw1Hwjo12Fd57dn1PNPhOHRVzgJyXWk3WefJaKPKJvVk2008UfygYWa";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  //const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        //navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken/*,navigate*/]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifycontent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please Wait...</span>
      ) : (
        <StripeCheckout
          name="BBshop"
          image="https://img.freepik.com/premium-vector/handshake-business-deal-logo-design_23987-880.jpg?w=740"
          billingAddress
          shippingAddress
          description="Your total is 20$"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              align: "center",
              borderRadius: 5,
              padding: "28px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};
export default Pay;
