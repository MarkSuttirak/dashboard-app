import HeaderIntegration from '../components/headerIntegration'
import Spacer from '../components/spacer';
import { ArrowUpRight } from '@untitled-ui/icons-react/build/cjs';
import { Link } from 'react-router-dom';
import iconmock from '../img/iconmock.svg'

const Integration = () => {
  const CardList = ({title, desc, isConnected, icon}) => {
    return (
      <div
        className="inte-card border"
      >
        <div className="flex justify-between items-end">
          <div>
            <img src={icon} />
            <h2 className="main-heading flex gap-x-2 mt-2">{title}</h2>
            <p className="tab-desc">{desc}</p>
          </div>
        </div>
        <Spacer size={20}/>

        <div className="absolute bottom-0 border-t px-4 py-4 right-0 w-full bg-white flex justify-end items-center">
          <Link to='/settings/plan' className="white-outline-btn h-10">
            <ArrowUpRight viewBox="0 0 30 20" width="24" height="24"/>
            {isConnected ? "Connected" : "Connect"}
          </Link>
        </div>
      </div>
    )
  }

  const appLists = [
    {
      title: 'Basic plan',
      desc: 'Our most popular plan for small teams',
      isConnected: false,
      icon: iconmock
    },
    {
      title: 'Basic plan',
      desc: 'Our most popular plan for small teams',
      isConnected: true,
      icon: iconmock
    },
    {
      title: 'Basic plan',
      desc: 'Our most popular plan for small teams',
      isConnected: true,
      icon: iconmock
    },
  ]
  return (
    <>
      <div className="page-section">
        <div className="dashboard-settings">
          <HeaderIntegration title="Integration"/>
          
          <div>
            <dl className="mt-5 grid gap-5 grid-cols-3">
              {appLists.map((app, index) => 
                <CardList title={app.title} desc={app.desc} isConnected={app.isConnected} icon={app.icon}/>
              )}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Integration;