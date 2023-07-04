import React, { useState } from 'react';
import chevronDown from '../img/chevron-down.png'
import linkImg from '../img/link.png'
function Popup() {

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

    const handleDropdownList = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div>
                <h3 className='font-inter font-semibold text-[#333333] text-base'>เพิ่มสมาชิก</h3>
                <div className='mt-5'>
                    <p className='font-sukhumvit font-semibold text-[#333333] text-[13px]'> ส่งคำเชิญสมาชิกเข้าทีมผ่านอีเมลหรือลิงก์ </p>
                    <div className='flex justify-between items-end'>
                        <div className='bg-[#F4F5F6] rounded-md mt-2 flex justify-between items-center px-1 h-[32px] w-full'>
                            <input type="text" placeholder='กรุณากรอกอีเมลของสมาชิกในทีม' className='py-1 px-2 m-1 focus:outline-none bg-[#F4F5F6]' />
                            <div className='flex'>
                                <div>
                                    <div className='flex items-center cursor-pointer' onClick={handleDropdownList}>
                                        <button>{ selectedList }</button>
                                        <img src={chevronDown} className='w-[7px] h-[7px] ml-2' alt="" />
                                    </div>
                                    { isOpen && (
                                        <div className='w-[160px] absolute right-[10%] border border-[#F2F2F2] rounded-md p-1 mt-4'>
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
                                    ) }
                                </div>
                                <div className='bg-white w-[26px] h-[26px] rounded-[5px] flex justify-center items-center ml-3'>
                                    <img src={linkImg} className='w-[17px] h-[13px]' alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='w-[75px] h-[32px] ml-4 bg-[#0099FF] text-white rounded font-sukhumvit font-bold text-[13px]'>ส่งคำเชิญ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup