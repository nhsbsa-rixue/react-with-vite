import React, { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "paypal-add-to-cart-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }

  interface Window {
    cartPaypal: any;
  }
}

const AddToCart: React.FC = () => {
  const [, setBtn] = useState<any>(null);

  

  useEffect(() => {
    if (window.cartPaypal) {
      
      setBtn(window.cartPaypal.AddToCart({ id: "GL3EHYBNES48W" }));

    }
  }, []);

  return (
    <>
    <paypal-add-to-cart-button data-id="GL3EHYBNES48W" ></paypal-add-to-cart-button>
    </>
  );
}

export default AddToCart;