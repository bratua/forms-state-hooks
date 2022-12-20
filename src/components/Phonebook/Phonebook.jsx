import { useState } from 'react';
import Box from 'components/Box/Box';
import { nanoid } from 'nanoid';
// import { Input } from './Input/Input';
// import { Section } from 'components/Section/Section';
import { Form } from 'components/Phonebook/Form/Form';
import { Contacts } from 'components/Phonebook/Contacts/Contacts';

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmitForm = ({ name, number }) => {
    if (checkSameName(name)) {
      return alert(`${name} уже в списке контактов!`);
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { name, number, id: nanoid() },
    ]);
  };

  const checkSameName = name => {
    return contacts.find(el => el.name === name);
  };

  const deleteContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
  };

  const filterChange = e => {
    const filterNormalize = e.currentTarget.value.toLowerCase();
    setFilter(filterNormalize);
  };

  const filtred = () => {
    // const { filter, contacts } = this.state;
    // console.log('contacts', contacts);
    // console.log('filter', filter);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  // console.log('filtred', filtred());

  // const filtredContacts = filtred();

  return (
    <Box
      width="300px"
      m="20px"
      textAlign="center"
      border="2px solid"
      bc="black"
      borderRadius="10px"
      backgroundColor="#0caabf"
      pb="20px"
    >
      <Form onSubmitForm={handleSubmitForm} />
      <Contacts
        contacts={filtred()}
        onDeleteContact={deleteContact}
        filterValue={filter}
        filterOnChange={filterChange}
      />
    </Box>
  );
};
