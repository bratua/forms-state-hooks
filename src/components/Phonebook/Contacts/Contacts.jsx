import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { StyledContactsLi, StyledContactsUl } from './Contacts.styled';
import { Notification } from 'components/Feedback/Notification/Notification';
import { Filter } from 'components/Phonebook/Filter/Filter';

export class Contacts extends Component {
  renderContacts = contacts => {
    return contacts.map(contact => (
      <StyledContactsLi key={contact.id}>
        <button onClick={() => this.props.onDeleteContact(contact.id)}>
          Del
        </button>
        {contact.name}: {contact.number}
      </StyledContactsLi>
    ));
  };

  render() {
    const { contacts } = this.props;
    const isContactsEmpty =
      contacts.length === 0 && this.props.filterValue.length === 0;
    const contactFound = contacts.length > 0;

    console.log(contactFound);
    const contactsBlock = (
      <Section title="Contacts">
        <Filter
          value={this.props.filterValue}
          onChange={this.props.filterOnChange}
        />
        <StyledContactsUl>{this.renderContacts(contacts)}</StyledContactsUl>
        {contactFound || <Notification message="Not found" />}
      </Section>
    );
    return isContactsEmpty || contactsBlock;
  }
}
