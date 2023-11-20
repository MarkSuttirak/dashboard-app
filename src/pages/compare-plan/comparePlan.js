import CompareCards from "./compareCards";

export default function ComparePlan(){
  return (
    <div className="dashboard-container">
      <div className="text-center">
        <h1 className="text-4xl text-[#09090B] font-extrabold tracking-[-0.9px] mb-3">Pricing built for businesses of all sizes</h1>
        <p className="secondary-desc">Zaviago offers more than 10 functions and management applications so that you can</p>
      </div>

      <CompareCards />
    </div>
  )
}