import Box from 'components/Box/Box';
import { InputTitle, InputHeader } from './Input.styled';
import { nanoid } from 'nanoid';
import { Component } from 'react';

const id = nanoid();

export class Input extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, type, title, pattern, required } = this.props;
    return (
      <Box>
        <InputHeader>{name}</InputHeader>
        <label htmlFor={id}>
          <input
            id={id}
            type={type}
            name={name}
            pattern={pattern}
            title={title}
            required={required}
          />
        </label>
        <InputTitle>{title}</InputTitle>
      </Box>
    );
  }
}
