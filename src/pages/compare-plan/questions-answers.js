import { Link } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "src/components/ui/accordion"

export default function QuestionsAnswers(){
  const faqs = [
    {
      question:'How do we calculate the billing for Team members?',
      answer:"We will calculate based on the number of members added to the team in the current month. You have to pay the service fee for adding members to the team before being able to add members to the team."
    },
    {
      question:"Is the 'Pro' plan a recurring subscription?",
      answer:"Zaviago Platform is not a recurring subscription. Unless you make a payment by the billing date, your package will be automatically downgraded to the General package."
    },
    {
      question:"Do we have a refund policy?",
      answer:(
        <>
          You can request a refund by contacting us at <a href="mailto:marketing@zaviago.com" className="underline">marketing@zaviago.com</a>. 
          We are happy to provide a full refund, and you just need to submit a refund request 
          within 48 hours of completing the payment. If you feel dissatisfied or have any suggestions for improvement, 
          please also contact us at <a href="mailto:marketing@zaviago.com" className="underline">marketing@zaviago.com</a>. We greatly appreciate your feedback and 
          strive to make Zaviago Platform more helpful in both your personal and professional life.
        </>
      )
    }
  ]
  return (
    <Accordion type="multiple" collapsible className="w-full">
      {faqs.map(list => (
        <AccordionItem value={list.question}>
          <AccordionTrigger className='text-base'>{list.question}</AccordionTrigger>
          <AccordionContent>
            {list.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}