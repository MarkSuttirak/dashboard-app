import React, { useState, Fragment } from 'react'
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
import { useParams } from 'react-router-dom'
import HeaderRedeem from '../components/headerRedeem'

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function GiftPage() {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
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
    },
    {
      id: 2,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: bulbYello,
    },
    {
      id: 3,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: googleLogo,
    },
    {
      id: 4,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: dropboxLogo,
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

        <div className='dashboard-settings'>
          <HeaderRedeem title={id} desc='Facilitate payments and pay out sellers or service providers with Friends by Chom.' button="Redeem"/>
        </div>

        {/* <div className='dashboard-settings'>
          <div className='sm:flex justify-between items-start'>
            <div className='sm:flex'>
              <div>
                <img src={instagramShop} alt="" />
              </div>
              <div className='sm:ml-[26px] sm:mt-0 mt-5'>
                <h3 className='main-title'>Instagram Store</h3>
                <p className='tab-desc'>Facilitate payments and pay out sellers or service providers.</p>
              </div>
            </div>
            <div>
              <button onClick={handleInviteClick} className='primary-btn'>Install App</button>
            </div>
          </div>
        </div> */}

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

        <div className='dashboard-settings flex'>
        <div className="mt-6 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:grid-rows-2 md:gap-x-6 lg:gap-8">
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg md:aspect-h-1 md:aspect-w-1 md:row-span-2">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  className="object-cover object-center"
                />
              </div>
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg md:aspect-none md:relative md:h-full">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  className="object-cover object-center md:absolute md:inset-0 md:h-full md:w-full"
                />
              </div>
              <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg md:aspect-none md:relative md:h-full">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  className="object-cover object-center md:absolute md:inset-0 md:h-full md:w-full"
                />

              </div>
            </div>
        </div>

        <div className='dashboard-settings sm:flex mt-[75px]'>
          <div className='sm:w-[350px] w-full'>
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
          <div className='w-full sm:mt-0 mt-10 sm:ml-4'>
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

        <div className='dashboard-settings mt-[120px]'>
          <h3 className='main-heading'>You may also like these applications</h3>
          <p className='tab-desc'>Explore the apps that a wide range of merchants rely on.</p>
          <div className='grid sm:grid-cols-2 grid-cols-1 mt-[40px]'>
            {mostPopularApps.map((item, index) =>
              <div className='flex mb-[30px]' key={index}>
                <div><img src={item.image} alt="" className='rounded-xl' style={{ boxShadow: '0px 4px 15px 0px #00000026' }} /></div>
                <div className='ml-5'>
                  <h3 className='subheading'>{item.title}</h3>
                  <p className='tab-desc'>{item.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default GiftPage
