const LoadingCheck = ({type = 'success', height = '50px'}) => {
  return (
    <svg className={`loading-icon-check loading-icon-check-${type}`} viewBox="0 0 24 24" style={{height:height}}>
      <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
        <circle className="success-circle-outline" cx="12" cy="12" r="11.5"/>
        <circle className="success-circle-fill" cx="12" cy="12" r="11.5"/>
        <polyline className="success-tick" points="17,8.5 9.5,15.5 7,13"/>
      </g>
    </svg>
  )
}

export default LoadingCheck;