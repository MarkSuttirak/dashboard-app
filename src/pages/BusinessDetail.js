import React from 'react'
import Layer from '../img/layer2.png'
import Sparkling from '../img/sparkling.png'
import MyWebsite from '../img/myWebsite.png'
import appsMarketplace from '../img/app-marketplace.svg'
import redLightning from '../img/red-lightning.svg'
import purpleRhombus from '../img/purple-rhombus.svg'
import businessIntelligent from '../img/business-intelligent.svg'

import Slider from '../components/slider';

function BusinessDetail() {

  const images = [
    Sparkling,
    MyWebsite,
    Sparkling,
    MyWebsite,
    Sparkling,
    MyWebsite,
  ];

  const startupGuide = [
    {
      id:1,
      title: 'Connect Business',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: businessIntelligent
    },
    {
      id:2,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: appsMarketplace
    },
    {
      id:3,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: purpleRhombus
    },
    {
      id:4,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: redLightning
    },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <div className="bg-white page-section pb-16 md:pl-10 md:pt-8 pt-8 2xl:w-[1450px] w-[80%]">
        <div className="pt-0">
          <div className=" max-w-2xl">
            <div className="max-w-lg text-left">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Dream it. Build it. Grow it.
              </h1>
              <p className="mt-1 text-sm leading-8 text-gray-600">
                This is your business super app
              </p>
            </div>
          </div>
        </div>
        <div className='mt-6 md:flex border-b border-[#DCDFE9] pb-6 md:pb-16'>
          <div className='lg:w-[25%] sm:w-[50%] w-full pr-5'>
            <div className='flex'>
              <div className='border border-gray-300 w-[80px] h-[80px] mt-1 p-2 rounded-lg flex items-center justify-center'>
                <img src={Layer} alt="" />
              </div>
              <div className='ml-5'>
                <h3 className='font-inter font-semibold text-[22px] text-[#1F272E]'>Layer</h3>
                <p className='font-inter font-normal text-sm text-[#687178] w-[180px] mt-2'>Facilitate payments and pay out sellers or service providers.</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-[#0099FF] text-white rounded-md w-full h-8 font-inter text-[13px] font-semibold btn-primary-shadow">+ Install</button>
              <button className='text-[#0066CC] font-inter font-normal text-sm mt-3 border-b border-[#0066CC]'>View Website</button>
            </div>
          </div>
          <div className='lg:w-[65%] sm:w-[50%] w-full mt-7  md:mt-0 md:ml-7'>
            <Slider images={images} className="w-[50%]" />
          </div>
        </div>
        <div className='md:flex md:pt-16 pt-6'>
          <div className='md:w-[25%] w-full'>
            <div>
              <h3 className='font-inter font-semibold text-base text-[#1F272E]'>Highlights</h3>
              <p className='font-inter font-normal text-sm text-[#1F272E] mt-3'>Built for your business</p>
              <p className='font-inter font-normal text-sm text-[#8A8E91] mt-1'>Use directly in Shopify admin</p>
            </div>
            <div className='mt-14'>
              <h3 className='font-inter font-semibold text-base text-[#1F272E]'>Information</h3>
              <p className='font-inter font-normal text-sm text-[#1F272E] mt-5'>Launched</p>
              <p className='font-inter font-normal text-sm text-[#8A8E91] mt-1'>March 25, 2021</p>

              <p className='font-inter font-normal text-sm text-[#1F272E] mt-5'>Categories</p>
              <p className='font-inter font-normal text-sm text-[#8A8E91] mt-1'>Marketing and conversion</p>

              <p className='font-inter font-normal text-sm text-[#1F272E] mt-5'>Integrates with</p>
              <p className='font-inter font-normal text-sm text-[#8A8E91] mt-1 w-[225px]'>Facebook Advertising, Recharge, Zendesk,</p>
            </div>
            
          </div>
          
          <div className='md:w-[70%] w-full md:mt-0 mt-10 md:ml-5 ml-0'>
            <h3 className='font-inter font-semibold text-[22px] text-[#1F272E]'>Layer</h3>
            <p className='font-inter font-light text-sm mt-8 text-[#687178] lg:w-[782px] w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exLorem ipsum dolor sit amet,</p>
            <p className='font-inter font-light text-sm mt-8 text-[#687178] lg:w-[782px] w-full'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
          </div>
        </div>
        <div className='mt-10'>
              <h3 className='font-inter font-semibold text-base text-[#1F272E]'>Built by Zaviago</h3>
              <p className='text-[#0066CC] font-inter font-normal text-sm mt-3 border-b border-[#0066CC] w-fit'>Website</p>
              <p className='text-[#0066CC] font-inter font-normal text-sm mt-3 border-b border-[#0066CC] w-fit'>Contact us</p>
              <p className='text-[#0066CC] font-inter font-normal text-sm mt-3 border-b border-[#0066CC] w-fit'>Privacy policy</p>
            </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 rounded-xl gap-x-[21px] gap-y-[32px] started-guide mt-16">
              {startupGuide.map((info) => (
                <div key={info.id} className="w-full sm:w-full rounded-lg mt-2 flex started-guide-card">
                  <div className='inline-block w-[100px] mr-5'>
                    <img src={info.image} className="w-[85px] h-[85px]" alt="" />
                  </div>
                  <div>
                    <h3 className="mt-1 font-inter text-sm font-semibold text-[#1A1B25] guide-title">{info.title}</h3>
                    <h3 className="mt-1 font-inter text-[13px] font-normal paras">{info.description}</h3>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </>
  )
}

export default BusinessDetail
