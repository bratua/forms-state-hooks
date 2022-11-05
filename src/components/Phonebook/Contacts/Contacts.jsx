import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Phonebook/Filter/Filter';
export class Contacts extends Component {
  renderContacts = ({ contacts }) => {
    return contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
    ));
  };

  render() {
    return (
      <Section title="Contacts">
        <Filter />
        <ul>{this.renderContacts(this.props.contacts)}</ul>
      </Section>
    );
  }
}
