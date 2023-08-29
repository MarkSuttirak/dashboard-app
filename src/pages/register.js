import { useEffect, useState, Fragment } from "react"
import { useLocation } from "react-router-dom"
import Logo from '../img/logo-zaviago.svg'
import { CheckIcon, ChatBubbleOvalLeftEllipsisIcon, HomeModernIcon, BuildingStorefrontIcon, DocumentIcon } from '@heroicons/react/24/solid'
import { useRef } from "react"
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Spacer from "../components/spacer"
import Select from "../components/select"
import { Dialog, Transition } from '@headlessui/react'
import RegisterStep from "../components/registerStep"

const mailingLists = [
  { id: 1, title: 'I am a solo entrepreneur', description: 'Last message sent an hour ago' },
  { id: 2, title: 'I am a business team member', description: 'Last message sent 2 weeks ago' },
]

const memberOptions = ['Only me', '2-4 people', '5-10 people', 'More than 10 people'];
const themeOptions = [
  {
    id: 'theme1',
    name: 'Theme 1',
    bgColour: 'blueviolet',
    colour: 'white'
  },
  {
    id: 'theme2',
    name: 'Theme 2',
    bgColour: '#1BB040',
    colour: 'white'
  },
  {
    id: 'theme3',
    name: 'Theme 3',
    bgColour: 'red',
    colour: 'white'
  },
  {
    id: 'theme4',
    name: 'Theme 4',
    bgColour: 'black',
    colour: 'white'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Register() {
  useEffect(() => {
    if (location.pathname === '/register'){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  },[])

  const location = useLocation();

  const [isDisabled, setIsDisabled] = useState(true);

  const [mem, setMem] = useState(memberOptions[2])
  const [theme, setTheme] = useState(themeOptions[0])

  const [page, setPage] = useState(0);
  const emailRef = useRef(null);

  const [open, setOpen] = useState(false)

  const [isGoingBack, setIsGoingBack] = useState(false)
  const [isGoingNext, setIsGoingNext] = useState(false)

  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  const [animUp, setAnimUp] = useState(false);
  const [animDown, setAnimDown] = useState(false);

  const addAnimUp = () => {
    setAnimUp(true);
    setTimeout(() => {
      setAnimUp(false);
    }, 800)
  }

  const addAnimDown = () => {
    setAnimDown(true);
    setTimeout(() => {
      setAnimDown(false);
    }, 800)
  }

  const goPrev = () => {
    if (page > 0) {
      addAnimDown();
      setIsGoingBack(true);
      setTimeout(() => {
        setPage(page - 1);
        addAnimUp();
      }, 800)
    }
  }

  const goNext = () => {
    addAnimDown();
    setIsGoingNext(true);
    setTimeout(() => {
      setPage(page + 1);
      addAnimUp();
    }, 800)
    setTimeout(() => {
      setIsGoingNext(false);
    }, 1000)
  }

  const Steps = ({process}) => {
    const registerStep = [
      { id: 1, status: process },
      { id: 2, status: process },
      { id: 3, status: process },
      { id: 4, status: process },
      { id: 5, status: process },
      { id: 6, status: process },
      { id: 7, status: process },
      { id: 8, status: process },
    ]

    if (process === 0) {
      registerStep[0].status = 'current'
    } else if (process === 1) {
      for (let i = 0; i <= 1; i++) {
        registerStep[i].status = 'complete'
        registerStep[1].status = 'current'
      }
    } else if (process === 2) {
      for (let i = 0; i <= 2; i++) {
        registerStep[i].status = 'complete'
        registerStep[2].status = 'current'
      }
    } else if (process === 3) {
      for (let i = 0; i <= 3; i++) {
        registerStep[i].status = 'complete'
        registerStep[3].status = 'current'
      }
    } else if (process === 4) {
      for (let i = 0; i <= 4; i++) {
        registerStep[i].status = 'complete'
        registerStep[4].status = 'current'
      }
    } else if (process === 5) {
      for (let i = 0; i <= 5; i++) {
        registerStep[i].status = 'complete'
        registerStep[5].status = 'current'
      }
    } else if (process === 6) {
      for (let i = 0; i <= 6; i++) {
        registerStep[i].status = 'complete'
        registerStep[6].status = 'current'
      }
    } else if (process === 7) {
      for (let i = 0; i <= 7; i++) {
        registerStep[i].status = 'complete'
        registerStep[7].status = 'current'
      }
    } else {
      for (let i = 0; i <= 8; i++) {
        registerStep[i].status = 'complete'
        registerStep[8].status = 'current'
      }
    }
    
    <div className="w-1/2 bg-gray-200 rounded-full h-1 rounded-full">
      <div className="h-1 rounded-full bg-[#0788F5]" style={{ width: "40%" }}></div>
    </div>
    return (
      <nav aria-label="Progress">
        <ol role="list" className="flex space-x-2">
          {registerStep.map((step) => (
            <li key={step.id}>
              {step.status === 'complete' ? (
                // <div className="flex flex-col pl-1 mt-4 w-8 bg-[#0788F5] h-1 rounded-full"/>
                <div className="flex flex-col w-8 bg-gray-200 rounded-full h-1 rounded-full">
                  <div className={`h-1 rounded-full bg-[#0788F5]`} style={{ width: "100%" }} />
                </div>
              ) : step.status === 'current' ? (
                <div className="flex flex-col w-8 bg-gray-200 rounded-full h-1 rounded-full">
                  <div className={`h-1 rounded-full bg-[#0788F5]`} style={{ width: "50%" }} />
                </div>
                // <div className="group flex flex-col bg-gray-200 pl-1 mt-4 w-8 h-1 rounded-full" style={{background:"linear-gradient(to right, #0788F5 50%, #E5E7EB 50%)"}}/>
              ) : (
                <div className="flex flex-col w-8 bg-gray-200 rounded-full h-1 rounded-full">
                  <div className={`h-1 rounded-full bg-[#0788F5]`} style={{ width: "0%" }} />
                </div>
                // <div className="group flex flex-col bg-gray-200 pl-1 mt-4 w-8 h-1 rounded-full"/>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  const checkboxLists = [
    {
      title: 'Comments',
      key: 'comments',
    },
    {
      title: 'Candidates',
      key: 'candidates'
    },
    {
      title: 'Offers',
      key: 'offers'
    },
    {
      title: 'Games',
      key: 'games'
    },
    {
      title: 'Education',
      key: 'education'
    },
    {
      title: 'Drink Coffee',
      key: 'drink'
    }
  ]

  const addOnLists = [
    {
      title: 'Restaurants',
      key: 'restaurants',
      icon: <ChatBubbleOvalLeftEllipsisIcon />
    },
    {
      title: 'Hotels',
      key: 'hotels',
      icon: <HomeModernIcon />
    },
    {
      title: 'E-Commerce',
      key: 'ecommerce',
      icon: <BuildingStorefrontIcon />
    },
    {
      title: 'Blog',
      key: 'blog',
      icon: <DocumentIcon />
    },
    {
      title: 'Portfolio',
      key: 'portfolio',
      icon: <DocumentIcon />
    },
    {
      title: 'Events',
      key: 'events',
      icon: <DocumentIcon />
    }
  ]

  useEffect(() => {
    addAnimUp();
  }, [])

  return (
    <>
      <div className="flex relative min-h-screen z-[999] bg-white">
        <div className="flex-1 flex-col hidden md:flex justify-center bg-[#F2F2F2]">
          <RegisterStep active={1}/>
        </div>
        <div className="flex flex-1 m-[30px] md:m-2 z-[999] basis-[20%] bg-white absolute md:relative">
        {page === 0 && (
          <div className="m-auto w-full max-w-sm w-96 h-[400px]">
            <Steps process={0}/>
            <h2 className="main-title mt-10">What is your email address?</h2>
            <p className="tab-desc">It was popularised in the 1960s with the release of Letraset.</p>
            <div className={`space-y-4 mt-6 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
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
              <div className={`${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : animDown ? 'anim-down' : ''}`}>
                <button className={`primary-btn w-full justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goNext}>Submit</button>
              </div>
            </div>
          </div>
        )}

        {page === 1 && (
          <div className="m-auto w-full max-w-sm w-96 h-[400px]">
            <Steps process={1}/>
            <h2 className="main-title mt-8">Tell us more about you</h2>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
            <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>

              <div className="mt-4 grid grid-cols-1 gap-y-6">
                {mailingLists.map((mailingList) => (
                  <RadioGroup.Option
                    key={mailingList.id}
                    value={mailingList}
                    className={({ checked, active }) =>
                      classNames(
                        checked ? 'border-transparent' : 'border-gray-300',
                        active ? 'border-[#0788F5] ring-2 ring-[#0788F5]' : '',
                        'relative flex cursor-pointer rounded-lg border bg-white p-4 outline-none'
                      )
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <span className="flex flex-1">
                          <span className="flex flex-col">
                            <RadioGroup.Label as="span" className="subheading">
                              {mailingList.title}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="span" className="tab-desc">
                              {mailingList.description}
                            </RadioGroup.Description>
                          </span>
                        </span>
                        <CheckCircleIcon
                          className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-[#0788F5]')}
                          aria-hidden="true"
                        />
                        <span
                          className={classNames(
                            active ? 'border' : 'border-2',
                            checked ? 'border-[#0788F5]' : 'border-transparent',
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
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className="m-auto w-full max-w-sm w-96 h-[400px]">
            <Steps process={2} />
            <h2 className="main-title mt-8">What is your business about?</h2>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <Select values={[
                {
                  id: 'private',
                  name: 'Private',
                },
                {
                  id: 'organisation',
                  name: 'Organisation',
                },
                {
                  id: 'playgame',
                  name: 'To play a game',
                },
                {
                  id: 'learn',
                  name: 'To learn how to code',
                },
                {
                  id: 'drink',
                  name: 'To drink coffee',
                }
              ]}/>
            </div>

            <Spacer size={30}/>
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 3 && (
          <div className="m-auto w-full max-w-sm w-96 h-[400px]">
            <Steps process={3}/>
            <h2 className="main-title mt-8">How many people are there in your team?</h2>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <RadioGroup value={mem} onChange={setMem} className="mt-2">
                <RadioGroup.Label className="sr-only"> How many people are there in your team? </RadioGroup.Label>
                <div className="grid grid-cols-1 gap-3">
                  {memberOptions.map((option) => (
                    <RadioGroup.Option
                      key={option}
                      value={option}
                      className={({ active, checked }) =>
                        classNames(
                          active ? 'ring-2 ring-offset-2 ring-[#0788F5]' : '',
                          checked
                            ? 'bg-[#0788F5] border-transparent text-white'
                            : 'bg-white border-gray-200 text-gray-900',
                          'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium cursor-pointer'
                        )
                      }
                    >
                      <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Spacer size={30}/>
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 4 && (
          <div className="m-auto w-full max-w-sm w-96 h-[400px]">
            <Steps process={4}/>
            <h2 className="main-title mt-8">What are your goals for this business?</h2>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <div className="grid grid-cols-2 gap-4">

                {checkboxLists.map((checkboxList) => (
                  <label htmlFor={checkboxList.key}>
                    <input
                      id={checkboxList.key}
                      name={checkboxList.key}
                      type="checkbox"
                      className="checkbox-card-input"
                    />
                    <span className="tab-desc border checkbox-card">
                      {checkboxList.title}
                    </span>
                  </label>
                ))}

              </div>
            </div>

            <Spacer size={30}/>
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 5 && (
          <div className="m-auto w-full max-w-sm w-96 h-[400px]">
            <Steps process={5}/>
            <h2 className="main-title mt-8">What would you like to call your site?</h2>
            <p className="tab-desc mt-2">It was popularised in the 1960s with the release of Letraset.</p>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 tab-desc">
                  http://
                </div>
                <input
                  type="text"
                  name="site"
                  id="site"
                  className="form-input"
                  placeholder="example"
                  style={{paddingRight:"140px",paddingLeft:"60px"}}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 tab-desc">
                  .zaviago.com
                </div>
              </div>
              <p className="tab-desc-small">Only A-Z, a-z and numbers are allowed.</p>
            </div>

            <Spacer size={30}/>
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 6 && (
          <div className="m-auto w-full max-w-sm w-96 h-[400px]">
            <Steps process={6}/>
            <h2 className="main-title mt-8">What would you like to add on your site?</h2>
            <p className="tab-desc mt-2">It was popularised in the 1960s with the release of Letraset.</p>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <div className="grid grid-cols-2 gap-4">

                {addOnLists.map((checkboxList) => (
                  <label htmlFor={checkboxList.key}>
                    <input
                      id={checkboxList.key}
                      name={checkboxList.key}
                      type="checkbox"
                      className="checkbox-card-input"
                    />
                    <span className="tab-desc border checkbox-card">
                      {checkboxList.icon}
                      {checkboxList.title}
                    </span>
                  </label>
                ))}

              </div>
            </div>

            <Spacer size={30}/>
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 7 && (
          <div className="m-auto w-full max-w-sm w-96 h-[400px]">
            <Steps process={7}/>
            <h2 className="main-title mt-8">Pick a theme you like</h2>
            <p className="tab-desc mt-2">It was popularised in the 1960s with the release of Letraset.</p>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <RadioGroup value={theme} onChange={setTheme} className="mt-2">
                <RadioGroup.Label className="sr-only"> Pick a theme you like </RadioGroup.Label>
                <div className="grid grid-cols-2 gap-3">
                  {themeOptions.map((option) => (
                    <RadioGroup.Option
                      key={option.id}
                      value={option.name}
                      className={({ active, checked }) =>
                        classNames(
                          active ? 'ring-2 ring-offset-2 ring-[#0788F5]' : '',
                          checked
                            ? 'ring-2 ring-offset-2 ring-[#0788F5]'
                            : '',
                            `rounded-md py-3 px-3 h-[100px] flex items-center justify-center text-sm font-medium cursor-pointer`
                        )
                      }
                      style={{backgroundColor: option.bgColour, color: option.colour}}
                    >
                      <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Spacer size={30}/>
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[40px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={() => setOpen(true)}>Submit</button>
            </div>
          </div>
        )}
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[999]" onClose={() => setOpen(true)}>
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
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="main-heading">
                          Registered successfully
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="tab-desc">
                            Please click 'Go to dashboard' to start working.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="primary-btn w-full justify-center"
                        onClick={() => window.location.href = "/"}
                      >
                        Go to dashboard
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  )
}