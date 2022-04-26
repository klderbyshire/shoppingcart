import "./ProductTile.css";

function ProductTile({ title, image, price, addToBasket, id }) {
  return (
    <div className="product-tile">
      <h3>{title}</h3>
      <img className="product-images" src={image} alt={title} />
      <h4>£{price}</h4>
      <button onClick={() => addToBasket(id)}>Add to Basket</button>
    </div>
  );
}

export default ProductTile;

// clicking Add To Basket will place the item into a new array
// mapping over the array to display the items
// include a check to make sure the item doesn't already exist
// if already exist, increase the quantity by 1 to indicate it is in the basket
// if not already there, then add it to the array to appear inside the basket
// if there (but not required) have an option to decrease the quantity and remove the item from the array
