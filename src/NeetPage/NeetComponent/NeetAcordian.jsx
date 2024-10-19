import React from 'react'
import Accordion from './Acorrdian'

const NeetAccordion = () => {
  // Define the values for title and description
  const title = "What is the best platform for NEET preparation?";
  const description = "ALLEN’s NEET Online Courses are considered the best choice for NEET preparation, crafted by India’s top NEET faculty using NCERT and other leading reference materials."

  const title2 = "How  can I crack NEET with Online coching?";
  const desc2 ="With ALLEN’s Online Coaching, you’ll gain access to top educators, effective preparation strategies, and flexible learning options to help you crack NEET confidently."

  return (
    <>
      <Accordion
        title={title}   // Passing the title as a prop
        desc={description} // Passing the description as a prop
      />

      <Accordion
       title={title2}
       desc={desc2}
       />



    </>
  );
};

export default NeetAccordion;
