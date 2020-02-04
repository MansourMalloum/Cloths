import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const onToken = token => {
    alert("Success ");
  };

  const priceForStripe = price * 100;

  return (
    <StripeCheckout
      token={onToken}
      image='https://sendeyo.com/up/d/f3eb2117da'
      stripeKey='pk_test_e0lybXsIza3qDvaR2hU1rMwS0012cvZZ1s'
      label='Buy now'
      name='CRW Shop Ltd'
      amount={priceForStripe}
      description={`Your Total $${price}`}
      panelLabel='Panel Now'
      shippingAddress
      billingAddress
    />
  );
};

export default StripeButton;
