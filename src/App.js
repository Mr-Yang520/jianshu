import 'antd/dist/antd.css'
import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import ScrollToTop from './common/js/ScrollTop'
import Header from './components/Header'
import Detail from './pages/detail'
import Home from './pages/home'
import Login from './pages/login'
import store from './store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <ScrollToTop>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home/login" exact component={Login}></Route>
          <Route path="/home/detail" exact component={Detail}></Route>
        </ScrollToTop>
      </Provider>
    </div>
  )
}

export default App
