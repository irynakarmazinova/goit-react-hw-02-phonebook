import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

// со свойства props деструктуризирую свойство contacts
const Contacts = ({ onDeleteContact, visibleContacts }) => (
  <ul className={s.list}>
    {visibleContacts.map(({ id, inputText: { name, number } }) => (
      // {visibleContacts.map(({ id, name, number }) => (

      <li key={id} className={s.item}>
        <div className={s.box}>
          <p className={s.name}>{name}:</p>
          <p className={s.number}>{number}</p>
          <button className={s.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default Contacts;
