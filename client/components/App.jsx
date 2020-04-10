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
import Library from './Library'


const App = () => {
  return (
    <Router>
    <Route path='/' component={Header} />
      <div className='home'>
        <Route exact path='/' component={Home} />
        <Route exact path='/Result/:choice' component={Result} />
        <Route exact path='/Form' component={Form} />
        <Route exact path='/Movie/:id' component={Movie} />
      </div>
    <Route path='/' component={Footer} />
    </Router>
  )
}

export default App
