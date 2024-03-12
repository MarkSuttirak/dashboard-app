import { useEffect, useState, Fragment } from "react"
import { useLocation } from "react-router-dom"
import Logo from '../img/logo-zaviago.svg'
import { CheckIcon, ChatBubbleBottomCenterTextIcon, CursorArrowRippleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import LoadingCheck from "../components/loadingcheck"
import Spacer from "../components/spacer"
import RegisterStep from "../components/registerStep"
import { Dialog, Transition } from '@headlessui/react'
import Scrambles from "../components/scrambledText"
import { useRef } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function OTP() {
  const location = useLocation();

  const [creatingAccount, setCreatingAccount] = useState(false);
  const [settingUpProfile, setSettingUpProfile] = useState(false);
  const [preparingWorkspace, setPreparingWorkspace] = useState(false);

  const [requestingOTP, setRequestingOTP] = useState(false);
  const [sendingOTP, setSendingOTP] = useState(false);
  const [sentOTP, setSentOTP] = useState(false);

  const phoneRef = useRef(null);

  const [phoneError, setPhoneError] = useState(false);
  const [otpError, setOtpError] = useState(false);

  const [open, setOpen] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  const [openThree, setOpenThree] = useState(false)

  const [enterOTPPage, setEnterOTPPage] = useState(false);
  const [isDisabledPhone, setIsDisabledPhone] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const [resendOTP, setResendOTP] = useState(false);

  const [animUp, setAnimUp] = useState(false);

  const addAnimUp = () => {
    setAnimUp(true);
    setTimeout(() => {
      setAnimUp(false);
    }, 1000)
  }

  const clickToGetOTP = () => {
    if (phoneRef.current.value.length < 10) {
      setPhoneError(true);
    } else {
      setOpen(true);
      setRequestingOTP(true);
      setSendingOTP(true);
      setSentOTP(false);
      setTimeout(() => {
        setRequestingOTP(false);
      }, 1000)
      setTimeout(() => {
        setSendingOTP(false);
      }, 3000)
      setTimeout(() => {
        setSentOTP(true);
      }, 4000)
      setTimeout(() => {
        setEnterOTPPage(true);
        addAnimUp();
        setOpen(false);
      }, 6000)
    }
  }

  const clickToResendOTP = () => {
    setEnterOTPPage(false);
    setResendOTP(true);
    addAnimUp();
  }

  const clickToConfirmOTP = () => {
    setOpenThree(true);
    if (!otpError) {
      setTimeout(() => {
        setOpenThree(false);
        window.location.href = '/register';
      }, 2000)
    } else {
      setTimeout(() => {
        setOpenThree(false);
      }, 2000)
    }
  }

  useEffect(() => {
    addAnimUp();
    openModalOne();
    if (location.pathname === '/otp') {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [])

  const openModalOne = () => {
    setOpenTwo(true);
    setCreatingAccount(true);
    setSettingUpProfile(true);
    setPreparingWorkspace(true);
    setTimeout(() => {
      setCreatingAccount(false);
    }, 1000)
    setTimeout(() => {
      setSettingUpProfile(false);
    }, 2000)
    setTimeout(() => {
      setPreparingWorkspace(false);
    }, 4000)
    setTimeout(() => {
      setOpenTwo(false);
    }, 6000)
  }

  return (
    <>
      <div className="flex relative min-h-screen z-[999] bg-white">
        <div className="flex-1 flex-col hidden md:flex justify-center bg-[#F2F2F2]">
          <RegisterStep active={0} />
        </div>
        <div className="flex flex-1 m-[30px] md:m-2 z-[999] bg-white basis-[20%] absolute md:relative register-screen">
          {!enterOTPPage ? (
            <div className="m-auto w-full max-w-sm w-96">
              <h2 className="main-title">{resendOTP ? "Resend OTP" : "Let's get started"}</h2>
              <p className="tab-desc">This is an example</p>

              <Spacer size={20} />
              <div className="space-y-6">
                <div className={`${animUp ? 'anim-up' : ''}`}>
                  <label htmlFor="otp" className="subheading">
                    Enter your phone number
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-1 text-gray-500 text-sm outline-none"
                      >
                        <option>TH</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      style={{ paddingLeft: "64px" }}
                      placeholder="091-234-5678"
                      ref={phoneRef}
                      onInput={(e) => {
                        if (e.target.value === "") {
                          setIsDisabledPhone(true);
                        } else {
                          setIsDisabledPhone(false);
                        }
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          clickToGetOTP();
                        }
                      }}
                      onKeyDown={() => setPhoneError(false)}
                    />
                  </div>

                  {phoneError && (<p className="error">Invalid phone number</p>)}
                </div>

                <div className={`${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : ''}`}>
                  <button className={`primary-btn ${isDisabledPhone ? 'disabled' : ''} w-full justify-center`} onClick={clickToGetOTP} disabled={isDisabledPhone ? true : false}>Get OTP</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="m-auto w-full max-w-sm w-96">
              <h2 className="main-title">6-digit code</h2>
              <p className="tab-desc">This is an example</p>

              <Spacer size={20} />
              <div className="space-y-6">
                <div className={`${animUp ? 'anim-up' : ''}`}>
                  <label htmlFor="otp" className="subheading">
                    Enter your OTP
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    maxLength={6}
                    onInput={(e) => {
                      if (e.target.value === "" || e.target.value.length !== 6) {
                        setIsDisabled(true);
                      } else {
                        setIsDisabled(false);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        clickToConfirmOTP();
                      }
                    }}
                  />

                  <p className="text-link inline-block" onClick={clickToResendOTP}>Resend code</p>
                </div>

                <div className={`${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : ''}`}>
                  <button className={`primary-btn ${isDisabled ? 'disabled' : ''} w-full justify-center`} disabled={isDisabled ? true : false} onClick={clickToConfirmOTP}>Confirm OTP</button>
                  <p className="error" onClick={() => { setOtpError(true); setOpenThree(true) }}>OTP is incorrect</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[1001]" onClose={() => setOpen(true)}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all w-full max-w-[400px] flex flex-col gap-y-4">
                  <div className="moving-line" />
                  <p className="tab-desc text-left font-bold mb-3 flex gap-x-2">
                    <ChatBubbleBottomCenterTextIcon width='24' />
                    Requesting OTP
                  </p>
                  {requestingOTP ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Requesting OTP
                          </Dialog.Title>
                        </div>
                      </div>
                      <div>
                        <p className='tab-desc'>
                          In progress
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        {/* <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0788F5]">
                          <CheckIcon className="h-3 w-3 text-[#0788F5]" aria-hidden="true" />
                        </div> */}
                        <LoadingCheck type='primary' height='20px' />
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Requested OTP
                          </Dialog.Title>
                        </div>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}

                  {sendingOTP ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Sending OTP
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='tab-desc'>In progress</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        {/* <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0788F5]">
                          <CheckIcon className="h-3 w-3 text-[#0788F5]" aria-hidden="true" />
                        </div> */}
                        <LoadingCheck type='primary' height='20px' />
                        <Dialog.Title as="h3" className="subheading small">
                          Sent OTP
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}

                  {sentOTP && (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        {/* <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0788F5]">
                          <CheckIcon className="h-3 w-3 text-[#0788F5]" aria-hidden="true" />
                        </div> */}
                        <LoadingCheck type='primary' height='20px' />
                        <Dialog.Title as="h3" className="subheading small">
                          OTP sent to your phone
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openTwo} as={Fragment}>
        <Dialog as="div" className="relative z-[1001]" onClose={() => setOpenTwo(true)}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all w-full max-w-[400px] flex flex-col gap-y-4">
                  <div className="moving-line" />
                  <p className="tab-desc text-left font-bold mb-3 flex gap-x-2">
                    <CursorArrowRippleIcon width='24' />
                    Preparing your account
                  </p>
                  {creatingAccount ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Creating your account
                          </Dialog.Title>
                        </div>
                      </div>
                      <div>
                        <p className='tab-desc'>
                          In progress
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        {/* <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0788F5]">
                          <CheckIcon className="h-3 w-3 text-[#0788F5]" aria-hidden="true" />
                        </div> */}
                        <LoadingCheck type='primary' height='20px' />
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Created your account
                          </Dialog.Title>
                        </div>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}


                  {settingUpProfile ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Setting up the profile
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='tab-desc'>In progress</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        {/* <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0788F5]">
                          <CheckIcon className="h-3 w-3 text-[#0788F5]" aria-hidden="true" />
                        </div> */}
                        <LoadingCheck type='primary' height='20px' />
                        <Dialog.Title as="h3" className="subheading small">
                          Set up the profile
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}

                  {preparingWorkspace ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Preparing your workspace
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='tab-desc'>In progress</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        {/* <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#0788F5]">
                          <CheckIcon className="h-3 w-3 text-[#0788F5]" aria-hidden="true" />
                        </div> */}
                        <LoadingCheck type='primary' height='20px' />
                        <Dialog.Title as="h3" className="subheading small">
                          Prepared your workspace
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openThree} as={Fragment}>
        <Dialog as="div" className="relative z-[1001]" onClose={() => { setOpenThree(false); setOtpError(false) }}>
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
                {otpError ? (
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all w-full max-w-[400px] flex flex-col gap-y-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <XMarkIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <p className="tab-desc justify-center font-bold flex">
                      OTP is incorrect, please try again
                    </p>
                  </Dialog.Panel>
                ) : (
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all w-full max-w-[400px] flex flex-col gap-y-4">
                    <div className="moving-line" />
                    <LoadingCheck type='success' />
                    <p className="tab-desc justify-center font-bold flex">
                      OTP confirmed
                    </p>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}