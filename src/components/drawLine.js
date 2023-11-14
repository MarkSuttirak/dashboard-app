export default function DrawLine({color, width, height, className}){
  return (<div className={className} style={{backgroundColor:color,height:height,width:width}} />)
}