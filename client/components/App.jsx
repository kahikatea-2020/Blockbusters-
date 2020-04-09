import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

//this will be the import of all component
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Form from './Form'
import Movie from './Movie'
import Result from './Result'


const App = () => {
  return (
    <Router>
      <div className='Home'>
        <Route path='/' component={Header} />
          <h1>Our website is temporarily down, please try again later</h1>
        <Route exact path='/' component={Home} />
        <Route exact path='/result' component={Result} />
        <Route path='/' component={Footer} />
      </div>
    </Router>
  )
}

export default App
