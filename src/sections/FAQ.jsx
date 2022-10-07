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
  faqs.push({question: 'What is your name?', answer: 'Undercover Hitman '})
  faqs.push({question: 'What is the greatest?', answer: 'Me'})
  faqs.push({question: 'What are you doing here?', answer: 'I do not know'})

  return (
    <>
    <div className="w-screen h-[100vh] flex flex-col justify-center items-center border-4 border-red-600">
      <h1 className="text-6xl text-center">F A Q s</h1>
      <div className="w-screen h-1/2 flex px-2 flex-col gap-4 justify-center items-center border-4 border-blue-600">
        {faqs.map((item, index) => (
          <div className="px-4 md:w-[50%] w-full bg-[#D9D9D9] rounded-3xl  border-4 border-green-600">
            <Accordion open={open === index+1} icon={<Icon id={index+1} open={open}/>} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(index+1)} className='md:text-2xl text-md'>
                {item.question}
              </AccordionHeader>
              <AccordionBody className='md:text-lg text-sm'>
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
