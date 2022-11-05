import { Component } from 'react';
import Box from 'components/Box/Box';
import { StyledLi } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <Box as="ul" display="flex" flexDirection="column">
        <StyledLi>Good: {good}</StyledLi>
        <StyledLi>Neutral: {neutral}</StyledLi>
        <StyledLi>Bad: {bad}</StyledLi>
        <StyledLi>Total: {total}</StyledLi>
        <StyledLi>Positive (%): {positivePercentage}%</StyledLi>
      </Box>
    );
  }
}
