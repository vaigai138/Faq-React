import { useState } from 'react'
import './App.css'


const FaqItem=({question,answer})=>{

  const [show,setShow]=useState(false);

  const toggleShow=()=>{
    setShow(!show)
  }
  return(
    <div className={`faq-item ${show? "active":""}`}>
      <div className="faq-item-header" onClick={toggleShow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-bodycontent">
          {answer}
        </div>
      </div>
    </div>
  )
}

const FaqAccordion=({data})=>{
  return(
    <div className='faq-accordion'>
      <h2>FAQs</h2>
      {data.map((item)=>(<FaqItem key={item.id} question={item.question} answer={item.answer}/>))}
    </div>
  )
}


const data = [{id:1,question: "What is React ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere illum doloribus! Eligendi doloribus libero, praesentium sapiente nisi ullam numquam."},{id:2,question: "What are the Benefits React ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere illum doloribus! Eligendi doloribus libero, praesentium sapiente nisi ullam numquam."},{id:3,question: "What are the main Components of React ?",answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere illum doloribus! Eligendi doloribus libero, praesentium sapiente nisi ullam numquam."},];


function App() {

  return (
    <>
      <div className='App'>
        <FaqAccordion data = {data}/>
      </div>
    </>
  );
};
export default App
