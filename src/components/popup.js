import React from 'react'

function popup() {
    return (
        <>
            <div className='w-[511px] h-[363px] bg-white p-8'>
                <h3 className='font-inter font-semibold text-[#333333] text-base'>เพิ่มสมาชิก</h3>
                <div className='mt-5'>
                    <p className='font-sukhumvit font-semibold text-[#333333] text-[13px]'> ส่งคำเชิญสมาชิกเข้าทีมผ่านอีเมลหรือลิงก์ </p>
                    <div>
                        <div className='bg-[#F4F5F6] rounded-md'>
                            <input type="text" placeholder='กรุณากรอกอีเมลของสมาชิกในทีม' className='py-2 px-4' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default popup