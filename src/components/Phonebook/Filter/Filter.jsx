import { Component } from 'react';
import Box from 'components/Box/Box';

export const Filter = ({ value, onChange }) => (
  <Box>
    <p>Find contacts by name</p>
    <input type="text" name="filter" value={value} onChange={onChange} />
  </Box>
);
