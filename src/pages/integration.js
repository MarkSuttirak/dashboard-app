import HeaderIntegration from '../components/headerIntegration'
import Spacer from '../components/spacer';
import { ArrowUpRight } from '@untitled-ui/icons-react/build/cjs';
import { Link } from 'react-router-dom';
import iconmock from '../img/iconmock.svg'

const Integration = () => {
  const CardList = ({title, desc, isConnected, icon}) => {
    return (
      <div
        className="inte-card border flex flex-col justify-between"
      >
        <div className="flex justify-between items-end inner-card">
          <div>
            <img src={icon} />
            <h2 className="main-heading flex gap-x-2 mt-2">{title}</h2>
            <p className="tab-desc">{desc}</p>
          </div>
        </div>
        <div className='border-t inner-card'>
          <Link to='' className="white-outline-btn h-10">
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
      desc: 'Our most popular plan for small teams if it \'s available, wanna try? It is so interesting! WOWWOW!',
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
            <dl className="mt-5 grid gap-5 lg:grid-cols-3 md:grid-cols-2">
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