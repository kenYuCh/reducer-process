# Basic operation and process of reducer for @reduxjs/toolkit

### Step1 - Reducer (./store/) :

    (1) set createSlice <- (./store/cart-reducer.js)
    (2) set configureStore <- (./store/index.js)

### Step2 - Router (./App-provider):

    import { Provider } from 'react-redux' 
    import store from './store/index'

    // Wrap it up with the provider (outermost layer)
    <Provider store={store}>
        <Router>
            ...
        </Router>
    </Provider>

### Step3 - Shop Components (./pages/shop):
    `
    import { useSelector, useDispatch } from 'react-redux'
    import { addToCart, removeFromCart } from '../store/cart-reducer'

    (1) through <useSelector()> get store-reducer-initialState
        ex: 
        const itemsList = useSelector((state) => state.cart.itemsList);
    (2) through <useDispatch()> dispatch reducer-function
        ex:
        const handleBuy = () => {
            dispatch(addToCart(object))
        }
    `   