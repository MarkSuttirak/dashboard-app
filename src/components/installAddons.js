import React, { useState } from 'react'
import installAddonsIcons from '../img/install-addons-icons.png'
import installAddonsP from '../img/install-addons-p.png'
import instagramStore from '../img/business-intelligent.svg'
function InstallAddons(props) {

    const [isClickedInstall, setIsClickedInstall] = useState(false);
    const changeInstallClick = () => {
        setIsClickedInstall(true)
        console.log(isClickedInstall)
    }

    return (
        <>
            <div className='p-[60px] pb-10'>
                <h2 className={`${!isClickedInstall ? '' : 'thePara'} main-title mx-auto text-center`}>
                    Install addons app to your workspace</h2>

                <h2 className={`${!isClickedInstall ? 'mt-[-72px]' : 'thePara1 '} mt-[-72px] opacity-0 main-title mx-auto text-center`}>
                    Application is being installed to your site.</h2>
            </div>

            <div className={`mx-auto sm:w-[243px] flex ${!isClickedInstall ? 'justify-between' : 'justify-between'}  items-center`}>
                <img className={`${!isClickedInstall ? 'ml-0' : 'buttonClicked1'}`} src={instagramStore} alt="" />


                <img src={installAddonsIcons} className={` ${!isClickedInstall ? '' : 'opacity-[0]'} `} alt="" />


                <img className={`${!isClickedInstall ? 'ml-0' : 'buttonClicked'}`} src={installAddonsP} alt="" />
            </div>

            <div className='mx-auto mt-[45px] sm:w-[360px] text-center'>
                <h3 className='subheading'>Allow instagram app to</h3>
                <p className='tab-desc'>Selldone allows you to manage multiple stores per account and sell various product types. Connect to Selldone by clicking the login or sign-up.</p>
            </div>

            {!isClickedInstall ?
                <div className='sm:w-[220px] mx-auto mt-[50px] flex justify-evenly'>
                    <button onClick={changeInstallClick} className='black-btn'>Install apps</button>
                    <button onClick={props.closePopUp} className='no-bg-btn'>Cancel</button>
                </div> : <div className='sm:w-[220px] mx-auto mt-[50px] text-center'> <button onClick={props.closePopUp} className='black-btn'>Back to dashboard</button></div>}


            {!isClickedInstall ?
                <div className='sm:w-[227px] mx-auto mt-[70px] text-center'>
                    <p className='text-small'>By connecting this application to your account, you accept its <span className='text-[#0788F5]'> Privacy Policy </span> and <span className='text-[#0788F5]'>Terms of Service.</span></p>
                </div> : null}

        </>
    )
}

export default InstallAddons
