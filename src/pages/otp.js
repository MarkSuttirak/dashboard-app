import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Logo from '../img/logo-zaviago.svg'
import { CheckIcon } from '@heroicons/react/24/solid'
import Spacer from "../components/spacer"

const steps = [
  { id: '01', name: 'Job Details', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  { id: '02', name: 'Application form', description: 'Cursus semper viverra.', href: '#', status: 'current' },
  { id: '03', name: 'Preview', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function OTP() {
  const location = useLocation();

  const [enterOTPPage, setEnterOTPPage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const clickToGetOTP = (e) => {
    e.preventDefault();
    setEnterOTPPage(true);
  }

  return (
    <>
      <div className="flex relative min-h-screen z-[999] bg-white">
        <div className="flex-1 flex-col hidden md:flex justify-center bg-[#F2F2F2]">
          <nav className="m-auto max-w-[480px] px-8" aria-label="Progress">
            <ol
              role="list"
              className="overflow-hidden rounded-md"
            >
              {steps.map((step, stepIdx) => (
                <li key={step.id} className="relative overflow-hidden lg:flex-1">
                  <div>
                    {step.status === 'complete' ? (
                      <a href={step.href} className="group">
                        <span
                          className='px-6 py-5 flex items-start text-sm font-medium'
                        >
                          <span className="flex-shrink-0">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                              <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </span>
                          <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                            <span className="text-sm font-medium">{step.name}</span>
                            <span className="text-sm font-medium text-gray-500">{step.description}</span>
                          </span>
                        </span>
                      </a>
                    ) : step.status === 'current' ? (
                      <a href={step.href} aria-current="step">
                        <span
                          className='px-6 py-5 flex items-start text-sm font-medium'
                        >
                          <span className="flex-shrink-0">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
                              <CheckIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                            </span>
                          </span>
                          <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                            <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                            <span className="text-sm font-medium text-gray-500">{step.description}</span>
                          </span>
                        </span>
                      </a>
                    ) : (
                      <a href={step.href} className="group">
                        <span
                          className='px-6 py-5 flex items-start text-sm font-medium'
                        >
                          <span className="flex-shrink-0">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                              <CheckIcon className="h-6 w-6 text-gray-300" aria-hidden="true" />
                            </span>
                          </span>
                          <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                            <span className="text-sm font-medium text-gray-500">{step.name}</span>
                            <span className="text-sm font-medium text-gray-500">{step.description}</span>
                          </span>
                        </span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        {!enterOTPPage ? (
          <div className="relative flex flex-1 m-2 z-[999] bg-white">
            <div className="m-auto w-full max-w-sm w-96">
              <h2 className="main-title">Let's get started</h2>
              <p className="tab-desc">This is an example</p>

              <Spacer size={20}/>
              <div className="space-y-6">
                <div>
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
                      className="form-input"
                      style={{paddingLeft:"64px"}}
                      placeholder="091-234-5678"
                    />
                  </div>
                </div>

                <div>
                  <button className="primary-btn w-full justify-center" onClick={clickToGetOTP}>Get OTP</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-1 m-2 z-[999] bg-white">
            <div className="m-auto w-full max-w-sm w-96">
              <h2 className="main-title">6-digit code</h2>
              <p className="tab-desc">This is an example</p>

              <Spacer size={20}/>
              <div className="space-y-6">
                <div>
                  <label htmlFor="otp" className="subheading">
                    Enter your OTP
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-input"
                    maxLength={6}
                    onInput={(e) => {
                      if (e.target.value === "" || e.target.value.length !== 6){
                        setIsDisabled(true);
                      } else {
                        setIsDisabled(false);
                      }
                    }}
                  />

                  <p className="text-link inline-block">Resend code</p>
                </div>

                <div>
                  <button className={`primary-btn ${isDisabled ? 'disabled' : ''} w-full justify-center`} disabled={isDisabled ? true : false} onClick={() => window.location.href = '/register'}>Confirm OTP</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}