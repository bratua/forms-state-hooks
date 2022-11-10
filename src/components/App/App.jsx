import Box from 'components/Box/Box';
import { Component } from 'react';
import { Feedback } from 'components/Feedback/Feedback';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { FormikPhonebook } from 'components/Phonebook/FormikPhonebook';

export class App extends Component {
  render() {
    return (
      <Box display="flex">
        <Feedback />
        <Phonebook />
        <FormikPhonebook />
      </Box>
    );
  }
}
