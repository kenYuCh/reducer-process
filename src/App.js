import Home from './pages/Home'
import Shop from './pages/Shop'
import NavBar from './navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
function App(){
    return (
    <Provider store={store}>
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
            </Routes>
        </Router>
    </Provider>
    );
}

export default App;