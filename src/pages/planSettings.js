import CardSelect from "../components/cardSelect"
import HeaderSettings from "../components/headerSettings"

const PlanSettings = () => {
  return (
    <>
      <div className="page-section">
        <div className="dashboard-settings">
          <HeaderSettings title="Plan"/>

          <CardSelect title='Select a Plan'/>
        </div>
      </div>
    </>
  )
}

export default PlanSettings