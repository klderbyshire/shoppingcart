import "./ProductTile.css";

function ProductTile({ title, image, price }) {
  return (
    <div className="product-tile">
      <h3>{title}</h3>
      <img className="product-images" src={image} alt={title} />
      <h4>£{price}</h4>
      <button>Add to Basket</button>
    </div>
  );
}

export default ProductTile;
