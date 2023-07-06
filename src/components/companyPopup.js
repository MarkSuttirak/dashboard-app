import React, { useState } from 'react';
import chevronDown from '../img/chevron-down.png'
import closeIcon from '../img/closeIcon.png'

function CompanyPopup({ closePopUp2 }) {

const [input, setInput] = useState('')

    const handleClosePopup = () => {
        closePopUp2()
    }

    const handleInputChange =(event)=>{
        setInput(event.target.value)
    }

    const handleFormSubmit = ()=>{

    }

    return (
        <>
            <div className='p-6'>
                <div className=''>
                    <div className='flex justify-between'>
                        <h3 className='font-sukhumvit font-bold text-[#333333] text-lg'>แก้ไขชื่อทีม</h3>
                        <button onClick={handleClosePopup}> <img src={closeIcon} alt="" /></button>
                    </div>
                </div>
                <div className='mt-4'>
                        <p className='font-sukhumvit font-medium text-[#333333] text-[13px]'> กรอกชื่อที่คุณต้องการแก้ไข </p>
                        <div className=''>
                            <div className={`bg-[#F4F5F6] rounded-md mt-2 pl-4 px-1 h-[32px]`}>
                                <div>
                                    <input type="text" value={input} placeholder='Zaviago' onChange={handleInputChange} className={`bg-[#F4F5F6] font-sukhumvit font-medium text-[12px] placeholder-gray-500 focus:outline-none h-[32px] w-full`} />
                                </div>
                            </div>
                            <div className='mt-5 text-right'>
                            <button onClick={handleClosePopup} className='sm:w-[75px] w-[67px] h-[32px] cursor-pointer ml-4 bg-[#F3F3F3] text-[#333333] rounded-md shadow-md font-sukhumvit font-bold text-[13px]'>ยกเลิก</button>
                            <button onClick={handleClosePopup} className='sm:w-[75px] w-[67px] h-[32px] cursor-pointer ml-4 bg-[#0099FF] text-white rounded-md shadow-md font-sukhumvit font-bold text-[13px]'>บันทึก</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default CompanyPopup
