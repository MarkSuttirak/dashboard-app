import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

const ChangeDomain = () => {
    const [isModified, setIsModified] = useState(false);
    const [openPro, setOpenPro] = useState(false)

    const cancelButtonRef = useRef(null)

    const backToFree = () => {
      setOpenPro(false);
      document.getElementById("free").checked = true;
    }

    const typeDomain = () => {
      if (document.getElementById("free").value === ""){
        setIsModified(false);
      } else {
        setIsModified(true);
      }
    }

    const plans = [
      { id: 'free', name: 'ใช้ .getzaviago โดเมนฟรี', description: 'หากเลือกเป็น ส่วนลดส่วนบุคคล จำเป็นต้องเลือกรายชื่อลูกค้าสำหรับมอบส่วนลด', pro: false, input: (
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="getzaviago-domain"
            id="getzaviago-domain"
            className="block bg-[#F4F5F6] text-sm p-3 pr-40 w-[500px] focus-within:outline-none"
            onChange={typeDomain}
          />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 bg-[#F4F5F6]">
              <span className="text-gray-500 sm:text-sm">.aca.fc.zaviago.com</span>
            </div>
        </div>
      )},
      { id: 'pro', name: 'เชื่อมต่อโดเมนที่คุณเป็นเจ้าของ', pro: true, description: 'เชื่อมต่อโดเมนที่คุณเป็นเจ้าของ', input: (
        <div>
          <div className="relative mt-1 rounded-md shadow-sm w-[500px]">
          <input
            type="text"
            name="own-domain"
            id="own-domain"
            className="block bg-[#F4F5F6] text-sm p-3 w-[500px] focus-within:outline-none"
            placeholder="www.mywebsite.com" disabled
            onChange={typeDomain}
          />
          </div>
        </div>
      ) },
    ]

    return (
        <div className="page-section">
          <div className="mx-auto dashboard-container pb-5 gap-x-8 pt-16">
            <h1>โดเมนตั้งค่าเอง</h1>
            <p className="sukhumvit mt-[9px] mb-[31px] text-[#505A62] text-sm">โดเมนคือชื่อของ URL ที่เราต้องการให้แสดงบนลิ้งของเว็บไซต์ <br/>โดยคุณสามารถเปลี่ยนชื่อโดเมนของคุณเองได้</p>

            <fieldset>
              <legend className="sr-only">Plan</legend>
                <div className="space-y-10">
                  {plans.map((plan) => (
                  <div key={plan.id} className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id={plan.id}
                        aria-describedby={`${plan.id}-description`}
                        name="plan"
                        type="radio"
                        defaultChecked={plan.id === 'free'}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onClick={() => {document.getElementById("pro").checked ? setOpenPro(true) : setOpenPro(false)}}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={plan.id} className="font-medium text-gray-700">
                        {plan.name}{plan.pro && <span className="ml-[9px] inline-flex items-center rounded-full bg-[#E5F5FF] px-2.5 py-0.5 text-xs font-medium text-[#0099FF]">
                          Pro
                        </span>}
                      </label>
                      <p id={`${plan.id}-description`} className="text-gray-500">
                        <span className="sukhumvit">{plan.description}</span>
                        {plan.input}
                      </p>
                    </div>
                  </div>
                  ))}
                </div>

                <button type="submit" className={isModified ? "w-[540px] bg-[#2490EF] text-white px-5 py-3 rounded-md font-13 mt-[50px] btn-primary-shadow" : "w-[540px] bg-[#F4F5F6] text-[#B0B0B0] px-5 py-3 rounded-md font-13 mt-[50px]"} disabled={isModified ? 'true' : 'false'}>Save</button>
            </fieldset>
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
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                          กรุณาอัปเกรดเป็น Pro Version
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            หากต้องการเปลี่ยนเป็นโดเมนที่คุณเป็นเจ้าของ กรุณาอัปเกรดเป็น Pro Version
                            ป.ล. กำลังทดลอง Modal เฉยๆ รอปริมมาเช็คอีกที
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                            onClick={backToFree}
                        >
                            ยืนยัน
                        </button>
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                            onClick={backToFree}
                            ref={cancelButtonRef}
                        >
                            ยกเลิก
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