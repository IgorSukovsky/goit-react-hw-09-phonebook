import React, { useState } from 'react';
import style from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/contact';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChenge = event => {
    const { name, value } = event.currentTarget;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  const hendleSubmit = event => {
    event.preventDefault();

    dispatch(contactOperations.addContacts(state));
    reset();
  };

  return (
    <form className={style.ContactForm} onSubmit={hendleSubmit}>
      <label className={style.label}>Name</label>
      <input
        className={style.input}
        value={state.name}
        onChange={handleChenge}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label className={style.labelNamber}>Number</label>
      <input
        className={style.input}
        value={state.number}
        onChange={handleChenge}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button type="submit" className={style.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
