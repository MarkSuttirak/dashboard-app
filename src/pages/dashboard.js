import React from "react";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import startWorking from "../img/start-working.png";
import appsMarketplace from "../img/apps-marketplace.png";
import watchTutorials from "../img/watch-tutorials.png";
import bolt from "../img/bolt.svg";
import finlab from "../img/finlab.svg";
import uob from "../img/uob.svg";
import world from "../img/world.svg";
import guideIcon from "../img/guide-icon.svg";
import wrapper from "../img/wrapper.svg";
import pfyne from "../img/pfyne.svg";
import person1 from "../img/person1.svg";
import person2 from "../img/person2.svg";
import keyLock from "../img/key-lock.svg";
import google from "../img/google.svg";
import tiktok from "../img/tiktok.svg";
import line from "../img/line.svg";
import meta from "../img/meta.svg";
import amazon from "../img/amazon.svg";

const Dashboard = () => {
    const dashboardInfo = [
        {
          title: 'Start Working',
          description: 'Go to your business app',
          background:
            startWorking,
        },
        {
            title: 'Apps Marketplace',
            description: 'See more at AppStore',
            background:
              appsMarketplace,
          },
          {
            title: 'Watch Tutorials',
            description: 'Learn Zaviago/OS',
            background:
              watchTutorials,
          },
      ]
    return (
      <>
        {/* Header Dashboard */}
        <div className="bg-white page-section pb-16">
        <div className="relative overflow-hidden">
          <div className="mx-auto dashboard-container pb-10 grid grid-cols-2 gap-x-8">
            <div className="pt-0">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <div className="mt-4">
                    <a href="#" className="inline-flex space-x-6">
                      <span className="rounded-full px-4 font-11 font-semibold leading-6 text-slate-400 ring-1 ring-inset ring-slate-300" style={{fontFamily:"Poppins"}}>
                        Beta
                      </span>
                    </a>
                  </div>
                  <h1 className="mt-2 text-xl font-semibold tracking-tight text-gray-900">
                    Dream it. Build it. Grow it.🎉
                  </h1>
                  <p className="mt-1 text-sm leading-8 text-gray-600">
                    Welcome to your <span style={{color:"#006AFF"}} className="font-bold">Zaviago/OS</span> v.1.4.88
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto flex items-center justify-end w-full">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
                <div
                    className="mt-4 flex md:mt-0 md:ml-4"
                    aria-hidden="true"
                  />
                    <button
                      type="button"
                      className="inline-flex items-center rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-sm focus:outline-none focus:ring-offset-2 text-xs"
                      style={{backgroundColor:"#F3F3F3",padding:"7px 10px"}}
                    >
                      Invite
                    </button>
                    <button
                      type="button"
                      className="ml-3 inline-flex items-center rounded-lg border border-transparent text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2 btn font-13"
                      style={{padding:"4px 18px"}}
                    >
                      Login
                    </button>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        <div className="mx-auto dashboard-container pb-10 grid grid-cols-3 gap-x-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {dashboardInfo.map((info) => (
        <div
          key={info.title}
          className="relative flex items-center space-x-3 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400" style={{background:"url(" + info.background + ")",backgroundSize:"100%",backgroundRepeat:"no-repeat",borderRadius:"20px"}}
        >
          <div className="min-w-0 pt-28">
              <span className="absolute inset-0" aria-hidden="true" />
              <h2 className="text-md font-bold text-white">{info.title}</h2>
              <p className="truncate text-sm font-bold font-13" style={{color:"#FFFFFF99"}}>{info.description}</p>
          </div>
        </div>
         ))}
        </div>

        {/* Packages */}
        <div className="mx-auto dashboard-container pb-5 gap-x-8">
          <div className="border border-gray-200 bg-white p-10" style={{borderRadius:"20px 20px 0 0"}}>
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">แพ็คเกจการใช้งาน</h3>
                  <h1 className="mt-4 mb-10" style={{fontFamily:"Eventpop",lineHeight:"47.5px",fontSize:"39px"}}>ทดลองใช้<br/>ระบบฟรี 30 วัน</h1>

                  <p>สนับสนุนให้คุณทดลองใช้งานโดย</p>
                  <div className="flex gap-x-5 mt-4">
                    <img src={finlab}/>
                    <img src={uob}/>
                  </div>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                <button
                    type="button"
                    className="relative inline-flex gap-x-2.5 items-center rounded-md border border-transparent bg-black px-4 py-3 text-sm font-medium text-white shadow-md hover:bg-black focus:outline-none focus:ring-offset-2 w-full justify-center"
                >
                    <img src={bolt} />
                    Upgrade to Pro
                </button>
                <div className="mt-4">
                  <h2>เริ่มต้นที่</h2>
                  <p className="price text-4xl font-bold inline-block mr-2">750 thb</p>
                  <span className="text-md">/เดือน</span>

                  <p className="text-md mt-2" style={{fontFamily:"Eventpop"}}>9,000 thb / ชำระเป็นรายปี</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 bg-white p-10 pb-16" style={{borderRadius:"0 0 20px 20px",borderTop:"none"}}>
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">เข้าใช้งานระบบ</h3>

                  <div className="flex gap-x-2 text-2xl mt-4">
                    <img src={world} width="16"/>
                    <h1 className="text-black font-bold">alpgroup.aca.fc.zaviago.com</h1>
                  </div>

                  <a href="#" className="link-anchor inline-block mt-2 text-xs">
                    Change Domain
                  </a>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-0.5 text-sm font-medium online">
                    <svg className="-ml-1 mr-1.5 h-2 w-2" fill="#52C41A" viewBox="0 0 8 8">
                      <circle cx={4} cy={4} r={3} />
                    </svg>
                    Online
                  </span>
                </div>
            </div>
            <div className="-ml-4 mt-0 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-2 pb-10">

              <div className="flex mt-5 gap-x-5 items-center">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2 btn"
                >
                    Login As Admin
                </button>
                <a href="#" className="link-anchor font-11">
                    View Website
                </a>
                </div>
            </div>
              <div className="ml-4 mt-2 flex-shrink-0 items-center flex pb-10">
                <div className="isolate flex -space-x-1 overflow-hidden">
                  <img
                    className="relative z-30 inline-block h-6 w-6 rounded-md ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-20 inline-block h-6 w-6 rounded-md ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-10 inline-block h-6 w-6 rounded-md ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="relative z-0 inline-block h-6 w-6 rounded-md ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="flex gap-x-2 items-center mb-4 columns-4">
              <div className="w-1/4">
                <p className="font-13">Customer</p>
              </div>

              <div className="flex w-1/2 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-500" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <p className="font-13">(2.1%)</p>

              <div className="text-right w-1/4">
                <p className="font-11">50 / 100 Customer</p>
              </div>
            </div>

            <div className="flex gap-x-2 items-center mb-4 columns-4">
              <div className="w-1/4">
                <p className="font-13">Database (34.8%)</p>
              </div>

              <div className="flex w-1/2 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-500" role="progressbar" style={{width:"40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <p className="font-13">(2.1%)</p>

              <div className="text-right w-1/4">
                <p className="font-11">174 MB / 500 MB</p>
              </div>
            </div>

            <div className="flex gap-x-2 items-center mb-4 columns-4">
              <div className="w-1/4">
                <p className="font-13">Storage (0.0%)</p>
              </div>

              <div className="flex w-1/2 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-500" role="progressbar" style={{width:"40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <p className="font-13">(90.1%)</p>

              <div className="text-right w-1/4">
                <p className="font-11">2 MB / 1 GB</p>
              </div>
            </div>

            <div className="flex gap-x-2 items-center mb-4 columns-4">
              <div className="w-1/4">
                <p className="font-13">Orders</p>
              </div>

              <div className="flex w-1/2 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-500" role="progressbar" style={{width:"10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <p className="font-13">(90.1%)</p>

              <div className="text-right w-1/4">
                <p className="font-11">30 / 100 Orders</p>
              </div>
            </div>

            <a href="#" className="link-anchor float-right font-11">View More</a>
          </div>
        </div>

        {/* Guides */}
        <div className="mx-auto dashboard-container pb-10 gap-x-8">
          <div className="border border-gray-200 bg-white p-6" style={{borderRadius:"20px"}}>
            <div className="flex gap-x-2.5 items-center">
              <img src={guideIcon} />
              <h1 className="text-xl headings">ไกด์การใช้งาน และ ติดต่อทีมงาน</h1>
            </div>

            <p className="paras mt-3 font-13">You are on Agency PremiumCare+package: this include, <strong>9am-19am</strong> <br/>live Chat support with LINE OA direct responses to all your issue.</p>

            <div className="btn-group mt-5 lg:columns-5">
              <button className="flex items-center font-13 headings gap-x-2.5">
                <img src={wrapper} />
                แชทกับทีมงาน
              </button>

              <button className="flex items-center font-13 headings gap-x-2.5">
                <img src={wrapper} />
                คู่มือการใช้งาน
              </button>

              <button className="flex items-center font-13 headings gap-x-2.5">
                <img src={wrapper} />
                วิดีโอแนะนำระบบ
              </button>

              <button className="flex items-center font-13 headings gap-x-2.5">
                <img src={wrapper} />
                บริการเปิดระบบ
              </button>

              <button className="flex items-center font-13 headings gap-x-2.5">
                <img src={wrapper} />
                แชทกับทีมงาน
              </button>
            </div>

            <div className="flex mt-6 items-center">
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                  src={pfyne}
                  alt=""
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                  src={person1}
                  alt=""
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                  src={person2}
                  alt=""
                />
              </div>

              <div className="ml-2">
                <p className="text-sm font-medium">Need help with something?</p>
                <a href="#" style={{color:"#0066CC",letterSpacing:"-0.224px"}} className="font-13">Ask a Specialist</a>
              </div>
            </div>
          </div>
        </div>

        {/* App Store */}
        <div className="mx-auto dashboard-container pb-10 gap-x-8">
          <div className="flex justify-between mb-7">
            <div className="float-left">
              <p style={{color:"#111827"}} className="text-xl font-semibold">App Store</p>
              <p className="paras text-sm">You have got much more than just a website. <br/>Build and expand your digital business with application</p>
            </div>

            <div className="float-right">
              <button className="flex gap-x-2.5 items-center upgrade-btn">
                <img src={keyLock} />
                Upgrade
              </button>
              <p className="text-right">Upgrade website to unlock <br/>addons application</p>
            </div>
          </div>

          <div className="columns-5 flex gap-x-4">
            <div className="apps">
              <div className="border flex justify-center app-logo">
                <img src={google} />
              </div>
              <p className="app-name">Google Site</p>
              <p className="paras text-xs">Connect your website with Google services</p>
            </div>
            <div className="apps">
              <div className="border flex justify-center app-logo">
                <img src={meta} />
              </div>
              <p className="app-name">Facebook & IG</p>
              <p className="paras text-xs">Bring your products to facebook and instagram.</p>
            </div>
            <div className="apps">
              <div className="border flex justify-center app-logo">
                <img src={amazon} />
              </div>
              <p className="app-name">Amazon Shop</p>
              <p className="paras text-xs">Loox is a social proof solution.</p>
            </div>
            <div className="apps">
              <div className="border flex justify-center app-logo">
                <img src={line} />
              </div>
              <p className="app-name">Line CRM</p>
              <p className="paras text-xs">Bring your products to facebook and instagram.</p>
            </div>
            <div className="apps">
              <div className="border flex justify-center app-logo">
                <img src={tiktok} />
              </div>
              <p className="app-name">TikTok Shop</p>
              <p className="paras text-xs">Connect and sync all order with TikTok Seller</p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Dashboard