import React from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../store/cart-reducer'
import store from '../store/index'
const data = {
  id:1,
  name: 'apple',
  price: 50,
  quantity: 1
}
function Shop() {
  const itemsList = useSelector((state) => state.cart.itemsList); // state to reducer < name: 'cart' >,
  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(addToCart(data))
  }

  return (
    <Provider store={store}>
    <div>
      <h5>shop</h5>
      <button onClick={() => handleBuy()}> Buy </button>
    </div>
    </Provider>
  )
}

export default Shop