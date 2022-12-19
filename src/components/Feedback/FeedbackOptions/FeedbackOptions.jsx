import { Component } from 'react';
import Box from 'components/Box/Box';
import { StyledBtn } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  onClick = e => {
    this.props.onLeaveFeedback(e.currentTarget.name);
    // console.log(e.currentTarget.name);
  };

  render() {
    const buttonsName = Object.keys(this.props.options);

    return (
      <Box
        display="flex"
        justifyContent="space-around"
        width="220px"
        backgroundColor="#cccaaa"
        p="5px"
        m="0 auto"
        textAlign="center"
      >
        {buttonsName.map(btnName => {
          return (
            <StyledBtn
              key={btnName}
              name={btnName}
              type="button"
              onClick={this.onClick}
            >
              {btnName}
            </StyledBtn>
          );
        })}
        <button name="cls" type="button" onClick={this.onClick}>
          CLS
        </button>
      </Box>
    );
  }
}
