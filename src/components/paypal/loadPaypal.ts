// export default function loadPaypal(callback: (cartPaypal: any) => void) {
//   if (!window.cartPaypal) {
//     const script = document.createElement("script");
//     script.src = "https://www.paypalobjects.com/ncp/cart/cart.js";
//     script.setAttribute("data-merchant-id", "8Y2C2R9PGPLKN");
//     script.onload = () => {
//       if (window.cartPaypal) {
//         callback(window.cartPaypal);
//       }
//     };
//     document.body.appendChild(script);
//   } else {
//     callback(window.cartPaypal);
//   }
// }
