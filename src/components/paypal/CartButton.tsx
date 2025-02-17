import React, { useState, useEffect, } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "paypal-cart-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const CartButton: React.FC = () => {
  // const cartButtonRef = useRef(null);
  const [, setCart] = useState<any>(null);

  useEffect(() => {
    if (window.cartPaypal) {
      setCart(window.cartPaypal.Cart({ id: "pp-view-cart" })); // Initialize the cart button
    }
  }, []);

  return (
    <div>
      <paypal-cart-button data-id="pp-view-cart" ></paypal-cart-button>
    </div>
  );
}

export default CartButton;