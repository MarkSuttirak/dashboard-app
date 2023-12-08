import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import ZaviagoIcon from "../icon-menus/ZaviagoIcon";
import { useState, useEffect } from "react";
import { Icons } from "../ui/icons";
import BundleSelect from "./bundleSelect";
import { Separator } from "../ui/separator";
import SelectInput from "./inputSelect";
import { Switch } from "src/components/ui/switch"
import PricingResult from "./pricingResult";
import ProductSelection from "./productSelection";
import { MarketCheckbox, addonLists, bundleSelectList, marketLists, addonPrices } from "./pricingLists";
import PricingEstimate from "./pricingEstimate";
import PackageSection from "./packageSection";

export default function Packages(){
  const customerContactsList = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
  const paidUsersList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25, 50];
  const smsOTPList = [5000, 18000, 60000]
  const customFieldList = [10,25,50]

  const [totalPriceMonthly, setTotalPriceMonthly] = useState(750);

  const [totalFee, setTotalFee] = useState(0)

  const [isStarter, setIsStarter] = useState(true)
  const [isAnnual, setIsAnnual] = useState(false)
  const [needSMSOTP, setNeedSMSOTP] = useState(false)
  const [needSocialMedia, setNeedSocialMedia] = useState(false)
  const [packageTypeCRM, setPackageTypeCRM] = useState('Starter')
  const [packageTypeMarketConnect, setPackageTypeMarketConnect] = useState('Starter')
  const [packageTypeLineCRM, setPackageTypeLineCRM] = useState()
  const [packageTypeRewardful, setPackageTypeRewardful] = useState()
  const [packageTypeOnlineStore, setPackageTypeOnlineStore] = useState('Starter')
  const [addons, setAddons] = useState()
  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const [customerContact, setCustomerContact] = useState(customerContactsList[0]);
  const [paidUsers, setPaidUsers] = useState(paidUsersList[0]);
  const [smsOTP, setSMSOTP] = useState(smsOTPList[0])
  const [customField, setCustomField] = useState(customFieldList[0])

  const packageDesc = {
    customerContact:`Includes ${customerContact.toLocaleString()} customer contacts`,
    paidUsers:`Includes ${paidUsers} paid users`,
    customField:`Includes ${customField} custom fields ${needSMSOTP ? `with ${smsOTP.toLocaleString()} SMS OTP, valid within ${smsOTP === 5000 ? '12 months' : '24 months'}` : ''}`,
    rewardfulDesc:packageTypeRewardful === 'Professional' ? '5 conditions and 5 tier levels included' : packageTypeRewardful === 'Enterprise' ? '10 conditions and 5 tier levels included' : '1 condition and 3 tier levels included',
    onlineStore:packageTypeOnlineStore === 'Professional' ? '10,000 products library' : packageTypeOnlineStore === 'Enterprise' ? 'Unlimited products library' : '5,000 products library'
  }

  const customerContactPrice = packageTypeCRM ? packageTypeCRM === 'Professional' ? customerContactsList.filter(value => value >= 2000).indexOf(customerContact) * 1500 : packageTypeCRM === 'Enterprise' ? customerContactsList.filter(value => value >= 5000).indexOf(customerContact) * 1500 : customerContactsList.indexOf(customerContact) * 1500 : 0;
  const paidUserPrice = packageTypeMarketConnect ? packageTypeMarketConnect === 'Professional' ? paidUsersList.filter(value => value >= 5).indexOf(paidUsers) * 900 : packageTypeMarketConnect === 'Enterprise' ? paidUsersList.filter(value => value >= 10).indexOf(paidUsers) * 900 : paidUsersList.indexOf(paidUsers) * 900 : 0;
  const smsOTPPrice = packageTypeLineCRM && needSMSOTP && smsOTP ? { 5000: 3000, 18000: 10000, 60000: 30000 }[smsOTP] || 3000 : 0;
  const customFieldPrice = packageTypeLineCRM && customField ? packageTypeLineCRM === 'Professional' ? { 25: 0, 50: 400 }[customField] : packageTypeLineCRM === 'Enterprise' ? { 50: 0 }[customField] : { 10: 0, 25: 250, 50: 400 }[customField] || 0 : 0;
  const addonPrice = addons ? addonPrices[addons] || 0 : 0;

  const estimatedContactPrice = packageTypeCRM === 'Professional' ? 90000 : packageTypeCRM === 'Enterprise' ? 165000 : 0
  const estimatedMarketConnectPrice = packageTypeMarketConnect === 'Professional' ? 45000 : packageTypeMarketConnect === 'Enterprise' ? 125000 : 0

  const calculateTotalPrice = () => {
    const prices = {
      workspace: isStarter ? 750 : 0,
      crm: { Starter: 750, Professional: 28000, Enterprise: 89000 },
      marketConnect: { Starter: 750, Professional: 15900, Enterprise: 39000 },
      lineCRM: { Starter: 2850, Professional: 3100, Enterprise: 3500 },
      rewardful: { Starter: 1500, Professional: 3500, Enterprise: 6500 },
      onlineStore: { Starter: 750, Professional: 14400, Enterprise: 42000 },
      lineCRMAndRewardful: (
        packageTypeLineCRM === 'Starter' && packageTypeRewardful === 'Starter' ? 4350 :
        packageTypeLineCRM === 'Starter' && packageTypeRewardful === 'Professional' ? 6350 :
        packageTypeLineCRM === 'Starter' && packageTypeRewardful === 'Enterprise' ? 9350 :
        packageTypeLineCRM === 'Professional' && packageTypeRewardful === 'Starter' ? 4600 :
        packageTypeLineCRM === 'Professional' && packageTypeRewardful === 'Professional' ? 6600 :
        packageTypeLineCRM === 'Professional' && packageTypeRewardful === 'Enterprise' ? 9600 :
        packageTypeLineCRM === 'Enterprise' && packageTypeRewardful === 'Starter' ? 5000 :
        packageTypeLineCRM === 'Enterprise' && packageTypeRewardful === 'Professional' ? 7000 :
        packageTypeLineCRM === 'Enterprise' && packageTypeRewardful === 'Enterprise' ? 10000 : 0
      ),
      crmAndMarketConnectAndOnlineStore: (packageTypeCRM === 'Starter' && packageTypeMarketConnect === 'Starter' && packageTypeOnlineStore === 'Starter' && 750)
    };

    setTotalPriceMonthly(
      prices.workspace +
      (packageTypeLineCRM && packageTypeRewardful ? prices.lineCRMAndRewardful : 
      (packageTypeLineCRM ? prices.lineCRM[packageTypeLineCRM] || 0 : 0) +
      (packageTypeRewardful ? prices.rewardful[packageTypeRewardful] || 0 : 0)) +

      (packageTypeCRM === 'Starter' && packageTypeMarketConnect === 'Starter' && packageTypeOnlineStore === 'Starter' ? prices.crmAndMarketConnectAndOnlineStore :
      (packageTypeCRM ? prices.crm[packageTypeCRM] || 0 : 0) +
      (packageTypeMarketConnect ? prices.marketConnect[packageTypeMarketConnect] || 0 : 0) +
      (packageTypeOnlineStore ? prices.onlineStore[packageTypeOnlineStore] || 0 : 0)) + 

      customerContactPrice + paidUserPrice + smsOTPPrice + customFieldPrice + addonPrice
    )
    setEstimatedPrice(isAnnual ? ((totalPriceMonthly * 12 * 0.9) + estimatedContactPrice + estimatedMarketConnectPrice) : (totalPriceMonthly + estimatedContactPrice + estimatedMarketConnectPrice))
  };

  const handlePackageType = (index, packageType, setPackageType) => {
    packageType === index ? setPackageType(null) : setPackageType(index)
    setIsStarter(true)
  };

  const handlePackage = {
    customerContact: (index) => setCustomerContact(index),
    paidUser: (index) => setPaidUsers(index),
    customField: (index) => setCustomField(index),
    smsOTP: (index) => {needSMSOTP ? setSMSOTP(index) : setSMSOTP(0)}
  };

  const crmFilter = bundleSelectList.crm.filter(item => item.title === packageTypeCRM)
  const marketConnectFilter = bundleSelectList.marketConnect.filter(item => item.title === packageTypeMarketConnect)
  const lineCRMFilter = bundleSelectList.lineCRM.filter(item => item.title === packageTypeLineCRM)
  const rewardfulFilter = bundleSelectList.rewardful.filter(item => item.title === packageTypeRewardful)
  const onlineStoreFilter = bundleSelectList.onlineStore.filter(item => item.title === packageTypeOnlineStore)
  const addonFilter = addonLists.filter(addon => addon.title === addons)[0]

  const packageInfo = [
    {condition: packageTypeCRM, filterInfo: crmFilter, titlePrefix: 'CRM', onClose: () => setPackageTypeCRM(), desc:packageDesc.customerContact},
    {condition: packageTypeMarketConnect, filterInfo: marketConnectFilter, titlePrefix: 'Market Connect', onClose: () => setPackageTypeMarketConnect(), desc:packageDesc.paidUsers},
    {condition: packageTypeLineCRM, filterInfo: lineCRMFilter, titlePrefix: 'Line CRM', onClose: () => setPackageTypeLineCRM(), desc:packageDesc.customField},
    {condition: packageTypeRewardful, filterInfo: rewardfulFilter, titlePrefix: 'Rewardful', onClose: () => setPackageTypeRewardful(), desc:packageDesc.rewardfulDesc},
    {condition: packageTypeOnlineStore, filterInfo: onlineStoreFilter, titlePrefix: 'Online Store', onClose: () => setPackageTypeOnlineStore(), desc:packageDesc.onlineStore},
  ];

  const recurringFee = [
    {title:isStarter && 'Zaviago Workspace', price:isStarter && 750},
    {title:crmFilter.length > 0 && 'CRM ' + crmFilter[0].title, price:crmFilter.length > 0 && crmFilter[0].price + customerContactPrice, desc:packageDesc.customerContact},
    {title:marketConnectFilter.length > 0 && 'Market Connect ' + marketConnectFilter[0].title, price:marketConnectFilter.length > 0 && marketConnectFilter[0].price + paidUserPrice, desc:packageDesc.paidUsers},
    {title:lineCRMFilter.length > 0 && 'Line CRM ' + lineCRMFilter[0].title, price:lineCRMFilter.length > 0 && lineCRMFilter[0].price + customFieldPrice + smsOTPPrice, desc:packageDesc.customField},
    {title:rewardfulFilter.length > 0 && 'Rewardful ' + rewardfulFilter[0].title, price:rewardfulFilter.length > 0 && rewardfulFilter[0].price, desc:packageDesc.rewardfulDesc},
    {title:onlineStoreFilter.length > 0 && 'Online Store ' + onlineStoreFilter[0].title, price:onlineStoreFilter.length > 0 && onlineStoreFilter[0].price, desc:packageDesc.onlineStore},
    {title:addonFilter && addons + ' Addon', price:addonPrices[addons]}
  ]

  const oneTimeFee = [
    {
      title:packageTypeCRM === 'Professional' ? 'CRM Professional' : packageTypeCRM === 'Enterprise' ? 'CRM Enterprise' : null, 
      price:packageTypeCRM === 'Professional' ? 90000 : packageTypeCRM === 'Enterprise' ? 165000 : 0
    },
    {
      title:packageTypeMarketConnect === 'Professional' ? 'Market Connect Professional' : packageTypeMarketConnect === 'Enterprise' ? 'Market Connect Enterprise' : null,
      price:packageTypeMarketConnect === 'Professional' ? 45000 : packageTypeMarketConnect === 'Enterprise' ? 125000 : 0
    }
  ]

  const calculateTotalFee = () => {
    let sum = 0;
    recurringFee.forEach(item => sum += item.price)
    setTotalFee(sum)
  }

  const handleCheckChannel = () => {
    setNeedSocialMedia(!needSocialMedia);
    setPackageTypeMarketConnect('Professional')
  }

  useEffect(() => {
    if (packageTypeCRM !== null && packageTypeMarketConnect !== null && packageTypeLineCRM !== null){
      packageTypeCRM === 'Professional' ? setCustomerContact(2000) : packageTypeCRM === 'Enterprise' ? setCustomerContact(5000) : setCustomerContact(1000)
      packageTypeMarketConnect === 'Professional' ? setPaidUsers(5) : packageTypeMarketConnect === 'Enterprise' ? setPaidUsers(10) : setPaidUsers(2)
      packageTypeLineCRM === 'Professional' ? setCustomField(25) : packageTypeLineCRM === 'Enterprise' ? setCustomField(50) : setCustomField(10)
    }
    packageTypeMarketConnect === 'Starter' && setNeedSocialMedia(false)
  }, [packageTypeCRM, packageTypeMarketConnect, packageTypeLineCRM])

  useEffect(() => {
    calculateTotalFee();
    calculateTotalPrice();
  }, [isAnnual, isStarter, packageTypeCRM, packageTypeMarketConnect, packageTypeLineCRM, packageTypeRewardful, packageTypeOnlineStore, smsOTP, customerContact, paidUsers, customField, needSMSOTP, addons, estimatedPrice, totalPriceMonthly, totalFee]);

  return (
    <div className="flex flex-col gap-4 lg:flex-row w-full">
      <main className="flex flex-col gap-y-4 w-full lg:w-[60%]">
        <Card className='p-10'>
          <CardHeader className='px-0 pt-0'>
            <CardTitle className='flex gap-x-[10px] secondary-heading'>
              <ZaviagoIcon width='26' height='28' />
              Zaviago Workspace
            </CardTitle>
            <CardDescription>Manage all your business process</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-9 flex-row items-center p-0">
            <BundleSelect title="Starter" price='฿750/month' width='50%' checked={isStarter} onCheckedChange={() => setIsStarter(!isStarter)}/>
            <div>
              <h2 className="text-xl font-semibold">Let's start with this.</h2>
              <p className="main-desc">Manage all your business process</p>
            </div>
          </CardContent>
        </Card>

        <PackageSection icon={<Icons.crmIcon />} title='CRM' desc='CRM system for every business' content={
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.crm.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeCRM === list.title} onCheckedChange={() => handlePackageType(list.title, packageTypeCRM, setPackageTypeCRM)} />
            ))}
          </CardContent>
          } footer={<>{packageTypeCRM ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start p-0'>
                <h2 className="settings-heading text-left">How many customer contacts do I need?</h2>
                <SelectInput label='1,500 Baht/month per 1,000 additional customer contacts' lists={packageTypeCRM === 'Professional' ? customerContactsList.filter(value => value >= 2000) : packageTypeCRM === 'Enterprise' ? customerContactsList.filter(value => value >= 5000) : customerContactsList} onValueChange={handlePackage.customerContact} defaultValue={customerContact} name='customer-contacts'/>
              </CardFooter>
            </>
          ) : null}</>}/>

        <PackageSection icon={<Icons.inbioApp width='30' height='30'/>} title='MarketConnect' desc='Integrate your sales in one place' content={
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.marketConnect.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeMarketConnect === list.title} onCheckedChange={() => handlePackageType(list.title, packageTypeMarketConnect, setPackageTypeMarketConnect)} />
            ))}
          </CardContent>
          } footer={<>{packageTypeMarketConnect ? (
            <><Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start p-0'>
                {packageTypeMarketConnect !== 'Starter' && (
                  <div className="border border-[#E4E4E7] py-2 px-3 rounded-md w-full mb-6">
                    <p className="subheading">{packageTypeMarketConnect === 'Professional' ? 'MarketConnect Professional provide the market channel integration 2 channels included.' : packageTypeMarketConnect === 'Enterprise' ? 'MarketConnect Enterprise provides the market channel integration 4 channels included.' : ''}</p>
                  </div>
                )}
                <h2 className="settings-heading text-left">How many sale users do I need?</h2>
                <SelectInput label='900 Baht/month per additional user' lists={packageTypeMarketConnect === 'Professional' ? paidUsersList.filter(value => value >= 5) : packageTypeMarketConnect === 'Enterprise' ? paidUsersList.filter(value => value >= 10) : paidUsersList} onValueChange={handlePackage.paidUser} defaultValue={paidUsers} name='paid-users'/>

                <div className="w-full mt-9 bg-[#F4F4F5] rounded-xl p-5">
                  <div className="flex items-center justify-between">
                    <h2 className="settings-heading text-left">Do you need marketplace or social media API integration?</h2>
                    <Switch onCheckedChange={handleCheckChannel} checked={needSocialMedia}/>
                  </div>
                  {needSocialMedia ? (
                    <div className="mt-5">
                      <h2 className="subheading font-medium">How many market channels do I need?</h2>
                      <MarketCheckbox title='Marketplace' list={marketLists.marketplaces}/>
                      <MarketCheckbox title='Social Media' list={marketLists.socialMedia}/>
                    </div>
                  ) : null}
                </div>
              </CardFooter></>) : null}</>}/>

        <PackageSection icon={<Icons.lineCRMApp width='30' height='30'/>} title='Line CRM' desc='Integrate your LineOA user to CRM' content={
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.lineCRM.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeLineCRM === list.title} onCheckedChange={() => {handlePackageType(list.title, packageTypeLineCRM, setPackageTypeLineCRM);handlePackageType(list.title, packageTypeRewardful, () => setPackageTypeRewardful('Starter'))}} />
            ))}
          </CardContent>
          } footer={<> {packageTypeLineCRM ? (
            <><Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start p-0'>
                <h2 className="settings-heading text-left">Do you need the custom field?</h2>
                <SelectInput label='Increase your capabilities to collect and connect particular data points to contacts, businesses, and transactions. 10 custom fields included' lists={packageTypeLineCRM === 'Professional' ? customFieldList.filter(value => value >= 25) : packageTypeLineCRM === 'Enterprise' ? customFieldList.filter(value => value >= 50) : customFieldList} onValueChange={handlePackage.customField} defaultValue={customField} name='custom-field' />

                <div className="w-full mt-9 bg-[#F4F4F5] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="settings-heading text-left">Do you need phone SMS OTP?</h2>
                    <Switch onCheckedChange={() => setNeedSMSOTP(!needSMSOTP)} checked={needSMSOTP}/>
                  </div>
                  <SelectInput label='Let users fill in mobile phone number and confirm real phone number with SMS Starting at ฿0.60 per SMS OTP' lists={smsOTPList} onValueChange={handlePackage.smsOTP} defaultValue={smsOTP} name='sms-otp' disabled={!needSMSOTP}/>
                </div>
              </CardFooter></>) : null}</>}/>

        <PackageSection icon={<Icons.rewardfulApp width='30' height='30'/>} title='Rewardful' desc='Increase customer engagement with our loyalty program' content={
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.rewardful.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeRewardful === list.title} onCheckedChange={() => handlePackageType(list.title, packageTypeRewardful, setPackageTypeRewardful)} />
            ))}
          </CardContent>
          } footer={<>{packageTypeRewardful ? (
            <><Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start gap-y-9 p-0'>
                <div className="border border-[#E4E4E7] py-2 px-3 rounded-md w-full">
                  <p className="subheading">{packageTypeRewardful === 'Professional' ? 'Professional will include a customized function with 5 conditions and 5 tier levels.' : packageTypeRewardful === 'Enterprise' ? 'Enterprise will include a customized function with 10 conditions and 5 tier levels.' : 'Starter will include a standard function with 1 condition and 3 tier levels.'}</p>
                </div>
              </CardFooter></>) : null}</>}/>

        <PackageSection icon={<Icons.pageBuilder/>} title='Online Store' desc='Intergrate page builder and online shop in one place' content={
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.onlineStore.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeOnlineStore === list.title} onCheckedChange={() => handlePackageType(list.title, packageTypeOnlineStore, setPackageTypeOnlineStore)} />
            ))}
          </CardContent>
          } footer={<>{packageTypeOnlineStore ? (
            <><Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start gap-y-9 p-0'>
                <div className="border border-[#E4E4E7] py-2 px-3 rounded-md w-full">
                  <p className="subheading">{packageTypeOnlineStore === 'Professional' ? 'Online Store Professional will provide up to 10,000 products library.' : packageTypeOnlineStore === 'Enterprise' ? 'Online Store Enterprise will provide up to 100,000 products library.' : 'Online Store Starter will provide 5,000 products library.'}</p>
                </div>
              </CardFooter></>) : null}</>}/>

          <PackageSection title='Addons' desc='Customize and enhance your plan with additional features.' content={
            <CardContent className="flex gap-4 flex-wrap p-0">
              {addonLists.map(list => 
                <BundleSelect size='large' title={list.title} price={list.price} checked={addons === list.title} onCheckedChange={() => handlePackageType(list.title, addons, setAddons)} width='100%' desc={list.desc}/>
              )}
            </CardContent>
          }/>
      </main>

      <PricingResult estimateButton={<PricingEstimate recurringFee={recurringFee} oneTimeFee={oneTimeFee} totalCost={totalPriceMonthly} estimatedCost={estimatedPrice} isAnnual={isAnnual}/>} setIsAnnual={setIsAnnual} isAnnual={isAnnual} totalCost={totalPriceMonthly} estimated={estimatedPrice} commitments={
        <>{packageInfo.map(info => (
            <>{info.condition ? (
              <>{info.filterInfo.map(item => (
                <ProductSelection key={item.title} title={`${info.titlePrefix} ${item.title}`} price={`฿${item.price.toLocaleString()}/month`} onClose={info.onClose} desc={info.desc}/>
              ))}</>
            ) : null}</>
          ))}
          {addons && (<ProductSelection title={`${addons} Addon`} price={addonFilter.price} onClose={() => setAddons()}/>)}
        </>
      }/>
    </div>
  )
}