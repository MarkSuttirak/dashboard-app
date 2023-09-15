import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "react-oauth2-code-pkce";
import Logo from '../../img/logo-zaviago.svg';

const Welcome = () => {
  const { login: lineLogin } = useContext(AuthContext);
  const location = useLocation();

  const [animOn, setAnimOn] = useState(false);
  const [animOff, setAnimOff] = useState(false);

  const [loginSection, setLoginSection] = useState(true)

  useEffect(() => {
    setAnimOff(true);
    setTimeout(() => {
      setAnimOff(false);
    }, 1000);
    if (location.pathname === '/login') {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [])

  const switchToLoginSection = () => {
    setAnimOn(true);
    setTimeout(() => {
      setAnimOn(false);
      setAnimOff(true);
      setLoginSection(true)
      setTimeout(() => {
        setAnimOff(false);
      }, 500);
    }, 500);
  }

  const switchToSignupSection = () => {
    setAnimOn(true);
    setTimeout(() => {
      setAnimOn(false);
      setAnimOff(true);
      setLoginSection(false)
      setTimeout(() => {
        setAnimOff(false);
      }, 500);
    }, 500);
  }

  return (
    <div className="flex min-h-screen z-[999] relative bg-white">
      <div className="flex flex-1 justify-center">
        {loginSection ? (
          <div className="max-w-sm w-96 flex flex-col justify-center mx-[30px] register-screen">
            <div className={`${animOn ? 'anim-up-two' : animOff ? 'anim-down-two' : ''}`}>
              <div className="flex gap-x-2 mb-3 items-center">
                <img
                  className="h-12 w-auto"
                  src={Logo}
                  alt="zaviago.com"
                />
                <h2 className="font-bold">zaviago.com</h2>
              </div>
              <h2 className="main-title">Sign in to your account</h2>
              <p className="tab-desc">
                Or{' '}
                <a href="#" className="font-medium text-[#0788F5]">
                  start your 14-day free trial
                </a>
              </p>
            </div>

            <div className={`${animOn ? 'anim-down' : animOff ? 'anim-up' : ''}`}>
              <div className="mt-8">
                <div className="mt-1 gap-3">
                  <div>
                    <button
                      onClick={lineLogin}
                      className="login-line-btn"
                    >
                      <span className="sr-only">Login with Line</span>
                      Login with
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0.945801C19.3181 0.945801 24.8451 5.37164 24.8451 10.8312C24.8451 12.7382 24.1703 14.5187 23.0021 16.0288C22.9443 16.1147 22.8687 16.2097 22.7735 16.3146L22.7663 16.3225C22.3673 16.7999 21.9179 17.2481 21.4238 17.6619C18.0099 20.8173 12.3907 24.5741 11.6491 23.9945C11.0044 23.4907 12.711 21.0265 10.7421 20.6164C10.6047 20.6006 10.4677 20.5837 10.3319 20.5644L10.3293 20.5643V20.5641C4.54649 19.7426 0.155029 15.6976 0.155029 10.8312C0.154851 5.37164 5.68201 0.945801 12.5 0.945801Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33768 13.9838H7.82749C8.18165 13.9838 8.47132 13.694 8.47132 13.3399V13.2862C8.47132 12.932 8.18165 12.6423 7.82749 12.6423H6.03522V8.56461C6.03522 8.21045 5.74555 7.92078 5.39139 7.92078H5.33768C4.98352 7.92078 4.69385 8.21045 4.69385 8.56461V13.3398C4.69385 13.694 4.98352 13.9838 5.33768 13.9838ZM20.7658 10.9906V10.9369C20.7658 10.5828 20.4761 10.2931 20.1219 10.2931H18.3297V9.27364H20.1219C20.4761 9.27364 20.7658 8.98397 20.7658 8.62981V8.5761C20.7658 8.22194 20.4761 7.93227 20.1219 7.93227H17.6321C17.2779 7.93227 16.9883 8.22194 16.9883 8.5761V13.3513C16.9883 13.7055 17.2779 13.9952 17.6321 13.9952H20.1219C20.4761 13.9952 20.7658 13.7055 20.7658 13.3513V13.2976C20.7658 12.9434 20.4761 12.6537 20.1219 12.6537H18.3297V11.6343H20.1219C20.4761 11.6345 20.7658 11.3447 20.7658 10.9906ZM15.9776 13.7919L15.9778 13.7916C16.0969 13.6715 16.1638 13.5092 16.164 13.34V8.56479C16.164 8.21063 15.8743 7.92096 15.52 7.92096H15.4663C15.1122 7.92096 14.8225 8.21063 14.8225 8.56479V11.3679L12.4953 8.24652C12.3842 8.05243 12.1749 7.92096 11.9363 7.92096H11.8826C11.5284 7.92096 11.2387 8.21063 11.2387 8.56479V13.34C11.2387 13.6941 11.5284 13.9839 11.8826 13.9839H11.9363C12.2905 13.9839 12.5801 13.6941 12.5801 13.34V10.4844L14.924 13.6859C14.9385 13.7083 14.9542 13.7299 14.9713 13.7503L14.9713 13.7505C15.0357 13.8383 15.1238 13.8986 15.222 13.9354C15.2975 13.9665 15.3799 13.9838 15.4662 13.9838H15.52C15.6249 13.9839 15.7282 13.958 15.8208 13.9086C15.8852 13.878 15.9394 13.8384 15.9776 13.7919ZM9.63481 13.9838H9.68852C10.0427 13.9838 10.3323 13.694 10.3323 13.3399V8.5647C10.3323 8.21054 10.0427 7.92087 9.68852 7.92087H9.63481C9.28065 7.92087 8.99089 8.21054 8.99089 8.5647V13.3399C8.99089 13.694 9.28065 13.9838 9.63481 13.9838Z" fill="#01CD4D" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 tab-desc">OR</span>
                </div>
              </div>

              <div className="relative mt-6 text-center text-sm">
                Don't have an account? <button onClick={switchToSignupSection} className="text-link">Sign up</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-sm w-96 flex flex-col justify-center mx-[30px] register-screen">
            <div className={`${animOn ? 'anim-up-two' : animOff ? 'anim-down-two' : ''}`}>
              <div className="flex gap-x-2 mb-3 items-center">
                <img
                  className="h-12 w-auto"
                  src={Logo}
                  alt="zaviago.com"
                />
                <h2 className="font-bold">zaviago.com</h2>
              </div>
              <h2 className="main-title">Create new account</h2>
              <p className="tab-desc">
                Or{' '}
                <a href="#" className="font-medium text-[#0788F5]">
                  start your 14-day free trial
                </a>
              </p>
            </div>

            <div className={`${animOn ? 'anim-down' : animOff ? 'anim-up' : ''}`}>
              <div className="mt-8">
                <div className="mt-1 gap-3">
                  <div>
                    <button
                      onClick={lineLogin}
                      className="login-line-btn"
                    >
                      <span className="sr-only">Login with Line</span>
                      Sign up with
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0.945801C19.3181 0.945801 24.8451 5.37164 24.8451 10.8312C24.8451 12.7382 24.1703 14.5187 23.0021 16.0288C22.9443 16.1147 22.8687 16.2097 22.7735 16.3146L22.7663 16.3225C22.3673 16.7999 21.9179 17.2481 21.4238 17.6619C18.0099 20.8173 12.3907 24.5741 11.6491 23.9945C11.0044 23.4907 12.711 21.0265 10.7421 20.6164C10.6047 20.6006 10.4677 20.5837 10.3319 20.5644L10.3293 20.5643V20.5641C4.54649 19.7426 0.155029 15.6976 0.155029 10.8312C0.154851 5.37164 5.68201 0.945801 12.5 0.945801Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33768 13.9838H7.82749C8.18165 13.9838 8.47132 13.694 8.47132 13.3399V13.2862C8.47132 12.932 8.18165 12.6423 7.82749 12.6423H6.03522V8.56461C6.03522 8.21045 5.74555 7.92078 5.39139 7.92078H5.33768C4.98352 7.92078 4.69385 8.21045 4.69385 8.56461V13.3398C4.69385 13.694 4.98352 13.9838 5.33768 13.9838ZM20.7658 10.9906V10.9369C20.7658 10.5828 20.4761 10.2931 20.1219 10.2931H18.3297V9.27364H20.1219C20.4761 9.27364 20.7658 8.98397 20.7658 8.62981V8.5761C20.7658 8.22194 20.4761 7.93227 20.1219 7.93227H17.6321C17.2779 7.93227 16.9883 8.22194 16.9883 8.5761V13.3513C16.9883 13.7055 17.2779 13.9952 17.6321 13.9952H20.1219C20.4761 13.9952 20.7658 13.7055 20.7658 13.3513V13.2976C20.7658 12.9434 20.4761 12.6537 20.1219 12.6537H18.3297V11.6343H20.1219C20.4761 11.6345 20.7658 11.3447 20.7658 10.9906ZM15.9776 13.7919L15.9778 13.7916C16.0969 13.6715 16.1638 13.5092 16.164 13.34V8.56479C16.164 8.21063 15.8743 7.92096 15.52 7.92096H15.4663C15.1122 7.92096 14.8225 8.21063 14.8225 8.56479V11.3679L12.4953 8.24652C12.3842 8.05243 12.1749 7.92096 11.9363 7.92096H11.8826C11.5284 7.92096 11.2387 8.21063 11.2387 8.56479V13.34C11.2387 13.6941 11.5284 13.9839 11.8826 13.9839H11.9363C12.2905 13.9839 12.5801 13.6941 12.5801 13.34V10.4844L14.924 13.6859C14.9385 13.7083 14.9542 13.7299 14.9713 13.7503L14.9713 13.7505C15.0357 13.8383 15.1238 13.8986 15.222 13.9354C15.2975 13.9665 15.3799 13.9838 15.4662 13.9838H15.52C15.6249 13.9839 15.7282 13.958 15.8208 13.9086C15.8852 13.878 15.9394 13.8384 15.9776 13.7919ZM9.63481 13.9838H9.68852C10.0427 13.9838 10.3323 13.694 10.3323 13.3399V8.5647C10.3323 8.21054 10.0427 7.92087 9.68852 7.92087H9.63481C9.28065 7.92087 8.99089 8.21054 8.99089 8.5647V13.3399C8.99089 13.694 9.28065 13.9838 9.63481 13.9838Z" fill="#01CD4D" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 tab-desc">OR</span>
                </div>
              </div>

              <div className="relative mt-6 text-center text-sm">
                Already have an account? <button onClick={switchToLoginSection} className="text-link">Sign in</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative hidden w-0 flex-1 m-2 md:block">
        <img
          className="absolute inset-0 h-full w-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  )
}

// const Welcome = () => {
//   const [welcome, setWelcome] = useState(true)
//   const [fillNum, setFillNum] = useState(false)
//   const [fillOTP, setFillOTP] = useState(false)
//   const [warnFillOTP, setWarnFillOTP] = useState(false)
//   const [countdown, setCountdown] = useState(30);
//   const [warnFillPhone, setWarnFillPhone] = useState(false)
//   const [errorPhoneBorder, setErrorPhoneBorder] = useState('#F4F5F6')
//   const [errorOtpBorder, setErrorOtpBorder] = useState('#F4F5F6')
//   const [resendOtpButton, setResendOtpButton] = useState(false)

//   const handleWelcome = () => {
//     setWelcome(false)
//     setFillNum(true)
//   }

//   const handleFillNum = () => {
//     const isValid = /^(8|9|6|0(?=[689]))[0-9]{8,9}$/.test(phoneNumValue) && phoneNumValue.length >= 9 && phoneNumValue.length <= 10;
//     if (!isValid) {
//       setWarnFillPhone(true);
//       setErrorPhoneBorder('#EF4444')
//     } else {
//       setFillNum(false)
//       setFillOTP(true)
//       const timer = setInterval(() => {
//         setCountdown(prevCountdown => {
//           if (prevCountdown === 0) {
//             clearInterval(timer);
//             setResendOtpButton(true)
//             return prevCountdown;
//           } else {
//             return prevCountdown - 1;
//           }
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }



//   }


//   const [phoneNumValue, setPhoneNumValue] = useState("");
//   const handleChangePhoneInput = (e) => {
//     setPhoneNumValue(e.target.value)
//   }

//   const handleWarnFillPhone = () => {
//     if (document.getElementById("phone-num").value !== "") {
//       setWarnFillPhone(false);
//     }
//   }

//   const handleChangeNum = () => {
//     setFillOTP(false)
//     setFillNum(true)
//   }

//   const handleFillOTP = () => {
//     if (document.getElementById("one").value === "" || document.getElementById("two").value === "" || document.getElementById("three").value === "" || document.getElementById("four").value === "" || document.getElementById("five").value === "" || document.getElementById("six").value === "") {
//       setWarnFillOTP(true);
//       setErrorOtpBorder('#EF4444')
//     } else {
//       window.location.href = "/register";
//     }
//   }

//   const handleWarnFillOTP = () => {
//     if (document.getElementById("one").value !== "" && document.getElementById("two").value !== "" && document.getElementById("three").value !== "" && document.getElementById("four").value !== "" && document.getElementById("five").value !== "" && document.getElementById("six").value !== "") {
//       setWarnFillOTP(false);
//     }
//   }



//   return (
//     <>
//       {/* Welcome */}
//       {welcome && (
//         <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
//           <div className="login-box flex flex-col justify-center border border-[#F2F2F2] px-10 py-[60px] text-center rounded-lg" style={{ border: "1p solid #F2F2F2", boxShadow: "0 0px 39px 0 #00000008" }}>
//             <div className="flex justify-center">
//               <img src={logo} width="54px" />
//             </div>
//             <h1 className="text-[#1F272E] text-[21px] mt-8 text-center font-semibold">ยินดีต้อนรับสู่  <span className="font-bold" style={{ fontFamily: 'Poppins' }}>zaviago</span></h1>
//             <button className="inline-block bg-[#11C052] py-[10px] font-sukhumvit font-semibold text-white rounded-lg mt-8 w-[304px] text-[13px] m-auto">สมัครสมาชิกผ่าน LINE</button>

//             <div className="relative mt-8">
//               <div className="absolute inset-0 flex items-center" aria-hidden="true">
//                 <div className="w-full border-t border-[#EBEEF0]" />
//               </div>
//               <div className="relative flex justify-center">
//                 <span className="bg-white px-3 text-[11px] font-medium text-[#333C44] sukhumvit">หรือ</span>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h2 className="sukhumvit text-xs text-[#909090]">มีบัญชีแล้ว? 
//                 <span className="ml-1 text-[#909090] sukhumvit text-xs font-medium cursor-pointer decoration-solid underline" onClick={handleWelcome}>คลิกที่นี่เพื่อเข้าสู่ระบบ</span>
//               </h2>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Fill Num */}
//       {fillNum && (
//         <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
//           <div className="login-box flex flex-col justify-center px-10 py-[60px] text-center">
//             <h1 className="text-[#1F272E] font-bold text-[18px] mt-8 text-center" style={{ fontFamily: "Eventpop" }}>กรอกเบอร์โทรศัพท์เพื่อรับรหัส OTP</h1>
//             <p className="font-sukhumvit text-[#1F272E] text-xs font-normal mt-[10px] w-[270px] mx-auto">รหัส OTP จะส่งไปยังหมายเลขโทรศัพท์ของคุณ
//               เพื่อทำการยืนยันตัวตน</p>

//             <div className="flex gap-x-[11px] w-[304px] m-auto mt-6">
//               <div className="w-1/4">
//                 <select
//                   id="location"
//                   name="location"
//                   className="mt-1 block h-[38px] w-[63px] rounded-md border-gray-300 py-2 px-[10px] text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
//                   defaultValue="+66"
//                 >
//                   <option>+66</option>
//                   <option>+23</option>
//                   <option>+88</option>
//                 </select>
//               </div>

//               <div className="w-[230px]">
//                 <div className="mt-1">
//                   <input
//                     type="tel"
//                     name="phone-num"
//                     id="phone-num"
//                     className="block w-full h-[38px] rounded-md shadow-sm focus:outline-none focus:border focus:border-[#DDDDDD] text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 pl-4"
//                     placeholder="123-456-7890"
//                     onChange={handleChangePhoneInput}
//                     value={phoneNumValue}
//                     autoComplete="off"
//                     style={warnFillPhone ? { border: `1px solid ${errorPhoneBorder}` } : {}}

//                   />
//                   {warnFillPhone && (<p className="required text-left font-sukhumvit font-medium text-[10px] mt-[10px] warn">หมายเลขไม่ถูกต้อง</p>)}
//                 </div>
//               </div>
//             </div>


//             <button className="inline-block font-sukhumvit font-bold bg-[#0099FF] text-white leading-[20px] rounded-lg mt-[11px] w-[304px] h-[30px] text-[13px] m-auto btn-primary-shadow" onClick={handleFillNum}>ขอรหัส OTP</button>

//             <div className="mt-5">
//               <h2 className="font-sukhumvit text-xs font-medium leading-[19.5px] text-[#909090]">หมายเลขโทรศัพท์ที่ระบุจะเพิ่มไปยังโปรไฟล์ของคุณ <br />โปรดศึกษาข้อมูลเพิ่มเติมที่
//                 <span className="ml-1 text-[#909090] sukhumvit cursor-pointer decoration-solid underline">นโยบายความเป็นส่วนตัว</span>
//               </h2>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Fill OTP */}
//       {fillOTP && (
//         <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
//           <div className="login-box flex flex-col justify-center px-10 py-[60px] text-center">
//             <div className="flex justify-center">
//               <img src={particle} width="32px" />
//             </div>
//             <h1 className="text-[#1F272E] font-bold text-[18px] mt-[20px] text-center mb-[19px]" style={{ fontFamily: "Eventpop" }}>ยืนยันรหัส OTP</h1>
//             <p className="sukhumvit text-xs font-medium">ระบุรหัส 6 หลักที่คุณได้รับทาง SMS ผ่านเบอร์</p>
//             <p className="text-[#1F272E] sukhumvit text-xs font-medium">082-345-6789</p>

//             <div className="flex gap-x-[11px] w-[304px] m-auto mt-[24px]">

//               <div className="w-full flex gap-x-[18px]">
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="one"
//                     id="one"
//                     maxLength={1}
//                     className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("two").focus(), 5) : null}
//                     style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
//                   />
//                 </div>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="two"
//                     id="two"
//                     maxLength={1}
//                     className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("three").focus(), 5) : setTimeout(() => document.getElementById("one").focus(), 5)}
//                     style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
//                   />
//                 </div>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="three"
//                     id="three"
//                     maxLength={1}
//                     className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("four").focus(), 5) : setTimeout(() => document.getElementById("two").focus(), 5)}
//                     style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
//                   />
//                 </div>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="four"
//                     id="four"
//                     maxLength={1}
//                     className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("five").focus(), 5) : setTimeout(() => document.getElementById("three").focus(), 5)}
//                     style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
//                   />
//                 </div>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="five"
//                     id="five"
//                     maxLength={1}
//                     className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("six").focus(), 5) : setTimeout(() => document.getElementById("four").focus(), 5)}
//                     style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
//                   />
//                 </div>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="six"
//                     id="six"
//                     maxLength={1}
//                     className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? null : setTimeout(() => document.getElementById("five").focus(), 5)}
//                     style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
//                   />
//                 </div>
//               </div>

//             </div>

//             {warnFillOTP && (<p className="required text-left font-sukhumvit font-medium text-[10px] mt-[10px] warn">รหัส OTP ไม่ถูกต้อง</p>)}

//             <button className="inline-block bg-[#0099FF] text-white rounded-lg mt-[11px] w-[304px]  h-[30px] text-[13px] font-bold m-auto btn-primary-shadow" onClick={handleFillOTP}>ยืนยัน OTP</button>
//             <p className="text-[#909090] text-xs leading-[19.5px] font-medium font-sukhumvit mt-[21px]">
//               ขอรหัส OTP ใหม่อีกครั้งใน {' '}
//               {resendOtpButton ? (
//                 <button className="ml-2">Resend</button>
//               ) : (`00:${countdown} วินาที`)}
//             </p>


//             <div className="relative mt-[15px]">
//               <div className="absolute inset-0 flex items-center" aria-hidden="true">
//                 <div className="w-full border-t border-[#EBEEF0]" />
//               </div>
//               <div className="relative flex justify-center">
//                 <span className="bg-white px-3 text-[11px] font-medium text-[#333C44] sukhumvit">หรือ</span>
//               </div>
//             </div>

//             <div className="mt-[15px]">
//               <h2 className="sukhumvit text-md">
//                 <span className="ml-1 text-[#909090] font-sukhumvit text-xs leading-[19.5px] font-medium cursor-pointer decoration-solid underline" onClick={handleChangeNum}>เปลี่ยนเบอร์มือถือ</span>
//               </h2>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

export default Welcome;