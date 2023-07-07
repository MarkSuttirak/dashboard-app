import React, { useState, Fragment } from "react";
import copyBtn from '../img/copy-btn.svg';
import editIcon from '../img/editIcon.png';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import CompanyPopup from "../components/companyPopup";

const publishingOptions = [
  { title: 'Inviting', description: 'waiting for response', current: true },
  { title: 'Remove from Invite', description: 'Remove a list from invite', current: false },
]

const memberOptions = [
  { title: 'Members', description: 'Can edit all project and invite', current: true },
  { title: 'Admin', description: 'Can manage team setting', current: false },
  { title: 'Remove from team', description: 'Remove a list from a team', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TeamsPage = () => {
  const [selected, setSelected] = useState(publishingOptions[0])
  const [selectedMember, setSelectedMember] = useState(memberOptions[0])

  const [accountName, setAccountName] = useState([
    {name: 'Zaviago', id: '1', email: 'www.zaviago.co.th'},
    {name: 'Pending...', id: '2', email: 'thinkoutthebox@email.com'},
  ]);

  const users = [
    {id: '1', name: 'John walker', email: 'walktothemoon@email.com', img: ''},
    {id: '2', name: 'Chom Chom', email: 'Chomchom001@email.com', img: ''},
    {id: '3', name: 'Lemon Memon', email: 'lemonmemon@email.com', img: ''}
  ];

  const [isOpen2, setIsOpen2] = useState(false);
  const handleInviteClick2 = () => {
    setIsOpen2(!isOpen2);
  }
  const closePopUp2 = ()=>{
    setIsOpen2(false);
    console.log('false')
  }

  return (
    <div className="page-section">
      <div className="mx-auto dashboard-container pb-5 gap-x-8 pt-16">
        <h1 className="font-bold text-[20px]">ทีมและสมาชิก</h1>
        <p className="mt-[9px] sukhumvit font-medium text-sm text-[#505A62]">โดยจะแสดงทีมของและสมาชิกที่คุณได้เข้าร่วม โดยสามารถเปลี่ยนหน้าการตั้งค่าทีมได้จาก<br/>ปุ่ม Account --{'>'} Switch Team เพื่อเปลี่ยนทีมที่ต้องการแสดง</p>
        <div className="border border-[#F2F2F2] p-[34px] mt-7 rounded-t-[20px]">
          <div className="flex items-center">
            <div className="w-[48px] h-[48px] bg-[#0788FF] text-white flex items-center justify-center rounded-md text-[23px] font-semibold">{accountName[0].name[0]}</div>
            <div className="relative flex flex-col ml-[15px]">
              <div className="flex">
                <h1 className="font-inter text-[#1F272E] font-semibold">{accountName[0].name}</h1>
                <button onClick={handleInviteClick2} className="ml-3"> <img src={editIcon} className="w-[11px]" alt="" /> </button>
              </div>
              <p className="paras text-sm">{accountName[0].email}
                <ul className="inline-block list-disc ml-7">
                  <li>Member since : May 20, 2023</li>
                </ul>
              </p>
            </div>
          </div>

          {isOpen2 &&
            <div>
              <div className="popup-overlay"></div>
              <div>
                <div className='sm:w-[511px] w-[40%]  bg-white rounded-2xl sm:right-[30%]  sm:left-auto left-[2%] popup-container z-[199] relative'>
                  <CompanyPopup closePopUp2={closePopUp2}/>
                </div>
              </div>
            </div>
          }

          <div className="mt-[30px] font-13">
            <label htmlFor="invite-members" className="block text-sm font-medium text-gray-700">
              Invite members
            </label>
            <div className="relative mt-[6px] flex items-center">
              <input
                type="text"
                name="invite-members"
                id="invite-members"
                className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm text-sm bg-[#F4F5F6] py-2 px-[14px]"
                placeholder="Email or select role and copy link"
              />
              <div className="absolute right-[90px] inset-y-0 flex items-center">
                <select
                  id="members-role"
                  name="members-role"
                  className="block w-[75%] py-2 mr-4 text-base focus:outline-none sm:text-sm bg-transparent paras"
                  defaultValue="Members"
                >
                  <option>Members</option>
                  <option>Admin</option>
                </select>

                <div className="flex bg-white basis-7 h-[26px] rounded-[5px] items-center justify-center relative tooltipButton">
                <span className="tooltip">คัดลอก</span>
                  <button>
                    <img src={copyBtn} />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-lg border border-transparent text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2 btn font-13 btn-primary-shadow h-[34px]"
                style={{padding:"4px 18px"}}
              >
                Invite
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="w-[48px] h-[48px] bg-[#0788FF] text-white flex items-center justify-center rounded-md text-[23px] font-semibold">{accountName[1].email[0]}</div>
                <div className="relative flex flex-col ml-[15px]">
                  <h1 className="font-inter text-[#1F272E] font-semibold">{accountName[1].name}</h1>
                  <p className="paras text-sm">{accountName[1].email}</p>
                </div>
              </div>

            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only"> Invite </Listbox.Label>
                    <div className="relative">
                      <div className="inline-flex rounded-md">
                      <div className="inline-flex rounded-md">
                        <div className="inline-flex items-center rounded-l-md py-2 pl-3 paras">
                          <p className="ml-2.5 text-sm font-medium">{selected.title}</p>
                        </div>
                        <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md p-2 text-sm font-medium paras">
                          <span className="sr-only">Invite</span>
                          <ChevronDownIcon className="h-5 w-5 paras" aria-hidden="true" />
                        </Listbox.Button>
                      </div>
                    </div>
                        <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options className="absolute right-0 z-10 mt-1 w-72 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {publishingOptions.map((option) => (
                            <Listbox.Option
                                key={option.title}
                                className={({ active }) =>
                                classNames(
                                    active ? 'text-white bg-[#0099FF]' : 'text-gray-900',
                                    'cursor-default select-none p-4 text-sm m-2 rounded-[3px]'
                                )
                                }
                                value={option}
                            >
                                {({ selected, active }) => (
                                <div className="flex flex-col">
                                  <div className="flex justify-between">
                                    <p className={selected ? 'font-semibold' : 'font-normal'}>{option.title}</p>
                                  </div>
                                  <p className={classNames(active ? 'text-white' : 'text-[#777777]', 'mt-2')}>
                                    {option.description}
                                  </p>
                                </div>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                    </>
                )}
                </Listbox>
              </div>
          </div>
        </div>

        <div className="border border-[#F2F2F2] p-[34px] rounded-b-[20px] border-t-0">
          <div className="flex">
            <h1 className="font-inter text-[#1F272E] font-medium">Team Member
              <ul className="inline-block list-disc ml-7">
                <li>3 Members</li>
              </ul>
            </h1>
          </div>

          <div className="mt-[30px] font-13">
            <div className="relative mt-[6px] flex items-center">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#545556"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </div>
              <input
                type="text"
                name="invite-members"
                id="invite-members"
                className="block w-full h-[34px] rounded-md border-gray-300 shadow-sm text-sm bg-[#F4F5F6] py-2 px-[14px] pl-9"
                placeholder="Search for members"
              />
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-lg border border-transparent text-sm font-medium shadow-sm focus:outline-none focus:ring-offset-2 font-13 h-[34px] bg-[#F3F3F3] text-gray-700"
                style={{padding:"4px 18px"}}
              >
                Filter
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-col items-center justify-between gap-y-[24px]">
                {users.map((user) => (
                <div className="flex justify-between w-full">
                    <div className="flex" key={user.id}>
                      <div className="w-[48px] h-[48px] bg-[#0788FF] text-white flex items-center justify-center rounded-md text-[23px] font-semibold">
                        {user.img === '' ? user.name[0] : <img src={user.img} alt={user.img}/>}
                      </div>
                      <div className="relative flex flex-col ml-[15px]">
                        <h1 className="font-inter text-[#1F272E] font-semibold">{user.name}</h1>
                        <p className="paras text-sm">{user.email}</p>
                      </div>
                    </div>

                    <Listbox value={selectedMember} onChange={setSelectedMember}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only"> Invite </Listbox.Label>
                    <div className="relative">
                      <div className="inline-flex rounded-md">
                      <div className="inline-flex rounded-md">
                        <div className="inline-flex items-center rounded-l-md py-2 pl-3 paras">
                          <p className="ml-2.5 text-sm font-medium">{selectedMember.title}</p>
                        </div>
                        <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md p-2 text-sm font-medium paras">
                          <span className="sr-only">Invite</span>
                          <ChevronDownIcon className="h-5 w-5 paras" aria-hidden="true" />
                        </Listbox.Button>
                      </div>
                    </div>
                        <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <Listbox.Options className="absolute right-0 z-10 mt-1 w-72 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {memberOptions.map((option) => (
                            <Listbox.Option
                                key={option.title}
                                className={({ active }) =>
                                classNames(
                                    active ? 'text-white bg-[#0099FF]' : 'text-gray-900',
                                    'cursor-default select-none p-4 text-sm m-2 rounded-[3px]'
                                )
                                }
                                value={option}
                            >
                                {({ selected, active }) => (
                                <div className="flex flex-col">
                                  <div className="flex justify-between">
                                    <p className={selected ? 'font-semibold' : 'font-normal'}>{option.title}</p>
                                  </div>
                                  <p className={classNames(active ? 'text-white' : 'text-[#777777]', 'mt-2')}>
                                    {option.description}
                                  </p>
                                </div>
                                )}
                            </Listbox.Option>
                            ))}
                        </Listbox.Options>
                        </Transition>
                    </div>
                    </>
                )}
                </Listbox>
                  </div>
                ))}

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamsPage;