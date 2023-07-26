import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import BrowserControls from '../img/browser-controls.svg'
import BrowserPreview from '../img/browser-preview.svg'

const ChangeDomain = ({ loadingLogo }) => {
    const [isModifiedFree, setIsModifiedFree] = useState(false);
    const [isModifiedPro, setIsModifiedPro] = useState(false);
    const [openPro, setOpenPro] = useState(false)

    const [domain, setDomain] = useState("yourcompanyname")

    const cancelButtonRef = useRef(null)

    const backToFree = () => {
      setOpenPro(false);
      document.getElementById("free").checked = true;
    }

    const typeDomain = () => {
      if (document.getElementById("free").value === ""){
        setIsModifiedFree(false);
      } else {
        setIsModifiedFree(true);
      }
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
                      <p className="font-13 leading-8 text-gray-600">
                        โลเลม
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
                  {/* <button
                    type="button"
                    className="ml-3 inline-flex items-center rounded-lg border border-transparent text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2 btn font-13 btn-primary-shadow mt-2"
                    style={{ padding: "4px 18px" }}
                    onClick={handleInviteClick2}
                  >
                    Go to Workspace
                  </button> */}
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
            {/* <div className="flex">
              <div className="w-[112px]"></div>
              <div>เปลี่ยนชื่อโดเมน</div>
            </div>
            <div className="flex">
              <img src={BrowserControls} alt="" />
            </div> */}
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
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-full border-gray-300 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[32px]"
                      defaultValue={domain}
                      onChange={(e) => setDomain(e.target.value)}
                    />
                  </td>
                  <td>
                    <div className="w-[40px] m-auto flex justify-center">
                      <div className="h-[32px] border-r border-[#5F6368] border-r-[1px] rotate-[21.04deg]"></div>
                    </div>
                  </td>
                  <td>
                    <div className="px-[16px] py-[7px] bg-[#F4F5F6] rounded-[6px]">
                      <p className="text-[#8A8E91]">.ac.fc.zaviago.com</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="relative my-10">
              <div className="w-full border-t border-[#F1F3F4]" />
            </div>

            <div className="relative">
              <p className="absolute top-[14px] left-[168px]">your company name</p>
              <p className="absolute top-[50px] left-[238px]">{domain}.ac.fc.zaviago.com</p>
              <img src={BrowserPreview} />
            </div>
          </div>

          <Transition.Root show={openPro} as={Fragment}>
            <Dialog as="div" className="relative z-[99]" initialFocus={cancelButtonRef} onClose={backToFree}>
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
                <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-w-lg p-6">
                    <div>
                      <div className="mt-3 text-center">
                        <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-[#333333] sukhumvit">
                          ใช้โดเมนที่คุณเป็นเจ้าของ
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md paras sukhumvit">
                          อัปเดตแพ็กเกจ <span className="inline-flex items-center rounded-full bg-[#E5F5FF] px-2.5 py-0.5 text-xs font-medium text-[#0099FF]">Pro</span> <br/>เพื่อเปิดใช้งานฟังก์ชันนี้
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-[30px]">
                      <button
                        type="button"
                        className="bg-[#F4F5F6] text-[#B0B0B0] px-5 py-3 rounded-md font-13"
                        onClick={backToFree}
                        ref={cancelButtonRef}
                      >
                        ยกเลิก
                      </button>
                      <button
                        type="button"
                        className="bg-[#2490EF] text-white px-5 py-3 rounded-md font-13 btn-primary-shadow mt-1 ml-4"
                        onClick={backToFree}
                      >
                        อัปเดตแพ็กเกจ
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