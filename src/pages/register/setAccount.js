import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition, RadioGroup } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import crmApps from "../../img/crm-apps.svg";
import pmApps from "../../img/pm-apps.svg";
import insightApps from "../../img/insight-apps.svg";
import hrApps from "../../img/hr-apps.svg";
import salesteamApps from "../../img/salesteam-apps.svg";
import ordersApps from "../../img/orders-apps.svg";

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

const Register = () => {
    const [account, setAccount] = useState(true);
    const [tellUs, setTellUs] = useState(false);
    const [site, setSite] = useState(false);
    const [apps, setApps] = useState(false);

    const [warnFillName, setWarnFillName] = useState(false);
    const [warnFillSurname, setWarnFillSurname] = useState(false);
    const [warnFillBirthdate, setWarnFillBirthdate] = useState(false);
    const [warnFillEmail, setWarnFillEmail] = useState(false);
    const [warnFillEmailText, setWarnFillEmailText] = useState('จำเป็นต้องกรอกข้อมูล');
    const [warnAccept, setWarnAccept] = useState(false);

    const [warnFillCompany, setWarnFillCompany] = useState(false);


    const [warnFillSite, setWarnFillSite] = useState(false);

    const [selectedApp, setSelectedApp] = useState(appsList[0])

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

    const handleAccount = () => {
      if (document.getElementById('firstname').value === '') {
        setWarnFillName(true);
      } else {
        setWarnFillName(false);
      }

      if (document.getElementById('surname').value === '') {
        setWarnFillSurname(true);
      } else {
        setWarnFillSurname(false);
      }

      if (document.getElementById('date').value === '') {
        setWarnFillBirthdate(true);
      } else {
        setWarnFillBirthdate(false);
      }

      if (document.getElementById('email').value === ''){
        setWarnFillEmail(true);
        setWarnFillEmailText('จำเป็นต้องกรอกข้อมูล');
      } else {
        if (document.getElementById('email').value.includes('@') === false || document.getElementById('email').value.includes('@.') === true || document.getElementById('email').value[0].includes('@')){
          setWarnFillEmail(true);
          setWarnFillEmailText('รูปแบบอีเมลไม่ถูกต้อง');
        } else {
          setWarnFillEmail(false);
        }
      }

      if (document.getElementById('accept').checked === false){
        setWarnAccept(true);
      } else {
        setWarnAccept(false);
      }

      if (document.getElementById('firstname').value !== '' && document.getElementById('surname').value !== '' && document.getElementById('date').value !== '' && document.getElementById('email').value !== '' && document.getElementById('accept').checked === true) {
        setAccount(false);
        setTellUs(true);
      }
    }

    const handleSite = () => {
      if (document.getElementById('companyname').value === ''){
        setWarnFillCompany(true);
      } else {
        setTellUs(false);
        setSite(true);
      }
    }

    const handleApps = () => {
      if (document.getElementById('getzaviago-domain').value === ''){
        setWarnFillSite(true);
      } else {
        setSite(false);
        setApps(true);
      }
    }

    const startApp = () => {
      window.location.href = '/'
    }

    return (
      <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
        {account && (
          <div className="login-box flex flex-col justify-center px-10 py-[60px] rounded-lg">
            <h1 className="text-[#1F272E] font-bold text-[22px]">ตั้งค่าบัญชีของคุณ</h1>
            <div className="mt-[27px]">
              <label htmlFor="firstname" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 text-sm">ชื่อ<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className={`block w-[304px] h-[34px] rounded-md shadow-sm focus-within:outline-none text-sm bg-[#F4F5F6] py-2 px-[14px] ${warnFillName ? 'border-[#EF4444] border' : 'border-gray-300'}`}
                onKeyUp={() => setWarnFillName(false)}
              />
              </div>
              {warnFillName && (<p className="required text-xs mt-[10px] mb-4 warn sukhumvit">จำเป็นต้องกรอกข้อมูล</p>)}

              <label htmlFor="surname" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-sm">นามสกุล<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="text"
                name="surname"
                id="surname"
                className={`block w-[304px] h-[34px] rounded-md shadow-sm focus-within:outline-none text-sm bg-[#F4F5F6] py-2 px-[14px] ${warnFillSurname ? 'border-[#EF4444] border' : 'border-gray-300'}`}
                onKeyUp={() => setWarnFillSurname(false)}
              />
              </div>
              {warnFillSurname && (<p className="required text-xs mt-[10px] mb-4 warn sukhumvit">จำเป็นต้องกรอกข้อมูล</p>)}

              <label htmlFor="date" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-sm">วัน-เดือน-ปีเกิด<span className="required">*</span></label>
              <div className="mt-1">
              <input
                datepicker 
                type="date"
                name="date"
                id="date"
                className={`block w-[304px] h-[34px] rounded-md shadow-sm focus-within:outline-none text-sm bg-[#F4F5F6] py-2 px-[14px] ${warnFillBirthdate ? 'border-[#EF4444] border' : 'border-gray-300'}`}
                onChange={() => setWarnFillBirthdate(false)}
              />
              </div>
              {warnFillBirthdate && (<p className="required text-xs mt-[10px] mb-4 warn sukhumvit">จำเป็นต้องกรอกข้อมูล</p>)}

              <label htmlFor="email" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px] text-sm">อีเมล<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className={`block w-[304px] h-[34px] rounded-md shadow-sm focus-within:outline-none text-sm bg-[#F4F5F6] py-2 px-[14px] ${warnFillEmail ? 'border-[#EF4444] border' : 'border-gray-300'}`}
                onKeyUp={() => setWarnFillEmail(false)}
              />
              </div>
              {warnFillEmail && (<p className="required text-xs mt-[10px] mb-4 warn sukhumvit">{warnFillEmailText}</p>)}

              <fieldset className="space-y-5 w-[304px]">
                <legend className="sr-only">Notifications</legend>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                  <input
                    id="accept"
                    aria-describedby="accept"
                    name="accept"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={() => setWarnAccept(false)}
                  />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="accept" className={`font-medium ${warnAccept ? 'text-[#FF0000]' : 'text-[#1F272E]'} sukhumvit font-13`}>
                      รับทราบและให้ความยอมรับ <span className="sukhumvit cursor-pointer decoration-solid underline">ข้อกำหนดการใช้การบริการ</span> และ <span className="sukhumvit cursor-pointer decoration-solid underline">นโยบายความเป็นส่วนตัว</span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg mt-[40px] w-[304px] text-md m-auto btn-primary-shadow" onClick={handleAccount}>ยืนยัน</button>
            </div>
          </div>
        )}

        {tellUs && (
          <div className="login-box flex flex-col justify-center px-10 py-[60px] rounded-lg">
            <h1 className="text-[#1F272E] font-bold text-[22px]">บอกเราอีกสักนิดเกี่ยวกับธุรกิจของคุณ</h1>
            <p className="sukhumvit text-sm mt-[14px] text-[#909090]">บอกเราสักเล็กน้อยว่าคุณเป็นใคร เพื่อให้เราสามารถมอบสิ่ง<br/>ดีที่สุดให้กับคุณ</p>
            <div className="mt-[27px]">
              <label htmlFor="companyname" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2">ชื่อธุรกิจของคุณ<span className="required">*</span></label>
              <div className="mt-1">
              <input
                type="text"
                name="companyname"
                id="companyname"
                className={`block w-full h-[34px] rounded-md shadow-sm focus-within:outline-none text-sm bg-[#F4F5F6] py-2 px-[14px] ${warnFillCompany ? 'border-[#EF4444] border' : 'border-gray-300'}`}
                onKeyUp={() => setWarnFillCompany(false)}
              />
              </div>
              {warnFillCompany && (<p className="required text-xs mt-[10px] mb-4 warn sukhumvit">จำเป็นต้องกรอกข้อมูล</p>)}

              <label htmlFor="business-type" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px]">ประเภทธุรกิจสินค้า<span className="required">*</span></label>
              <div className="w-full">
                <select
                  id="business-type"
                  name="business-type"
                  className="mt-1 block h-[34px] w-full rounded-md py-2 px-[14px] text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                >
                  <option selected disabled value="default">เลือกประเภทธุรกิจสินค้า</option>
                  <option value="การเกษตร">การเกษตร</option>
                  <option value="การออกแบบและศิลปะ">การออกแบบและศิลปะ</option>
                  <option value="ยานยนต์">ยานยนต์</option>
                  <option value="การศึกษา">การศึกษา</option>
                  <option value="พลังงานและสาธารณูปโภค">พลังงานและสาธารณูปโภค</option>
                  <option value="องค์กรหรือสถาบัน">องค์กรหรือสถาบัน</option>
                  <option value="ธุรกิจบริการ">ธุรกิจบริการ</option>
                  <option value="การเงินและการบัญชี">การเงินและการบัญชี</option>
                  <option value="ร้านอาหารและเครื่องดื่ม">ร้านอาหารและเครื่องดื่ม</option>
                  <option value="องค์กรไม่แสวงหากำไร">องค์กรไม่แสวงหากำไร</option>
                  <option value="ภาครัฐบาลและรัฐวิสาหกิจ">ภาครัฐบาลและรัฐวิสาหกิจ</option>
                  <option value="สุขภาพและความงาม">สุขภาพและความงาม</option>
                  <option value="บริการทางธุรกิจ">บริการทางธุรกิจ</option>
                  <option value="กฎหมาย">กฎหมาย</option>
                  <option value="อุตสาหกรรมและการก่อสร้าง">อุตสาหกรรมและการก่อสร้าง</option>
                  <option value="สื่อและธุรกิจบันเทิง">สื่อและธุรกิจบันเทิง</option>
                  <option value="อสังหาริมทรัพย์">อสังหาริมทรัพย์</option>
                  <option value="ค้าขาย, ร้านค้า">ค้าขาย, ร้านค้า</option>
                  <option value="เซลล์และการตลาด">เซลล์และการตลาด</option>
                  <option value="ยาและเวชภัณฑ์">ยาและเวชภัณฑ์</option>
                  <option value="เทคโนโลยีและ IT">เทคโนโลยีและ IT</option>
                  <option value="การคลังสินค้า">การคลังสินค้า</option>
                  <option value="การขนส่งและโลจิสติก">การขนส่งและโลจิสติก</option>
                  <option value="โรงแรมและการท่องเที่ยว">โรงแรมและการท่องเที่ยว</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>
  
              <label htmlFor="num-team" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px]">จำนวนทีมของคุณ<span className="required">*</span></label>
              <div className="w-full">
                <select
                  id="num-team"
                  name="num-team"
                  className="mt-1 block h-[34px] w-full rounded-md py-2 px-[14px] text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                >
                  <option value="แค่ฉันคนเดียว">แค่ฉันคนเดียว</option>
                  <option value="2-9 คน">2-9 คน</option>
                  <option value="10-99 คน">10-99 คน</option>
                  <option value="100-500 คน">100-500 คน</option>
                  <option value="มากกว่า 500 คน">มากกว่า 500 คน</option>
                </select>
              </div>
  
              <label htmlFor="goal" className="block text-sm font-medium text-[#505A62] sukhumvit mb-2 mt-[10px]">เป้าหมายของคุณคืออะไร<span className="required">*</span></label>
              <div className="w-full">
                <select
                  id="goal"
                  name="goal"
                  className="mt-1 block h-[34px] w-full rounded-md py-2 px-[14px] text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                >
                  <option value="บริหารและจัดการธุรกิจ">บริหารและจัดการธุรกิจ</option>
                  <option value="ขายสินค้า">ขายสินค้า</option>
                  <option value="รวบรวมยอดขายและสร้างรีพอร์ตประจำเดือน">รวบรวมยอดขายและสร้างรีพอร์ตประจำเดือน</option>
                  <option value="รวบรวมข้อมูลลูกค้าสำหรับทำ CRM">รวบรวมข้อมูลลูกค้าสำหรับทำ CRM</option>
                  <option value="เผยแพร่ความรู้และประสบการณ์">เผยแพร่ความรู้และประสบการณ์</option>
                  <option value="เครื่องมือสำหรับทำโปรเจค">เครื่องมือสำหรับทำโปรเจค</option>
                  <option value="โปรโมตธุรกิจ">โปรโมตธุรกิจ</option>
                  <option value="เก็บแบบฟอร์มสำหรับการทำวิจัย">เก็บแบบฟอร์มสำหรับการทำวิจัย</option>
                  <option value="นำเสนอผลงานสุดเจ๋งของตัวเอง">นำเสนอผลงานสุดเจ๋งของตัวเอง</option>
                  <option value="ยังไม่มีเป้าหมายที่ชัดเจน อยากลองใช้ระบบดูก่อน">ยังไม่มีเป้าหมายที่ชัดเจน อยากลองใช้ระบบดูก่อน</option>
                </select>
              </div>

              <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg mt-[40px] w-full text-md m-auto btn-primary-shadow" onClick={handleSite}>สร้างบัญชี</button>
            </div>
          </div>
        )}

        {site && (
          <div className="login-box flex flex-col justify-center text-center px-10 py-[60px] rounded-lg">
            <h1 className="text-[#1F272E] font-bold text-[22px] mb-[14px]" style={{fontFamily:"Eventpop"}}>ตั้งชื่อ Site ของคุณ</h1>
            <p className="text-[#505A62] sukhumvit text-sm">ตั้งชื่อ Site ของคุณซึ่งจะเป็นชื่อ URL สำหรับหน้าเว็บไซต์ของคุณ สามารถใช้ A-Z , a-z , 0-9 <br/>และ - ได้เท่านั้น และสามารถเปลี่ยนชื่อ Site ได้ในภายหลัง</p>
            <div className="mt-[27px]">

            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="getzaviago-domain"
                id="getzaviago-domain"
                className={`block bg-[#F4F5F6] text-sm p-3 rounded-md w-full pr-40 w-[500px] focus-within:outline-none ${warnFillSite ? 'border-[#EF4444] border' : 'border-gray-300'}`}
                onKeyUp={() => setWarnFillSite(false)}
              />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 bg-[#F4F5F6] m-[1px] rounded-md">
                  <span className="text-gray-500 sm:text-sm">.aca.fc.zaviago.com</span>
                </div>
              </div>
              {warnFillSite && (<p className="required text-xs mt-[10px] mb-4 warn sukhumvit">กรุณาตั้งชื่อ Site ของคุณ</p>)}

              <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg w-[70px] mt-[40px] text-xs m-auto btn-primary-shadow" onClick={handleApps}>Next</button>
            </div>
          </div>
        )}

        {apps && (
          <div className="login-box flex flex-col justify-center px-10 py-[60px] rounded-lg text-center">
            <h1 className="text-[#1F272E] font-bold text-[21px] mb-[14px]" style={{fontFamily:"Eventpop"}}>เลือก Apps ที่ต้องการติดตั้ง</h1>
            <p className="text-[#505A62] sukhumvit text-xs">เลือก Apps ที่ต้องการติดตั้งใน Site เริ่มต้นของคุณ ลองเลือกสัก Apps ที่คุณต้องการใช้งานมากที่สุด <br/>ไม่ต้องกังวลไปเพราะคุณสามารถติดตั้ง Apps อื่นๆ เพิ่มเติมได้ในภายหลัง</p>
            <div className="mt-[27px]">
              {/* <RadioGroup value={selectedApp} onChange={setSelectedApp}>
                <div className="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 place-items-center">
                  {appsList.map((item) => (
                    <RadioGroup.Option
                      key={item.title}
                      value={item}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? 'active-app' : 'inactive-app',
                          active ? 'active-app' : '',
                          'relative cursor-pointer rounded-lg border bg-white shadow-sm focus:outline-none w-[200px] h-[153px] rounded-lg box-border'
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <span className="block h-full">
                            <RadioGroup.Label as="div" className="block text-sm font-medium text-gray-900 w-full h-[90%]" style={{backgroundColor:item.background,borderRadius:"8px 8px 0 0"}}>
                              <img src={item.img} className="m-auto relative top-[18px]" style={{boxShadow:item.shadow}}/>
                            </RadioGroup.Label>
                            <RadioGroup.Description as="div" className="absolute bottom-0 m-auto w-full py-[10px] desc-apps bg-white" style={{borderRadius:"0 0 8px 8px"}}>
                              <h2 className="text-sm font-bold leading-5 font-inter text-[#1F272E] mb-1">{item.title}</h2>
                              <p className="font-bold text-xs text-[#505A62] sukhumvit">{item.description}</p>
                            </RadioGroup.Description>
                          </span>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup> */}
              <fieldset className="space-y-5">
              <legend className="sr-only">Apps</legend>
                <div className="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 place-items-center">
                  {appsList.map((item) => (
                  <div className="relative block h-full">
                    <div className="text-sm">
                      <input
                        id={item.title}
                        aria-describedby={item.description}
                        name="apps"
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500 checkbox-apps hidden"
                      />
                      <label htmlFor={item.title} className="font-medium select-app-input block h-[153px] cursor-pointer w-[200px] shadow-sm focus:outline-none">
                        <div className="block text-sm font-medium w-full h-[90%] box-border" style={{backgroundColor:item.background,borderRadius:"8px 8px 0 0"}}>
                          <img src={item.img} className="m-auto relative top-[18px]" style={{boxShadow:item.shadow}}/>
                        </div>
                        <div className="absolute bottom-0 m-auto w-full py-[10px] app-desc" style={{borderRadius:"0 0 8px 8px"}}>
                          <h2 className="text-sm font-bold leading-5 font-inter text-[#1F272E] mb-1">{item.title}</h2>
                          <p className="font-bold text-xs text-[#505A62] sukhumvit">{item.description}</p>
                        </div>
                      </label>
                    </div>
                  </div>))}
                </div>
              </fieldset>
              <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg w-[70px] mt-[40px] text-xs m-auto btn-primary-shadow" onClick={startApp}>Start</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default Register