import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Title from './components/Title';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import './App.scss';

// import classNames from 'classnames';
// удобно для составления динамических классов в компоненте
// classNames(бaзовые классы -'a', 'b', {
// динамические добавить класс, те что зависят от уловия 'c': true / false})

class App extends Component {
  // стейт нужен каждый раз, поэтому храним в родителе
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : //   alert(`${contact.name} is already in contacts.`);
        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
          // contacts: [...prevState.contacts, contact],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    // this.setState({ filter: e.target.value });
  };

  // делает видимым тот контакт, который соответствует тексту поиска в инпуте
  getVisibleContact = () => {
    const { contacts, filter } = this.state;

    // "qweqwe".includes(" ")//когда пустой инпут что бы возвращало не весь массив сонтактов, а было пусто. а когда идет запрос, что бы возвращало по запросу нужные отфильтрованные контакты

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const visibleContacts = this.getVisibleContact();
    const deleteContact = this.deleteContact;

    return (
      <div className="container">
        <h1 className="visually_hidden">Phonebook</h1>

        <Title title="Phonebook" />
        <ContactForm onSubmit={addContact} />

        <Title title="Contacts" />
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          visibleContacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
// ---------------------------------------------------
// использовать именованные импорты и экспорты
// import {Button}
// export {Button}

// не нужно распылять пропсы

// ключи должны быть стабильными, те не изменяться между разными рендерами
// для ключей нельзя использовать uuid, потому что между разными рендерами key будет каждый раз новый. а для id объектов можно что бы оставить обеъкт один раз с этим айдишником

// если коллекция неизменна, то можно использрвать индекс для ключей(напр при переборе)

// библиотека для валидации форм Formik

// коллбек - функция отложенного вызова, передать ссылку на функцию
// onClick(this.setState(index)) - при клике произойдет результат выполнения/вызова этой функции(undefined), но не вызовется сама функция! не коллбек.
// onClick(() => {return this.setState(index)}) - ссылка на функцию, не вызывается. вызовется только тогда, когда по кнопке кликнут! коллбек.
