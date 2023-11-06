export default function VerticalLine({color, size, height, className}){
  return (<div className={className} style={{borderLeftWidth:size + 'px',borderLeftColor:color,height:height}} />)
}