import { Component } from 'react';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Feedback/Notification/Notification';
import Box from 'components/Box/Box';

const INIT_STATE = { good: 0, neutral: 0, bad: 0 };

export class Feedback extends Component {
  state = INIT_STATE;

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  onLeaveFeedback = target => {
    if (target === 'cls') {
      this.setState(INIT_STATE);
      return;
    }

    this.setState(prevState => {
      return { [target]: prevState[target] + 1 };
    });
  };

  render() {
    const renderCondition =
      this.state.good || this.state.neutral || this.state.bad;

    const statisticsBlock = (
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback(this.state)}
        positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
      />
    );
    const notificationMsg = <Notification message="There is no feedback!!" />;

    return (
      <Box
        width="300px"
        m="20px"
        textAlign="center"
        border="2px solid"
        bc="black"
        borderRadius="10px"
        backgroundColor="#0caabf"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {renderCondition ? statisticsBlock : notificationMsg}
        </Section>
      </Box>
    );
  }
}
