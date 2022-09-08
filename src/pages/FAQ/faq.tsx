import { useState } from 'react';
import ChevronDown from '../../assets/svgs/chevronDown';
import ChevronUp from '../../assets/svgs/chevronUp';
import {
  AnswerText,
  FAQHeader,
  FAQLink,
  FAQSub,
  FAQWrapper,
  QuestionBox,
  QuestionHeader,
  QuestionHeaderContainer,
} from './faq.styles';
import { faqData } from './faqData';

const FAQ = () => {
  const [currentId, setCurrentId] = useState(0);

  const handleToggle = (index: number): void => {
    setCurrentId(index);
  };

  return (
    <FAQWrapper>
      <h2 className='heading'>Frequently asked questions</h2>
      <div className='faq__container'>
        {faqData.map((item) => (
          <QuestionBox key={item.id}>
            <QuestionHeaderContainer onClick={() => handleToggle(item.id)}>
              <QuestionHeader>{item.question}</QuestionHeader>
              {item.id === currentId ? <ChevronUp /> : <ChevronDown />}
            </QuestionHeaderContainer>
            <AnswerText className={item.id === currentId ? 'open' : ''}>{item.answer}</AnswerText>
          </QuestionBox>
        ))}
      </div>
      <FAQHeader>Still have questions?</FAQHeader>
      <FAQSub>
        If you cannot find the answer to your question here, please leave us a message at{' '}
        <FAQLink>flourishfragrance@gmail.com</FAQLink> and we’d reply shortly.
      </FAQSub>
    </FAQWrapper>
  );
};

export default FAQ;
