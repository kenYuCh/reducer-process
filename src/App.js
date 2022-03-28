import pages from './pages/index'
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
                <Route path="/" element={<pages.Home/>}/>
                <Route path="/shop" element={<pages.Shop/>}/>
                <Route path="/movie" element={<pages.Movie/>}/>
            </Routes>
        </Router>
    </Provider>
    );
}

export default App;