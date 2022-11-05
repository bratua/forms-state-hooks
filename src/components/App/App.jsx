import Box from 'components/Box/Box';
import { Component } from 'react';
import { Feedback } from 'components/Feedback/Feedback';
import { Phonebook } from 'components/Phonebook/Phonebook';

export class App extends Component {
  render() {
    return (
      <Box display="flex">
        <Feedback />
        <Phonebook />
      </Box>
    );
  }
}
