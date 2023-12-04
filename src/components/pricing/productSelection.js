import { X } from "lucide-react";

export default function ProductSelection({title, price, desc, onClose}){
  return (
    <div className="p-4 border rounded-lg w-full flex flex-col gap-y-1 relative pr-8">
      <h2 className="subheading font-medium">{title}</h2>
      <p className="subheading">{price}</p>
      <p className="main-desc">{desc}</p>

      <X onClick={onClose} className="absolute top-4 right-4 h-4 w-4 cursor-pointer"/>
    </div>
  )
}