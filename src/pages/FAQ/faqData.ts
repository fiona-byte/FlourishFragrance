interface FAQData {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQData[] = [
  {
    id: 1,
    question: 'How do I know what products to choose?',
    answer: "There is a fragrance for everyone, so you can send us a message and we'd be more than excited to help!",
  },
  {
    id: 2,
    question: 'How long does delivery take?',
    answer: 'Delivery within Lagos takes 24-48 hours while delivery outside Lagos takes 48-72 hours',
  },
  {
    id: 3,
    question: 'Do you have a refund policy?',
    answer: 'Yes we do but there are terms and conditions',
  },
  {
    id: 4,
    question: 'Do you ship internationally?',
    answer: "No we don't for now",
  },
  {
    id: 5,
    question: 'Is the website open 24/7?',
    answer: 'Yes it is',
  },
];
