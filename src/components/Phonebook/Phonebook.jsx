import { Component } from 'react';
import Box from 'components/Box/Box';
import { nanoid } from 'nanoid';
// import { Input } from './Input/Input';
// import { Section } from 'components/Section/Section';
import { Form } from 'components/Phonebook/Form/Form';
import { Contacts } from 'components/Phonebook/Contacts/Contacts';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleSubmitForm = ({ name, number }) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  render() {
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
        <Contacts contacts={this.state} />
      </Box>
    );
  }
}
