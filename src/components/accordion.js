import { ChevronDown } from "@untitled-ui/icons-react/build/cjs"
import { useState, useRef } from "react"

const Accordion = ({items}) => {
  const content = useRef(null);

  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
    var panel = event.currentTarget.nextElementSibling;

    if (panel.style.maxHeight){
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  return (
    <div>
      {items.map((item, index) => {
        return (<div key={index}>
          <button onClick={handleClick} className="accordion-btn border-b border-b-[#E3E3E3]">
            <h2 className="subheading">{item.title}</h2>
            <ChevronDown className={`accordion-arrow-anim`}/>
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