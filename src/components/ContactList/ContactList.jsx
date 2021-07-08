import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations } from '../../redux/contact';
import style from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { getVisibleContacts } from '../../redux/contact/contact-selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContacts = id => dispatch(contactOperations.deleteContacts(id));

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <span className={style.textName}>{name}:</span>
          <span className={style.textNamber}>{number}</span>
          <button
            type="button"
            className={style.button}
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
