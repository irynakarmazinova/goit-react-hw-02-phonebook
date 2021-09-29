import React, { Component } from 'react';
import s from './form.module.scss';

class Form extends Component {
  state = {
    name: '',
  };

  // для всех инпутов ввод данных
  handleInputChange = e => {
    // паттерн для инпутов у которых есть name and value, подходит для радиокнопок, но не чекбоксов
    const { name, value } = e.currentTarget;

    // вычисляемые свойства объектов
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleBtnSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
