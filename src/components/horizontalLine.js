export default function VerticalLine({color, size, width, className}){
  return (<div className={className} style={{borderTopWidth:size + 'px',borderTopColor:color,width:width}} />)
}