"use client"
import { useState } from 'react';

export default function SingleProductFaq() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };


      const faqs = [
        {
          question: 'What is the processing time for UK tourist visa?',
          answer: 'The processing time for a UK tourist visa can vary, but it typically takes around 15 working days.',
        },
        {
          question: 'What is the process for obtaining a UK visa for Indians?',
          answer: 'The process includes submitting an online application, attending a biometric appointment, and providing required documents.',
        },
        {
          question: 'How do I check the status of my application?',
          answer: 'You can check the status of your application online through the UK visa and immigration website.',
        },
        {
          question: 'Does my UK visa allow multiple entries?',
          answer: 'It depends on the type of visa you applied for. Some visas allow multiple entries while others may be single-entry only.',
        },
        {
          question: 'Is my UK visa part of Schengen visa?',
          answer: 'No, a UK visa is not part of the Schengen visa. You need a separate visa for the UK.',
        },
        {
          question: 'Can I work in the UK with a visitor visa?',
          answer: 'No, a visitor visa does not permit you to work in the UK.',
        },
        {
          question: 'Will my Schengen Visa work in London?',
          answer: 'No, a Schengen Visa is not valid for entry into the UK.',
        },
        {
          question: 'Where do I have to upload my document for a sticker visa for UK as an Indian?',
          answer: 'Documents can be uploaded through the visa application center or the online application portal, depending on the instructions provided.',
        },
        {
          question: 'How long can I stay in UK with my tourist visa?',
          answer: 'The length of stay depends on the visa type granted, typically up to 6 months for a standard visitor visa.',
        },
        {
          question: 'Does the UK provide Visa on Arrival for Indians?',
          answer: 'No, the UK does not provide visa on arrival for Indian passport holders.',
        },
        {
          question: 'Do Indian citizens need a transit visa when traveling to United Kingdom?',
          answer: 'Yes, Indian citizens may need a transit visa depending on the nature of their travel and the duration of their stay in the UK.',
        },
      ];

  return (
    <div className="flex  flex-col items-center justify-center bg-white md:py-10  mt-2 align-middle">
      <div className="heading-div">
        <h2 className="text-center text-slate-800 text-lg  font-lexend md:text-[32px] font-bold py-5">
          FAQs for United Kingdom Visa
        </h2>
      </div>
      <div className="flex  flex-col items-center rounded-md bg-white p-4 ">
        {faqs.map((faq, index) => (
          <div key={index} className="relative flex w-full flex-col pb-3">
            <article className="w-full self-center py-3">
              <button
                className="flex h-4 w-full cursor-pointer items-center justify-between bg-white"
                onClick={() => toggleOpen(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-left font-inter text-base font-medium leading-snug text-[#091e42] md:text-sm lg:text-base">
                  {faq.question}
                </span>
                <div className="h-5 w-5 p-1 text-[#0052cc] sm:h-5 sm:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="4"
                    stroke="currentColor"
                    className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-5 text-base text-[#091e42]">
                  {faq.answer}
                </div>
              )}
            </article>
            <div className="my-3 h-[1px] bg-[#CBD1DE] md:my-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
