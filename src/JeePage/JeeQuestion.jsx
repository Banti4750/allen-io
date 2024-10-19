import React from 'react'
import Accordion from '../NeetPage/NeetComponent/Acorrdian'

const JeeQuestion = () => {
  return (
    <>
    <div
     style={{
       maxWidth: '1200px',
       margin: '0 auto',
       padding: '20px',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
     //   textAlign: 'center',
     }}
   >

        <div>
             <h1 style={{color:'white'}}>Frequently Asked Questions</h1>
        </div>

        <Accordion
        title={"What is the important of joining ALLENs IIT JEE Online coaching program?"}
           desc={"The IIT JEE coaching program provides the specialized guidance, expert faculty, comprehensive study material, and competitive learning environment. It helps students understand the exam pattern, provide strategies to tackle difficult problems, and offer regular practice tests for self-assessment."}
        />


         <Accordion
        title={"What is the important of joining ALLENs IIT JEE Online coaching program?"}
           desc={"The IIT JEE coaching program provides the specialized guidance, expert faculty, comprehensive study material, and competitive learning environment. It helps students understand the exam pattern, provide strategies to tackle difficult problems, and offer regular practice tests for self-assessment.."}
        />
         <Accordion
        title={"What is the important of joining ALLENs IIT JEE Online coaching program?"}
           desc={"The IIT JEE coaching program provides the specialized guidance, expert faculty, comprehensive study material, and competitive learning environment. It helps students understand the exam pattern, provide strategies to tackle difficult problems, and offer regular practice tests for self-assessment.d."}
        />

   </div>
 </>
  )
}

export default JeeQuestion