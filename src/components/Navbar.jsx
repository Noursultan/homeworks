import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <nav>
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {cartItemsCount}</p>
    </nav>
  );
};

export default Navbar;
