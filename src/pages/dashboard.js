import React, { useState, useEffect, Fragment } from "react";
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Cog6ToothIcon, CreditCardIcon, LinkIcon, ListBulletIcon, PencilIcon, PlusIcon, ShoppingBagIcon, ShoppingCartIcon, TagIcon, TicketIcon, UserPlusIcon, WalletIcon, ArrowLeftOnRectangleIcon, BellIcon } from '@heroicons/react/24/outline'
import startWorking from "../img/start-working.png";
import appsMarketplace from "../img/apps-marketplace.png";
import watchTutorials from "../img/watch-tutorials.png";
import wrapper from "../img/wrapper.svg";
import pfyne from "../img/pfyne.svg";
import person1 from "../img/person1.svg";
import person2 from "../img/person2.svg";
import thrBookFrame from "../img/theBookFrame.svg";
import keyLock from "../img/key-lock.svg";
import finlabLogo from "../img/finlab-logo.svg";
import UOBLogo from "../img/uob.svg";
import google from "../img/google.svg";
import tiktok from "../img/tiktok.svg";
import freeTrial from "../img/free-trial.png";
import freeTrialLogo from "../img/free-trial-logo.png";
import line from "../img/line.svg";
import meta from "../img/meta.svg";
import workSpaceLogo from "../img/workspace-logo.png";
import upgradeicon from "../img/upgrade-icon.png";
import amazon from "../img/amazon.svg";
import startWorkingSvg from "../img/startWorkingSvg.svg";
import appStoreSvg from "../img/appStoreSvg.svg";
import tutorialsSvg from "../img/tutorialsSvg.svg";
import { Link, useNavigate } from "react-router-dom";
import PopUp from '../components/popup'
import UserViewPopup from "../components/userViewPopup";
import Spacer from "../components/spacer";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useUser } from "../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../client/api";

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    instock: 'In Stock',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    instock: 'Out of Stock',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    instock: 'Infinite Stock',
  },
]

