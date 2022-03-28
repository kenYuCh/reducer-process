import React, { useEffect, useState } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/cart-reducer'
import store from '../../store/index'
import { create } from '../../store/crud'
import { fetchAPI1, fetchAPI2} from '../../api/dataApi'


function Shop() {
  const handleBuy = () => {
    // dispatch(addToCart(data))
  }
  return (
    <div>
      <h5>shop</h5>
      <button onClick={() => handleBuy()}> Buy </button>
    </div>
  )
}

export default Shop