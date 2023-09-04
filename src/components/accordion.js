import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react"

const Accordion = ({items}) => {
  const content = useRef(null);

  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
    // var panel = event.currentTarget.nextElementSibling;

    // if (panel.style.maxHeight){
    //   panel.style.maxHeight = null
    // } else {
    //   panel.style.maxHeight = panel.scrollHeight + "px";
    // }
  }
  return (
    <div>
      {items.map((item, index) => {
        return (<div key={index}>
          <button onClick={handleClick} className="accordion-btn">
            <h2 className="subheading">{item.title}</h2>
            <ChevronDownIcon className={`accordion-arrow-anim`} width='24'/>
          </button>
          <div ref={content} className={`accordion-detail`}>
            <div className="px-5">{item.content}</div>
          </div>
        </div>)
      })}
    </div>
  )
}

export default Accordion