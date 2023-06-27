import React from "react";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import startWorking from "../img/start-working.png";
import appsMarketplace from "../img/apps-marketplace.png";
import watchTutorials from "../img/watch-tutorials.png";
import bolt from "../img/bolt.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import finlab from "../img/finlab.svg";
import uob from "../img/uob.svg";
import world from "../img/world.svg";

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
        <div className="bg-white page-section">
        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-5xl pb-10 grid grid-cols-2 gap-x-8 px-8">
            <div className="pt-0">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <div className="mt-4">
                    <a href="#" className="inline-flex space-x-6">
                      <span className="rounded-full px-4 py-1 text-sm font-semibold leading-6 text-slate-400 ring-1 ring-inset ring-indigo-600/10">
                        Beta
                      </span>
                    </a>
                  </div>
                  <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
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
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-2"
                    >
                      Invite
                    </button>
                    <button
                      type="button"
                      className="ml-3 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2 btn"
                    >
                      Login
                    </button>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        <div className="mx-auto max-w-5xl pb-24 grid grid-cols-3 gap-x-8 px-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {dashboardInfo.map((info) => (
        <div
          key={info.title}
          className="relative flex items-center space-x-3 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400" style={{background:"url(" + info.background + ")",backgroundSize:"100%",backgroundRepeat:"no-repeat",borderRadius:"20px"}}
        >
          <div className="min-w-0 pt-40">
              <span className="absolute inset-0" aria-hidden="true" />
              <h2 className="text-md font-bold text-white">{info.title}</h2>
              <h3 className="truncate text-sm text-white font-bold">{info.description}</h3>
          </div>
        </div>
         ))}
        </div>

        <div className="mx-auto max-w-5xl pb-10 gap-x-8 px-8">
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
                    className="relative inline-flex gap-x-2.5 items-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-black focus:outline-none focus:ring-offset-2"
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
          <div className="border border-gray-200 bg-white p-10" style={{borderRadius:"0 0 20px 20px",borderTop:"none"}}>
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">เข้าใช้งานระบบ</h3>

                  <div className="flex gap-x-2 text-2xl mt-4">
                    <img src={world} width="16"/>
                    <h1 className="text-black font-bold">alpgroup.aca.fc.zaviago.com</h1>
                  </div>

                  <a href="#" className="link-anchor inline-block mt-2">
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
            <div className="ml-4 mt-2">

                <div className="flex mt-5 gap-x-5 items-center">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2 btn"
                >
                    Login As Admin
                </button>
                <a href="#" className="link-anchor">
                    View Website
                </a>
                </div>
              </div>
              <div className="ml-4 mt-2 flex-shrink-0 items-center flex">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-0.5 text-sm font-medium online">
                <svg className="-ml-1 mr-1.5 h-2 w-2" fill="#52C41A" viewBox="0 0 8 8">
                    <circle cx={4} cy={4} r={3} />
                </svg>
                Online
                </span>
              </div>
            </div>

            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
              <div className="flex flex-col justify-center overflow-hidden bg-blue-500" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl pb-10 gap-x-8 px-8">

        </div>
      </div>
      </>
    )
}

export default Dashboard