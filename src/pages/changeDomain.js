import React, { useState } from "react";

const ChangeDomain = () => {
    const [isModified, setIsModified] = useState(false);

    const plans = [
      { id: 'small', name: 'ใช้ .getzaviago โดเมนฟรี', description: 'หากเลือกเป็น ส่วนลดส่วนบุคคล จำเป็นต้องเลือกรายชื่อลูกค้าสำหรับมอบส่วนลด', pro: false, input: (
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="getzaviago-domain"
            id="getzaviago-domain"
            className="block bg-[#F4F5F6] text-sm p-3 w-full pr-40 w-[500px]"
          />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 bg-[#F4F5F6]">
                <span className="text-gray-500 sm:text-sm">.aca.fc.zaviago.com</span>
            </div>
        </div>
      )},
      { id: 'medium', name: 'เชื่อมต่อโดเมนที่คุณเป็นเจ้าของ', pro: true,description: 'เชื่อมต่อโดเมนที่คุณเป็นเจ้าของ', input: (
        <div>
            <div className="relative mt-1 rounded-md shadow-sm w-[500px]">
            <input
                type="text"
                name="own-domain"
                id="own-domain"
                className="block bg-[#F4F5F6] text-sm p-3 w-[500px]"
                placeholder="www.mywebsite.com"
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
                            defaultChecked={plan.id === 'small'}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        </div>
                        <div className="ml-3 text-sm">
                        <label htmlFor={plan.id} className="font-medium text-gray-700">
                            {plan.name}
                        </label>
                        <p id={`${plan.id}-description`} className="text-gray-500">
                            <span className="sukhumvit">{plan.description}</span>{plan.pro && <span className="ml-[9px] inline-flex items-center rounded-full bg-[#E5F5FF] px-2.5 py-0.5 text-xs font-medium text-[#0099FF]">
                                Pro
                            </span>}
                            {plan.input}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>

                <button type="submit" className={isModified ? "w-full bg-[#2490EF] text-white px-5 py-3 rounded-md font-13 mt-[50px]" : "w-full bg-[#F4F5F6] text-[#B0B0B0] px-5 py-3 rounded-md font-13 mt-[50px]"} disabled={isModified ? 'true' : 'false'}>Save</button>
            </fieldset>
          </div>
        </div>
    )
}

export default ChangeDomain