export default function SwitchPricing(){
  const bundleList = [
    {
      title:'General',
      price:'Free' // Kostenlos
    },
    {
      title:'Professional',
      price:'฿750/month' // 750 ฿ / Monat
    }
  ]
  return (
    <div className="max-w-lg bg-gray-300 rounded-full flex relative">
      <div className="w-1/2 h-full m-2 rounded-full bg-white absolute"/>
      {bundleList.map(b => (
        <div className="w-1/2 flex items-center justify-center flex-col">
          <h2 className="secondary-heading">{b.title}</h2>
          <p className="subheading">{b.price}</p>
        </div>
      ))}
    </div>
  )
}