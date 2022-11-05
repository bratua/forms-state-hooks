import { Component } from 'react';
import Box from 'components/Box/Box';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Box>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={this.handleFilterChange} />
      </Box>
    );
  }
}
