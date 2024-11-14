import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Qargoquote?",
      answer: "Qargoquote is Qatar’s first B2B logistics marketplace, connecting importers with logistics service providers to streamline shipping quotes and service arrangements.",
    },
    {
      question: "How does the subscription model work?",
      answer: "Qargoquote offers weekly, monthly, and annual subscription plans. Fees are non-refundable, and subscriptions renew automatically unless canceled.",
    },
    {
      question: "Does Qargoquote handle payments?",
      answer: "No, payments are arranged directly between importers and service providers. We do not facilitate or mediate financial transactions.",
    },
    {
      question: "How does the quote process work for importers?",
      answer: "Importers post detailed shipment requests. Service providers then submit quotes, which importers can compare based on cost, ratings, and service terms before confirming one.",
    },
    {
      question: "Can service providers see the importer’s identity?",
      answer: "No, importer identities remain hidden until a quote is confirmed. If a service provider has documented, proven bad history with the importer, they can reject the service.",
    },
    {
      question: "How are disputes handled?",
      answer: "Users can file complaints related to payment or service quality through our dispute system. Qargoquote will mediate the issue and take appropriate action based on evidence.",
    },
    {
      question: "How does the rating and review system work?",
      answer: "Both importers and service providers are encouraged to leave honest feedback after each transaction. Reviews are monitored to ensure authenticity, and manipulative practices are penalized.",
    },
    {
      question: "What security measures does Qargoquote use?",
      answer: "We use data encryption and two-factor authentication to protect user data. Service provider details are kept confidential until a quote is accepted.",
    },
    {
      question: "Can service providers reject a confirmed service request?",
      answer: "Yes, if they have documented, proven bad history with the importer. They must notify Qargoquote and provide evidence for review.",
    },
    {
      question: "How do I contact Qargoquote for support?",
      answer: "You can reach us via email, phone, or live chat on our website for assistance with any issues or questions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-8" id="FAQ">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions (FAQ)</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left py-3 text-lg font-medium text-gray-800"
            >
              {faq.question}
              <span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
