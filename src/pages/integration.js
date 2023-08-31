import HeaderIntegration from '../components/headerIntegration'
import Spacer from '../components/spacer';
import { ArrowUpRight, LinkExternal01 } from '@untitled-ui/icons-react/build/cjs';
import { Link } from 'react-router-dom';
import iconmock from '../img/iconmock.svg'
import HeaderGifts from '../components/headerGifts';
import { ArrowTopRightOnSquareIcon, ReceiptPercentIcon, CheckCircleIcon, FireIcon } from '@heroicons/react/24/solid';

const Integration = () => {
  const CardList = ({title, desc, isConnected, icon, badgeTitle, isSpecial, link}) => {
    return (
      <div
        className="inte-card border flex flex-col justify-between"
      >
        <div className="flex h-full justify-between items-end inner-card">
          <div className='w-full h-full flex flex-col justify-between'>
            <div>
              <div className='flex justify-between'>
                <div className='border rounded-lg w-[60px] h-[60px] bg-[#F3F4F6] flex justify-center items-center'>
                  {/* <img src={icon} /> */}
                </div>
                <Link to={link} className='card-link flex items-center gap-x-2'>
                  Read more
                  <LinkExternal01 viewBox='0 0 24 24' width='20' strokeWidth='4'/>
                </Link>
              </div>
              <Spacer size={10}/>
              <h2 className="main-heading flex gap-x-2 mt-2 items-center">
                {title}
              </h2>
              <Spacer size={5}/>
              <p className="tab-desc">{desc}</p>
              <Spacer size={20}/>
            </div>
            {isSpecial && (
              <div className='flex flex-col gap-y-1'>
                <p className="tab-desc-small flex items-center gap-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" aria-hidden="true"/>
                  Special deals for UOB customers
                </p>
                <p className="tab-desc-small flex items-center gap-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" aria-hidden="true"/>
                  For Zaviago pro users only
                </p>
                <Spacer size={5}/>
                <span className="inline-flex items-start rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}>
                  <ReceiptPercentIcon width='16'/>
                  {badgeTitle}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className='border-t inner-card flex justify-between items-center'>
          <div className='flex gap-x-2'>
            <span className="inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 ring-1 ring-inset ring-red-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}>
              <FireIcon width='16'/>
              Popular
            </span>
            <span className="inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}>
              <ReceiptPercentIcon width='16'/>
              Premium
            </span>
          </div>
          <Link to='' className={`${isConnected ? 'primary-btn disabled' : 'primary-btn'} h-10`}>
            <ArrowUpRight viewBox="0 0 30 20" width="24" height="24"/>
            {isConnected ? "Connected" : "Connect"}
          </Link>
        </div>
      </div>
    )
  }

  const appLists = [
    {
      title: 'ChatGPT',
      desc: '6 months free on the Plus plan',
      isConnected: false,
      icon: iconmock,
      badgeTitle: 'Save up to $6000',
      isSpecial: true,
      link: '/'
    },
    {
      title: 'Stripe',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processing',
      isConnected: true,
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false,
      link: '/singleAppPage'
    },
    {
      title: 'Line CRM',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processingWaived fees on tens of thousands',
      isConnected: true,
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false,
      link: '/singleAppPage'
    },
    {
      title: 'Instagram Store',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processing',
      isConnected: true,
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false,
      link: '/singleAppPage'
    },
  ]
  return (
    <>
      <div className="page-section">
        <div className="dashboard-settings">
          <HeaderIntegration title="Integration"/>
          
          <div>
            <dl className="grid gap-5 cards-sec-inte">
              {appLists.map((app, index) => 
                <CardList title={app.title} desc={app.desc} isConnected={app.isConnected} icon={app.icon} badgeTitle={app.badgeTitle} link={app.link} isSpecial={app.isSpecial}/>
              )}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Integration;