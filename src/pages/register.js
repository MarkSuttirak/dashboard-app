import { useEffect, useState, Fragment } from "react"
import { useLocation } from "react-router-dom"
import Logo from '../img/logo-zaviago.svg'
import { CheckIcon, ChatBubbleOvalLeftEllipsisIcon, HomeModernIcon, BuildingStorefrontIcon, DocumentIcon, ArrowDownOnSquareStackIcon } from '@heroicons/react/24/solid'
import { useRef } from "react"
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Spacer from "../components/spacer"
import Select from "../components/select"
import { Dialog, Transition } from '@headlessui/react'
import RegisterStep from "../components/registerStep"
import LoadingCheck from "../components/loadingcheck"

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

  const [isGoingBack, setIsGoingBack] = useState(false);
  const [isGoingNext, setIsGoingNext] = useState(false);
  const [isGoingBackComplete, setIsGoingBackComplete] = useState(false);
  const [isGoingNextCurrent, setIsGoingNextCurrent] = useState(false);

  const [buildingWorkspace, setBuildingWorkspace] = useState(false);
  const [changingSite, setChangingSite] = useState(false);
  const [preparingDashboard, setPreparingDashboard] = useState(false);
  const [deployingSystem, setDeployingSystem] = useState(false);

  const location = useLocation();

  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabledStepTwo, setIsDisabledStepTwo] = useState(true);
  const [isDisabledStepFour, setIsDisabledStepFour] = useState(true);
  const [isDisabledStepFive, setIsDisabledStepFive] = useState(true);
  const [isDisabledStepSix, setIsDisabledStepSix] = useState(true);
  const [isDisabledStepSeven, setIsDisabledStepSeven] = useState(true);
  const [isDisabledStepEight, setIsDisabledStepEight] = useState(true);

  const [mem, setMem] = useState()
  const [theme, setTheme] = useState(themeOptions[0])

  const [page, setPage] = useState(0);

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const birthdateRef = useRef(null);
  const emailRef = useRef(null);
  const siteRef = useRef(null);

  const [emailError, setEmailError] = useState(false);
  const [siteError, setSiteError] = useState(false);

  const [open, setOpen] = useState(false)
  const [openSettingUp, setOpenSettingUp] = useState(false)

  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  const [animUp, setAnimUp] = useState(false);
  const [animDown, setAnimDown] = useState(false);

  const addAnimUp = () => {
    setAnimUp(true);
    setTimeout(() => {
      setAnimUp(false);
    }, 600)
  }

  const addAnimDown = () => {
    setAnimDown(true);
    setTimeout(() => {
      setAnimDown(false);
    }, 600)
  }

  const Steps = () => {
    return (
      <nav aria-label="Progress">
        <ol role="list" className="flex justify-between">
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 0 ? (isGoingNext ? 'current-to-complete' : 'current') : 'complete'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 1 ? (isGoingNext ? 'current-to-complete' : isGoingBack ? 'current-to-zero' : 'current') : page > 1 ? 'complete' : 'coming'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 2 ? (isGoingNext ? 'current-to-complete' : isGoingBack ? 'current-to-zero' : 'current') : page > 2 ? 'complete' : 'coming'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 3 ? (isGoingNext ? 'current-to-complete' : isGoingBack ? 'current-to-zero' : 'current') : page > 3 ? 'complete' : 'coming'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 4 ? (isGoingNext ? 'current-to-complete' : isGoingBack ? 'current-to-zero' : 'current') : page > 4 ? 'complete' : 'coming'}`} />
            </div>
          </li>
          <li className="step-list">
            <div className="step-register">
              <div className={`step-register-inner ${page === 5 ? (isGoingNext ? 'current-to-complete' : isGoingBack ? 'current-to-zero' : 'current') : page > 5 ? 'complete' : 'coming'}`} />
            </div>
          </li>
        </ol>
      </nav>
    )
  }

  const goPrev = () => {
    if (page > 0) {
      addAnimDown();
      setIsGoingBack(true);
      setTimeout(() => {
        setPage(page - 1);
        setIsGoingBack(false);
        setIsGoingBackComplete(true);
        addAnimUp();
      }, 600)
    }
  }

  const goNext = () => {
    addAnimDown();
    setIsGoingNext(true);
    setTimeout(() => {
      setIsGoingNext(false);
      setIsGoingNextCurrent(true);
      setPage(page + 1);
      addAnimUp();
    }, 600)
    setTimeout(() => {
      setIsGoingNextCurrent(false);
    },1200)
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

  const clickToCreateSite = () => {
    setOpenSettingUp(true);
    setBuildingWorkspace(true);
    setChangingSite(true);
    setPreparingDashboard(true);
    setDeployingSystem(true);
    setTimeout(() => {
      setBuildingWorkspace(false);
    }, 1000)
    setTimeout(() => {
      setChangingSite(false);
    }, 2000)
    setTimeout(() => {
      setPreparingDashboard(false);
    }, 4000)
    setTimeout(() => {
      setDeployingSystem(false);
    }, 5000)
    setTimeout(() => {
      setOpenSettingUp(false);
      setOpen(true);
    }, 6000)
  }

  useEffect(() => {
    addAnimUp();
  }, [])

  return (
    <>
      <div className="flex relative min-h-screen z-[999] bg-white">
        <div className="flex-1 flex-col hidden md:flex justify-center bg-[#F2F2F2]">
          <RegisterStep active={1}/>
        </div>
        <div className="flex flex-1 m-[30px] md:m-2 z-[999] basis-[20%] bg-white absolute md:relative register-screen">
        {page === 0 && (
          <div className="m-auto w-full max-w-sm w-96 h-[600px]">
            <Steps process={0}/>
            <div className={`${animUp ? 'fade-out' : animDown ? 'fade-in' : ''}`}>
              <h2 className="main-title mt-10">Fill in your information</h2>
              <p className="tab-desc">It was popularised in the 1960s with the release of Letraset.</p>
            </div>
            <div className={`space-y-4 mt-6 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <div className="flex gap-x-3">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="form-input"
                  placeholder="Name"
                  ref={nameRef}
                  onInput={() => {
                    if (nameRef.current.value === "" || surnameRef.current.value === "" || birthdateRef.current.value === "" || emailRef.current.value === ""){
                      setIsDisabled(true);
                    } else {
                      setIsDisabled(false);
                    }
                  }}
                />
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  autoComplete="surname"
                  required
                  className="form-input"
                  placeholder="Surname"
                  ref={surnameRef}
                  onInput={() => {
                    if (nameRef.current.value === "" || surnameRef.current.value === "" || birthdateRef.current.value === "" || emailRef.current.value === ""){
                      setIsDisabled(true);
                    } else {
                      setIsDisabled(false);
                    }
                  }}
                />
              </div>

              <input
                id="birthdate"
                name="birthdate"
                type="date"
                autoComplete="birthdate"
                required
                className="form-input"
                placeholder="Birthdate"
                ref={birthdateRef}
                onInput={() => {
                  if (nameRef.current.value === "" || surnameRef.current.value === "" || birthdateRef.current.value === "" || emailRef.current.value === ""){
                    setIsDisabled(true);
                  } else {
                    setIsDisabled(false);
                  }
                }}
              />

              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`form-input ${emailError ? 'error' : ''}`}
                  placeholder="Email"
                  ref={emailRef}
                  onInput={() => {
                    if (nameRef.current.value === "" || surnameRef.current.value === "" || birthdateRef.current.value === "" || emailRef.current.value === ""){
                      setIsDisabled(true);
                    } else {
                      setIsDisabled(false);
                    }
                  }}
                  onKeyDown={() => {
                    setEmailError(false)
                  }}
                />
                {emailError && (<p className="error">Invalid email address</p>)}
              </div>

              <div>
                <h2 className="subheading">Tell us more about you</h2>
              <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
                <div className="mt-4 grid grid-cols-1 gap-y-3">
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
              <div className={`${animUp ? 'anim-up-delay translate-y-[20px] opacity-0' : animDown ? 'anim-down' : ''}`}>
                <button className={`primary-btn w-full justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={() => {
                  if (emailRef.current.value.includes('@') && emailRef.current.value.includes('.')){
                    goNext();
                  } else {
                    setEmailError(true)
                  }
                }}>Submit</button>
              </div>
            </div>
          </div>
        )}

        {page === 1 && (
          <div className="m-auto w-full max-w-sm w-96 h-[600px]">
            <Steps process={1} />
            <div className={`${animUp ? 'fade-out' : animDown ? 'fade-in' : ''}`}>
              <h2 className="main-title mt-8">What is your business about?</h2>
            </div>
            <div className={`space-y-6 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
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

              <h2 className="subheading">What are your goals for this business?</h2>

              <div className="grid grid-cols-2 gap-4">
                {checkboxLists.map((checkboxList) => (
                  <label htmlFor={checkboxList.key}>
                    <input
                      id={checkboxList.key}
                      name={checkboxList.key}
                      type="checkbox"
                      className="checkbox-card-input"
                      onChange={(e) => {
                        if (e.target.checked === true){
                          setIsDisabledStepFive(false);
                        } else {
                          setIsDisabledStepFive(true);
                        }
                      }}
                    />
                    <span className="tab-desc border checkbox-card">
                      {checkboxList.title}
                    </span>
                  </label>
                ))}

              </div>
            </div>

            <Spacer size={30}/>
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[20px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center`} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className="m-auto w-full max-w-sm w-96 h-[600px]">
            <Steps process={2}/>
            <div className={`${animUp ? 'fade-out' : animDown ? 'fade-in' : ''}`}>
              <h2 className="main-title mt-8">How many people are there in your team?</h2>
            </div>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <RadioGroup value={mem} onChange={setMem} className="mt-2" onClick={() => setIsDisabledStepFour(false)}>
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
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[20px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center`} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabledStepFour ? 'disabled' : ''}`} disabled={isDisabledStepFour ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 3 && (
          <div className="m-auto w-full max-w-sm w-96 h-[600px]">
            <Steps process={4}/>
            <div className={`${animUp ? 'fade-out' : animDown ? 'fade-in' : ''}`}>
              <h2 className="main-title mt-8">What would you like to call your site?</h2>
              <p className="tab-desc mt-2">It was popularised in the 1960s with the release of Letraset.</p>
            </div>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 tab-desc">
                  http://
                </div>
                <input
                  type="text"
                  name="site"
                  id="site"
                  className={`form-input ${siteError ? 'error' : ''}`}
                  placeholder="example"
                  style={{paddingRight:"140px",paddingLeft:"60px"}}
                  ref={siteRef}
                  onInput={(e) => {
                    if (e.target.value === ""){
                      setIsDisabledStepSix(true);
                    } else {
                      setIsDisabledStepSix(false);
                    }
                  }}
                  onKeyDown={() => setSiteError(false)}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 tab-desc">
                  .zaviago.com
                </div>
              </div>
              <p className={`${siteError ? 'error-small' : 'tab-desc-small'}`}>Only A-Z, a-z and numbers are allowed.</p>
            </div>

            <Spacer size={30}/>
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[20px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center`} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabledStepSix ? 'disabled' : ''}`} disabled={isDisabledStepSix ? true : false} onClick={() => {
                if (siteRef.current.value.includes('@') || 
                siteRef.current.value.includes('.') || 
                siteRef.current.value.includes('%') || 
                siteRef.current.value.includes('&') || 
                siteRef.current.value.includes('+') || 
                siteRef.current.value.includes('#') ||
                siteRef.current.value.includes('!') ||
                siteRef.current.value.includes('$') ||
                siteRef.current.value.includes('^') ||
                siteRef.current.value.includes('*') ||
                siteRef.current.value.includes('(') ||
                siteRef.current.value.includes(')') ||
                siteRef.current.value.includes('-') ||
                siteRef.current.value.includes('_') ||
                siteRef.current.value.includes('=') ||
                siteRef.current.value.includes('[') ||
                siteRef.current.value.includes(']') ||
                siteRef.current.value.includes('{') ||
                siteRef.current.value.includes('}') ||
                siteRef.current.value.includes('|') ||
                siteRef.current.value.includes('\\') ||
                siteRef.current.value.includes('/') ||
                siteRef.current.value.includes(':') ||
                siteRef.current.value.includes(';') ||
                siteRef.current.value.includes('"') ||
                siteRef.current.value.includes('\'') ||
                siteRef.current.value.includes('<') ||
                siteRef.current.value.includes('>') ||
                siteRef.current.value.includes('?') ||
                siteRef.current.value.includes('`') ||
                siteRef.current.value.includes('~') ||
                siteRef.current.value.includes(' ')
                ){
                  setSiteError(true)
                } else {
                  goNext();
                }
              }}>Submit</button>
            </div>
          </div>
        )}

        {page === 4 && (
          <div className="m-auto w-full max-w-sm w-96 h-[600px]">
            <Steps process={5}/>
            <div className={`${animUp ? 'fade-out' : animDown ? 'fade-in' : ''}`}>
              <h2 className="main-title mt-8">What would you like to add on your site?</h2>
              <p className="tab-desc mt-2">It was popularised in the 1960s with the release of Letraset.</p>
            </div>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <div className="grid grid-cols-2 gap-4">

                {addOnLists.map((checkboxList) => (
                  <label htmlFor={checkboxList.key}>
                    <input
                      id={checkboxList.key}
                      name={checkboxList.key}
                      type="checkbox"
                      className="checkbox-card-input"
                      onChange={(e) => {
                        if (e.target.checked === true){
                          setIsDisabledStepSeven(false);
                        } else {
                          setIsDisabledStepSeven(true);
                        }
                      }}
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
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[20px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center`} onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabledStepSeven ? 'disabled' : ''}`} disabled={isDisabledStepSeven ? true : false} onClick={goNext}>Submit</button>
            </div>
          </div>
        )}

        {page === 5 && (
          <div className="m-auto w-full max-w-sm w-96 h-[600px]">
            <Steps process={6}/>
            <div className={`${animUp ? 'fade-out' : animDown ? 'fade-in' : ''}`}>
              <h2 className="main-title mt-8">Pick a theme you like</h2>
              <p className="tab-desc mt-2">It was popularised in the 1960s with the release of Letraset.</p>
            </div>
            <div className={`space-y-4 mt-10 ${animUp ? 'anim-up' : animDown ? 'anim-down-delay' : ''}`}>
              <RadioGroup value={theme} onChange={setTheme} className="mt-2" onClick={() => setIsDisabledStepEight(false)}>
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
            <div className={`flex gap-x-2 ${animUp ? 'anim-up-delay translate-y-[20px] opacity-0' : animDown ? 'anim-down' : ''}`}>
              <button className={`no-bg-btn w-1/4 justify-center`}  onClick={goPrev}>Back</button>
              <button className={`primary-btn w-1/4 justify-center ${isDisabledStepEight ? 'disabled' : ''}`} disabled={isDisabledStepEight ? true : false} onClick={clickToCreateSite}>Submit</button>
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

        <Transition.Root show={openSettingUp} as={Fragment}>
        <Dialog as="div" className="relative z-[1001]" onClose={() => setOpenSettingUp(true)}>
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
                  <div class="moving-line"/>
                  <p className="tab-desc text-left font-bold mb-3 flex gap-x-2">
                    <ArrowDownOnSquareStackIcon width='24'/>
                    Creating your site
                  </p>
                  {buildingWorkspace ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Building your workspace
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
                        <LoadingCheck type='primary' height='20px'/>
                        <div className="text-left">
                          <Dialog.Title as="h3" className="subheading small">
                            Built your workspace
                          </Dialog.Title>
                        </div>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                  
                  {changingSite ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Changing your site name
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='tab-desc'>In progress</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <LoadingCheck type='primary' height='20px'/>
                        <Dialog.Title as="h3" className="subheading small">
                          Changed your site name
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}
                  
                  {preparingDashboard ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Preparing dashboard
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='tab-desc'>In progress</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <LoadingCheck type='primary' height='20px'/>
                        <Dialog.Title as="h3" className="subheading small">
                          Prepared dashboard
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='text-link'>Done</p>
                      </div>
                    </div>
                  )}

                  {deployingSystem ? (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <div className="loading-icon">
                          <div className="inner-icon"></div>
                        </div>
                        <Dialog.Title as="h3" className="subheading small">
                          Deploying system
                        </Dialog.Title>
                      </div>
                      <div>
                        <p className='tab-desc'>In progress</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex gap-x-2 items-center">
                        <LoadingCheck type='primary' height='20px'/>
                        <Dialog.Title as="h3" className="subheading small">
                          Deployed system
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
      </div>
    </>
  )
}