import React from 'react'

function popup() {
    return (
        <>
            <div>
                <h3 className='font-inter font-semibold text-[#333333] text-base'>เพิ่มสมาชิก</h3>
                <div className='mt-5'>
                    <p className='font-sukhumvit font-semibold text-[#333333] text-[13px]'> ส่งคำเชิญสมาชิกเข้าทีมผ่านอีเมลหรือลิงก์ </p>
                    <div>
                        <div className='bg-[#F4F5F6] rounded-md mt-2'>
                            <input type="text" placeholder='กรุณากรอกอีเมลของสมาชิกในทีม' className='py-1 px-4 m-1 bg-[#F4F5F6]' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default popup