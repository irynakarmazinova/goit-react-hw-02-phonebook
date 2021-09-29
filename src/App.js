import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import Title from './components/Title';
import Form from './components/Form';

import './App.scss';

// var classNames = require('classnames');

class App extends Component {
  state = {
    contacts: [],
  };

  handleBtnSubmit = e => {
    e.preventDefault();

    // this.props.onSubmit(this.state.name);
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="container">
        <h1 className="visually_hidden">Contacts book</h1>
        <Title title="Phonebook" />
        <Form />

        <Title title="Contacts" />
        <ul>
          <li>{contacts}</li>
        </ul>
      </div>
    );
  }
}

export default App;
// ---------------------------------------------------
// использовать именованные импорты и экспорты
// import {Button}
// export {Button}
