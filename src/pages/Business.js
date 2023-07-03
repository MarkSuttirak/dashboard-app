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
import testVideo from '../img/test.mp4'
import blog1 from '../img/blog1.svg'
import blog2 from '../img/blog2.svg'
import blog3 from '../img/blog3.svg'

function Business() {
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
      {
        id:5,
        title: 'Connect Business Intelligent',
        description: 'Facilitate payments and pay out sellers or service providers.',
        image: appsMarketplace
      },
      {
        id:6,
        title: 'Connect Business',
        description: 'Facilitate payments and pay out sellers or service providers.',
        image: connectBusiness
      },
      {
        id:7,
        title: 'Connect Business Intelligent',
        description: 'Facilitate payments and pay out sellers or service providers.',
        image: businessIntelligent
      },
      {
        id:8,
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
        colour: 'white'
      },
      {
        title: 'Blog',
        description: 'So What\'s the plan',
        background: blog2,
        button: 'Make project plan',
        colour: 'white'
      },
      {
        title: 'Guide',
        description: 'Run effective campaigns with apps',
        background: blog3,
        button: 'Optimize with zaviago',
        colour: 'black'
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
        <div className="sm:p-10 p-5 page-section">
          <div className="pt-0">
            <div className=" max-w-2xl">
              <div className="max-w-lg text-center sm:text-left">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  App Store 👋
                </h1>
                <p className="mt-1 text-sm leading-8 text-gray-600">
                  latest update 12.05.2023 <span style={{ color: "#006AFF" }} className="font-bold">Zaviago/OS</span> v.1.4.88
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#EFEFEF] h-[400px] w-full block md:flex mt-4 rounded-xl overflow-hidden bg-[#DBF0FF] justify-between">
            <div className="w-[400px] h-full pl-16 py-12 mr-10">
              <div className="flex flex-col justify-between h-full w-56">
                <div className="w-56">
                  <p className="font-inter text-[13px] font-normal">zaviago 2023</p>
                  <h3 className="font-inter text-2xl font-semibold mt-4">Connect Business Intelligent</h3>
                </div>
                <div>
                  <p className="font-inter text-[13px] font-normal">Facilitate payments and pay out sellers or service providers.</p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-end cursor-pointer" onClick={openVideo}>
              <img src={websiteMade} className="w-full h-full" alt="" />
              <img src={play} className="w-36 absolute top-[33%] left-[41%]" alt="" />
            </div>
          </div>
          <div className="mt-12">
            <div className='mb-5'>
              <h3 className="font-inter text-[18px] font-semibold mt-4 text-[#1A1B25]">Guide to get Started</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 rounded-xl gap-x-[21px] gap-y-[32px] started-guide">
              {startupGuide.map((info) => (
                <div key={info.id} className="w-full sm:w-full rounded-lg mt-2 flex started-guide-card">
                  <div className='inline-block w-[100px] mr-5'>
                    <img src={info.image} className="w-[85px] h-[85px]" alt="" />
                  </div>
                  <div>
                    <h3 className="mt-1 font-inter text-sm font-semibold text-[#1A1B25] guide-title">{info.title}</h3>
                    <h3 className="mt-1 font-inter text-[13px] font-normal paras">{info.description}</h3>
                    <div className="flex mt-4">
                      <button className="bg-[#0099FF] text-white rounded-md w-20 h-7 font-inter text-[13px] font-semibold btn-primary-shadow">+ Install</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mb-5 mt-20'>
              <h3 className="font-inter text-[18px] font-semibold mt-4 text-[#1A1B25]">In the spotlight</h3>
            </div>

            <div className="mt-5 lg:h-[330px] block md:grid grid-cols-2 gap-x-[21px]">
              <div className="w-full border mr-1 h-full border-[#EFEFEF] rounded-lg overflow-hidden block lg:flex">
                <div className="w-[300px] lg:w-1/2">
                  <img src={startupGuideImg} className="lg:h-full h-[300px]" alt="" />
                </div>
                <div className="w-full lg:w-1/2 block lg:flex justify-center items-center p-5 bg-[#CDE6FF]">
                  <div className="block sm:flex flex-col justify-center items-start">
                    <img src={platformMarketplace} className="w-[37px]" alt="" />
                    <h3 className="mt-2 font-inter text-sm font-semibold text-[#1A1B25]">Create a platform or marketplace</h3>
                    <h3 className="mt-1 font-inter text-[13px] font-normal w-[220px] paras">Facilitate payments and pay out sellers or service providers.</h3>
                    <div className="flex mt-[133px]">
                      <button className="font-inter text-[13px] underline decoration-solid paras flex items-center gap-x-[10px]">Optimize with zaviago
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#687178" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                <div className="w-full border h-full border-[#EFEFEF] rounded-lg overflow-hidden block mt-5 sm:mt-0 lg:flex">
                  <div className="w-[300px] lg:w-1/2 ">
                    <img src={startupDomains} className="lg:object-cover lg:h-full h-[300px]" alt="" />
                  </div>
                  <div className="w-full lg:w-1/2 block lg:flex justify-center items-center lg-0 p-5 bg-[#FCEDFF]">
                    <div className="block sm:flex flex-col justify-center items-start">
                      <img src={startupDomainsIcon} className="w-[37px]" alt="" />
                      <h3 className="mt-2 font-inter text-sm font-semibold text-[#1A1B25]">Create a platform or marketplace</h3>
                      <h3 className="mt-1 font-inter text-[13px] font-normal w-[220px] paras">Facilitate payments and pay out sellers or service providers.</h3>
                      <div className="flex mt-[133px]">
                        <button className="font-inter text-[13px] underline decoration-solid paras flex items-center gap-x-[10px]">Optimize with zaviago
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#687178" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="mt-12 mb-44">
            <div className='mb-5'>
              <h3 className="font-inter text-[18px] font-semibold mt-4 text-[#1A1B25]">Find your people. Sell them stuff they love. Repeat.</h3>
            </div>
            <div className="mx-auto pb-10 grid grid-cols-1 gap-x-4 grid grid-cols-1 gap-4 lg:grid-cols-3 blog-sec">
              {blogs.map((info) => (
                <div
                  key={info.title}
                  className="relative flex items-end space-x-3 bg-white p-6 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 aspect-square" style={{background:"url(" + info.background + ")",backgroundSize:"100%",backgroundRepeat:"no-repeat",borderRadius:"20px"}}
                >
                  <div className="min-w-0">
                    <h2 className="text-md font-bold text-white leading-5 font-inter text-[20px]" style={{color: info.colour}}>{info.title}</h2>
                    <p className="font-semibold text-[27px] font-inter mt-[6px] mb-6" style={{color: info.colour,lineHeight:"32px"}}>{info.description}</p>
                    <button style={{color: info.colour, textDecoration:"underline"}} className='text-[17px] cursor-pointer flex items-center gap-x-[10px]'>{info.button}
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill={info.colour} viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="video-overlay" className='w-full h-full bg-gray-500 bg-opacity-75 fixed top-0 z-[99]'></div>
        <div className='fixed top-0 w-screen h-screen flex items-center justify-center z-[99]' id="video-apps">
          <div className='fixed top-5 right-5 cursor-pointer' onClick={closeVideo}>
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512" fill='white'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </div>
          <video width="60%" height="60%" controls id="video-opened">
            <source src={testVideo} type="video/mp4"/>
          </video>
        </div>
      </>
    )
}

export default Business