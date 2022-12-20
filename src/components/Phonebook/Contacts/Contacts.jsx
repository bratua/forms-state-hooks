import { Section } from 'components/Section/Section';
import { StyledContactsLi, StyledContactsUl } from './Contacts.styled';
import { Notification } from 'components/Feedback/Notification/Notification';
import { Filter } from 'components/Phonebook/Filter/Filter';

export const Contacts = ({
  contacts,
  onDeleteContact,
  filterValue,
  filterOnChange,
}) => {
  const renderContacts = contacts => {
    return contacts.map(contact => (
      <StyledContactsLi key={contact.id}>
        <button onClick={() => onDeleteContact(contact.id)}>Del</button>
        {contact.name}: {contact.number}
      </StyledContactsLi>
    ));
  };

  const isContactsEmpty = contacts.length === 0 && filterValue.length === 0;
  const contactFound = contacts.length > 0;
  // console.log('contacts.length > 0', contactFound);
  // console.log('isContactsEmpty', isContactsEmpty);
  // console.log('contacts', contacts);

  const contactsBlock = (
    <Section title="Contacts">
      <Filter value={filterValue} onChange={filterOnChange} />
      <StyledContactsUl>{renderContacts(contacts)}</StyledContactsUl>
      {contactFound || <Notification message="Not found" />}
    </Section>
  );
  return isContactsEmpty || contactsBlock;
};
