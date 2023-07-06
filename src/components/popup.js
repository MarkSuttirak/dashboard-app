import React, { useState } from 'react';
import chevronDown from '../img/chevron-down.png'
import linkImg from '../img/link.png'
import frameT from '../img/frameT.png'
import dot from '../img/dot.png'
import searchIcon from '../img/searchIcon.png'
import johnWalker from '../img/johnWalker.png'
import chom from '../img/chom.png'
import lemonMemon from '../img/lemonMemon.png'
import closeIcon from '../img/closeIcon.png'
function Popup({ closePopUp }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const [selectedList, SetSelectedList] = useState('สมาชิก');

    const handleClick = (index, title) => {
        setSelectedItem(index);
        SetSelectedList(title)
        setIsOpen(!isOpen)
    };

    const listItems = [
        { title: 'สมาชิก', description: 'ไม่สามารถเข้าส่วนตั้งค่าระบบได้' },
        { title: 'ผู้ดูแล', description: 'สามารถทำทุกอย่างได้เหมือนคุณ' }
    ];

    const handleDropdownList = () => {
        setIsOpen(!isOpen)
    }

    const handleClosePopup = () => {
        closePopUp()
    }

    return (
        <>
            <div>
                <div className='py-6 px-5 border-b border-[#e6e2e2]'>
                <div className='flex justify-between'>
                        <h3 className='font-sukhumvit font-bold text-[#333333] text-lg'>เพิ่มสมาชิก</h3>
                        <button onClick={handleClosePopup}> <img src={closeIcon} alt="" /></button>
                    </div>
                </div>
                <div className='p-5 border-b border-[#e6e2e2]'>
                    
                    <div>
                        <p className='font-sukhumvit font-medium text-[#333333] text-[13px]'> ส่งคำเชิญสมาชิกเข้าทีมผ่านอีเมลหรือลิงก์ </p>
                        <div className='flex justify-between items-end'>
                            <div className='bg-[#F4F5F6] rounded-md mt-2 flex justify-between items-center px-1 h-[32px] w-[80%]'>
                                <input type="email" placeholder='กรุณากรอกอีเมลของสมาชิกในทีม' className='bg-[#F4F5F6] font-sukhumvit font-medium text-[12px] placeholder-gray-500 ml-4 focus:outline-none w-full' />
                                <div className='flex items-center w-[120px]'>
                                    <div>
                                        <div className='flex items-center cursor-pointer' onClick={handleDropdownList}>
                                            <button className='font-sukhumvit font-medium text-[12px] text-[#687178]'>{selectedList}</button>
                                            <img src={chevronDown} className='w-[7px] ml-2' alt="" />
                                        </div>
                                        {isOpen && (
                                            <div className='w-[160px] absolute right-[10%] bg-white border border-[#F2F2F2] rounded-md p-1 mt-4'>
                                                <ul className='space-y-1'>
                                                    {listItems.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            className={`hover:bg-[#0099FF] hover:cursor-pointer py-2 px-1 rounded-md list-class list-none ${selectedItem == index ? 'selected-li' : ''
                                                                }`}
                                                            onClick={() => handleClick(index, item.title)}
                                                        >
                                                            <h4 className='font-inter font-normal text-xs text-black'>
                                                                <span className="list-class">{item.title}</span>
                                                            </h4>
                                                            <p className='font-inter font-normal text-[10px] text-black'>{item.description}</p>
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        )}
                                    </div>
                                    <div className='bg-white w-[26px] h-[26px] rounded-[5px] flex justify-center items-center ml-3'>
                                        <img src={linkImg} className='w-[17px] h-[13px]' alt="" />
                                    </div>
                                </div>
                            </div>
                            <button className='sm:w-[75px] w-[100px] h-[32px] ml-4 bg-[#0099FF] cursor-default text-white rounded-md shadow-md font-sukhumvit font-bold text-[13px]'>ส่งคำเชิญ</button>
                        </div>
                    </div>
                    <div className='mt-6 flex items-center'>
                        <div className='w-[40px]'>
                            <img src={frameT} alt="" className='w-[40px] aspect-1 rounded-md' />
                        </div>
                        <div className='flex justify-between w-full ml-5'>
                            <div>
                                <h3 className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>กำลังรอการตอบรับ...</h3>
                                <p className='font-inter font-normal text-[12px] text-[#687178]'>thinkoutthebox@email.com</p>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <button className='font-sukhumvit font-medium text-[12px] text-[#687178]'>สมาชิก</button>
                                <img src={chevronDown} className='w-[6px] ml-2' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5'>
                    <div className='flex items-center'>
                        <p className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>สมาชิกในทีม</p>
                        <img src={dot} className='ml-2' alt="" />
                        <p className='font-sukhumvit font-medium text-[13px] text-[#1F272E] ml-2'>สมาชิก 10 คน</p>
                    </div>
                    <div className='flex mt-2 items-center justify-between'>
                        <div className='bg-[#F4F5F6] flex items-center rounded-md px-3 h-[32px] w-full'>
                            <img src={searchIcon} className='w-[14px] h-[14px]' alt="" />
                            <input type="text" placeholder='ค้นหาสมาชิก' className='bg-[#F4F5F6] font-sukhumvit font-medium text-[12px] placeholder-gray-500 ml-4 focus:outline-none' />
                        </div>
                        <button className='flex justify-between items-center bg-[#F3F3F3] w-[90px] h-[32px] ml-3 rounded-md p-2'>
                            <span className='font-sukhumvit font-bold text-[13px] text-[#333333]'>ตัวกรอง</span>
                            <img src={chevronDown} className='w-[8px]' alt="" />
                        </button>
                    </div>
                    <div>
                        <div className='mt-7 flex items-center'>
                            <div className='w-[40px]'>
                                <img src={johnWalker} alt="" className='w-[40px] aspect-1 rounded-md' />
                            </div>
                            <div className='flex justify-between w-full ml-5'>
                                <div>
                                    <h3 className='font-inter font-medium text-[13px] text-[#1F272E]'>John walker</h3>
                                    <p className='font-inter font-normal text-[12px] text-[#687178]'>example@mail.com</p>
                                </div>
                                <div className='flex items-center cursor-pointer'>
                                    <button className='font-sukhumvit font-medium text-[12px] text-[#687178]'>สมาชิก</button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 flex items-center'>
                            <div className='w-[40px]'>
                                <img src={chom} alt="" className='w-[40px] aspect-1 rounded-md' />
                            </div>
                            <div className='flex justify-between w-full ml-5'>
                                <div>
                                    <h3 className='font-inter font-medium text-[13px] text-[#1F272E]'>Chom Chom</h3>
                                    <p className='font-inter font-normal text-[12px] text-[#687178]'>example@mail.com</p>
                                </div>
                                <div className='flex items-center cursor-pointer'>
                                    <button className='font-sukhumvit font-medium text-[12px] text-[#687178]'>สมาชิก</button>
                                    <img src={chevronDown} className='w-[6px] h-[6px] ml-2' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 flex items-center'>
                            <div className='w-[40px]'>
                                <img src={lemonMemon} alt="" className='w-[40px] aspect-1 rounded-md' />
                            </div>
                            <div className='flex justify-between w-full ml-5'>
                                <div>
                                    <h3 className='font-inter font-medium text-[13px] text-[#1F272E]'>Lemon Memon </h3>
                                    <p className='font-inter font-normal text-[12px] text-[#687178]'>example@mail.com</p>
                                </div>
                                <div className='flex items-center cursor-pointer'>
                                    <button className='font-sukhumvit font-medium text-[12px] text-[#687178]'>สมาชิก</button>
                                    <img src={chevronDown} className='w-[6px] h-[6px] ml-2' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 flex items-center'>
                            <div className='w-[40px]'>
                                <img src={lemonMemon} alt="" className='w-[40px] aspect-1 rounded-md' />
                            </div>
                            <div className='flex justify-between w-full ml-5'>
                                <div>
                                    <h3 className='font-inter font-medium text-[13px] text-[#1F272E]'>Lemon Memon </h3>
                                    <p className='font-inter font-normal text-[12px] text-[#687178]'>example@mail.com</p>
                                </div>
                                <div className='flex items-center cursor-pointer'>
                                    <button className='font-sukhumvit font-medium text-[12px] text-[#687178]'>สมาชิก</button>
                                    <img src={chevronDown} className='w-[6px] h-[6px] ml-2' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup
