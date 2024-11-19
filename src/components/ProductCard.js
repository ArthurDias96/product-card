import React, { useState } from "react";
import "./ProductCard.css"; 
import { FaCheck } from "react-icons/fa";


function ProductCard({ product }) {
  const [added, setAdded] = useState(product.added);
  const [wishlist, setWishlist] = useState(product.wishlist);

  const handleAdd = () => setAdded(!added);
  const handleWishlist = () => setWishlist(!wishlist);

  return (
    <div className={`card ${added ? "added" : ""}`}>
      <img src={product.image}/>
      <button className="wishlist-btn" onClick={handleWishlist}>
  {wishlist ? (
    <img
      src="https://i.postimg.cc/0NLYK94t/wishlist-ativa.png"
      alt="Wishlist Ativa"
    />
  ) : (
    <img
      src="https://i.postimg.cc/C5RqLXhG/wishlist.png"
      alt="Wishlist Inativa"
    />
  )}
</button>
      <h3>{product.name}</h3>
      <h2>R${product.originalPrice.toFixed(2)}</h2>
      <h4>R$ {product.discountedPrice.toFixed(2)}</h4>
      <h1>em até {product.installmentPrice}<span>10x de R$259,90</span> sem juros</h1>
      <button
  className={`add-btn ${added ? "added" : "add"}`}
  onClick={handleAdd}
>
  {added && <FaCheck className="check-icon" />}
  {added ? "Adicionado" : "Adicionar"}
</button>


      
    </div>
  );
}

export default ProductCard;
