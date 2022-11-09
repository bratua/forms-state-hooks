import { Component } from 'react';
import { Section } from 'components/Section/Section';
export class Contacts extends Component {
  renderContacts = contacts => {
    return contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
    ));
  };

  // const filtredContacts  =

  render() {
    return (
      <Section title="Contacts">
        <ul>{this.renderContacts(this.props.contacts)}</ul>
      </Section>
    );
  }
}
