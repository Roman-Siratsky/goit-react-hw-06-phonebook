import React from 'react'
import { Component } from 'react';
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import ContactList from './components/ContactList'
 


const App = () => {
    return (
    <div className="App">
        <h1>PhoneBook</h1>
          <ContactForm/>
        <h2>Contacts</h2>
          <Filter/>
        <ul>
          <ContactList/>
        </ul>
    </div>
  )
} 



export default App;
