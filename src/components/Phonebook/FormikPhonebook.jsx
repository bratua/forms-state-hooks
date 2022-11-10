import { Component } from 'react';
import Box from 'components/Box/Box';
import { nanoid } from 'nanoid';
import { FormikForm } from 'components/Phonebook/Form/FormikForm';
import { Contacts } from 'components/Phonebook/Contacts/Contacts';
import { Filter } from 'components/Phonebook/Filter/Filter';

export class FormikPhonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmitForm = ({ name, number }) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
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
        <FormikForm onSubmitForm={this.handleSubmitForm} />
        <Filter value={this.state.filter} onChange={this.filterChange} />
        <Contacts contacts={filtredContacts} />
      </Box>
    );
  }
}
