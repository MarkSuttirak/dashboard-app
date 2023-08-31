import Spacer from '../components/spacer';
import { ArrowUpRight } from '@untitled-ui/icons-react/build/cjs';
import { Link } from 'react-router-dom';
import iconmock from '../img/iconmock.svg'
import HeaderGifts from '../components/headerGifts';
import { ArrowTopRightOnSquareIcon, ReceiptPercentIcon, CheckBadgeIcon, FireIcon } from '@heroicons/react/24/solid';

const GiftsPrivileges = () => {
  const CardList = ({title, desc, isConnected, icon, badgeTitle, isSpecial}) => {
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
                <p className='card-link flex items-center gap-x-2'>
                  zaviago.com
                  <ArrowTopRightOnSquareIcon viewBox='0 0 24 24' width='20' strokeWidth='4'/> {/* Make it bolder */}
                </p>
              </div>
              <Spacer size={10}/>
              <h2 className="main-heading flex gap-x-2 mt-2 items-center">
                {title}
              </h2>
              <Spacer size={5}/>
              <p className="tab-desc">{desc}</p>
              <Spacer size={20}/>
            </div>
            <div className='flex flex-col gap-y-1'>
              <p className="tab-desc-small flex items-center gap-x-2">
                <CheckBadgeIcon className="h-5 w-5 text-green-600" aria-hidden="true"/>
                Special deals for UOB customers
              </p>
              <p className="tab-desc-small flex items-center gap-x-2">
                <CheckBadgeIcon className="h-5 w-5 text-green-600" aria-hidden="true"/>
                For Zaviago pro users only
              </p>
              <Spacer size={5}/>
              <span className="inline-flex items-start rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}> {/* Make it align middle */}
                <ReceiptPercentIcon width='16'/>
                {badgeTitle}
              </span>
            </div>
          </div>
        </div>
        <div className='border-t inner-card flex justify-between items-center'>
          <div className='flex gap-x-2'>
            <span className="inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 ring-1 ring-inset ring-red-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}> {/* Make it align middle */}
              <FireIcon width='16'/>
              Popular
            </span>
            <span className="inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-500/10 min-h-[24px] items-center gap-x-1" style={{letterSpacing:'-0.4px'}}> {/* Make it align middle */}
              <ReceiptPercentIcon width='16'/>
              Premium
            </span>
          </div>
          <Link to='' className="white-outline-btn h-10">
            <ArrowUpRight viewBox="0 0 30 20" width="24" height="24"/>
            {isConnected ? "Get gift" : "Get gift"}
          </Link>
        </div>
      </div>
    )
  }

  const appLists = [
    {
      title: 'Notion',
      desc: '6 months free on the Plus plan',
      isConnected: false,
      icon: iconmock,
      badgeTitle: 'Save up to $6000',
      isSpecial: true
    },
    {
      title: 'Stripe',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processing',
      isConnected: true,
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false
    },
    {
      title: 'Google Work Space',
      desc: 'Waived fees on tens of thousands dollars in Stripe card processingWaived fees on tens of thousands',
      isConnected: true,
      icon: iconmock,
      badgeTitle: 'Save up to $600',
      isSpecial: false
    },
  ]
  return (
    <>
      <div className="page-section">
        <div className="dashboard-settings">
          <HeaderGifts title="Privileges"/>
          
          <div>
            <dl className="grid gap-5 cards-sec">
              {appLists.map((app, index) => 
                <CardList title={app.title} desc={app.desc} isConnected={app.isConnected} icon={app.icon} badgeTitle={app.badgeTitle}/>
              )}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default GiftsPrivileges;