const Dashboard = ({ loadingLogo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openEditShortcuts, setOpenEditShortcuts] = useState(false)

  const { user, auth, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.onboarding.site_created === false) {
      navigate('/dashboard/instance-configuration');
    }
  }, [auth?.onboarding.site_created]);

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
    enabled: !!sites?.site_list.length
  });

  const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.loginAsAdmin(name, reason), {
    onSuccess: (res) => {
      const { sid, site } = res.data.message;
      if (sid && site) {
        window.open(`https://${site}/app/home?sid=${sid}`, '_blank');
      }
    }
  });

  const closePopUp = () => {
    setIsOpen(false);
  }

  const [isOpen2, setIsOpen2] = useState(false);
  const handleInviteClick2 = () => {
    setIsOpen2(!isOpen2);
  }
  const closePopUp2 = () => {
    setIsOpen2(false);
  }

  const shortcuts = [
    {
      title: 'Point of Sale',
      icon: <WalletIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Products',
      icon: <TagIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Orders',
      icon: <ShoppingCartIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Coupons',
      icon: <TicketIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Forms',
      icon: <ListBulletIcon width='20' strokeWidth='2' />,
      added: true
    },
    {
      title: 'Payments',
      icon: <CreditCardIcon width='20' strokeWidth='2' />,
      added: false
    },
    {
      title: 'Pay Links',
      icon: <LinkIcon width='20' strokeWidth='2' />,
      added: false
    },
  ]

  const dashboardInfo = [
    {
      title: 'Start Working',
      icon: startWorkingSvg,
      description: 'Go to your business app',
      background: startWorking,
    },
    {
      title: 'Apps Marketplace',
      icon: appStoreSvg,
      description: 'See more at AppStore',
      background: appsMarketplace,
    },
    {
      title: 'Watch Tutorials',
      icon: tutorialsSvg,
      description: 'Learn Zaviago/OS',
      background: watchTutorials,
    },
  ];

  const orders = [
    {
      code: 'ACC-SINV-2023-00730',
      date: '30/08/23 12:00',
      name: 'Chomchuenischomchuen',
      price: '฿4,000.00',
      isPaid: true
    },
    {
      code: 'ACC-SINV-2023-00737',
      date: '30/08/23 12:00',
      name: 'Thitaisalsothita',
      price: '฿4,000.00',
      isPaid: false
    }
  ]

  const Orders = ({ code, date, name, price, isPaid }) => {
    const [orderIsPaid, setOrderIsPaid] = useState(isPaid);
    const ordersImg = [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Test One'
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Test Two'
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Test Three'
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Test Four'
      }
    ]

    const isPaidBadges = ['Paid', 'Shipped'];
    return (
      <div className="border-b border-b-[#E3E3E3] py-4">
        <div className="flex justify-between mb-2">
          <p className="tab-desc">{code}</p>
          <p className="tab-desc">{date}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="subheading">{name}</h2>
            <p className="tab-desc">{price}</p>
            <div className="flex gap-x-2 mt-4">
              {orderIsPaid ? (
                <>
                  {isPaidBadges.map((badge) => (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {badge}
                    </span>
                  ))}
                </>
              ) : (
                <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                  Unpaid
                </span>
              )}
            </div>
          </div>
          <div className={`w-[88px] grid overflow-hidden rounded-lg${orders.length <= 1 ? '' : ' grid-cols-2'}`}>
            {ordersImg.map((img) => (
              <img src={img.src} alt={img.alt} className={`aspect-square w-full h-full object-cover`} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(max-width:767px)").matches) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [])

  return (
    <>
      {!mobile ? (
        <>
          {/* Header Dashboard */}
          {!loadingLogo ? (
            <></>
          ) : (
            <div class="moving-line"></div>
          )}
          <div className="bg-white page-section pb-16">
            <div className="relative overflow-hidden">
              <div className="dashboard-container pb-8 flex">
                <div className="basis-full">
                  {!loadingLogo ? (
                    <div className="flex justify-between">
                      <h1 className="display-semibold">
                        Welcome, {user?.first_name} 🙏
                      </h1>
                      <button
                        className="primary-btn"
                        onClick={() => loginAsAdmin({ name: sites?.site_list[0].name, reason: "Login as admin" })}
                      >
                        Login as Admin
                      </button>
                    </div>
                  ) : (
                    <div className="animate-pulse mt-2">
                      <div className="bg-[#F3F3F3] w-[200px] h-[24px] aspect-square rounded-lg"></div>
                    </div>
                  )}
                </div>
              </div>
              <Spacer size={20} />

              <div className="mobile-section">
                {!loadingLogo ? (
                  <div className="overflow-x-auto dashboard-container flex gap-x-2 flex-nowrap">
                    <button className="white-outline-btn" onClick={() => setOpenEditShortcuts(true)}>
                      <PencilIcon width='20' strokeWidth='2' />
                    </button>
                    {shortcuts.map((s) => (
                      <>
                        {s.added === true && (
                          <button className="black-btn whitespace-pre with-icon">
                            {s.icon}
                            {s.title}
                          </button>
                        )}
                      </>
                    ))}
                  </div>
                ) : (
                  <div className="dashboard-container m-5">
                    <div className="animate-pulse bg-[#F3F3F3] h-[40px] rounded-[20px]" />
                  </div>
                )}

                <Spacer size={20} />
              </div>
              {isOpen &&
                <div>
                  <div className="popup-overlay"></div>
                  <div>
                    <div className='sm:w-[511px] w-[40%]  bg-white rounded-2xl sm:right-[30%]  sm:left-auto left-[2%] popup-container z-[199] relative'>
                      <PopUp closePopUp={closePopUp} />
                    </div>
                  </div>
                </div>
              }
              {isOpen2 &&
                <div>
                  <div className="popup-overlay"></div>
                  <div>
                    <div className='sm:w-[511px] w-[40%]  bg-white rounded-2xl sm:right-[30%]  sm:left-auto left-[2%] popup-container z-[199] relative'>
                      <UserViewPopup closePopUp2={closePopUp2} />
                    </div>
                  </div>
                </div>
              }
              <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>

            {!loadingLogo ? (
              <>
                <div className="dashboard-container gap-x-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {dashboardInfo.map((info) => (
                    <div
                      key={info.title}
                      className="relative h-[200px] flex flex-col justify-between space-x-3 bg-white p-4 pb-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400" style={{ background: "url(" + info.background + ")", backgroundSize: "100%", backgroundRepeat: "no-repeat", borderRadius: "20px" }}
                    >
                      <img src={info.icon} className="w-[48px] h-[48px]" alt="" />
                      <div className="min-w-0">
                        <h2 className="text-md font-bold text-white leading-5">{info.title}</h2>
                        <p className="truncate font-bold font-13" style={{ color: "#FFFFFF99" }}>{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <br className="space-xs" />
              </>
            ) : (
              <div className="animate-pulse dashboard-container pb-10 gap-x-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {dashboardInfo.map((info) => (
                  <div
                    key={info.title}
                    className="relative w-[242px] h-[200px] rounded-[20px] flex items-center space-x-3 bg-[#F3F3F3] p-4 pb-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                  >
                  </div>
                ))}
              </div>
            )}

            <div className="dashboard-container mb-5">
              <div className="flex items-center border border-[#E3E3E3] rounded-lg py-3">
                <div className="flex px-5 gap-x-1">
                  <p className="tab-desc-small">Free plan</p>
                  <a href="#" className="text-link-small bold">Compare Plans</a>
                </div>
                <div className='border-l border-l-[#E3E3E3] h-5'></div>
                <div className="flex px-5 gap-x-1">
                  <p className="tab-desc-small">No domain</p>
                  <a href="#" className="text-link-small bold">Connect</a>
                </div>
                <div className='border-l border-l-[#E3E3E3] h-5'></div>
                <div className="flex px-5 gap-x-1">
                  <p className="tab-desc-small">No business email</p>
                  <a href="#" className="text-link-small bold">Connect</a>
                </div>
                <div className='border-l border-l-[#E3E3E3] h-5'></div>
                <a href="#" className="flex px-5 gap-x-1 items-center">
                  <Cog6ToothIcon width='20' />
                  <p className="tab-desc-small">Business Info</p>
                </a>
              </div>
            </div>

            {!loadingLogo ? (
              <div className="dashboard-container mb-5">
                <div className="pt-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-1/2">
                      <h2 className="subheading">Site Setup</h2>
                      <div className="flex items-center gap-x-2">
                        <p className="tab-desc">7 steps to go</p>
                        <div className="w-1/3 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <Link className="text-link bold">View All (7)</Link>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0788F5] text-white p-5 rounded-lg">
                  <h2 className="heading-white">Connect a custom domain</h2>
                  <p className="desc-white">Get a unique address for your site</p>

                  <div className="flex justify-end">
                    <button className="white-btn mt-4 blue">Connect domain</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dashboard-container m-5">
                <div className="animate-pulse bg-[#F3F3F3] h-[200px] rounded-[20px]" />
              </div>
            )}

            {/* Packages */}

            <div className="dashboard-container pb-5 gap-x-8 mt-[50px]">

              {!loadingLogo ? (
                <div className=" bg-white">
                  <div className="sm:flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={workSpaceLogo} className="h-[22px] w-[22px] " alt="" />
                      <p className="font-calSans text-[15px] font-semibold ml-2">Your Workspace</p>
                      <div className="ml-4 mt-2 flex-shrink-0">
                        <span className={`${sites?.site_list[0].status === "Active" ? "bg-emerald-50 online" : "bg-red-50"} inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium`}>
                          <svg className="-ml-1 mr-1.5 h-2 w-2" fill={
                            sites?.site_list[0].status === "Active" ? "#52C41A" : "#F5222D"
                          } viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          {sites?.site_list[0].status}
                        </span>
                      </div>
                    </div>
                    <p className="font-calSans text-xs font-semibold">Powered by</p>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="">
                      <div className="flex gap-x-2 text-2xl">
                        <h1 className="text-black font-calSans font-semibold text-[22px]" style={{ color: "#333333" }}>{sites?.site_list[0].name}</h1>
                      </div>
                      <Link to="/change-domain" className="link-anchor inline-block mt-2 text-xs">
                        Change Domain
                      </Link>
                    </div>
                    <div className="flex ">
                      <img src={finlabLogo} alt="" />
                      <img src={UOBLogo} className="ml-4" alt="" />
                    </div>
                  </div>
                  <div className="-ml-4 mt-5 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2 pb-10">

                      <div className="flex mt-2 gap-x-5 items-center">
                        <a
                          target="_blank"
                          href={`http://${sites?.site_list[0].name}`}
                          className="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2 btn btn-primary-shadow text-xs"
                        >
                          View Website
                        </a>
                      </div>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0 items-center flex pb-10">
                      <div className="isolate flex -space-x-1 overflow-hidden">
                        <img
                          className="relative z-30 inline-block h-5 w-5 rounded-md ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="relative z-20 inline-block h-5 w-5 rounded-md ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="relative z-10 inline-block h-5 w-5 rounded-md ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                          alt=""
                        />
                        <img
                          className="relative z-0 inline-block h-5 w-5 rounded-md ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  {/* Progress Bars */}
                  <div className="flex gap-x-2 items-center mb-4 columns-4">
                    <div className="w-[30%]">
                      <p className="font-13">Customer</p>
                    </div>

                    <div class="w-1/2 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "40%" }}></div>
                    </div>

                    <p className="font-13">(2.1%)</p>

                    <div className="text-right w-1/4">
                      <p className="font-11 paras">50 / 100 Customer</p>
                    </div>
                  </div>

                  <div className="flex gap-x-2 items-center mb-4 columns-4">
                    <div className="w-[30%]">
                      <p className="font-13">Database ({(siteOverview?.plan.total_database_usage / 500) * 100}%)</p>
                    </div>

                    <div class="w-1/2 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: (siteOverview?.plan.total_database_usage / 500) * 100 }}></div>
                    </div>

                    <p className="font-13">({(siteOverview?.plan.total_database_usage / 500) * 100}%)</p>

                    <div className="text-right w-1/4">
                      <p className="font-11 paras">{siteOverview?.plan.total_database_usage} MB / 500 MB</p>
                    </div>
                  </div>

                  <div className="flex gap-x-2 items-center mb-4 columns-4">
                    <div className="w-[30%]">
                      <p className="font-13">Storage ({((siteOverview?.plan.total_storage_usage / 1024) * 100).toFixed(2)}%)</p>
                    </div>

                    <div class="w-1/2 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: (siteOverview?.plan.total_storage_usage / 1024) * 100 }}></div>
                    </div>

                    <p className="font-13">({((siteOverview?.plan.total_storage_usage / 1024) * 100).toFixed(2)}%)</p>

                    <div className="text-right w-1/4">
                      <p className="font-11 paras">{siteOverview?.plan.total_storage_usage} MB / 1 GB</p>
                    </div>
                  </div>

                  <div className="flex gap-x-2 items-center mb-4 columns-4">
                    <div className="w-[30%]">
                      <p className="font-13">Orders</p>
                    </div>

                    <div class="w-1/2 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "20%" }}></div>
                    </div>

                    <p className="font-13">(90.1%)</p>

                    <div className="text-right w-1/4">
                      <p className="font-11 paras">30 / 100 Orders</p>
                    </div>
                  </div>

                  <a href="#" className="link-anchor float-right font-11">View More</a>
                </div>

              ) : (
                <div className="animate-pulse mt-2">
                  <div className="">
                    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-[#F3F3F3] w-[22px] h-[22px] rounded-lg"></div>
                          <div className="bg-[#F3F3F3] ml-2 w-[80px] h-[15px] rounded-lg"></div>
                        </div>
                        <div className="bg-[#F3F3F3] w-[100px] h-[20px] ml-2 rounded-full"></div>
                      </div>
                      <div className="ml-4 mt-2 flex-shrink-0">
                        <div className="bg-[#F3F3F3] w-[75px] h-[22px] aspect-square rounded-lg"></div>
                      </div>
                    </div>
                    <div className="-ml-4 mt-0 flex flex-wrap items-center justify-between sm:flex-nowrap">
                      <div className="ml-4 mt-2 pb-10">

                        <div className="flex mt-2 gap-x-5 items-center">
                          <div className="bg-[#F3F3F3] w-[130px] h-[30px] aspect-square rounded-lg"></div>
                          <div className="bg-[#F3F3F3] w-[70px] h-[15px] aspect-square rounded-lg"></div>
                        </div>
                      </div>
                      <div className="ml-4 mt-2 flex-shrink-0 items-center flex pb-10">
                        <div className="isolate flex -space-x-1 overflow-hidden">
                          <div className="bg-[#F3F3F3] w-[20px] h-[20px] aspect-square rounded-lg"></div>
                          <div className="bg-[#F3F3F3] w-[20px] h-[20px] aspect-square rounded-lg -ml-1"></div>
                          <div className="bg-[#F3F3F3] w-[20px] h-[20px] aspect-square rounded-lg -ml-1"></div>
                          <div className="bg-[#F3F3F3] w-[20px] h-[20px] aspect-square rounded-lg -ml-1"></div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="flex gap-x-2 items-center mb-4 columns-4">
                      <div className="w-[30%]">
                        <div className="bg-[#F3F3F3] w-[150px] h-[12px] aspect-square rounded-lg mt-1"></div>
                      </div>

                      <div className="bg-[#F3F3F3] w-[50%] h-[12px] aspect-square rounded-lg mt-1"></div>

                      <div className="text-right flex justify-end w-1/4">
                        <div className="bg-[#F3F3F3] w-[120px] h-[12px] aspect-square rounded-lg mt-1"></div>
                      </div>
                    </div>

                    <div className="flex gap-x-2 items-center mb-4 columns-4">
                      <div className="w-[30%]">
                        <div className="bg-[#F3F3F3] w-[150px] h-[12px] aspect-square rounded-lg mt-1"></div>
                      </div>

                      <div className="bg-[#F3F3F3] w-[50%] h-[12px] aspect-square rounded-lg mt-1"></div>

                      <div className="text-right flex justify-end w-1/4">
                        <div className="bg-[#F3F3F3] w-[120px] h-[12px] aspect-square rounded-lg mt-1"></div>
                      </div>
                    </div>

                    <div className="flex gap-x-2 items-center mb-4 columns-4">
                      <div className="w-[30%]">
                        <div className="bg-[#F3F3F3] w-[150px] h-[12px] aspect-square rounded-lg mt-1"></div>
                      </div>

                      <div className="bg-[#F3F3F3] w-[50%] h-[12px] aspect-square rounded-lg mt-1"></div>

                      <div className="text-right flex justify-end w-1/4">
                        <div className="bg-[#F3F3F3] w-[120px] h-[12px] aspect-square rounded-lg mt-1"></div>
                      </div>
                    </div>

                    <div className="flex gap-x-2 items-center mb-4 columns-4">
                      <div className="w-[30%]">
                        <div className="bg-[#F3F3F3] w-[150px] h-[12px] aspect-square rounded-lg mt-1"></div>
                      </div>

                      <div className="bg-[#F3F3F3] w-[50%] h-[12px] aspect-square rounded-lg mt-1"></div>

                      <div className="text-right flex justify-end w-1/4">
                        <div className="bg-[#F3F3F3] w-[120px] h-[12px] aspect-square rounded-lg mt-1"></div>
                      </div>
                    </div>

                    <div className="bg-[#F3F3F3] w-[55px] h-[12px] aspect-square rounded-lg mt-1"></div>
                  </div>
                </div>
              )}

            </div>

            <Spacer size={40} />
            {/* Packages */}
            {!loadingLogo ? (
              <div className="dashboard-container">
                <div className="bg-[#F3F4F6] py-10 pl-10 sm:flex justify-between items-center" style={{ borderRadius: "20px 20px 20px 20px" }}>
                  <div>
                    <p className="text-[#1F272E] font-bold" style={{ fontFamily: 'Eventpop' }}>แพ็กเกจที่คุณใช้อยู่</p>
                    <div className="flex items-center mt-[15px]"> <img src={freeTrialLogo} className="w-[45px] h-[45px]" alt="" /> <h2 className="ml-6 sm:leading-10 leading-8 text-[30px] sm:text-[48px] font-semibold text-[#1F272E] font-calSans">free trial package.</h2> </div>
                    <div className="flex items-center mt-5">
                      <button className="bg-[#000000] text-white text-xs sm:text-base flex py-[13px] px-[8px] sm:py-[10px] sm:px-[18px] rounded-lg items-center " style={{ boxShadow: '0px 4px 8px 0px #00000033' }}><img src={upgradeicon} className="w-[14px] h-[14px] mr-[5px] sm:mr-[11px] " />  Upgrade to Pro</button>
                      <button className="text-[#1F272E] font-inter font-semibold text-base sm:ml-4 ml-1">Talk with support</button>
                    </div>
                  </div>
                  <div>
                    <img src={freeTrial} className="w-[200px] h-[272px] sm:mt-0 mt-4" alt="" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="border animate-pulse border-gray-200 bg-[#F3F4F6] py-20 pl-10 dashboard-container flex justify-between items-center" style={{ borderRadius: "20px 20px 20px 20px" }}>
                <div>
                  <div className="bg-[#c9ccd1] w-[130px] h-[15px] aspect-square rounded-md"></div>
                  <div className="flex items-center mt-[15px]"> <div className="bg-[#c9ccd1] w-[45px] h-[45px] aspect-square rounded-md"></div> <div className="bg-[#c9ccd1] ml-6 max-w-[240px] w-full h-[50px] rounded-md"></div> </div>
                  <div className="flex items-center mt-5">
                    <div className="bg-[#c9ccd1] w-[120px] md:w-[170px] h-[44px] rounded-md"></div>
                    <div className="bg-[#c9ccd1] ml-5 w-[120px] md:w-[170px] h-[44px] rounded-md"></div>
                  </div>
                </div>
              </div>
            )}

            <Spacer size={40} />

            {!loadingLogo ? (
              <div className="dashboard-container py-10 gap-x-8">
                <div className="border border-gray-200 bg-white px-6 pt-4 pb-7" style={{ borderRadius: "20px" }}>
                  <div className="flex gap-x-2.5 items-center">
                    <img src={thrBookFrame} />
                    <h1 className="text-md headings font-bold">ไกด์การใช้งาน และ ติดต่อทีมงาน</h1>
                  </div>

                  <p className="paras mt-3 font-13">You are on Agency PremiumCare+package: this include, <strong>9am-19am</strong> <br />live Chat support with LINE OA direct responses to all your issue.</p>

                  <div className="btn-group mt-5 flex justify-between flex-wrap">
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
                    <div className="flex -space-x-4 overflow-hidden">
                      <img
                        className="inline-block h-[35px] w-[35px] rounded-full"
                        src={pfyne}
                        alt=""
                      />
                      <img
                        className="inline-block h-[35px] w-[35px] rounded-full"
                        src={person1}
                        alt=""
                      />
                      <img
                        className="inline-block h-[35px] w-[35px] rounded-full"
                        src={person2}
                        alt=""
                      />
                    </div>

                    <div className="ml-2">
                      <p className="text-xs font-medium">Need help with something?</p>
                      <a href="#" style={{ color: "#0066CC", letterSpacing: "-0.224px" }} className="font-13">Ask a Specialist</a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-pulse">
                <div className="dashboard-container pb-10 gap-x-8">
                  <div className="border border-gray-200 bg-white px-6 pt-4 pb-7" style={{ borderRadius: "20px" }}>
                    <div className="flex gap-x-2.5 items-center">
                      <div className="bg-[#F3F3F3] w-[40px] h-[40px] aspect-square rounded-lg mt-1"></div>
                      <div className="bg-[#F3F3F3] w-[224px] h-[24px] aspect-square rounded-lg mt-1"></div>
                    </div>

                    <div className="bg-[#F3F3F3] max-w-[200px] w-full md:w-[420px] h-[12px] aspect-square rounded-lg mt-2"></div>
                    <div className="bg-[#F3F3F3] max-w-[100px] w-full md:w-[290px] h-[12px] aspect-square rounded-lg mt-2"></div>

                    <div className="btn-group mt-5 rows-5 md:columns-5">
                      <button className="flex items-center font-13 headings gap-x-2.5">
                        <div className="bg-[#F3F3F3] w-[14px] h-[14px] aspect-square rounded-lg"></div>
                        <div className="bg-[#F3F3F3] w-[80px] h-[12px] aspect-square rounded-lg"></div>
                      </button>

                      <button className="flex items-center font-13 headings gap-x-2.5">
                        <div className="bg-[#F3F3F3] w-[14px] h-[14px] aspect-square rounded-lg"></div>
                        <div className="bg-[#F3F3F3] w-[80px] h-[12px] aspect-square rounded-lg"></div>
                      </button>

                      <button className="flex items-center font-13 headings gap-x-2.5">
                        <div className="bg-[#F3F3F3] w-[14px] h-[14px] aspect-square rounded-lg"></div>
                        <div className="bg-[#F3F3F3] w-[80px] h-[12px] aspect-square rounded-lg"></div>
                      </button>

                      <button className="flex items-center font-13 headings gap-x-2.5">
                        <div className="bg-[#F3F3F3] w-[14px] h-[14px] aspect-square rounded-lg"></div>
                        <div className="bg-[#F3F3F3] w-[80px] h-[12px] aspect-square rounded-lg"></div>
                      </button>

                      <button className="flex items-center font-13 headings gap-x-2.5">
                        <div className="bg-[#F3F3F3] w-[14px] h-[14px] aspect-square rounded-lg"></div>
                        <div className="bg-[#F3F3F3] w-[80px] h-[12px] aspect-square rounded-lg"></div>
                      </button>
                    </div>

                    <div className="flex mt-6 items-center">
                      <div className="flex -space-x-4 overflow-hidden">
                        <div className="bg-[#F3F3F3] w-[35px] h-[35px] aspect-square rounded-full"></div>
                        <div className="bg-[#F3F3F3] w-[35px] h-[35px] aspect-square rounded-full -ml-1"></div>
                        <div className="bg-[#F3F3F3] w-[35px] h-[35px] aspect-square rounded-full -ml-1"></div>
                      </div>

                      <div className="ml-2">
                        <div className="bg-[#F3F3F3] w-[156px] h-[12px] aspect-square rounded-lg"></div>
                        <div className="bg-[#F3F3F3] w-[92px] h-[12px] aspect-square rounded-lg mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          <Transition.Root show={openEditShortcuts} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpenEditShortcuts}>
              <div className="fixed inset-0" />

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full mobile-section">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-200"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-200"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen">
                        <div className="flex h-full overflow-auto flex-col bg-white py-4">
                          <div className="px-4 sm:px-6 shadow-lg pb-3">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="main-heading">Edit Shortcuts</Dialog.Title>
                              <div className="flex h-7 items-center">
                                <button
                                  type="button"
                                  className="rounded-md bg-white text-gray-400 outline-none"
                                  onClick={() => setOpenEditShortcuts(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex-1 px-4 sm:px-6 py-4">
                            <h2 className="subheading">Main shortcuts</h2>
                            <ul>
                              {shortcuts.map((s) => (
                                <li key={s.title} className="flex justify-between items-center py-3 border-b">
                                  <div className="flex gap-2 items-center">
                                    {s.icon}
                                    {s.title}
                                  </div>
                                  {/* <div>
                                      {s.added === true ? (
                                        <CheckCircleIcon className="h-5 w-5 text-[#0788F5]" aria-hidden="true"/>
                                      ) : (
                                        <button onClick={(item) => item.added = true}>
                                          <PlusCircleIcon className="h-5 w-5 text-[#0788F5]" aria-hidden="true" />
                                        </button>
                                      )}
                                    </div> */}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      ) : (
        <>
          {/* Header Dashboard */}
          {!loadingLogo ? (
            <></>
          ) : (
            <div class="moving-line"></div>
          )}
          <div className="bg-white page-section pb-16">
            <div className="relative overflow-hidden">
              <div className="dashboard-mobile pb-8 flex">
                <div className="basis-full">
                  {!loadingLogo ? (
                    <div className="flex justify-between">
                      <h1 className="display-semibold">
                        Welcome, {user?.first_name} 🙏
                      </h1>
                      <Bars3Icon width='24' />
                    </div>
                  ) : (
                    <div className="animate-pulse mt-2">
                      <div className="bg-[#F3F3F3] w-[200px] h-[24px] aspect-square rounded-lg"></div>
                    </div>
                  )}
                </div>


              </div>
              <Spacer size={20} />

              <div className="mobile-section">
                {!loadingLogo ? (
                  <div className="overflow-x-auto dashboard-mobile flex gap-x-2 flex-nowrap">
                    <button className="white-outline-btn" onClick={() => setOpenEditShortcuts(true)}>
                      <PencilIcon width='20' strokeWidth='2' />
                    </button>
                    {shortcuts.map((s) => (
                      <>
                        {s.added === true && (
                          <button className="black-btn whitespace-pre with-icon">
                            {s.icon}
                            {s.title}
                          </button>
                        )}
                      </>
                    ))}
                  </div>
                ) : (
                  <div className="dashboard-mobile m-5">
                    <div className="animate-pulse bg-[#F3F3F3] h-[40px] rounded-[20px]" />
                  </div>
                )}

                <Spacer size={20} />
              </div>
              {isOpen &&
                <div>
                  <div className="popup-overlay"></div>
                  <div>
                    <div className='sm:w-[511px] w-[40%]  bg-white rounded-2xl sm:right-[30%]  sm:left-auto left-[2%] popup-container z-[199] relative'>
                      <PopUp closePopUp={closePopUp} />
                    </div>
                  </div>
                </div>
              }
              {isOpen2 &&
                <div>
                  <div className="popup-overlay"></div>
                  <div>
                    <div className='sm:w-[511px] w-[40%]  bg-white rounded-2xl sm:right-[30%]  sm:left-auto left-[2%] popup-container z-[199] relative'>
                      <UserViewPopup closePopUp2={closePopUp2} />
                    </div>
                  </div>
                </div>
              }
              <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="pt-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-1/2">
                    <h2 className="subheading">Site Setup</h2>
                    <div className="flex items-center gap-x-2">
                      <p className="tab-desc">7 steps to go</p>
                      <div className="w-1/3 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link className="text-link bold">View All (7)</Link>
                  </div>
                </div>
              </div>

              <div className="bg-[#0788F5] text-white p-5 rounded-lg">
                <h2 className="heading-white">Connect a custom domain</h2>
                <p className="desc-white">Get a unique address for your site</p>

                <div className="flex justify-end">
                  <button className="white-btn mt-4 blue">Connect domain</button>
                </div>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Analytics</h2>
                    <Link className="text-link bold">View More</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">

                  <p className="tab-desc">Aug 3 - Today, compared to Jul 4 - Aug 2</p>

                  <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between items-center border-b py-3">
                      <div>
                        <h2 className="subheading">Site sessions</h2>
                        <p className="tab-desc">52{' '}<span className="tab-desc-small">12%</span></p>
                      </div>
                      <div>
                        <div className="w-[100px] bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "12%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-b py-3">
                      <div>
                        <h2 className="subheading">Total sales</h2>
                        <p className="tab-desc">฿2140.00{' '}<span className="tab-desc-small">35%</span></p>
                      </div>
                      <div>
                        <div className="w-[100px] bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-b py-3">
                      <div>
                        <h2 className="subheading">Total orders</h2>
                        <p className="tab-desc">321{' '}<span className="tab-desc-small">11%</span></p>
                      </div>
                      <div>
                        <div className="w-[100px] bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "11%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-b py-3">
                      <div>
                        <h2 className="subheading">Subscriptions sold</h2>
                        <p className="tab-desc">564{' '}<span className="tab-desc-small">18%</span></p>
                      </div>
                      <div>
                        <div className="w-[100px] bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Contacts</h2>
                    <Link className="text-link bold">View All</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <div className="overflow-x-auto flex gap-x-2 flex-nowrap">
                    <button className="white-outline-btn whitespace-pre">
                      All 10
                    </button>
                    <button className="white-outline-btn whitespace-pre">
                      Members 1
                    </button>
                    <button className="white-outline-btn whitespace-pre">
                      New Members 9
                    </button>
                  </div>

                  <div className="flex gap-x-2 mt-4">
                    <button>
                      <div className="w-12 h-12 flex justify-center items-center m-auto bg-[#F2F2F2] mb-2 rounded-full">
                        <ArrowLeftOnRectangleIcon width='24' />
                      </div>
                      <p className="tab-desc-small">Invite Members</p>
                    </button>
                    <button>
                      <div className="w-12 h-12 flex justify-center items-center m-auto bg-[#F2F2F2] mb-2 rounded-full">
                        <UserPlusIcon width='24' />
                      </div>
                      <p className="tab-desc-small">Add a Contact</p>
                    </button>
                  </div>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Orders</h2>
                    <Link className="text-link bold">Manage Orders</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <div className="overflow-x-auto flex gap-x-2 flex-nowrap mb-5">
                    <button className="white-outline-btn whitespace-pre">
                      Unfulfiled 0
                    </button>
                    <button className="white-outline-btn whitespace-pre">
                      Unpaid 0
                    </button>
                  </div>

                  {orders.length <= 0 ? (
                    <>
                      {orders.length((order) =>
                        <Orders code={order.code} date={order.date} name={order.name} price={order.price} isPaid={order.isPaid} />
                      )}
                      <p className="text-link mt-4">View More</p>
                    </>
                  ) : (
                    <p className="tab-desc">No unfulfiled orders</p>
                  )}


                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Products</h2>
                    <Link className="text-link bold">Manage Products</Link>
                  </div>
                </section>

                <hr />

                {products.length <= 0 ? (
                  <section className="p-4 text-center">
                    <ShoppingBagIcon width='24' className="m-auto" />

                    <h2 className="subheading">Add products</h2>
                    <p className="tab-desc mb-2">Vestibulum rutrum urna leo, sit amet vehicula purus dignissim fermentum.</p>
                    <Link className="text-white bg-[#0788F5] inline-flex px-3 py-1 rounded-full text-sm items-center gap-x-1">
                      <PlusIcon width='20' strokeWidth='2' />
                      Add products
                    </Link>
                  </section>
                ) : (
                  <section className="p-4">
                    <div className="overflow-x-auto flex gap-x-2 flex-nowrap mb-2">
                      <button className="white-outline-btn whitespace-pre">
                        Last Updated
                      </button>
                      <button className="white-outline-btn whitespace-pre">
                        Out of Stock
                      </button>
                      <button className="white-outline-btn whitespace-pre">
                        Most Viewed
                      </button>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 xl:gap-x-8">
                      {products.map((product) => (
                        <div key={product.id} className="group relative">
                          <div className="min-h-60 aspect-square w-full overflow-hidden rounded-md bg-gray-200">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover lg:h-full lg:w-full"
                            />
                          </div>
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h3>
                                <Link to={product.href} className="subheading">
                                  <span aria-hidden="true" className="absolute inset-0" />
                                  {product.name}
                                </Link>
                              </h3>
                              <p className="tab-desc">{product.instock}</p>
                            </div>
                            <p className="tab-desc">{product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-link mt-4">View More</p>
                  </section>
                )}
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Latest Blog Posts</h2>
                    <Link className="text-link bold">Manage Blog</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4 flex flex-col gap-y-4">
                  <div className="flex gap-x-2">
                    <div>
                      <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' width='60' className="rounded-lg" />
                    </div>
                    <div>
                      <h2 className="subheading">New Technologies That Can Help...</h2>
                      <p className="tab-desc">Jun 30, 2023 | tim cruise</p>
                    </div>
                  </div>

                  <div className="flex gap-x-2">
                    <div>
                      <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' width='60' className="rounded-lg" />
                    </div>
                    <div>
                      <h2 className="subheading">New Technologies That Can Help...</h2>
                      <p className="tab-desc">Jun 30, 2023 | tim cruise</p>
                    </div>
                  </div>

                  <div className="flex gap-x-2">
                    <div>
                      <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' width='60' className="rounded-lg" />
                    </div>
                    <div>
                      <h2 className="subheading">New Technologies That Can Help...</h2>
                      <p className="tab-desc">Jun 30, 2023 | tim cruise</p>
                    </div>
                  </div>

                  <p className="text-link">View More</p>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Tasks & Reminders</h2>
                    <Link className="text-link bold">Manage Tasks</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <div className="overflow-x-auto flex gap-x-2 flex-nowrap mb-2">
                    <button className="white-outline-btn whitespace-pre">
                      Unfulfiled 0
                    </button>
                    <button className="white-outline-btn whitespace-pre">
                      Unpaid 0
                    </button>
                  </div>

                  <p className="tab-desc">Once you create tasks, they will appear here.</p>
                  <Link className="text-link bold">Create New Task
                  </Link>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Pay Links</h2>
                    <Link className="text-link bold">View All</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4 text-center">
                  <LinkIcon width='24' className="m-auto" />

                  <h2 className="subheading">Get paid instantly with Pay Links</h2>
                  <p className="tab-desc mb-2">Charge clients once or multiple times, share links on social, via email or any way you want.</p>
                  <Link className="text-white bg-[#0788F5] inline-flex px-3 py-1 rounded-full text-sm items-center gap-x-1">
                    <PlusIcon width='20' strokeWidth='2' />
                    Create New
                  </Link>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Invoices</h2>
                    <Link className="text-link bold">Manage Invoices</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <div className="overflow-x-auto flex gap-x-2 flex-nowrap mb-2">
                    <button className="white-outline-btn whitespace-pre">
                      Unfulfiled 0
                    </button>
                    <button className="white-outline-btn whitespace-pre">
                      Unpaid 0
                    </button>
                  </div>

                  <p className="tab-desc mb-2">Once you create invoices, they will appear here.<br />Send invoices to get paid online.</p>
                  <Link className="text-link bold">Create New Invoice</Link>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Payments</h2>
                    <Link className="text-link bold">View Payments</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <div className="overflow-x-auto flex gap-x-2 flex-nowrap mb-2">
                    <button className="white-outline-btn whitespace-pre">
                      Unfulfiled 0
                    </button>
                    <button className="white-outline-btn whitespace-pre">
                      Unpaid 0
                    </button>
                  </div>

                  <p className="tab-desc mb-2">Connect a payment method so customers can pay you online</p>
                  <Link className="text-link bold">Connect a Payment Method</Link>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Subscriptions</h2>
                    <Link className="text-link bold">View All</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <p className="tab-desc mb-2">Once you have subscriptions, you will see them here.</p>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Forms Activity</h2>
                    <Link className="text-link bold">View All</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <p className="tab-desc mb-2">Once you have forms, you will see them here.</p>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Media Storage</h2>
                    <Link className="text-link bold">Manage</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500" style={{ width: "10%" }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="tab-desc">Limit</p>
                    <p className="tab-desc-small">50MB of 500MB</p>
                  </div>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Marketing Campaigns</h2>
                    <Link className="text-link bold">Manage</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4">
                  <p className="tab-desc mb-2">Once you create new campaigns, they will appear here.</p>
                  <Link className="text-link bold">Create Campaign</Link>
                </section>
              </div>
            </div>

            <div className="dashboard-mobile mb-5">
              <div className="border rounded-lg">
                <section className="p-4">
                  <div className="flex justify-between items-start">
                    <h2 className="subheading">Push Notifications</h2>
                    <Link className="text-link bold">Manage</Link>
                  </div>
                </section>

                <hr />

                <section className="p-4 text-center">
                  <BellIcon width='24' className="m-auto" />

                  <h2 className="subheading">Notify members on their mobile</h2>
                  <p className="tab-desc mb-2">Update your members and get them to interact with the mobile app.</p>
                  <Link className="text-white bg-[#0788F5] inline-flex px-3 py-1 rounded-full text-sm items-center gap-x-1">
                    Send Push Notification
                  </Link>
                </section>
              </div>
            </div>
          </div>

          <Transition.Root show={openEditShortcuts} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpenEditShortcuts}>
              <div className="fixed inset-0" />

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full mobile-section">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-200"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-200"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen">
                        <div className="flex h-full overflow-auto flex-col bg-white py-4">
                          <div className="px-4 sm:px-6 shadow-lg pb-3">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="main-heading">Edit Shortcuts</Dialog.Title>
                              <div className="flex h-7 items-center">
                                <button
                                  type="button"
                                  className="rounded-md bg-white text-gray-400 outline-none"
                                  onClick={() => setOpenEditShortcuts(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex-1 px-4 sm:px-6 py-4">
                            <h2 className="subheading">Main shortcuts</h2>
                            <ul>
                              {shortcuts.map((s) => (
                                <li key={s.title} className="flex justify-between items-center py-3 border-b">
                                  <div className="flex gap-2 items-center">
                                    {s.icon}
                                    {s.title}
                                  </div>
                                  {/* <div>
                                {s.added === true ? (
                                  <CheckCircleIcon className="h-5 w-5 text-[#0788F5]" aria-hidden="true"/>
                                ) : (
                                  <button onClick={(item) => item.added = true}>
                                    <PlusCircleIcon className="h-5 w-5 text-[#0788F5]" aria-hidden="true" />
                                  </button>
                                )}
                              </div> */}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      )
      }
    </>
  )
}

export default Dashboard