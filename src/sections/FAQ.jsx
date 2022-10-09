import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function FAQ() {
  const [open, setOpen] = useState(1);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  const customAnimation = {
    mount: { scale: 1, opacity: 1 },
    unmount: { scale: 0.99, opacity: 0 },
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const faqs = [];
  faqs.push({question: 'What is Hacktoberfest?', answer: 'Hacktoberfest is the biggest Open-Source event that encourages newbies to participate in Open Source and create their 1st meaningful project. It is a festival that is organized every year in October where many students or developers contribute to open source.'})
  faqs.push({question: 'What is Neofest?', answer: 'Navrachana University, Vadodara is organizing a technical event “NEOFEST” in accordance with HacktoberFest. This event generally focuses on the Open-Source environment which will provide immense exposure to the participants.'})
  faqs.push({question: 'When and where will be the event?', answer: 'The Event is going to be held on 15th and 16th of October, in the Auditorium(5th Floor) of Navrachana University '})
  faqs.push({question: 'How long will be the event?', answer: 'It is a two-day event that will consist of various executive talks, workshops, and hackathons to engage the participants throughout the event.'})
  faqs.push({question: 'How many participants will be there?', answer: '150+ Participants will be delivering their inputs to have a better grip on open-source.'})
  faqs.push({question: 'How many Members can participate in 1 team during hackathon?', answer: '3-4 members can participate in 1 team.'})
  faqs.push({question: 'How to contact us?', answer: 'For contacting us, drop a mail at hacktoberfest@nuv.ac.in , we’re excited to hear from you.'})

  return (
    <>
      <div className="w-screen h-fitcontent md:pt-6 pt-4 flex flex-col gap-4 md:gap-0 justify-center items-center text-white bg-[#170F1E] font-heading font-extrabold">
        <h1 className="text-4xl md:text-6xl text-center font-heading font-extrabold bg-gradient-to-r from-[#BFA8FF] via-[#FABAA4] to-[#FFF08C] bg-transparent text-transparent bg-clip-text">FAQs</h1>
        <div className="w-screen h-fit flex px-2 flex-col gap-4 justify-center items-center my-8">
          {faqs.map((item, index) => (
            <div className="px-4 lg:w-[50%] sm:w-[75%] w-[85%] bg-[#fffefe] rounded-2xl">
              <Accordion
                open={open === index + 1}
                icon={<Icon id={index + 1} open={open} />}
                animate={customAnimation}
              >
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className="md:text-2xl text-left text-md"
                >
                  {item.question}
                </AccordionHeader>
                <AccordionBody className="md:text-[16px] text-sm">
                  {item.answer}
                </AccordionBody>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
