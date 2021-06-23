import React from 'react'
import './app.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contacts from './components/pages/contact'
import Home from './components/pages/home'
import Stream from './components/pages/stream'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contacts} />
          <Route path='/stream' exact component={Stream} />
        </Switch>
      </Router>
    </>
  )
}

export default App
