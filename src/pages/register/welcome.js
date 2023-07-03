import React, { useState, Fragment } from "react";
import logo from '../../img/logo.svg'
import particle from '../../img/particle.svg'
import { Link } from "react-router-dom";

const Welcome = () => {
    const [welcome, setWelcome] = useState(true)
    const [fillNum, setFillNum] = useState(false)
    const [fillOTP, setFillOTP] = useState(false)
    const [warnFillOTP, setWarnFillOTP] = useState(false)
    const [warnFillPhone, setWarnFillPhone] = useState(false)

    const handleWelcome = () => {
        setWelcome(false)
        setFillNum(true)
    }

    const handleFillNum = () => {
        if (document.getElementById("phone-num").value === ""){
          setWarnFillPhone(true);
        } else {
          setFillNum(false)
          setFillOTP(true)
        }
    }

    const handleWarnFillPhone = () => {
      if (document.getElementById("phone-num").value !== ""){
        setWarnFillPhone(false);
      }
    }

    const handleChangeNum = () => {
        setFillOTP(false)
        setFillNum(true)
    }

    const handleFillOTP = () => {
      if (document.getElementById("one").value === "" || document.getElementById("two").value === "" || document.getElementById("three").value === "" || document.getElementById("four").value === "" || document.getElementById("five").value === "" || document.getElementById("six").value === ""){
        setWarnFillOTP(true);
      } else {
        window.location.href = "/register";
      }
    }

    const handleWarnFillOTP = () => {
      if (document.getElementById("one").value !== "" && document.getElementById("two").value !== "" && document.getElementById("three").value !== "" && document.getElementById("four").value !== "" && document.getElementById("five").value !== "" && document.getElementById("six").value !== ""){
        setWarnFillOTP(false);
      }
    }

    return (
      <>
        {/* Welcome */}
        {welcome && (
          <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
            <div className="login-box flex flex-col justify-center px-10 py-[60px] text-center rounded-lg" style={{border:"1px solid #F2F2F2",boxShadow:"0 0px 39px 0 #00000008"}}>
              <div className="flex justify-center">
                <img src={logo} width="54px"/>
              </div>
              <h1 className="text-[#1F272E] font-semibold text-[22px] mt-8 text-center">ยินดีต้อนรับสู่ zaviago</h1>
              <button className="inline-block bg-[#11C052] py-[10px] text-white rounded-lg mt-8 w-[304px] text-md m-auto">สมัครสมาชิกผ่าน LINE</button>

              <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-[#EBEEF0]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-sm font-medium text-[#333C44] sukhumvit">หรือ</span>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="sukhumvit text-md">มีบัญชีแล้ว 
                  <span className="ml-1 text-[#0066CC] sukhumvit cursor-pointer decoration-solid underline" onClick={handleWelcome}>คลิกที่นี่เพื่อเข้าสู่ระบบ</span>
                </h2>
              </div>
            </div>
          </div>
        )}

        {/* Fill Num */}
        {fillNum && (
          <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
            <div className="login-box flex flex-col justify-center px-10 py-[60px] text-center">
              <h1 className="text-[#1F272E] font-bold text-[22px] mt-8 text-center" style={{fontFamily:"Eventpop"}}>กรอกเบอร์โทรศัพท์เพื่อรับรหัส OTP</h1>
                <p className="sukhumvit text-sm mt-3">รหัส OTP จะส่งไปยังหมายเลขโทรศัพท์ของคุณ</p>
                
                <div className="flex gap-x-[11px] w-[304px] m-auto mt-6">
                  <div className="w-1/4">
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block h-[34px] w-full rounded-md border-gray-300 py-2 pl-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                      defaultValue="+66"
                    >
                      <option>+66</option>
                      <option>+23</option>
                      <option>+88</option>
                    </select>
                  </div>

                  <div className="w-3/4">
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone-num"
                        id="phone-num"
                        className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 pl-4"
                        placeholder="123-456-7890"
                        onKeyUp={handleWarnFillPhone}
                      />
                    </div>
                  </div>
                </div>

                {warnFillPhone && (<p className="required text-sm mt-3 warn">กรุณากรอกเบอร์โทรศัพท์</p>)}
                <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg mt-[15px] w-[304px] text-md m-auto btn-primary-shadow" onClick={handleFillNum}>ขอรหัส OTP</button>
    
                <div className="mt-4">
                  <h2 className="sukhumvit text-sm text-[#909090]">หมายเลขโทรศัพท์ที่ระบุจะเพิ่มไปยังโปรไฟล์ของคุณ <br/>โปรดศึกษาข้อมูลเพิ่มเติมที่ 
                    <span className="ml-1 text-[#0066CC] sukhumvit cursor-pointer decoration-solid underline">นโยบายความเป็นส่วนตัว</span>
                  </h2>
                </div>
            </div>
          </div>
        )}

        {/* Fill OTP */}
        {fillOTP && (
          <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
            <div className="login-box flex flex-col justify-center px-10 py-[60px] text-center">
              <div className="flex justify-center">
                <img src={particle} width="32px"/>
              </div>
              <h1 className="text-[#1F272E] font-semibold text-[22px] mt-[19px] text-center mb-[10px]" style={{fontFamily:"Eventpop"}}>ยืนยันรหัส OTP</h1>
              <p className="sukhumvit text-sm">ระบุรหัส 6 หลักที่คุณได้รับทาง SMS ผ่านเบอร์</p>
              <p className="text-[#2684FF] sukhumvit text-sm">082-345-6789</p>
                
                <div className="flex gap-x-[11px] w-[304px] m-auto mt-6">

                <div className="w-full flex gap-x-[18px]">
                    <div className="mt-1">
                    <input
                        type="text"
                        name="one"
                        id="one"
                        maxLength={1}
                        className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("two").focus(), 5) : null}
                    />
                    </div>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="two"
                        id="two"
                        maxLength={1}
                        className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("three").focus(), 5) : setTimeout(() => document.getElementById("one").focus(), 5)}
                    />
                    </div>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="three"
                        id="three"
                        maxLength={1}
                        className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("four").focus(), 5) : setTimeout(() => document.getElementById("two").focus(), 5)}
                    />
                    </div>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="four"
                        id="four"
                        maxLength={1}
                        className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("five").focus(), 5) : setTimeout(() => document.getElementById("three").focus(), 5)}
                    />
                    </div>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="five"
                        id="five"
                        maxLength={1}
                        className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("six").focus(), 5) : setTimeout(() => document.getElementById("four").focus(), 5)}
                    />
                    </div>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="six"
                        id="six"
                        maxLength={1}
                        className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? null : setTimeout(() => document.getElementById("five").focus(), 5)}
                    />
                    </div>
                </div>

                </div>

                {warnFillOTP && (<p className="required text-sm mt-3 warn">กรุณากรอก OTP ให้ครบ</p>)}

                <button className="inline-block bg-[#0099FF] py-[10px] text-white rounded-lg mt-[23px] w-[304px] text-md m-auto btn-primary-shadow" onClick={handleFillOTP}>ยืนยัน OTP</button>
                <p className="text-[#909090] text-md font-medium sukhumvit mt-[42px]">ขอรหัส OTP ใหม่อีกครั้งใน 00:30 วินาที</p>

                <div className="mt-[54px]">
                  <h2 className="sukhumvit text-md">
                    <span className="ml-1 text-[#0066CC] sukhumvit cursor-pointer decoration-solid underline" onClick={handleChangeNum}>เปลี่ยนเบอร์มือถือ</span>
                  </h2>
                </div>
            </div>
          </div>
        )}
      </>
    )
}

export default Welcome;