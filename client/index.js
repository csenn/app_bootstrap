import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home/Home'
import About from './about/About'
import store from './data/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>About</Link>

        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
