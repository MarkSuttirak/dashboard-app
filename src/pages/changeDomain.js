import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import BrowserControls from '../img/browser-controls.svg'
import BrowserPreview from '../img/browser-preview.svg'
import domainLock from '../img/lock.svg'
import particleTwo from '../img/particle-two.svg'
import circleModal from '../img/circle-modal.png'
import BrowserControlsTwo from '../img/browser-controls-two.svg'

const ChangeDomain = ({ loadingLogo }) => {
    const [isModifiedFree, setIsModifiedFree] = useState(false);
    const [isModifiedPro, setIsModifiedPro] = useState(false);
    const [isProVersion, setIsProVersion] = useState(true);
    const [openChangeDomain, setOpenChangeDomain] = useState(false)
    const [openChangeDomainPro, setOpenChangeDomainPro] = useState(false)

    const [changingDomain, setChangingDomain] = useState(false)
    const [changingDomainPro, setChangingDomainPro] = useState(false)
    const [domainChanged, setDomainChanged] = useState(false)
    const [domainVerifiedPro, setDomainVerifiedPro] = useState(false)

    const [domain, setDomain] = useState("yourcompanyname")
    const [domainAboutToChange, setDomainAboutToChange] = useState("")

    const cancelButtonRef = useRef(null)

    const changedToDomain = () => {
      setChangingDomain(false);
      setDomainChanged(true);
      setDomain(domainAboutToChange);
    }

    const clickToChangeDomain = () => {
      setChangingDomain(true);
      setTimeout(changedToDomain, 10000)
    }

    const clickToCancel = () => {
      setOpenChangeDomain(false);
      setTimeout(() => {
        if (changingDomain || domainChanged){
          setChangingDomain(false);
          setDomainChanged(false);
        }
      }, 200)
    }

    return (
        <div className="page-section">
          <div className="mx-auto dashboard-container pb-8 grid grid-cols-2 gap-x-8">
            <div className="pt-0">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <div className="mt-4">
                    <a href="#" className="inline-flex space-x-6">
                      {!loadingLogo ? (
                        <span className="rounded-full px-4 font-11 font-semibold leading-6 text-slate-400 ring-1 ring-inset ring-slate-300" style={{ fontFamily: "Poppins" }}>
                          Beta
                        </span>
                      ) : (
                        <div className="animate-pulse">
                          <div className="bg-[#F3F3F3] w-[58px] h-[24px] aspect-square rounded-full"></div>
                        </div>
                      )}
                    </a>
                  </div>
                  {!loadingLogo ? (
                    <div>
                      <h1 className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
                        Change Domain
                      </h1>
                      <p className="font-13 leading-8 text-gray-600 leading-[19px]">
                        โดเมนคือชื่อของเว็บไซต์ที่อยู่หลัง www. ซึ่งคุณสามารถเปลี่ยน <br/>ชื่อโดเมนของคุณหรือใช้โดเมนที่คุณเป็นเจ้าของอยู่แล้วได้
                      </p>
                    </div>
                  ) : (
                    <div className="animate-pulse mt-2">
                      <div className="bg-[#F3F3F3] w-[200px] h-[24px] aspect-square rounded-lg"></div>
                      <div className="bg-[#F3F3F3] w-[280px] h-[15px] aspect-square rounded-lg mt-2"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mx-auto flex items-center justify-end w-full">
              <div

              />
              {!loadingLogo ? (
                <div className="mt-4 flex md:mt-0 md:ml-4"
                  aria-hidden="true">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-lg bg-[#F3F3F3] text-sm font-semibold font-inter text-[#333333] shadow-sm focus:outline-none focus:ring-offset-2 mt-2 eventpop"
                    style={{ padding: "7px 10px" }}
                  >
                    ติดต่อทีมช่วยเหลือ
                  </button>
                </div>
              ) : (
                <div className="animate-pulse flex">
                  {/* <div className="bg-[#F3F3F3] w-[52px] h-[30px] aspect-square rounded-lg"></div> */}
                  <div className="bg-[#F3F3F3] w-[144px] h-[30px] aspect-square rounded-lg ml-3"></div>
                </div>
              )}

            </div>
          </div>

          <div className="mx-auto dashboard-container pb-8 grid gap-x-8">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="text-left text-[#8A8E91] font-normal">เปลี่ยนชื่อโดเมน</th>
                  <th></th>
                  <th className="text-left text-[#505A62] font-normal">ลบ <span className="text-[#1D1D1F] eventpop">/ac.fc zaviago.com</span> ออกจากลิงก์</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={BrowserControls} alt="" />
                  </td>
                  <td>
                    <div className="flex items-center bg-[#F4F5F6] rounded-full px-[16px] py-[7px] gap-x-[14px] border border-[1px] border-[#2684FF]" onClick={() => {
                      if (isProVersion){
                        setOpenChangeDomainPro(true)
                      } else {
                        setOpenChangeDomain(true)
                      }
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6V7H6V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7C11.5523 7 12 7.44772 12 8V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7Z" fill="#8B8A8D"/>
                      </svg>
                      <p>{domain}</p>
                    </div>
                  </td>
                  <td>
                    <div className="w-[40px] m-auto flex justify-center">
                      <div className="h-[32px] border-r border-[#5F6368] border-r-[1px] rotate-[21.04deg]"></div>
                    </div>
                  </td>
                  <td>
                    <div className="px-[16px] py-[7px] bg-[#F4F5F6] rounded-[6px] flex justify-between">
                      <p className="text-[#8A8E91]">.ac.fc.zaviago.com</p>
                      <span className="inline-flex items-center rounded-full bg-[#E5F5FF] px-2.5 py-0.5 text-xs font-medium text-[#0099FF]">Pro</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="relative mt-10 mb-[10px]">
              <div className="w-full border-t border-[#F1F3F4]" />
              <div className="bg-[#E5F5FF] text-[#0099FF] flex px-[10px] py-[6px] inline-block mt-[15px] gap-x-2 rounded-[20px] text-xs w-fit">
                <img src={particleTwo} />
                Live example
              </div>
            </div>

            <div className="relative">
              <p className="absolute top-[15px] left-[114px] text-[#36373A] text-xs font-medium" style={{fontFamily:"Manrope"}}>your company name</p>
              <p className="absolute top-[52px] left-[188px] text-xs font-medium" style={{fontFamily:"Manrope"}}>{domain}.ac.fc.zaviago.com</p>
              <img src={BrowserPreview} />
            </div>
          </div>

          <Transition.Root show={openChangeDomain} as={Fragment}>
            <Dialog as="div" className="relative z-[99]" initialFocus={cancelButtonRef} onClose={clickToCancel}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full justify-center text-center items-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all px-[60px] py-[100px] max-w-[700px]" style={{backgroundImage:`url("${circleModal}")`,backgroundRepeat:"no-repeat"}}>
                    <div>
                      <div className="mt-3 text-center">
                        <Dialog.Title as="h3" className="text-[29px] font-bold leading-6 text-[#1F272E] eventpop mb-[19px]">
                          {changingDomain ? (<p>กำลังเปลี่ยนชื่อโดเมน 🛠</p>) : domainChanged ? (<p>เปลี่ยนชื่อโดเมนแล้ว 🎉</p>) : (<p>เปลี่ยนชื่อโดเมน</p>)}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md paras eventpop">
                            {changingDomain ? (<>ระบบกำลังเปลี่ยนชื่อโดเมนให้กับเว็บไซต์ของคุณ <br/>กรุณารอสักครู่...</>) : domainChanged ? (<>เปลี่ยนโดเมนเรียบร้อยแล้ว <br/>คุณสามารถแชร์ลิงก์ของเว็บไซต์ให้ลูกค้าหรือทีมของคุณเพื่อเข้าใช้งานได้ทันที</>) : (<>โดเมนคือชื่อของเว็บไซต์ที่อยู่หลัง www.<br/>ซึ่งคุณสามารถเปลี่ยนชื่อโดเมนของคุณหรือใช้โดเมนที่คุณเป็นเจ้าของอยู่แล้วได้</>)}
                          </p>
                        </div>
                      </div>
                      <table className="mt-[74px]">
                        {changingDomain || domainChanged ? (
                          <tbody>
                          <tr className="translate-y-0">
                            <td className="pr-[20px]">
                              <img src={BrowserControls} alt="" />
                            </td>
                            <td>
                              <div className="flex items-center bg-[#F4F5F6] rounded-full px-[16px] py-[7px] gap-x-[14px] border border-[1px] border-[#F4F5F6]" onClick={() => setOpenChangeDomain(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6V7H6V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7C11.5523 7 12 7.44772 12 8V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7Z" fill="#8B8A8D"/>
                                </svg>
                                <p className="text-[15px]">{domainAboutToChange}</p>
                                <p className="text-[#8A8E91] text-[15px]">/.ac.fc.zaviago.com</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3621 5.84008L9.96896 5.54563L8.64395 2.4259C8.40559 1.85803 7.59236 1.85803 7.35399 2.4259L6.02898 5.55264L2.64285 5.84008C2.02591 5.88915 1.77353 6.66032 2.24324 7.06694L4.81614 9.29632L4.04497 12.6053C3.90476 13.2083 4.55675 13.685 5.08956 13.3625L7.99897 11.6098L10.9084 13.3695C11.4412 13.692 12.0932 13.2153 11.953 12.6124L11.1818 9.29632L13.7547 7.06694C14.2244 6.66032 13.979 5.88915 13.3621 5.84008V5.84008ZM7.99897 10.2988L5.36297 11.8903L6.06404 8.8897L3.73651 6.87064L6.80716 6.60424L7.99897 3.77895L9.19779 6.61125L12.2685 6.87765L9.94092 8.89672L10.642 11.8973L7.99897 10.2988Z" fill="#5F6368"/>
                                </svg>
                              </div>
                            </td>
                            <td className="pl-[20px]">
                              <img src={BrowserControlsTwo} alt="" />
                            </td>
                          </tr>
                        </tbody>
                        ) : (
                          <tbody>
                            <tr className="translate-y-0">
                              <td className="pr-[20px]">
                                <img src={BrowserControls} alt="" />
                              </td>
                              <td>
                                <div className="mt-1 relative flex items-center">
                                  <div className="pointer-events-none absolute inset-y-1 left-0 flex items-center pl-[15px]">
                                    <img src={domainLock} />
                                  </div>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-full border border-[#2684FF] px-4 outline-none bg-[#F4F5F6] h-[40px] text-[#1D1D1F] font-15 pl-[40px]"
                                    defaultValue={domain}
                                    onChange={(e) => setDomainAboutToChange(e.target.value)}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="w-[40px] m-auto flex justify-center">
                                  <div className="h-[32px] border-r border-[#5F6368] border-r-[1px] rotate-[21.04deg]"></div>
                                </div>
                              </td>
                              <td>
                                <p className="text-[#8A8E91]">.ac.fc.zaviago.com</p>
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td className="text-[13px] text-[#8A8E91]">สามารถใช้ A-Z, a-z, 0-9 และ - ได้เท่านั้น</td>
                            </tr>
                          </tbody>
                        )}
                      </table>
                    </div>
                    {changingDomain || domainChanged ? (
                      <div className="mt-[30px] text-[#687178] text-[13px] text-center eventpop">
                        หากคุณไม่ต้องการใช้โดเมนฟรีจาก zaviago <span className="font-bold eventpop">(.ac.fc.zaviago.com)</span><br/>
                        ‘เพียงสมัคร Pro Package เริ่มต้นเพียงเดือนละ 750 บาท’ <br/>คุณก็สามารถใช้ชื่อโดเมนที่คุณต้องการได้ทันที<br/>
                        ติดต่อทีมงานเพื่อสอบถามรายละเอียดเพิ่มเติม
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="flex justify-center mt-[30px]">
                      {changingDomain || domainChanged ? (
                        <>
                          <button
                            type="button"
                            className="bg-black text-white px-5 py-3 rounded-md font-13 shadow-md"
                            onClick={() => setOpenChangeDomain(false)}
                          >
                          แชร์ลิงก์เว็บไซต์ใหม่
                          </button>
                          <button
                            type="button"
                            className="bg-transparent text-black px-5 py-3 rounded-md font-13 mt-1 ml-4"
                            onClick={() => setOpenChangeDomain(false)}
                            ref={cancelButtonRef}
                          >
                          ออกจากหน้านี้
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="bg-black text-white px-5 py-3 rounded-md font-13 shadow-md"
                            onClick={clickToChangeDomain}
                          >
                          ยืนยันการใช้ชื่อโดเมนนี้
                          </button>
                          <button
                            type="button"
                            className="bg-transparent text-black px-5 py-3 rounded-md font-13 mt-1 ml-4"
                            onClick={clickToCancel}
                            ref={cancelButtonRef}
                          >
                          ยกเลิก
                          </button>
                        </>
                      )}
                    </div>

                    <div className="text-center text-[#687178] text-xs mt-[30px]">
                      Warning: you can only change your name once. By changing domain <br/>name you accept its <span className="text-[#0066CC]">Privacy Policy</span> and <span className="text-[#0066CC]">Terms of Service</span>.
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <Transition.Root show={openChangeDomainPro} as={Fragment}>
            <Dialog as="div" className="relative z-[99]" initialFocus={cancelButtonRef} onClose={clickToCancel}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full justify-center text-center items-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all px-[60px] py-[100px] max-w-[700px]" style={{backgroundImage:`url("${circleModal}")`,backgroundRepeat:"no-repeat"}}>
                    <div>
                      <div className="mt-3 text-center">
                        <Dialog.Title as="h3" className="text-[29px] font-bold leading-6 text-[#1F272E] eventpop mb-[19px] flex items-center justify-center gap-x-4">
                          {changingDomainPro ? (<p>ตั้งค่าระบบโดเมน</p>) : domainVerifiedPro ? (<p>ยืนยันโดเมนแล้ว</p>) : (<p>เปลี่ยนชื่อโดเมน</p>)}
                          <span className="rounded-full bg-[#E5F5FF] px-2.5 py-0.5 text-xs font-medium text-[#0099FF]">Pro</span>
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md paras eventpop">
                            {changingDomain ? (<>ระบบกำลังเปลี่ยนชื่อโดเมนให้กับเว็บไซต์ของคุณ <br/>กรุณารอสักครู่...</>) : domainChanged ? (<>เปลี่ยนโดเมนเรียบร้อยแล้ว <br/>คุณสามารถแชร์ลิงก์ของเว็บไซต์ให้ลูกค้าหรือทีมของคุณเพื่อเข้าใช้งานได้ทันที</>) : (<>โดเมนคือชื่อของเว็บไซต์ที่อยู่หลัง www.<br/>ซึ่งคุณสามารถเปลี่ยนชื่อโดเมนของคุณหรือใช้โดเมนที่คุณเป็นเจ้าของอยู่แล้วได้</>)}
                          </p>
                        </div>
                      </div>
                      <table className="mt-[74px]">
                        {changingDomain || domainChanged ? (
                          <tbody>
                          <tr className="translate-y-0">
                            <td className="pr-[20px]">
                              <img src={BrowserControls} alt="" />
                            </td>
                            <td>
                              <div className="flex items-center bg-[#F4F5F6] rounded-full px-[16px] py-[7px] gap-x-[14px] border border-[1px] border-[#F4F5F6]" onClick={() => setOpenChangeDomain(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6V7H6V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7C11.5523 7 12 7.44772 12 8V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7Z" fill="#8B8A8D"/>
                                </svg>
                                <p className="text-[15px]">{domainAboutToChange}</p>
                                <p className="text-[#8A8E91] text-[15px]">/.ac.fc.zaviago.com</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3621 5.84008L9.96896 5.54563L8.64395 2.4259C8.40559 1.85803 7.59236 1.85803 7.35399 2.4259L6.02898 5.55264L2.64285 5.84008C2.02591 5.88915 1.77353 6.66032 2.24324 7.06694L4.81614 9.29632L4.04497 12.6053C3.90476 13.2083 4.55675 13.685 5.08956 13.3625L7.99897 11.6098L10.9084 13.3695C11.4412 13.692 12.0932 13.2153 11.953 12.6124L11.1818 9.29632L13.7547 7.06694C14.2244 6.66032 13.979 5.88915 13.3621 5.84008V5.84008ZM7.99897 10.2988L5.36297 11.8903L6.06404 8.8897L3.73651 6.87064L6.80716 6.60424L7.99897 3.77895L9.19779 6.61125L12.2685 6.87765L9.94092 8.89672L10.642 11.8973L7.99897 10.2988Z" fill="#5F6368"/>
                                </svg>
                              </div>
                            </td>
                            <td className="pl-[20px]">
                              <img src={BrowserControlsTwo} alt="" />
                            </td>
                          </tr>
                        </tbody>
                        ) : (
                          <tbody>
                            <tr className="translate-y-0">
                              <td className="pr-[20px]">
                                <img src={BrowserControls} alt="" />
                              </td>
                              <td>
                                <div className="mt-1 relative flex items-center">
                                  <div className="pointer-events-none absolute inset-y-1 left-0 flex items-center pl-[15px]">
                                    <img src={domainLock} />
                                  </div>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-full border border-[#2684FF] px-4 outline-none bg-[#F4F5F6] h-[40px] text-[#1D1D1F] font-15 pl-[40px]"
                                    defaultValue={domain}
                                    onChange={(e) => setDomainAboutToChange(e.target.value)}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="w-[40px] m-auto flex justify-center">
                                  <div className="h-[32px] border-r border-[#5F6368] border-r-[1px] rotate-[21.04deg]"></div>
                                </div>
                              </td>
                              <td>
                                <p className="text-[#8A8E91]">.ac.fc.zaviago.com</p>
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td className="text-[13px] text-[#8A8E91]">สามารถใช้ A-Z, a-z, 0-9 และ - ได้เท่านั้น</td>
                            </tr>
                          </tbody>
                        )}
                      </table>
                    </div>
                    {changingDomain || domainChanged ? (
                      <div className="mt-[30px] text-[#687178] text-[13px] text-center eventpop">
                        หากคุณไม่ต้องการใช้โดเมนฟรีจาก zaviago <span className="font-bold eventpop">(.ac.fc.zaviago.com)</span><br/>
                        ‘เพียงสมัคร Pro Package เริ่มต้นเพียงเดือนละ 750 บาท’ <br/>คุณก็สามารถใช้ชื่อโดเมนที่คุณต้องการได้ทันที<br/>
                        ติดต่อทีมงานเพื่อสอบถามรายละเอียดเพิ่มเติม
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="flex justify-center mt-[30px]">
                      {changingDomain || domainChanged ? (
                        <>
                          <button
                            type="button"
                            className="bg-black text-white px-5 py-3 rounded-md font-13 shadow-md"
                            onClick={() => setOpenChangeDomain(false)}
                          >
                          แชร์ลิงก์เว็บไซต์ใหม่
                          </button>
                          <button
                            type="button"
                            className="bg-transparent text-black px-5 py-3 rounded-md font-13 mt-1 ml-4"
                            onClick={() => setOpenChangeDomain(false)}
                            ref={cancelButtonRef}
                          >
                          ออกจากหน้านี้
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="bg-black text-white px-5 py-3 rounded-md font-13 shadow-md"
                            onClick={clickToChangeDomain}
                          >
                          ยืนยันการใช้ชื่อโดเมนนี้
                          </button>
                          <button
                            type="button"
                            className="bg-transparent text-black px-5 py-3 rounded-md font-13 mt-1 ml-4"
                            onClick={clickToCancel}
                            ref={cancelButtonRef}
                          >
                          ยกเลิก
                          </button>
                        </>
                      )}
                    </div>

                    <div className="text-center text-[#687178] text-xs mt-[30px]">
                      Warning: you can only change your name once. By changing domain <br/>name you accept its <span className="text-[#0066CC]">Privacy Policy</span> and <span className="text-[#0066CC]">Terms of Service</span>.
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    )
}

export default ChangeDomain