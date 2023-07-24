import React from 'react'
import instagramShop from '../img/instagram-store.png'
import star from '../img/star.png'
import sellEverywhereMain from '../img/sell-everywhere-main.png'
import sellEverywhere1 from '../img/sell-everywhere-1.png'
import sellEverywhere2 from '../img/sell-everywhere-2.png'
import sellEverywhere3 from '../img/sell-everywhere-3.png'
function SingleAppPage() {
  return (
    <>
      <div className='sm:p-10 p-5 page-section'>

          <div className='section-container mx-auto'>
            <div className='flex justify-between items-center'>
              <div className='flex'>
                <div>
                  <img src={instagramShop} alt="" />
                  </div>
                <div className='ml-[26px]'>
                  <h3 className='font-calSans font-semibold text-xl text-[#1F272E]'>Instagram Store</h3>
                  <p className='font-inter font-normal text-[13px] text-[#687178] sm:w-[273px]'>Facilitate payments and pay out sellers or service providers.</p>
                  <div className='flex mt-2'>
                    <img src={star} alt="" />
                    <h4 className='font-inter font-semibold text-xs text-[#1A1B25] ml-2'>386K</h4>
                  </div>
                </div>
              </div>
              <div>
                <button className='py-[10px] px-[18px] bg-[#000000] rounded-lg font-inter font-semibold text-base text-[#FFFFFF]' style={{boxShadow: '0px 4px 8px 0px #00000033'}}>Install App</button>
              </div>
            </div>
          </div>

          <div className='section-container mx-auto flex mt-[45px]'>
            <div className='rounded-lg'>
              <img src={sellEverywhereMain} style={{boxShadow: '0px 4px 16px 0px #00000017'}} alt="" className='sm:w-[585px] sm:h-[375px] rounded-[20px]'/>
            </div>
            <div className='ml-4 space-y-[6px]'>
              <img src={sellEverywhere1} style={{boxShadow: '0px 4px 16px 0px #00000017'}} alt="" className='sm:w-[165px] sm:h-[121px] rounded-[20px]' />
              <img src={sellEverywhere2} style={{boxShadow: '0px 4px 16px 0px #00000017'}} alt="" className='sm:w-[165px] sm:h-[121px] rounded-[20px]' />
              <img src={sellEverywhere3} style={{boxShadow: '0px 4px 16px 0px #00000017'}} alt="" className='sm:w-[165px] sm:h-[121px] rounded-[20px]' />
            </div>
          </div>
          
      </div>
    </>
  )
}

export default SingleAppPage
