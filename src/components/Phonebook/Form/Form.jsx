import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
// import Box from 'components/Box/Box';
import { StyledForm } from './Form.styled';

export const Form = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);

        break;

      default:
        return;
    }
  };

  const submit = e => {
    e.preventDefault();
    onSubmitForm({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Section title="Phonebook">
      <StyledForm onSubmit={submit}>
        <label htmlFor={nameId}>
          <h3>Name</h3>
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          ></input>
        </label>

        <label htmlFor={numberId}>
          <h3>Number</h3>
          <input
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </StyledForm>
    </Section>
  );
};
