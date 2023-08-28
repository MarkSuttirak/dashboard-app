import React, { useState } from 'react'
import instagramShop from '../img/business-intelligent.svg'
import star from '../img/star.png'
import sellEverywhereMain from '../img/sellEverywhereMain.png'
import sellEverywhere1 from '../img/sell-everywhere-1.png'
import sellEverywhere2 from '../img/sell-everywhere-22.png'
import sellEverywhere3 from '../img/sell-everywhere-3.png'
import statusChart from '../img/status-chart.png'
import freedlyLogo from '../img/freedlyLogo.svg'
import bulbYello from '../img/bulbYello.svg'
import googleLogo from '../img/googleLogo.svg'
import dropboxLogo from '../img/drpBoxLogo.svg'
import flipIconPlus from '../img/flipIconPlus.png'
import InstallAddons from '../components/installAddons'
function SingleAppPage() {

  const [isOpen, setIsOpen] = useState(false);

  const handleInviteClick = () => {
    setIsOpen(!isOpen);
    setIsClickedInstall(false)
  }
  const closePopUp = () => {
    setIsOpen(false);
    console.log('false')
  }

  const mostPopularApps = [
    {
      id: 1,
      title: 'Application name here',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: freedlyLogo,
      rating: 5.0,
    },
    {
      id: 2,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: bulbYello,
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: googleLogo,
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: dropboxLogo,
      rating: 4.9
    },
  ];

  const [isClickedInstall, setIsClickedInstall] = useState(false);
  const changeInstallClick =()=>{
    setIsClickedInstall(true)
    console.log(isClickedInstall)
  }
  return (
    <>
      <div className='sm:p-10 p-5 page-section'>

        <div className='section-container mx-auto'>
          <div className='sm:flex justify-between items-start'>
            <div className='sm:flex'>
              <div>
                <img src={instagramShop} alt="" />
              </div>
              <div className='sm:ml-[26px] sm:mt-0 mt-5'>
                <h3 className='main-title'>Instagram Store</h3>
                <p className='tab-desc'>Facilitate payments and pay out sellers or service providers.</p>
                <div className='flex items-center mt-2'>
                  <img src={star} alt="" />
                  <h4 className='text-rating ml-2'>386K</h4>
                </div>
              </div>
            </div>
            <div>
              <button onClick={handleInviteClick} className='primary-btn'>Install App</button>
            </div>
          </div>
        </div>

        {isOpen &&
            <div>
              <div className="popup-overlay"></div>
              <div>
                <div className='sm:w-[515px] w-[40%] h-[645px] sm:pt-0 sm:px-0 pt-10 px-5 bg-white rounded-2xl sm:right-[30%]  sm:left-auto left-[2%] install-addons popup-container z-[199] relative'>
                  <InstallAddons changeInstallClick={changeInstallClick} closePopUp={closePopUp} />
                </div>
              </div>
            </div>
          }

        <div className='section-container mx-auto sm:flex mt-[45px]'>
          <div className='rounded-lg'>
            <img src={sellEverywhereMain} style={{ boxShadow: '0px 4px 16px 0px #00000017' }} alt="" className='w-[250px] sm:w-[585px] sm:h-[375px] rounded-[20px]' />
          </div>
          <div className='sm:ml-4 sm:mt-0 mt-[10px] space-y-[6px]'>
            <img src={sellEverywhere1} style={{ boxShadow: '0px 4px 16px 0px #00000017' }} alt="" className='w-[250px] sm:w-[165px] sm:h-[121px] rounded-[20px]' />
            <img src={sellEverywhere2} style={{ boxShadow: '0px 4px 16px 0px #00000017' }} alt="" className='w-[250px] sm:w-[165px] sm:h-[121px] rounded-[20px]' />
            <img src={sellEverywhere3} style={{ boxShadow: '0px 4px 16px 0px #00000017' }} alt="" className='w-[250px] sm:w-[165px] sm:h-[121px] rounded-[20px]' />
          </div>
        </div>

        <div className='section-container mx-auto sm:flex justify-between mt-[75px]'>
          <div className='sm:w-[225px] w-full'>
            <div>
              <h3 className='main-heading'>Highlights</h3>
              <div className='mt-[10px]'>
                <h4 className='subheading'>Built for your business</h4>
                <p className='tab-desc'>Use directly in Shopify admin</p>
              </div>
            </div>
            <div className='mt-[50px]'>
              <h3 className='main-heading'>Information</h3>
              <div className='mt-[10px]'>
                <h4 className='subheading'>Launched</h4>
                <p className='tab-desc'>March 25, 2021</p>
              </div>
              <div className='mt-[20px]'>
                <h4 className='subheading'>Categories</h4>
                <p className='tab-desc'>Marketing and conversion</p>
              </div>
              <div className='mt-[20px]'>
                <h4 className='subheading'>Integrates with</h4>
                <p className='tab-desc'>Facebook Advertising, <br /> Recharge, Zendesk,</p>
              </div>
            </div>
            <div className='mt-[50px]'>
              <h3 className='main-heading'>Built by Zaviago</h3>
              <div className='flex flex-col gap-y-[10px] mt-[10px]'>
                <p className='text-link'>Website</p>
                <p className='text-link'>Contact us</p>
                <p className='text-link'>Privacy policy</p>
              </div>
            </div>
          </div>
          <div className='sm:w-[525px] w-full sm:mt-0 mt-10 sm:ml-4'>
            <div className='flex justify-between'>
              <h2 className='main-heading'>What's New</h2>
              <button className='text-link'>Version History</button>
            </div>
            <div className='mt-3'>
              <p className='tab-desc'>Version 1,6.72.735.1</p>
            </div>
            <div className='mt-[38px]'>
              <h3 className='subheading'>Get The Latest Status Of Your Online & In-Person Sales</h3>
              <p className='tab-desc'>Selldone allows you to manage multiple stores per account and sell various product types. Connect to Selldone by clicking the login or sign-up. This will allow you to view your shops' performance and access them directly and receive notifications about new orders in your Stripe Dashboard.</p>
            </div>
            <div>
              <img src={statusChart} alt="" />
            </div>
            <div className='mt-[30px]'>
              <p className='tab-desc'>Selldone allows business owners, merchants, and agencies to build and manage their online businesses — and in-store — without installing any plugins! With access to enterprise-grade tools, you can easily adjust your business model, whether it's a marketplace, dropshipping, or a simple shop. In addition, this app helps you view relevant orders, fulfillment status, and more within the Stripe payment tab, and see your customers' last orders and journey within the Stripe customer tab. This app is designed to help business owners streamline their operations and improve their online sales.</p>
            </div>
          </div>
        </div>

        <div className='section-container mx-auto mt-[120px]'>
          <h3 className='main-heading'>You may also likes these applications</h3>
          <p className='tab-desc'>Explore the apps that a wide range of merchants rely on.</p>
          <div className='grid sm:grid-cols-2 grid-cols-1 mt-[40px]'>
            {mostPopularApps.map((item, index) =>
              <div className='flex mb-[30px]' key={index}>
                <div><img src={item.image} alt="" className='rounded-xl' style={{ boxShadow: '0px 4px 15px 0px #00000026' }} /></div>
                <div className='ml-5'>
                  <h3 className='subheading'>{item.title}</h3>
                  <p className='tab-desc'>{item.description}</p>
                  <div className='flex items-center mt-1'><img src={star} className='w-[18px] h-[18px]' alt="" /><p className='text-rating ml-1'>{item.rating}</p></div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default SingleAppPage
