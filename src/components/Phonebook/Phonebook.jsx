import { Component } from 'react';
import Box from 'components/Box/Box';
import { nanoid } from 'nanoid';
// import { Input } from './Input/Input';
// import { Section } from 'components/Section/Section';
import { Form } from 'components/Phonebook/Form/Form';
import { Contacts } from 'components/Phonebook/Contacts/Contacts';
import { Filter } from 'components/Phonebook/Filter/Filter';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmitForm = ({ name, number }) => {
    if (this.checkSameName(name)) {
      return alert(`${name} уже в списке контактов!`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  checkSameName = name => {
    return this.state.contacts.find(el => el.name === name);
  };

  deleteContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== idContact
        ),
      };
    });
  };

  filterChange = e => {
    const filterNormalize = e.currentTarget.value.toLowerCase();
    this.setState({ filter: filterNormalize });
  };

  filtred = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  render() {
    const filtredContacts = this.filtred();

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
        <Form onSubmitForm={this.handleSubmitForm} />
        <Filter value={this.state.filter} onChange={this.filterChange} />
        <Contacts
          contacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
