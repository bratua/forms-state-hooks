import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { StyledContactsLi, StyledContactsUl } from './Contacts.styled';
export class Contacts extends Component {
  renderContacts = contacts => {
    return contacts.map(contact => (
      <StyledContactsLi key={contact.id}>
        {contact.name}: {contact.number}
      </StyledContactsLi>
    ));
  };

  // const filtredContacts  =

  render() {
    return (
      <Section title="Contacts">
        <StyledContactsUl>
          {this.renderContacts(this.props.contacts)}
        </StyledContactsUl>
      </Section>
    );
  }
}
