import React from "react";
import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Monitor LED 27\" Gamer Curvo Samsung, 1920 x 1080, 240 Hz, HDMI, DP, Gsync Série CRG50",
    originalPrice:2813.99,
    discountedPrice: 2599.0,
    installmentPrice:"",
    image: "https://i.postimg.cc/g2HRC6HV/monitor.png",
    added: false,
    wishlist: false,
  },
  {
    id: 2,
    name: "Monitor LED 27\" Gamer Curvo Samsung, 1920 x 1080, 240 Hz, HDMI, DP, Gsync Série CRG50",
    originalPrice:2813.99,
    discountedPrice: 2599.0,
    installmentPrice:"",
    image: "https://i.postimg.cc/g2HRC6HV/monitor.png",
    added: false,
    wishlist: false,
  },
];

function App() {
  return (
    <div className="App">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
