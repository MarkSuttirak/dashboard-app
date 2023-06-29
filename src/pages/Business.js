import React from 'react'
import websiteMade from '../img/website-made.png'
import businessIntelligent from '../img/business-intelligent.png'
import appsMarketplace from '../img/app-marketplace.png'
import connectBusiness from '../img/connect-business.png'
import learnMore from '../img/learn-more.png'
import startupGuideImg from '../img/startup-guide.png'
import platformMarketplace from '../img/platform-marketplace.png'
import startupDomains from '../img/startup-dommains.png'
import startupDomainsIcon from '../img/startup-domain-icon.png'
import terms from '../img/terms.png'
import play from '../img/play.png'
import testVideo from '../img/test.mp4'

function Business() {
    const startupGuide = [
        {
            id:1,
            subTitle: 'Big Data',
            title: 'Connect Business Intelligent',
            description: 'Facilitate payments and pay out sellers or service providers.',
            image: businessIntelligent
        },
        {
            id:2,
            subTitle: 'Big Data',
            title: 'Apps Marketplace',
            description: 'Facilitate payments and pay out sellers or service providers.',
            image: appsMarketplace
        },
        {
            id:3,
            subTitle: 'Big Data',
            title: 'Apps Marketplace',
            description: 'Facilitate payments and pay out sellers or service providers.',
            image: connectBusiness
        },
        {
            id:4,
            subTitle: 'Big Data',
            title: 'Apps Marketplace',
            description: 'Facilitate payments and pay out sellers or service providers.',
            image: appsMarketplace
        },
        {
            id:5,
            subTitle: 'Big Data',
            title: 'Apps Marketplace',
            description: 'Facilitate payments and pay out sellers or service providers.',
            image: appsMarketplace
        },
        {
            id:6,
            subTitle: 'Big Data',
            title: 'Connect Business Intelligent',
            description: 'Facilitate payments and pay out sellers or service providers.',
            image: businessIntelligent
        },
        {
            id:7,
            subTitle: 'Big Data',
            title: 'Apps Marketplace',
            description: 'Facilitate payments and pay out sellers or service providers.',
            image: appsMarketplace
        },
        {
            id:8,
            subTitle: 'Big Data',
            title: 'Apps Marketplace',
            description: 'Facilitate payments and pay out sellers or service providers.',
            image: connectBusiness
        },
    ]
    return (
        <>
            <div className="sm:p-10 p-5 page-section">
                <div className="pt-0">
                    <div className=" max-w-2xl">
                        <div className="max-w-lg text-center sm:text-left">
                            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                                Dream it. Build it. Grow it.🎉
                            </h1>
                            <p className="mt-1 text-sm leading-8 text-gray-600">
                                Welcome to your <span style={{ color: "#006AFF" }} className="font-bold">Zaviago/OS</span> v.1.4.88
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border border-[#EFEFEF] h-[400px] w-full block md:flex mt-4 rounded-xl overflow-hidden">
                    <div className="w-[40%] h-full pl-16 py-12 mr-10">
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
                    <div className="relative">
                        <img src={websiteMade} className="min-w-[960px] w-full h-full" alt="" />
                        <img src={play} className="w-36 absolute top-[33%] left-[41%]" alt="" />
                    </div>
                </div>
                <div className="mt-12">
                    <div>
                        <h3 className="font-inter text-[18px] font-semibold mt-4 text-[#1A1B25]">Guide to get Started</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 rounded-xl gap-x-[21px] started-guide">
                        {startupGuide.map((info) => (
                            <div key={info.id} className="w-full sm:w-full p-5 border border-[#EFEFEF] rounded-lg mt-5">
                                <div>
                                    <img src={info.image} className="w-8" alt="" />
                                </div>
                                <div>
                                    <h4 className="mt-2 font-SegoeUI text-xs font-normal">{info.subTitle}</h4>
                                    <h3 className="mt-1 font-inter text-sm font-semibold text-[#1A1B25]">{info.title}</h3>
                                    <h3 className="mt-1 font-inter text-[13px] font-normal">{info.description}</h3>
                                    <div className="flex mt-4">
                                        <button className="bg-[#2490EF] text-white rounded-md w-20 h-7 font-inter text-[13px] font-semibold">+ Install</button>
                                        <button className="w-24 h-8 font-SegoeUI text-sm font-normal flex items-center ml-4"> Learn more <img src={learnMore} className="ml-2" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 lg:h-[330px] block md:grid grid-cols-2 gap-x-[21px]">
                        <div className="w-full border mr-1 h-full border-[#EFEFEF] rounded-lg overflow-hidden lg:py-8 block lg:flex">
                            <div className="w-[300px] lg:w-1/2">
                                <img src={startupGuideImg} className="lg:h-full h-[300px]" alt="" />
                            </div>
                            <div className="w-full lg:w-1/2 block lg:flex justify-center items-center p-5">
                                <div className="block sm:flex flex-col justify-center items-start">
                                    <img src={platformMarketplace} className="w-[37px]" alt="" />
                                    <h4 className="mt-2 font-SegoeUI text-xs font-normal">Zaviago Canva</h4>
                                    <h3 className="mt-1 font-inter text-sm font-semibold text-[#1A1B25]">Create a platform or marketplace</h3>
                                    <h3 className="mt-1 font-inter text-[13px] font-normal w-[220px]">Facilitate payments and pay out sellers or service providers.</h3>
                                    <div className="flex mt-4">
                                        <button className="bg-[#2490EF] text-white rounded-md w-24 h-8 font-inter text-[13px] font-semibold">+ Install</button>
                                        <button className="w-24 h-8 font-SegoeUI text-sm font-normal flex items-center ml-4"> Learn more <img src={learnMore} className="ml-2" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border h-full border-[#EFEFEF] rounded-lg overflow-hidden block mt-5 sm:mt-0 lg:flex">
                            <div className="w-[300px] lg:w-1/2 ">
                                <img src={startupDomains} className="lg:object-cover lg:h-full h-[300px]" alt="" />
                            </div>
                            <div className="w-full lg:w-1/2 block lg:flex justify-center items-center lg-0 p-5">
                                <div className="block sm:flex flex-col justify-center items-start">
                                    <img src={startupDomainsIcon} className="w-[37px]" alt="" />
                                    <h4 className="mt-2 font-SegoeUI text-xs font-normal">Zaviago Canva</h4>
                                    <h3 className="mt-1 font-inter text-sm font-semibold text-[#1A1B25]">Create a platform or marketplace</h3>
                                    <h3 className="mt-1 font-inter text-[13px] font-normal w-[220px]">Facilitate payments and pay out sellers or service providers.</h3>
                                    <div className="flex mt-4">
                                        <button className="bg-[#2490EF] text-white rounded-md w-24 h-8 font-inter text-[13px] font-semibold">+ Install</button>
                                        <button className="w-24 h-8 font-SegoeUI text-sm font-normal flex items-center ml-4"> Learn more <img src={learnMore} className="ml-2" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 mb-44">
                    <div>
                        <h3 className="font-inter text-[18px] font-semibold mt-4 text-[#1A1B25]">Quick Links</h3>
                        <p className="mt-1 font-inter text-xs font-normal text-[#687178]">Domains pointing to your site</p>
                    </div>
                    <div>
                        <div className="mt-4 ">
                            <div className="flex border-b border-[#EBEEF0] pb-4">
                                <div className="w-1/2 ml-4">
                                    <p className="font-inter text-[11px] sm:text-[13px] font-medium mt-4 text-[#2490EF]">Report a Problem</p>
                                </div>
                                <div className="w-1/2 ml-4">
                                    <p className="font-inter text-[11px] sm:text-[13px] font-medium mt-4 text-[#2490EF]">Guide to the zaviago’s store</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2 ml-4">
                                    <p className="font-inter text-[11px] sm:text-[13px] font-medium mt-4 text-[#2490EF]">Contact support </p>
                                </div>
                                <div className="w-1/2 ml-4">
                                    <p className="font-inter text-[11px] sm:text-[13px] font-medium mt-4 text-[#2490EF]">About Zaviago</p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center border-t border-[#EBEEF0] pt-4">
                                    <p className="ml-4 font-inter text-xs font-medium text-[#8A8E91]">Terms & Conditions</p>
                                    <img src={terms} className="w-[20px]" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Business