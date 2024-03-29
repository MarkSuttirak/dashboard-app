import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "react-oauth2-code-pkce";
import { Icons } from "src/components/ui/icons";
import loginImg from "src/img/login-img.png"
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t, i18n } = useTranslation();

  const lngs = {
    en: { nativeName: "EN" },
    th: { nativeName: "TH" }
  }

  const { login: lineLogin } = useContext(AuthContext);
  const location = useLocation();

  const [switchSec, setSwitchSec] = useState('');

  const [loginSection, setLoginSection] = useState(true)

  useEffect(() => {
    if (location.pathname === '/login') {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [])

  const switchSection = (isLogin) => {
    setSwitchSec('up-out');
    setTimeout(() => {
      setSwitchSec('up-in');
      setLoginSection(isLogin);
    }, 500);
  }

  const RecomService = ({icon, text}) => {
    return (
      <div className="rounded-full py-1.5 px-2 border border-white/50 bg-white/20 text-[13px] inline-flex items-center gap-x-2">
        {icon}
        {text}
      </div>
    )
  }

  const recommendedServices = [
    { text:"LINE CRM", icon:<Icons.lineOALogin /> },
    { text:"ระบบสร้างเว็บไซต์", icon:<Icons.builderOnLogin />},
    { text:"ร้านค้าออนไลน์", icon:<Icons.onlineStoreOnLogin />},
    { text:"ระบบสะสมแต้ม", icon:<Icons.pointAndRewardOnLogin />},
    { text:"เชื่อมต่อ Marketplace", icon:<Icons.marketplaceOnLogin />}
  ]

  return (
    <div className="flex min-h-screen z-[999] relative bg-white">
      <div className="flex w-full md:w-[40%] justify-center">
        <div className="inline-flex gap-x-2 absolute top-4 left-4">
          {Object.keys(lngs).map((lng) => (
            <button
              type="button"
              key={lng}
              onClick={() => { i18n.changeLanguage(lng); localStorage.setItem('lang', lng) }}
              disabled={i18n.resolvedLanguage === lng}
              className={`px-2 py-1 text-sm hover:bg-darkergray hover:text-white cursor-pointer rounded-md ${i18n.resolvedLanguage === lng ? 'bg-darkergray text-white' : ''}`}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        {loginSection ? (
          <div className="max-w-sm w-96 flex flex-col justify-center mx-[30px] register-screen">
            <div className={`register-sec ${switchSec}`}>
              <div className="flex gap-x-2 mb-3 items-center">
                <Icons.zaviagoCom />
              </div>
              <h2 className="main-heading">{t('signin_title')}</h2>
              <p className="main-desc font-medium">
                {t('register_for_free')}
              </p>

              <p className="main-desc mt-9">{t('create_text')}</p>
            </div>

            <div className={`login-with-sec ${switchSec}`}>
              <div className="mt-8">
                <div className="mt-1 gap-3">
                  <div>
                    <button
                      onClick={() => lineLogin(JSON.stringify(location.state))}
                      className="login-line-btn"
                    >
                      <span className="sr-only">Login with Line</span>
                      {t('login_with')}
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0.945801C19.3181 0.945801 24.8451 5.37164 24.8451 10.8312C24.8451 12.7382 24.1703 14.5187 23.0021 16.0288C22.9443 16.1147 22.8687 16.2097 22.7735 16.3146L22.7663 16.3225C22.3673 16.7999 21.9179 17.2481 21.4238 17.6619C18.0099 20.8173 12.3907 24.5741 11.6491 23.9945C11.0044 23.4907 12.711 21.0265 10.7421 20.6164C10.6047 20.6006 10.4677 20.5837 10.3319 20.5644L10.3293 20.5643V20.5641C4.54649 19.7426 0.155029 15.6976 0.155029 10.8312C0.154851 5.37164 5.68201 0.945801 12.5 0.945801Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.33768 13.9838H7.82749C8.18165 13.9838 8.47132 13.694 8.47132 13.3399V13.2862C8.47132 12.932 8.18165 12.6423 7.82749 12.6423H6.03522V8.56461C6.03522 8.21045 5.74555 7.92078 5.39139 7.92078H5.33768C4.98352 7.92078 4.69385 8.21045 4.69385 8.56461V13.3398C4.69385 13.694 4.98352 13.9838 5.33768 13.9838ZM20.7658 10.9906V10.9369C20.7658 10.5828 20.4761 10.2931 20.1219 10.2931H18.3297V9.27364H20.1219C20.4761 9.27364 20.7658 8.98397 20.7658 8.62981V8.5761C20.7658 8.22194 20.4761 7.93227 20.1219 7.93227H17.6321C17.2779 7.93227 16.9883 8.22194 16.9883 8.5761V13.3513C16.9883 13.7055 17.2779 13.9952 17.6321 13.9952H20.1219C20.4761 13.9952 20.7658 13.7055 20.7658 13.3513V13.2976C20.7658 12.9434 20.4761 12.6537 20.1219 12.6537H18.3297V11.6343H20.1219C20.4761 11.6345 20.7658 11.3447 20.7658 10.9906ZM15.9776 13.7919L15.9778 13.7916C16.0969 13.6715 16.1638 13.5092 16.164 13.34V8.56479C16.164 8.21063 15.8743 7.92096 15.52 7.92096H15.4663C15.1122 7.92096 14.8225 8.21063 14.8225 8.56479V11.3679L12.4953 8.24652C12.3842 8.05243 12.1749 7.92096 11.9363 7.92096H11.8826C11.5284 7.92096 11.2387 8.21063 11.2387 8.56479V13.34C11.2387 13.6941 11.5284 13.9839 11.8826 13.9839H11.9363C12.2905 13.9839 12.5801 13.6941 12.5801 13.34V10.4844L14.924 13.6859C14.9385 13.7083 14.9542 13.7299 14.9713 13.7503L14.9713 13.7505C15.0357 13.8383 15.1238 13.8986 15.222 13.9354C15.2975 13.9665 15.3799 13.9838 15.4662 13.9838H15.52C15.6249 13.9839 15.7282 13.958 15.8208 13.9086C15.8852 13.878 15.9394 13.8384 15.9776 13.7919ZM9.63481 13.9838H9.68852C10.0427 13.9838 10.3323 13.694 10.3323 13.3399V8.5647C10.3323 8.21054 10.0427 7.92087 9.68852 7.92087H9.63481C9.28065 7.92087 8.99089 8.21054 8.99089 8.5647V13.3399C8.99089 13.694 9.28065 13.9838 9.63481 13.9838Z" fill="#01CD4D" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 tab-desc">{t('or')}</span>
                </div>
              </div>

              <div className="relative mt-6 text-center text-sm">
                {t('dont_have_account')} <button onClick={() => switchSection(false)} className="text-[#888888] underline">{t('signup')}</button>

                <p className="main-desc mt-[200px]">{t('need_help')} • <a href="https://page.line.me/zaviago" className="text-[#0066CC]">{t("contact_us")}</a></p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-sm w-96 flex flex-col justify-center mx-[30px] register-screen">
            <div className={`register-sec ${switchSec}`}>
              <div className="flex gap-x-2 mb-3 items-center">
                <Icons.zaviagoCom />
              </div>
              <h2 className="main-heading">Create new account</h2>
              <p className="main-desc font-medium">
                {t('register_for_free')}
              </p>

              <p className="main-desc mt-9">{t('create_text')}</p>
            </div>

            <div className={`login-with-sec ${switchSec}`}>
              <div className="mt-8">
                <div className="mt-1 gap-3">
                  <div>
                    <button
                      onClick={lineLogin}
                      className="login-line-btn"
                    >
                      {t('signup_with')}
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0.945801C19.3181 0.945801 24.8451 5.37164 24.8451 10.8312C24.8451 12.7382 24.1703 14.5187 23.0021 16.0288C22.9443 16.1147 22.8687 16.2097 22.7735 16.3146L22.7663 16.3225C22.3673 16.7999 21.9179 17.2481 21.4238 17.6619C18.0099 20.8173 12.3907 24.5741 11.6491 23.9945C11.0044 23.4907 12.711 21.0265 10.7421 20.6164C10.6047 20.6006 10.4677 20.5837 10.3319 20.5644L10.3293 20.5643V20.5641C4.54649 19.7426 0.155029 15.6976 0.155029 10.8312C0.154851 5.37164 5.68201 0.945801 12.5 0.945801Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.33768 13.9838H7.82749C8.18165 13.9838 8.47132 13.694 8.47132 13.3399V13.2862C8.47132 12.932 8.18165 12.6423 7.82749 12.6423H6.03522V8.56461C6.03522 8.21045 5.74555 7.92078 5.39139 7.92078H5.33768C4.98352 7.92078 4.69385 8.21045 4.69385 8.56461V13.3398C4.69385 13.694 4.98352 13.9838 5.33768 13.9838ZM20.7658 10.9906V10.9369C20.7658 10.5828 20.4761 10.2931 20.1219 10.2931H18.3297V9.27364H20.1219C20.4761 9.27364 20.7658 8.98397 20.7658 8.62981V8.5761C20.7658 8.22194 20.4761 7.93227 20.1219 7.93227H17.6321C17.2779 7.93227 16.9883 8.22194 16.9883 8.5761V13.3513C16.9883 13.7055 17.2779 13.9952 17.6321 13.9952H20.1219C20.4761 13.9952 20.7658 13.7055 20.7658 13.3513V13.2976C20.7658 12.9434 20.4761 12.6537 20.1219 12.6537H18.3297V11.6343H20.1219C20.4761 11.6345 20.7658 11.3447 20.7658 10.9906ZM15.9776 13.7919L15.9778 13.7916C16.0969 13.6715 16.1638 13.5092 16.164 13.34V8.56479C16.164 8.21063 15.8743 7.92096 15.52 7.92096H15.4663C15.1122 7.92096 14.8225 8.21063 14.8225 8.56479V11.3679L12.4953 8.24652C12.3842 8.05243 12.1749 7.92096 11.9363 7.92096H11.8826C11.5284 7.92096 11.2387 8.21063 11.2387 8.56479V13.34C11.2387 13.6941 11.5284 13.9839 11.8826 13.9839H11.9363C12.2905 13.9839 12.5801 13.6941 12.5801 13.34V10.4844L14.924 13.6859C14.9385 13.7083 14.9542 13.7299 14.9713 13.7503L14.9713 13.7505C15.0357 13.8383 15.1238 13.8986 15.222 13.9354C15.2975 13.9665 15.3799 13.9838 15.4662 13.9838H15.52C15.6249 13.9839 15.7282 13.958 15.8208 13.9086C15.8852 13.878 15.9394 13.8384 15.9776 13.7919ZM9.63481 13.9838H9.68852C10.0427 13.9838 10.3323 13.694 10.3323 13.3399V8.5647C10.3323 8.21054 10.0427 7.92087 9.68852 7.92087H9.63481C9.28065 7.92087 8.99089 8.21054 8.99089 8.5647V13.3399C8.99089 13.694 9.28065 13.9838 9.63481 13.9838Z" fill="#01CD4D" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 tab-desc">{t('or')}</span>
                </div>
              </div>

              <div className="relative mt-6 text-center text-sm">
                {t("already_have_account")} <button onClick={() => switchSection(true)} className="text-[#888888] underline">{t("signin")}</button>

                <p className="main-desc mt-[200px]">{t('need_help')} • <a href="https://page.line.me/zaviago" className="text-[#0066CC]">{t("contact_us")}</a></p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative hidden md:w-[60%] m-[30px] md:block">
        <img
          className="absolute inset-0 h-full w-full object-cover rounded-[30px]"
          src={loginImg}
          alt="login-image"
        />

        <div className="text-white absolute bottom-0 p-10 fade-in grid grid-cols-1 xl:grid-cols-2 gap-y-10 justify-between items-end">

          <div className="flex flex-col gap-y-3">
            <h2 className="text-2xl xl:text-3xl font-semibold">"<br/>เพราะเราต้องการให้ทุกคนเข้าถึงเทคโนโลยีได้ง่าย โดยที่ไม่จำเป็นต้องเสียเงินมากมายมหาศาลเพื่อเข้าถึงมัน<br/>"</h2>
            <div>
              <p className="text-base">Vision and Mission of Zaviago</p>
              <p className="text-sm">John Persson, CEO and Founder of Zaviago</p>
            </div>
          </div>

          <div className="flex flex-col xl:items-end gap-y-3">
            <h3 className="text-base xl:text-right">Recommended services</h3>
            <div className="flex xl:justify-end gap-x-1 gap-y-1.5 flex-wrap">
              {recommendedServices.map(service => (
                <RecomService icon={service.icon} text={service.text}/>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}