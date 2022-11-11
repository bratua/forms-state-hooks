import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { StyledContactsLi, StyledContactsUl } from './Contacts.styled';

export class Contacts extends Component {
  renderContacts = contacts => {
    return contacts.map(contact => (
      <StyledContactsLi key={contact.id}>
        {contact.name}: {contact.number}
        <button onClick={() => this.props.onDeleteContact(contact.id)}>
          Del
        </button>
      </StyledContactsLi>
    ));
  };

  render() {
    const { contacts } = this.props;
    return (
      <Section title="Contacts">
        <StyledContactsUl>{this.renderContacts(contacts)}</StyledContactsUl>
      </Section>
    );
  }
}
