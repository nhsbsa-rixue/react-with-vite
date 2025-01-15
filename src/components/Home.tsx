import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      
      <section id="intro">
        <h2>Introduction</h2>
        <p>This is the introduction section of the Home Page.</p>
      </section>
      
      <section id="products">
        <h2>Our Products</h2>
        <p>Here are some of our featured products.</p>
        {/* Add product details here */}
      </section>
      
      <footer>
        <h2>Footer</h2>
        <p>Contact us at contact@foreverflowers.com</p>
      </footer>
    </div>
  );
};

export default Home;
