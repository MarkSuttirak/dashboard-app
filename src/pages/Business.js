import React from 'react'
import websiteMade from '../img/website-made.png'
import businessIntelligent from '../img/business-intelligent.svg'
import appsMarketplace from '../img/app-marketplace.svg'
import connectBusiness from '../img/connect-business.svg'
import purpleRhombus from '../img/purple-rhombus.svg'
import redLightning from '../img/red-lightning.svg'
import blueCircles from '../img/blue-circles.svg'
import learnMore from '../img/learn-more.png'
import startupGuideImg from '../img/startup-guide.png'
import platformMarketplace from '../img/platform-marketplace.png'
import startupDomains from '../img/startup-dommains.png'
import startupDomainsIcon from '../img/startup-domain-icon.png'
import terms from '../img/terms.png'
import play from '../img/play.png'
import finlabLogo from "../img/finlab-logo.svg";
import UOBLogo from "../img/uob.svg";
import testVideo from '../img/test.mp4'
import blog1 from '../img/blog1.png'
import blog2 from '../img/blog2.png'
import blog3 from '../img/blog3.png'
import POSLogo from '../img/POSLogo.png'

function Business() {
  const startupGuide = [
    {
      id: 1,
      title: 'Connect Business',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: businessIntelligent
    },
    {
      id: 2,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: appsMarketplace
    },
    {
      id: 3,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: purpleRhombus
    },
    {
      id: 4,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: redLightning
    },
    {
      id: 5,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: appsMarketplace
    },
    {
      id: 6,
      title: 'Connect Business',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: connectBusiness
    },
    {
      id: 7,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: businessIntelligent
    },
    {
      id: 8,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: blueCircles
    },
  ]

  const blogs = [
    {
      title: 'Guide',
      description: 'Run effective campaigns with apps that help you identify marketing gaps.',
      background: blog1,
      button: 'Optimize with zaviago',
      colour: '#FFFFFF'
    },
    {
      title: 'Blog',
      description: 'So What\'s the plan',
      background: blog2,
      button: 'Make project plan',
      colour: '#FFFFFF'
    },
    {
      title: 'Guide',
      description: 'Run effective campaigns with apps',
      background: blog3,
      button: 'Optimize with zaviago',
      colour: '#000000'
    },
  ]

  const openVideo = () => {
    document.getElementById('video-overlay').style.animation = 'openModal 400ms forwards';
    document.getElementById('video-apps').style.animation = 'openModal 400ms forwards';
    document.getElementById('video-opened').play();
  }

  const closeVideo = () => {
    document.getElementById('video-overlay').style.animation = 'closeModal 400ms forwards';
    document.getElementById('video-apps').style.animation = 'closeModal 400ms forwards';
    document.getElementById('video-opened').pause();
  }

  return (
    <>
      <div className="sm:p-10 p-5 page-section" style={{ paddingTop: '20px' }}>
        <div className="pt-0 section-container mx-auto">
          <span className="rounded-full px-4 py-1 font-11 font-semibold leading-6 text-slate-400 ring-1 ring-inset ring-slate-300" style={{ fontFamily: "Poppins" }}>
            Beta
          </span>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-[#1F272E] font-semibold text-xl font-calSans mt-3'>App Store</h3>
              <p className='font-inter font-normal text-[#687178] text-[13px] mt-1'>Choose professional solutions to power your business</p>
            </div>
            <div className="flex">
              <img src={finlabLogo} alt="" />
              <img src={UOBLogo} className="ml-4" alt="" />
            </div>
          </div>
        </div>

        <div className='section-container mx-auto mt-[30px] rounded-b-[16px]' style={{ boxShadow: '0px 4px 70px 0px #72727240' }}>
          <div className='appBanner'>
            <p className='font-inter font-medium text-[#FFFFFF] text-[13px] mt-1'>Choose professional solutions to power your business</p>
            <h2 className='font-inter text-[32px] font-bold sm:w-[390px] text-[#ffffff] leading-[38.73px] mt-[14px]'>Get the POS system for your store.</h2>
          </div>
          <div className='py-[16px] px-[23px]'>
            <div className='flex items-center'>
              <img src={POSLogo} className='w-[68px] h-[68px] mr-5' alt="" />
              <div>
                <h4 className='font-inter font-semibold text-sm text-[#1A1B25]'>POS software for business</h4>
                <p className='font-inter font-normal text-[13px] text-[#687178] sm:w-[268px]'>Facilitate payments and pay out sellers or service providers.</p>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Business