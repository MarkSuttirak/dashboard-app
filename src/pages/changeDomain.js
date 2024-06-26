import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import BrowserControls from '../img/browser-controls.svg'
import BrowserPreview from '../img/browser-preview.svg'
import domainLock from '../img/lock.svg'
import particleTwo from '../img/particle-two.svg'
import circleModal from '../img/circle-modal.png'
import BrowserControlsTwo from '../img/browser-controls-two.svg'
import warningIcon from '../img/warning.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const domainOptions = [
  { title: '.com', current: true },
  { title: '.co.th', current: false },
  { title: '.org', current: false },
  { title: '.net', current: false },
]

const ChangeDomain = ({ loadingLogo }) => {
    const [isModifiedFree, setIsModifiedFree] = useState(false);
    const [isModifiedPro, setIsModifiedPro] = useState(false);
    const [isProVersion, setIsProVersion] = useState(false);
    const [openChangeDomain, setOpenChangeDomain] = useState(false)
    const [openChangeDomainPro, setOpenChangeDomainPro] = useState(false)

    const [changeDomainError, setChangeDomainError] = useState(false)

    const [warningDomain, setWarningDomain] = useState(false)
    const [warningDomainAnim, setWarningDomainAnim] = useState(false)
    const [warningText, setWarningText] = useState("ไม่สามารถใช้ชื่อนี้ได้ 😔")

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
      if (!warningDomain){
        setChangingDomain(true);
        setTimeout(changedToDomain, 10000)
      } else {
        setWarningDomainAnim(true);
        setTimeout(() => {
          setWarningDomainAnim(false);
        }, 300)
      }
    }

    const clickToChangeDomainPro = () => {
      setChangingDomainPro(true);
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

    const clickToCancelPro = () => {
      setOpenChangeDomainPro(false);
      setTimeout(() => {
        if (changingDomainPro || domainVerifiedPro){
          setChangingDomainPro(false);
          setDomainVerifiedPro(false);
        }
      }, 200)
    }

    const clickToVerifyDomain = () => {
      setChangingDomainPro(false);
      setDomainVerifiedPro(true);
    }

    const [selected, setSelected] = useState(domainOptions[0])

    return (
        <div className="page-section">
          <div className="page-container pb-8 grid grid-cols-2 gap-x-8">
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
              {!loadingLogo ? (
                <div className="mt-4 flex md:mt-0 md:ml-4"
                  aria-hidden="true">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-lg bg-[#F3F3F3] text-sm font-semibold font-inter text-[#333333] shadow-sm focus:outline-none focus:ring-offset-2 mt-2"
                    style={{ padding: "8px 14px" }}
                  >
                    Help Support
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

          <div className="page-container pb-8 grid gap-x-8">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="text-left text-[#8A8E91] font-normal text-[13px]">เปลี่ยนชื่อโดเมน</th>
                  <th></th>
                  {isProVersion ? (
                    <th className="text-left text-[#505A62] font-normal"></th>
                  ) : (
                    <th className="text-left text-[#505A62] font-normal text-[13px]">ลบ <span className="text-[#1D1D1F] font-eventpop">/ac.fc zaviago.com</span> ออกจากลิงก์</th>
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={BrowserControls} alt="" />
                  </td>
                  <td>
                    <div className="flex items-center bg-[#F4F5F6] rounded-full px-[16px] py-[7px] gap-x-[14px] border border-[1px] border-[#2684FF] cursor-text" onClick={() => {
                      if (isProVersion){
                        setOpenChangeDomainPro(true)
                      } else {
                        setOpenChangeDomain(true)
                      }
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 6V7H6V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7C11.5523 7 12 7.44772 12 8V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7Z" fill="#8B8A8D"/>
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
                    <div className="px-[16px] py-[7px] bg-[#F4F5F6] rounded-[6px] flex justify-between w-[240px]">
                      {isProVersion ? (<p className="text-[#8A8E91]">{selected.title}</p>) : (<p className="text-[#8A8E91]">.ac.fc.zaviago.com</p>)}
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
              <p className="absolute top-[5%] left-[16%] text-[#36373A] text-xs font-medium" style={{fontFamily:"Manrope"}}>your company name</p>
              <p className="absolute top-[16%] left-[26%] text-xs font-medium" style={{fontFamily:"Manrope"}}>{domain}{isProVersion ? ".com" : ".ac.fc.zaviago.com"}</p>
              <img src={BrowserPreview} width="100%"/>
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
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all px-[60px] py-[100px] max-w-[700px]" style={{backgroundImage:`url("${circleModal}")`,backgroundRepeat:"no-repeat",backgroundPosition:"80% 0"}}>
                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpenChangeDomain(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div>
                      <div className="mt-3 text-center">
                        <Dialog.Title as="h3" className="text-[29px] font-bold leading-6 text-[#1F272E] font-eventpop mb-[19px]">
                          {changingDomain ? (<p>กำลังเปลี่ยนชื่อโดเมน 🛠</p>) : domainChanged ? (<p>เปลี่ยนชื่อโดเมนแล้ว 🎉</p>) : (<p>เปลี่ยนชื่อโดเมน</p>)}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md paras font-eventpop text-[13px]">
                            {changingDomain ? (<>ระบบกำลังเปลี่ยนชื่อโดเมนให้กับเว็บไซต์ของคุณ <br/>กรุณารอสักครู่...</>) : domainChanged ? (<>เปลี่ยนโดเมนเรียบร้อยแล้ว <br/>คุณสามารถแชร์ลิงก์ของเว็บไซต์ให้ลูกค้าหรือทีมของคุณเพื่อเข้าใช้งานได้ทันที</>) : (<>โดเมนคือชื่อของเว็บไซต์ที่อยู่หลัง www.<br/>ซึ่งคุณสามารถเปลี่ยนชื่อโดเมนของคุณหรือใช้โดเมนที่คุณเป็นเจ้าของอยู่แล้วได้</>)}
                          </p>
                        </div>
                      </div>
                      <table className="mt-[54px]">
                        {changingDomain || domainChanged ? (
                          <tbody>
                          <tr className="translate-y-0">
                            <td className="pr-[20px]">
                              <img src={BrowserControls} alt="" />
                            </td>
                            <td>
                              <div className="flex items-center bg-[#F4F5F6] rounded-full px-[16px] py-[7px] gap-x-[14px] border border-[1px] border-[#F4F5F6]" onClick={() => setOpenChangeDomain(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M10 6V7H6V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7C11.5523 7 12 7.44772 12 8V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7Z" fill="#8B8A8D"/>
                                </svg>
                                <p className="text-[15px]">{domainAboutToChange}</p>
                                <p className="text-[#8A8E91] text-[15px]">/.ac.fc.zaviago.com</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M13.3621 5.84008L9.96896 5.54563L8.64395 2.4259C8.40559 1.85803 7.59236 1.85803 7.35399 2.4259L6.02898 5.55264L2.64285 5.84008C2.02591 5.88915 1.77353 6.66032 2.24324 7.06694L4.81614 9.29632L4.04497 12.6053C3.90476 13.2083 4.55675 13.685 5.08956 13.3625L7.99897 11.6098L10.9084 13.3695C11.4412 13.692 12.0932 13.2153 11.953 12.6124L11.1818 9.29632L13.7547 7.06694C14.2244 6.66032 13.979 5.88915 13.3621 5.84008V5.84008ZM7.99897 10.2988L5.36297 11.8903L6.06404 8.8897L3.73651 6.87064L6.80716 6.60424L7.99897 3.77895L9.19779 6.61125L12.2685 6.87765L9.94092 8.89672L10.642 11.8973L7.99897 10.2988Z" fill="#5F6368"/>
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
                            <tr>
                              <td></td>
                              <td className={`text-[#AA0000] text-[13px] ${warningDomain ? "warning-anim" : "invisible"}`}>{warningText}</td>
                            </tr>
                            <tr className="translate-y-0">
                              <td className="pr-[20px]">
                                <img src={BrowserControls} alt="" />
                              </td>
                              <td>
                                <div className="mt-1 relative flex items-center">
                                  <div className="pointer-events-none absolute inset-y-1 left-0 flex items-center pl-[15px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M10 6V7H6V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7C11.5523 7 12 7.44772 12 8V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7Z" fill={`${warningDomain ? "#AA0000" : "#8B8A8D"}`}/>
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={`block w-full rounded-full border ${warningDomain ? "text-[#AA0000] border-[#AA0000]" : "border-[#2684FF] text-[#1D1D1F]"} px-4 outline-none bg-[#F4F5F6] h-[40px] font-15 pl-[40px]`}
                                    defaultValue={domain}
                                    onChange={(e) => setDomainAboutToChange(e.target.value)}
                                    onInput={(e) => {
                                      if (e.target.value.includes("@") || 
                                          e.target.value.includes("*") ||
                                          e.target.value.includes("+") ||
                                          e.target.value.includes("(") ||
                                          e.target.value.includes(")") ||
                                          e.target.value.includes("/") ||
                                          e.target.value.includes("!") ||
                                          e.target.value.includes(".") ||
                                          e.target.value.includes(",") ||
                                          e.target.value.includes("&") ||
                                          e.target.value.includes("?") ||
                                          e.target.value.includes("%") ||
                                          e.target.value.includes("$") ||
                                          e.target.value.includes("#") ||
                                          e.target.value.includes("^") ||
                                          e.target.value.includes("=") ||
                                          e.target.value.includes("|") ||
                                          e.target.value.includes("\\") ||
                                          e.target.value.includes(":") ||
                                          e.target.value.includes(";") ||
                                          e.target.value.includes("[") ||
                                          e.target.value.includes("]") ||
                                          e.target.value.includes("{") ||
                                          e.target.value.includes("}") ||
                                          e.target.value.includes("'") ||
                                          e.target.value.includes('"') ||
                                          e.target.value.includes("`") ||
                                          e.target.value.includes("~") ||
                                          e.target.value.includes("<") ||
                                          e.target.value.includes(">") ||
                                          e.target.value.includes("_") ||
                                          e.target.value.includes("฿")
                                      ){
                                        setWarningDomain(true);
                                        setWarningText("ไม่สามารถใช้ชื่อนี้ได้ 😔")
                                      } else if (e.target.value.includes("ก")){
                                        setWarningDomain(true);
                                        setWarningText("รูปแบบไม่ถูกต้อง 😔")
                                      } else {
                                        setWarningDomain(false);
                                      }
                                    }}
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
                              <td className={`text-[13px] ${warningDomain ? "text-[#AA0000]" : "text-[#8A8E91]"}`}>สามารถใช้ A-Z, a-z, 0-9 และ - ได้เท่านั้น</td>
                            </tr>
                          </tbody>
                        )}
                      </table>
                    </div>
                    {changingDomain || domainChanged ? (
                      <div className="mt-[30px] text-[#687178] text-[13px] text-center font-eventpop">
                        หากคุณไม่ต้องการใช้โดเมนฟรีจาก zaviago <span className="font-bold font-eventpop">(.ac.fc.zaviago.com)</span><br/>
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
                            {...(!domainChanged ? { disabled: true } : {})}
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
                            {...(warningDomain ? { disabled: true } : {})}
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
            <Dialog as="div" className="relative z-[99]" initialFocus={cancelButtonRef} onClose={clickToCancelPro}>
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
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all px-[60px] py-[100px] max-w-[700px]" style={{backgroundImage:`url("${circleModal}")`,backgroundRepeat:"no-repeat",backgroundPosition:"80% 0"}}>
                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpenChangeDomainPro(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div>
                      <div className="mt-3 text-center">
                        <Dialog.Title as="h3" className="text-[29px] font-bold leading-6 text-[#1F272E] font-eventpop mb-[19px] flex items-center justify-center gap-x-4">
                          {changingDomainPro ? (<p>ตั้งค่าระบบโดเมน</p>) : domainVerifiedPro ? (<p>ยืนยันโดเมนแล้ว</p>) : (<p>เปลี่ยนชื่อโดเมน</p>)}
                          <span className="rounded-full bg-[#E5F5FF] px-2.5 py-0.5 text-xs font-medium text-[#0099FF]">Pro</span>
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm paras">
                            {changingDomainPro ? (<>ก่อนอื่นไปยังการตั้งค่าของผู้ให้บริการโดเมนของคุณ เพิ่ม NAME <strong>{domain}</strong> และ point ข้อมูลไปที่ <strong>{domain}.ac.fc.zaviago.com</strong> จากนั้นบันทึกการแก้ไข และกลับมายังหน้าต่างนี้และคลิกปุ่ม ‘ยืนยันโดเมน’ เพื่อดำเนินการต่อ</>) : domainVerifiedPro ? (<>โดเมนของคุณได้รับการยืนยันแล้ว <br/>คุณสามารถแชร์ลิงก์ของเว็บไซต์ให้ลูกค้าหรือทีมของคุณเพื่อเข้าใช้งานได้ทันที</>) : (<>โดเมนคือชื่อของเว็บไซต์ที่อยู่หลัง www.<br/>ซึ่งคุณสามารถเปลี่ยนชื่อโดเมนของคุณหรือใช้โดเมนที่คุณเป็นเจ้าของอยู่แล้วได้</>)}
                          </p>
                        </div>
                      </div>
                      {!domainVerifiedPro ? (
                        <table className="mt-[54px]">
                        {changingDomainPro ? (
                          <tbody>
                          <tr>
                            <td>Name</td>
                            <td>Data</td>
                          </tr>
                          <tr className="translate-y-0">
                            <td className="w-[40%] pr-[16px]">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="block w-full mt-1 rounded-[9px] px-4 outline-none bg-[#F4F5F6] h-[40px] text-[#1D1D1F] font-15"
                                defaultValue={domain}
                                // onChange={(e) => setDomainAboutToChange(e.target.value)}
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                name="data"
                                id="data"
                                className="block w-full mt-1 rounded-[9px] px-4 outline-none bg-[#F4F5F6] h-[40px] text-[#1D1D1F] font-15"
                                defaultValue={`${domain}.ac.fc.zaviago.com`}
                                // onChange={(e) => setDomainAboutToChange(e.target.value)}
                              />
                            </td>
                          </tr>
                        </tbody>
                        ) : (
                          <tbody>
                            <tr>
                              <td></td>
                              <td className={`text-[#AA0000] text-[13px] ${warningDomain ? "warning-anim" : "invisible"}`}>{warningText}</td>
                            </tr>
                            <tr className="translate-y-0">
                              <td className="pr-[20px]">
                                <img src={BrowserControls} alt="" />
                              </td>
                              <td>
                                <div className="mt-1 relative flex items-center">
                                  <div className="pointer-events-none absolute inset-y-1 left-0 flex items-center pl-[15px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M10 6V7H6V6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7C11.5523 7 12 7.44772 12 8V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7Z" fill={`${warningDomain ? "#AA0000" : "#8B8A8D"}`}/>
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={`block w-full rounded-full border ${warningDomain ? "border-[#AA0000] text-[#AA0000]" : "border-[#2684FF] text-[#1D1D1F]"} px-4 outline-none bg-[#F4F5F6] h-[40px] font-15 pl-[40px]`}
                                    defaultValue={domain}
                                    onChange={(e) => setDomainAboutToChange(e.target.value)}
                                    onInput={(e) => {
                                      if (e.target.value.includes("@") || 
                                          e.target.value.includes("*") ||
                                          e.target.value.includes("+") ||
                                          e.target.value.includes("(") ||
                                          e.target.value.includes(")") ||
                                          e.target.value.includes("/") ||
                                          e.target.value.includes("!") ||
                                          e.target.value.includes(".") ||
                                          e.target.value.includes(",") ||
                                          e.target.value.includes("&") ||
                                          e.target.value.includes("?") ||
                                          e.target.value.includes("%") ||
                                          e.target.value.includes("$") ||
                                          e.target.value.includes("#") ||
                                          e.target.value.includes("^") ||
                                          e.target.value.includes("=") ||
                                          e.target.value.includes("|") ||
                                          e.target.value.includes("\\") ||
                                          e.target.value.includes(":") ||
                                          e.target.value.includes(";") ||
                                          e.target.value.includes("[") ||
                                          e.target.value.includes("]") ||
                                          e.target.value.includes("{") ||
                                          e.target.value.includes("}") ||
                                          e.target.value.includes("'") ||
                                          e.target.value.includes('"') ||
                                          e.target.value.includes("`") ||
                                          e.target.value.includes("~") ||
                                          e.target.value.includes("<") ||
                                          e.target.value.includes(">") ||
                                          e.target.value.includes("_") ||
                                          e.target.value.includes("฿")
                                      ){
                                        setWarningDomain(true);
                                        setWarningText("ไม่สามารถใช้ชื่อนี้ได้ 😔")
                                      } else if (e.target.value.includes("ก")){
                                        setWarningDomain(true);
                                        setWarningText("รูปแบบไม่ถูกต้อง 😔")
                                      } else {
                                        setWarningDomain(false);
                                      }
                                    }}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="w-[40px] m-auto flex justify-center">
                                  <div className="h-[32px] border-r border-[#5F6368] border-r-[1px] rotate-[21.04deg]"></div>
                                </div>
                              </td>
                              <td>
                              <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                  <>
                                    <Listbox.Label className="sr-only"></Listbox.Label>
                                    <div className="relative">
                                      <div className="inline-flex rounded-[99px]">
                                        <div className="inline-flex rounded-[99px] bg-[#F4F5F6] h-[40px]">
                                          <Listbox.Button className={`inline-flex items-center rounded-[99px] p-2 text-sm font-medium text-white focus:outline-none ${open ? 'border border-[#2684FF] border-1 bg-white' : "border border-1 border-[#F4F5F6]"}`}>
                                            <p className="ml-2.5 text-sm font-medium text-black">{selected.title}</p>
                                          </Listbox.Button>
                                        </div>
                                      </div>

                                      <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                      >
                                        <Listbox.Options className="absolute right-0 z-10 mt-2 w-[92px] origin-top-right overflow-hidden rounded-md bg-white shadow-md focus:outline-none">
                                          {domainOptions.map((option) => (
                                            <Listbox.Option
                                              key={option.title}
                                              className={({ active }) =>
                                                classNames(
                                                  active ? 'text-black bg-[#F9FAFB]' : 'text-gray-900',
                                                  'cursor-default select-none p-4 text-sm'
                                                )
                                              }
                                              value={option}
                                            >
                                              {({ selected, active }) => (
                                                <div className="flex flex-col">
                                                  <div className="flex justify-between">
                                                    <p className={selected ? 'font-semibold' : 'font-normal'}>{option.title}</p>
                                                    {selected ? (
                                                      <span className='text-[#2684FF]'>
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                      </span>
                                                    ) : null}
                                                  </div>
                                                </div>
                                              )}
                                            </Listbox.Option>
                                          ))}
                                        </Listbox.Options>
                                      </Transition>
                                    </div>
                                  </>
                                )}
                              </Listbox>
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td className={`text-[13px] ${warningDomain ? "text-[#AA0000]" : "text-[#8A8E91]"}`}>สามารถใช้ A-Z, a-z, 0-9 และ - ได้เท่านั้น</td>
                            </tr>
                          </tbody>
                        )}
                      </table>
                      ) : (
                        <div className="mt-9 relative">
                          <p className="absolute top-[5%] left-[19%] text-[#36373A] text-xs font-medium" style={{fontFamily:"Manrope"}}>your company name</p>
                          <p className="absolute top-[16%] left-[32%] text-xs font-medium" style={{fontFamily:"Manrope"}}>{domain}{isProVersion ? ".com" : ".ac.fc.zaviago.com"}</p>
                          <img src={BrowserPreview} style={{maxWidth:"120%"}}/>
                        </div>
                      )}
                    </div>
                    {changingDomainPro ? (
                      <div className="mt-[30px] text-[#687178] text-[13px] font-eventpop flex flex-col gap-y-1">
                        <p className="leading-[140%]">See guide for <strong>Google domain</strong> <a href="https://support.google.com/domains/answer/3453651" target="_blank" className="text-[#0066CC]">here</a></p>
                        <p className="leading-[140%]">See guide for <strong>Host Never Die</strong> <a href="https://support.hostneverdie.com/index.php/knowledgebase/125/%E0%B8%A7%E0%B8%98%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%94%E0%B9%82%E0%B8%94%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%A1-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AD%E0%B8%A2%E0%B8%94.html" target="_blank" className="text-[#0066CC]">here</a></p>
                        <p className="leading-[140%]">See guide for <strong>Cloudflare</strong> <a href="#" className="text-[#0066CC]">here</a></p>
                        <p className="leading-[140%]">See guide for <strong>Cloudflare</strong> <a href="#" className="text-[#0066CC]">here</a></p>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="flex justify-center mt-[30px]">
                      {changingDomainPro ? (
                        <>
                          <button
                            type="button"
                            className="bg-black text-white px-5 py-3 rounded-md font-13 shadow-md"
                            onClick={clickToVerifyDomain}
                          >
                          ยืนยันโดเมน
                          </button>
                          <button
                            type="button"
                            className="bg-transparent text-black px-5 py-3 rounded-md font-13 mt-1 ml-4"
                            onClick={clickToCancelPro}
                            ref={cancelButtonRef}
                          >
                          ยืนยันภายหลัง
                          </button>
                        </>
                      ) : domainVerifiedPro ? (
                        <>
                          <button
                            type="button"
                            className="bg-black text-white px-5 py-3 rounded-md font-13 shadow-md"
                            onClick={clickToChangeDomainPro}
                          >
                          แชร์ลิงก์เว็บไซต์ใหม่
                          </button>
                          <button
                            type="button"
                            className="bg-transparent text-black px-5 py-3 rounded-md font-13 mt-1 ml-4"
                            onClick={clickToCancelPro}
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
                            onClick={clickToChangeDomainPro}
                            {...(warningDomain ? { disabled: true } : {})}
                          >
                          ยืนยันการใช้ชื่อโดเมนนี้
                          </button>
                          <button
                            type="button"
                            className="bg-transparent text-black px-5 py-3 rounded-md font-13 mt-1 ml-4"
                            onClick={clickToCancelPro}
                            ref={cancelButtonRef}
                          >
                          ยกเลิก
                          </button>
                        </>
                      )}
                    </div>

                    {changingDomainPro ? (
                      <div className="mt-[63px] text-center">
                        <a href="#" className="text-xs text-[#888888]">คลิกที่นี่เพื่อติดต่อทีมช่วยเหลือ</a>
                      </div>
                    ) : (
                      <div className="text-center text-[#687178] text-xs mt-[30px]">
                        Warning: you can only change your name once. By changing domain <br/>name you accept its <span className="text-[#0066CC]">Privacy Policy</span> and <span className="text-[#0066CC]">Terms of Service</span>.
                      </div>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <Transition.Root show={changeDomainError} as={Fragment}>
            <Dialog as="div" className="relative z-[99]" initialFocus={cancelButtonRef} onClose={() => setChangeDomainError(false)}>
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
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all p-[100px] max-w-[700px]">
                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpenChangeDomainPro(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-3 w-full text-center flex flex-col justify-center">
                      <img src={warningIcon} width="48" className="m-auto mb-4"/>
                      <h1 className="mb-1 text-[#1F272E] font-bold">เกิดข้อผิดพลาดบางอย่าง...</h1>
                      <p className="text-sm paras">ไม่สามารถยืนยันโดเมนของคุณได้ <br/>กรุณาตรวจสอบข้อมูลและยืนยันโดเมนอีกครั้ง <br/>หากยังพบปัญหาเกิดขึ้น กรุณาติดต่อทีมช่วยเหลือของเรา</p>
                    </div>

                    <div className="flex justify-center mt-[30px]">
                      <button
                        type="button"
                        className="bg-black text-white px-5 py-3 rounded-md font-13 shadow-md"
                        // onClick={clickToChangeDomainPro}
                      >
                      ติดต่อทีมช่วยเหลือ
                      </button>
                      <button
                        type="button"
                        className="bg-transparent text-black px-5 py-3 rounded-md font-13 mt-1 ml-4"
                        onClick={() => setChangeDomainError(false)}
                        ref={cancelButtonRef}
                      >
                      ยืนยันภายหลัง
                      </button>
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