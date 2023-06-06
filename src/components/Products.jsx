import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cartSlice';
import _products from '../data/products';

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className='product-container'>
      <h2>Products</h2>
      {_products.map((product) => (
        <div key={product._id} className='product-item'>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

