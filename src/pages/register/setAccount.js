import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import crmApps from "../../img/crm-apps.svg";
import pmApps from "../../img/pm-apps.svg";
import insightApps from "../../img/insight-apps.svg";
import hrApps from "../../img/hr-apps.svg";
import salesteamApps from "../../img/salesteam-apps.svg";
import ordersApps from "../../img/orders-apps.svg";

const Register = () => {
    const [account, setAccount] = useState(true);
    const [tellUs, setTellUs] = useState(false);
    const [site, setSite] = useState(false);
    const [apps, setApps] = useState(false);

    const handleAccount = () => {
      setAccount(false);
      setTellUs(true);
    }

    const handleSite = () => {
      setTellUs(false);
      setSite(true);
    }

    const handleApps = () => {
      setSite(false);
      setApps(true);
    }

    const appsList = [
      {
        title: 'CRM',
        description: 'รวบรวมข้อมูลเกี่ยวกับลูกค้า',
        img: crmApps,
        background: '#E5F5FF',
        shadow: '0 4px 32px 0 #88888833'
      },
      {
        title: 'Project Management',
        description: 'ควบคุมการทำงานของทีม',
        img: pmApps,
        background: '#E5F5FF',
        shadow: '0 4px 32px 0 #88888833'
      },
      {
        title: 'Insight',
        description: 'ข้อมูลเชิงลึกทางการตลาด',
        img: insightApps,
        background: '#F6F3FF',
        shadow: '0 4px 32px 0 #88888833'
      },
      {
        title: 'Human Resources',
        description: 'จัดการการทำงานและรายได้ของบุคคล',
        img: hrApps,
        background: '#F7EBFF',
        shadow: '0 4px 32px 0 #88888833'
      },
      {
        title: 'Sales Team',
        description: 'ข้อมูลและการจัดการทีมเซลล์',
        img: salesteamApps,
        background: '#F7E3F1',
        shadow: 'none'
      },
      {
        title: 'Orders Management',
        description: 'ข้อมูลการสั่งซื้อ',
        img: ordersApps,
        background: '#FFE5E5',
        shadow: 'none'
      },
    ]

    const startApp = () => {
      window.location.href = '/'
    }

    return (
      <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
        {account && (
          <div className="login-box flex flex-col justify-center px-10 py-[60px] rounded-lg">
            <h1 className="text-[#1F272E] font-bold text-[21px]">ตั้งค่าบัญชีของคุณ</h1>
            <div className="mt-[27px]">
              <label htmlFor="firstname" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 text-xs">ชื่อ<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="block w-[304px] h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 pl-4"
              />
              </div>

              <label htmlFor="surname" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-xs">นามสกุล<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="text"
                name="surname"
                id="surname"
                className="block w-[304px] h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 pl-4"
              />
              </div>

              <label htmlFor="date" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-xs">วัน-เดือน-ปีเกิด<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="date"
                name="date"
                id="date"
                className="block w-[304px] h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 pl-4"
              />
              </div>

              <label htmlFor="email" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-xs">อีเมล<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-[304px] h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 pl-4"
              />
              </div>

              <fieldset className="space-y-5 w-[304px]">
                <legend className="sr-only">Notifications</legend>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="font-medium text-[#1F272E] sukhumvit text-xs">
                      รับทราบและให้ความยอมรับ <span className="text-[#0066CC] sukhumvit cursor-pointer decoration-solid underline">ข้อกำหนดการใช้การบริการ</span> และ <span className="text-[#0066CC] sukhumvit cursor-pointer decoration-solid underline">นโยบายความเป็นส่วนตัว</span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg mt-[40px] w-[304px] text-xs m-auto" onClick={handleAccount}>ยืนยัน</button>
            </div>
          </div>
        )}

        {tellUs && (
          <div className="login-box flex flex-col justify-center px-10 py-[60px] rounded-lg">
            <h1 className="text-[#1F272E] font-bold text-[21px]">บอกเราอีกสักนิดเกี่ยวกับธุรกิจของคุณ</h1>
            <p className="sukhumvit text-xs">บอกเราสักเล็กน้อยว่าคุณเป็นใคร เพื่อให้เราสามารถมอบสิ่ง<br/>ดีที่สุดให้กับคุณ</p>
            <div className="mt-[27px]">
              <label htmlFor="companyname" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 text-xs">ชื่อธุรกิจของคุณ<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="text"
                name="companyname"
                id="companyname"
                className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 pl-4"
              />
              </div>

              <label htmlFor="business-type" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-xs">ประเภทธุรกิจสินค้า<span className="required">*</span></label>
              <div className="w-full">
                <select
                  id="business-type"
                  name="business-type"
                  className="mt-1 block h-[34px] w-full rounded-md border-gray-300 py-2 pl-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                >
                  <option>การเกษตร</option>
                  <option>การออกแบบและศิลปะ</option>
                  <option>ยานยนต์</option>
                  <option>การศึกษา</option>
                  <option>พลังงานและสาธารณูปโภค</option>
                  <option>องค์กรหรือสถาบัน</option>
                  <option>ธุรกิจบริการ</option>
                  <option>การเงินและการบัญชี</option>
                  <option>ร้านอาหารและเครื่องดื่ม</option>
                  <option>องค์กรไม่แสวงหากำไร</option>
                  <option>ภาครัฐบาลและรัฐวิสาหกิจ</option>
                  <option>สุขภาพและความงาม</option>
                  <option>บริการทางธุรกิจ</option>
                  <option>กฎหมาย</option>
                  <option>อุตสาหกรรมและการก่อสร้าง</option>
                  <option>สื่อและธุรกิจบันเทิง</option>
                  <option>อสังหาริมทรัพย์</option>
                  <option>ค้าขาย, ร้านค้า</option>
                  <option>เซลล์และการตลาด</option>
                  <option>ยาและเวชภัณฑ์</option>
                  <option>เทคโนโลยีและ IT</option>
                  <option>การคลังสินค้า</option>
                  <option>การขนส่งและโลจิสติก</option>
                  <option>โรงแรมและการท่องเที่ยว</option>
                  <option>อื่นๆ</option>
                </select>
              </div>
  
              <label htmlFor="num-team" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-xs">จำนวนทีมของคุณ<span className="required">*</span></label>
              <div className="w-full">
                <select
                  id="num-team"
                  name="num-team"
                  className="mt-1 block h-[34px] w-full rounded-md border-gray-300 py-2 pl-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                >
                  <option>แค่ฉันคนเดียว</option>
                  <option>2-9 คน</option>
                  <option>10-99 คน</option>
                  <option>100-500 คน</option>
                  <option>มากกว่า 500 คน</option>
                </select>
              </div>
  
              <label htmlFor="goal" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-xs">อีเมล<span className="required">*</span></label>
              <div className="w-full">
                <select
                  id="goal"
                  name="goal"
                  className="mt-1 block h-[34px] w-full rounded-md border-gray-300 py-2 pl-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                >
                  <option>บริหารและจัดการธุรกิจ</option>
                  <option>ขายสินค้า</option>
                  <option>รวบรวมยอดขายและสร้างรีฟอร์ตประจำเดือน</option>
                  <option>รวบรวมข้อมูลลูกค้าสำหรับทำ CRM</option>
                  <option>เผยแพร่ความรู้และประสบการณ์</option>
                  <option>เครื่องมือสำหรับทำโปรเจค</option>
                  <option>โปรโมตธุรกิจ</option>
                  <option>เก็บแบบฟอร์มสำหรับการทำวิจัย</option>
                  <option>นำเสนอผลงานสุดเจ๋งของตัวเอง</option>
                  <option>ยังไม่มีเป้าหมายที่ชัดเจน อยากลองใช้ระบบดูก่อน</option>
                </select>
              </div>

              <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg mt-[40px] w-full text-xs m-auto" onClick={handleSite}>สร้างบัญชี</button>
            </div>
          </div>
        )}

        {site && (
          <div className="login-box flex flex-col justify-center text-center px-10 py-[60px] rounded-lg">
            <h1 className="text-[#1F272E] font-bold text-[21px] mb-[14px]" style={{fontFamily:"Eventpop"}}>ตั้งชื่อ Site ของคุณ</h1>
            <p className="text-[#505A62] sukhumvit text-xs">ตั้งชื่อ Site ของคุณซึ่งจะเป็นชื่อ URL สำหรับหน้าเว็บไซต์ของคุณ สามารถใช้ A-Z , a-z , 0-9 <br/>และ - ได้เท่านั้น และสามารถเปลี่ยนชื่อ Site ได้ในภายหลัง</p>
            <div className="mt-[27px]">

            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="getzaviago-domain"
                id="getzaviago-domain"
                className="block bg-[#F4F5F6] text-sm p-3 w-full pr-40 w-[500px] focus-within:outline-none"
              />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 bg-[#F4F5F6]">
                  <span className="text-gray-500 sm:text-sm">.aca.fc.zaviago.com</span>
                </div>
              </div>

              <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg w-[70px] mt-[40px] text-xs m-auto" onClick={handleApps}>Next</button>
            </div>
          </div>
        )}

        {apps && (
          <div className="login-box flex flex-col justify-center px-10 py-[60px] rounded-lg text-center">
            <h1 className="text-[#1F272E] font-bold text-[21px] mb-[14px]" style={{fontFamily:"Eventpop"}}>เลือก Apps ที่ต้องการติดตั้ง</h1>
            <p className="text-[#505A62] sukhumvit text-xs">เลือก Apps ที่ต้องการติดตั้งใน Site เริ่มต้นของคุณ ลองเลือกสัก Apps ที่คุณต้องการใช้งานมากที่สุด <br/>ไม่ต้องกังวลไปเพราะคุณสามารถติดตั้ง Apps อื่นๆ เพิ่มเติมได้ในภายหลัง</p>
            <div className="mt-[27px]">
              <div className="mx-auto grid gap-x-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 m-auto">
                {appsList.map((item) => (
                  <div
                      key={item.title}
                      className="relative items-center text-center space-x-3 bg-white border border-[#DDDDDD] rounded-lg box-border select-apps"
                    >
                    <div className="min-w-[200px] w-full h-[153px]" style={{backgroundColor:item.background,borderRadius:"8px"}}>
                      <div>
                        <img src={item.img} className="m-auto relative top-[18px]" style={{boxShadow:item.shadow}}/>
                      </div>
                      <div className="absolute bottom-0 m-auto w-full py-[10px] desc-apps">
                        <h2 className="text-sm font-bold leading-5 font-inter text-[#1F272E] mb-1">{item.title}</h2>
                        <p className="font-bold text-xs text-[#505A62] sukhumvit">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg w-[70px] mt-[40px] text-xs m-auto" onClick={startApp}>Start</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default Register