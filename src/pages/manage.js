import { ChevronRightIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import InputWithPrefix from "../components/inputWithPrefix";
import Accordion from "../components/accordion";
import { Link } from "react-router-dom";

const Manage = () => {
  const MenuButton = ({title, link}) => {
    return (
      <Link to={link} className="flex justify-between items-center">
        <p className="subheading">{title}</p>
        <div>
          <ChevronRightIcon width='24'/>
        </div>
      </Link>
    )
  }

  const generalItems = [
    {
      title: 'Orders',
      link: '',
      icon: <ShoppingCartIcon width='24'/>
    },
    {
      title: 'Products',
      link: '',
      icon: ''
    },
    {
      title: 'Subscriptions',
      link: '',
      icon: ''
    },
  ]

  const getPaidItems = [
    {
      title: 'Point Of Sale',
      link: ''
    },
    {
      title: 'Pay Links',
      link: ''
    },
    {
      title: 'Manage Invoices',
      link: ''
    },
    {
      title: 'Payments',
      link: ''
    }
  ]

  const analyticsItems = [
    {
      title: 'Traffic Overview',
      link:''
    },
    {
      title: 'Sales Overview',
      link:''
    },
    {
      title: 'Behaviour Overview',
      link:''
    },
    {
      title: 'Marketing Overview',
      link:''
    },
    {
      title: 'All Reports',
      link:''
    },
    {
      title: 'Insights',
      link:''
    },
    {
      title: 'Benchmarks',
      link:''
    },
    {
      title: 'Alerts',
      link:''
    },
    {
      title: 'Email Updates',
      link:''
    }
  ]

  const marketingItems = [
    {
      title: 'Marketing Home',
      link:''
    },
    {
      title: 'Social Posts',
      link:''
    },
    {
      title: 'Email Marketing',
      link:''
    },
    {
      title: 'Facebook & Instagram Ads',
      link:''
    },
    {
      title: 'Coupons',
      link:''
    },
    {
      title: 'Loyalty Program',
      link:''
    },
    {
      title: 'Video Maker',
      link:''
    },
    {
      title: 'Logo Maker',
      link:''
    },
    {
      title: 'Mobile Announcements',
      link:''
    },
    {
      title: 'Push Notifications',
      link:''
    },
    {
      title: 'Referral Program',
      link:''
    },
    {
      title: 'Site Discoverability',
      link:''
    }
  ]

  const customerItems = [
    {
      title: 'Members',
      link:''
    },
    {
      title: 'Badges',
      link:''
    },
    {
      title: 'Contacts list',
      link:''
    }
  ]

  const settingsItems = [
    {
      title: 'Media Manager',
      link: ''
    },
    {
      title: 'Business Settings',
      link: ''
    },
    {
      title: 'eCommerce & Finance',
      link: ''
    },
    {
      title: 'Roles & Permissions',
      link: ''
    }
  ]

  const items = [
    {
      title: 'Get Paid',
      content: (
        <div className="flex flex-col gap-y-4">
          {getPaidItems.map((item) => 
            <MenuButton title={item.title} link={item.link} />
          )}
        </div>
      )
    },
    {
      title: 'Analytics & Reports',
      content: (
        <div className="flex flex-col gap-y-4">
          {analyticsItems.map((item) =>
            <MenuButton title={item.title} link={item.link} />
          )}
        </div>
      )
    },
    {
      title: 'Marketing',
      content: (
        <div className="flex flex-col gap-y-4">
          {marketingItems.map((item) =>
            <MenuButton title={item.title} link={item.link} />
          )}
        </div>
      )
    },
    {
      title: 'Customers & Contacts',
      content: (
        <div className="flex flex-col gap-y-4">
          {customerItems.map((item) =>
            <MenuButton title={item.title} link={item.link} />
          )}
        </div>
      )
    },
    {
      title: 'Settings',
      content: (
        <div className="flex flex-col gap-y-4">
          {settingsItems.map((item) =>
            <MenuButton title={item.title} link={item.link} />
          )}
        </div>
      )
    }
  ]

  return (
    <>
      <div className='page-section'>
        <header className='dashboard-container mb-4'>
          <h1 className='main-title'>Manage</h1>

          <InputWithPrefix placeholder='Search' prefix={<MagnifyingGlassIcon width='24'/>} />
        </header>

        <hr />

        <main>
          <div className="flex flex-col gap-y-4 border-b border-b-[#E3E3E3] py-5">
            {generalItems.map((item) => (
              <Link to={item.link} className="flex justify-between items-center px-5">
                <div className="flex gap-x-2 items-center">
                  {item.icon}
                  <p className="subheading">{item.title}</p>
                </div>
                <div>
                  <ChevronRightIcon width='24'/>
                </div>
              </Link>
            ))}
          </div>
          <div className="p-5 border-b border-b-[#E3E3E3]">
            <MenuButton title="Manage Apps" link="" />
          </div>
          <Accordion items={items} />
        </main>
      </div>
    </>
  )
}

export default Manage;