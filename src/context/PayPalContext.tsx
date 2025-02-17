// import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

// declare global {
//   interface Window {
//     cartPaypal: any;
//   }
// }

// const PayPalContext = createContext<any>(null);

// const usePayPal = () => {
//   return useContext(PayPalContext);
// };

// interface PayPalProviderProps {
//   children: ReactNode;
// }

// const PayPalProvider: React.FC<PayPalProviderProps> = ({ children }) => {
//   const [cartPaypal, setCartPaypal] = useState<any>(null);

//   useEffect(() => {
//     if (!window.cartPaypal) {

//     const script = document.createElement("script");
//     script.src = "https://www.paypalobjects.com/ncp/cart/cart.js";
//     script.setAttribute("data-merchant-id", "8Y2C2R9PGPLKN");
//     script.addEventListener("load", () => {
//       setCartPaypal(window.cartPaypal);
//     });
//     document.body.appendChild(script);
//   }
// }, []);

//   return (
//     <PayPalContext.Provider value={cartPaypal}>
//       {children}
//     </PayPalContext.Provider>
//   );
// };

// export { usePayPal, PayPalProvider };