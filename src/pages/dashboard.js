import React from "react";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import startWorking from "../img/start-working.png";
import appsMarketplace from "../img/apps-marketplace.png";
import watchTutorials from "../img/watch-tutorials.png";

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
          <div className="mx-auto max-w-7xl pb-10 grid grid-cols-2 gap-x-8 px-8">
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
                      className="ml-3 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-offset-2" style={{backgroundColor:"#0099FF"}}
                    >
                      Login
                    </button>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        <div className="mx-auto max-w-7xl pb-24 grid grid-cols-3 gap-x-8 px-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
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

        <div className="mx-auto max-w-7xl pb-10 gap-x-8 px-8">
          <div className="border border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Job Postings</h3>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Create new job
                </button>
                </div>
            </div>
          </div>
          <div className="border border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-2">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Job Postings</h3>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Create new job
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Dashboard