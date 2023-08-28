import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Logo from '../img/logo-zaviago.svg'
import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
  { id: '01', name: 'Job Details', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  { id: '02', name: 'Application form', description: 'Cursus semper viverra.', href: '#', status: 'current' },
  { id: '03', name: 'Preview', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Register() {
  const location = useLocation();

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
        <div className="relative flex flex-1 m-2 z-[999] bg-white">
          <div className="m-auto w-full max-w-sm w-96">
            <h2 className="main-title text-center">Register</h2>
            <form action="#" method="POST" className="space-y-4 mt-3">
              <div>
                <label htmlFor="first-name" className="subheading">
                  Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="first-name"
                  required
                  className="form-input"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="surname" className="subheading">
                  Surname
                </label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  autoComplete="surname"
                  required
                  className="form-input"
                  placeholder="Enter your surname"
                />
              </div>

              <div>
                <label htmlFor="email" className="subheading">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <input type='submit' className="primary-btn w-full justify-center"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}