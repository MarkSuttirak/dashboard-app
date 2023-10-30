export default function ImageCard({title, icon, background, description}){
  return (
    <div key={title} className="relative h-[200px] flex flex-col justify-between space-x-3 bg-white p-4 pb-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 rounded-[20px] object-cover" style={{ background: "url(" + background + ")", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}>
      <img src={icon} className="w-[48px] h-[48px]" alt={icon} />
      <div className="min-w-0">
        <h2 className="text-md font-bold text-white leading-5">{title}</h2>
        <p className="truncate font-bold text-[13px] text-[#FFFFFF99]">{description}</p>
      </div>
    </div>
  )
}