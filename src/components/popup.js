import React from 'react'
import chevronDown from '../img/chevron-down.png'
import linkImg from '../img/link.png'
function popup() {
    return (
        <>
            <div>
                <h3 className='font-inter font-semibold text-[#333333] text-base'>เพิ่มสมาชิก</h3>
                <div className='mt-5'>
                    <p className='font-sukhumvit font-semibold text-[#333333] text-[13px]'> ส่งคำเชิญสมาชิกเข้าทีมผ่านอีเมลหรือลิงก์ </p>
                    <div className='flex justify-between items-end'>
                        <div className='bg-[#F4F5F6] rounded-md mt-2 flex justify-between items-center px-1 h-[32px] w-full'>
                            <input type="text" placeholder='กรุณากรอกอีเมลของสมาชิกในทีม' className='py-1 px-2 m-1 bg-[#F4F5F6]' />
                            <div className='flex'>
                            <div className='flex items-center'>
                                <button>สมาชิก</button>
                                <img src={chevronDown} className='w-[7px] h-[7px] ml-2' alt="" />
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

export default popup