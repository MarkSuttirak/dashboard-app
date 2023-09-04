import React, { useState, useEffect, Fragment } from "react";
import { Bars3Icon, CheckCircleIcon, ChevronRightIcon, EnvelopeIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import { ArrowLeftOnRectangleIcon, BellIcon, CreditCardIcon, LinkIcon, ListBulletIcon, PencilIcon, PlusIcon, ShoppingCartIcon, TagIcon, TicketIcon, UserPlusIcon, WalletIcon } from '@heroicons/react/24/outline'
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
import { Link } from "react-router-dom";
import PopUp from '../components/popup'
import UserViewPopup from "../components/userViewPopup";
import Spacer from "../components/spacer";
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

const DashboardNew = ({ loadingLogo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openEditShortcuts, setOpenEditShortcuts] = useState(false)

  const [hasOrders, setHasOrders] = useState(true);

  const handleInviteClick = () => {
    setIsOpen(!isOpen);
  }

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
      icon: <WalletIcon width='20' strokeWidth='2'/>,
      added: true
    },
    {
      title: 'Products',
      icon: <TagIcon width='20' strokeWidth='2'/>,
      added: true
    },
    {
      title: 'Orders',
      icon: <ShoppingCartIcon width='20' strokeWidth='2'/>,
      added: true
    },
    {
      title: 'Coupons',
      icon: <TicketIcon width='20' strokeWidth='2'/>,
      added: true
    },
    {
      title: 'Forms',
      icon: <ListBulletIcon width='20' strokeWidth='2'/>,
      added: true
    },
    {
      title: 'Payments',
      icon: <CreditCardIcon width='20' strokeWidth='2'/>,
      added: false
    },
    {
      title: 'Pay Links',
      icon: <LinkIcon width='20' strokeWidth='2'/>,
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
      src:'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt:'Test One'
    },
    {
      src:'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt:'Test Two'
    },
    {
      src:'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt:'Test Three'
    },
    {
      src:'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt:'Test Four'
    }
  ]

  // const [loadingLogo, setLoadingLogo] = useState(true);
  // const timeout = setTimeout(() => {
  //   console.log(loadingLogo)
  // }, 950);

  return (
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
                    Welcome, Chutiphol 🙏
                  </h1>
                  <Bars3Icon width='24'/>
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
                    <ArrowLeftOnRectangleIcon width='24'/>
                  </div>
                  <p className="tab-desc-small">Invite Members</p>
                </button>
                <button>
                  <div className="w-12 h-12 flex justify-center items-center m-auto bg-[#F2F2F2] mb-2 rounded-full">
                    <UserPlusIcon width='24'/>
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

              {hasOrders ? (
                <>
                  <div className="flex justify-between mb-2">
                    <p className="tab-desc">#1321313231</p>
                    <p className="tab-desc">30 Aug 2023 12:00</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h2 className="subheading">Chomchuenchom</h2>
                      <p className="tab-desc">฿4,000.00</p>
                    </div>
                    <div className={`w-[60px] grid overflow-hidden rounded-lg${orders.length <= 1 ? '' : ' grid-cols-2'}`}>
                      {orders.map((order) => (
                        <img src={order.src} alt={order.alt} className={`aspect-square w-full h-full object-cover`}/>
                      ))}
                    </div>
                  </div>
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
                    <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
                        <p className="tab-desc">{product.color}</p>
                      </div>
                      <p className="tab-desc">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
                  <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' width='60' className="rounded-lg"/>
                </div>
                <div>
                  <h2 className="subheading">New Technologies That Can Help...</h2>
                  <p className="tab-desc">Jun 30, 2023 | tim cruise</p>
                </div>
              </div>

              <div className="flex gap-x-2">
                <div>
                  <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' width='60' className="rounded-lg"/>
                </div>
                <div>
                  <h2 className="subheading">New Technologies That Can Help...</h2>
                  <p className="tab-desc">Jun 30, 2023 | tim cruise</p>
                </div>
              </div>

              <div className="flex gap-x-2">
                <div>
                  <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' width='60' className="rounded-lg"/>
                </div>
                <div>
                  <h2 className="subheading">New Technologies That Can Help...</h2>
                  <p className="tab-desc">Jun 30, 2023 | tim cruise</p>
                </div>
              </div>
              
              <p className="text-link">View 5 More</p>
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
              <LinkIcon width='24' className="m-auto"/>

              <h2 className="subheading">Get paid instantly with Pay Links</h2>
              <p className="tab-desc mb-2">Charge clients once or multiple times, share links on social, via email or any way you want.</p>
              <Link className="text-white bg-[#0788F5] inline-flex px-3 py-1 rounded-full text-sm items-center gap-x-1">
                <PlusIcon width='20' strokeWidth='2'/>
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

              <p className="tab-desc mb-2">Once you create invoices, they will appear here.<br/>Send invoices to get paid online.</p>
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
              <BellIcon width='24' className="m-auto"/>

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

export default DashboardNew