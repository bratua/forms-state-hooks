import { useState } from 'react';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Feedback/Notification/Notification';
import Box from 'components/Box/Box';
// import { useEffect } from 'react';

const INIT_STATE = { good: 0, neutral: 0, bad: 0 };

export const Feedback = () => {
  const [good, setGood] = useState(INIT_STATE.good);
  const [neutral, setNeutral] = useState(INIT_STATE.neutral);
  const [bad, setBad] = useState(INIT_STATE.bad);
  // const [totalFeedback, setTotalFeedback] = useState(0);
  // const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] =
  useState(0);

  // useEffect(() => {
  //   const countTotalFeedback = () => {
  //     return good + neutral + bad;
  //   };

  //   const countPositiveFeedbackPercentage = () => {
  //     return Math.round((good * 100) / (good + neutral + bad));
  //   };

  //   setTotalFeedback(countTotalFeedback());
  //   setPositiveFeedbackPercentage(countPositiveFeedbackPercentage());
  // }, [bad, good, neutral]);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  const onLeaveFeedback = target => {
    switch (target) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      case 'cls':
        setGood(0);
        setBad(0);
        setNeutral(0);
        break;

      default:
        break;
    }

    if (target === 'cls') {
      setGood(0);
      setBad(0);
      setNeutral(0);
      return;
    }
  };

  const renderCondition = good || neutral || bad;
  const notificationMsg = <Notification message="There is no feedback!!" />;
  const statisticsBlock = (
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback()}
      positivePercentage={countPositiveFeedbackPercentage()}
    />
  );

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
          options={INIT_STATE}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {renderCondition ? statisticsBlock : notificationMsg}
      </Section>
    </Box>
  );
};
