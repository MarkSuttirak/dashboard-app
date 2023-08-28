import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Logo from '../img/logo-zaviago.svg'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useRef } from "react"
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Spacer from "../components/spacer"

const steps = [
  { id: '01', name: 'Job Details', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  { id: '02', name: 'Application form', description: 'Cursus semper viverra.', href: '#', status: 'current' },
  { id: '03', name: 'Preview', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
]

const mailingLists = [
  { id: 1, title: 'I am a solo entrepreneur', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'I am a business team member', description: 'Last message sent 2 weeks ago', users: '1200 users' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Register() {
  const location = useLocation();

  const [isDisabled, setIsDisabled] = useState(true);

  const [enterEmailPage, setEnterEmailPage] = useState(true);
  const [whatKind, setWhatKind] = useState(false);
  const emailRef = useRef(null);

  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  const goToWhatKind = () => {
    setEnterEmailPage(false);
    setWhatKind(true);
  }

  const goBackToEmail = () => {
    setEnterEmailPage(true);
    setWhatKind(false);
  }

  const registerStep = [
    { id: 1, status: 'complete' },
    { id: 2, status: 'current' },
    { id: 3, status: 'upcoming' },
  ]

  const Steps = ({step}) => {
    return (
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {registerStep.map((step) => (
            <li key={step.name}>
              {step.status === 'complete' ? (
                <div className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 w-10"/>
              ) : step.status === 'current' ? (
                <div className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 w-10"/>
              ) : (
                <div className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 w-10"/>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
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
        {enterEmailPage && (
          <div className="relative flex flex-1 m-2 z-[999] bg-white">
            <div className="m-auto w-full max-w-sm w-96">
              <Steps />
              <h2 className="main-title mt-8">What is your email address?</h2>
              <div className="space-y-4 mt-3">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="form-input"
                  placeholder="Enter your email"
                  ref={emailRef}
                  onInput={(e) => {
                    if (e.target.value === ""){
                      setIsDisabled(true)
                    } else {
                      setIsDisabled(false)
                    }
                  }}
                />
                <div>
                  <button className={`primary-btn w-full justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goToWhatKind}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {whatKind && (
          <div className="relative flex flex-1 m-2 z-[999] bg-white">
            <div className="m-auto w-full max-w-sm w-96">
              <Steps />
              <div className="space-y-4 mt-10">
              <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
                <RadioGroup.Label className="main-title">Tell us more about you</RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6">
                  {mailingLists.map((mailingList) => (
                    <RadioGroup.Option
                      key={mailingList.id}
                      value={mailingList}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? 'border-transparent' : 'border-gray-300',
                          active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                          'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <span className="flex flex-1">
                            <span className="flex flex-col">
                              <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                {mailingList.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                                {mailingList.description}
                              </RadioGroup.Description>
                              <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                                {mailingList.users}
                              </RadioGroup.Description>
                            </span>
                          </span>
                          <CheckCircleIcon
                            className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked ? 'border-indigo-500' : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              </div>

              <Spacer size={30}/>
              <div className="flex gap-x-2">
                <button className={`no-bg-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goBackToEmail}>Back</button>
                <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goToWhatKind}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}