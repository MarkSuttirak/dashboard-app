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
import { MarketCheckbox, bundleSelectList, marketLists } from "./pricingLists";
import PricingEstimate from "./pricingEstimate";

export default function Packages(){
  const customerContactsList = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
  const paidUsersList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25, 50];
  const smsOTPList = [5000, 18000, 60000]
  const customFieldList = [10,25,50]

  const [totalPriceMonthly, setTotalPriceMonthly] = useState(750);
  const [totalFee, setTotalFee] = useState(0)

  const [isStarter, setIsStarter] = useState(true)
  const [needSMSOTP, setNeedSMSOTP] = useState(false)
  const [needSocialMedia, setNeedSocialMedia] = useState(false)
  const [packageTypeCRM, setPackageTypeCRM] = useState()
  const [packageTypeMarketConnect, setPackageTypeMarketConnect] = useState()
  const [packageTypeLineCRM, setPackageTypeLineCRM] = useState()
  const [packageTypeRewardful, setPackageTypeRewardful] = useState()
  const [packageTypeOnlineStore, setPackageTypeOnlineStore] = useState()
  const [addons, setAddons] = useState()
  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const [customerContact, setCustomerContact] = useState(customerContactsList[0]);
  const [paidUsers, setPaidUsers] = useState(paidUsersList[0]);
  const [smsOTP, setSMSOTP] = useState(smsOTPList[0])
  const [customField, setCustomField] = useState(customFieldList[0])

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
      crmAndMarketConnectAndOnlineStore: (
        packageTypeCRM === 'Starter' && packageTypeMarketConnect === 'Starter' && packageTypeOnlineStore === 'Starter' && 750
      )
    };

    const addonPrices = {
      'API Limit Increase': 10000,
      'Technical Consulting': 60000,
      'Monthly Inbound': 45000,
      'Ongoing Inbound': 95000,
      'Premium Consulting': 120000,
      'Business Consulting': 60000,
      'Migration Services': 8500,
    };

    const customerContactPrice = packageTypeCRM ? customerContactsList.indexOf(customerContact) * 1500 : 0;
    const paidUserPrice = packageTypeMarketConnect ? paidUsersList.indexOf(paidUsers) * 900 : 0;
    const smsOTPPrice = packageTypeLineCRM && needSMSOTP && smsOTP ? { 5000: 3000, 18000: 10000, 60000: 30000 }[smsOTP] || 3000 : 0;
    const customFieldPrice = packageTypeLineCRM && customField ? { 10: 350, 25: 600, 50: 1000 }[customField] || 350 : 0;
    const addonPrice = addons ? addonPrices[addons] || 0 : 0;

    const estimatedContactPrice = packageTypeCRM === 'Professional' ? 90000 : packageTypeCRM === 'Enterprise' ? 165000 : 0
    const estimatedMarketConnectPrice = packageTypeMarketConnect === 'Professional' ? 45000 : packageTypeMarketConnect === 'Enterprise' ? 125000 : 0

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
    setEstimatedPrice(totalPriceMonthly + estimatedContactPrice + estimatedMarketConnectPrice)
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

  const packageInfo = [
    {condition: packageTypeCRM, filterInfo: crmFilter, titlePrefix: 'CRM', onClose: () => setPackageTypeCRM(), desc: `Includes ${customerContact.toLocaleString()} customer contacts`},
    {condition: packageTypeMarketConnect, filterInfo: marketConnectFilter, titlePrefix: 'Market Connect', onClose: () => setPackageTypeMarketConnect(), desc: `Includes ${paidUsers} paid users`},
    {condition: packageTypeLineCRM, filterInfo: lineCRMFilter, titlePrefix: 'Line CRM', onClose: () => setPackageTypeLineCRM(), desc: `Includes ${customField} custom fields ${needSMSOTP ? `with ${smsOTP.toLocaleString()} SMS OTP, valid within ${smsOTP === 5000 ? '12 months' : '24 months'}` : ''}`},
    {condition: packageTypeRewardful, filterInfo: rewardfulFilter, titlePrefix: 'Rewardful', onClose: () => setPackageTypeRewardful()},
    {condition: packageTypeOnlineStore, filterInfo: onlineStoreFilter, titlePrefix: 'Online Store', onClose: () => setPackageTypeOnlineStore()},
  ];

  const recurringFee = [
    {title:isStarter && 'Zaviago Workspace', price:isStarter && 750},
    {title:crmFilter.length > 0 && 'CRM ' + crmFilter[0].title, price:crmFilter.length > 0 && crmFilter[0].price},
    {title:marketConnectFilter.length > 0 && 'Market Connect ' + marketConnectFilter[0].title, price:marketConnectFilter.length > 0 && marketConnectFilter[0].price},
    {title:lineCRMFilter.length > 0 && 'Line CRM ' + lineCRMFilter[0].title, price:lineCRMFilter.length > 0 && lineCRMFilter[0].price},
    {title:rewardfulFilter.length > 0 && 'Rewardful ' + rewardfulFilter[0].title, price:rewardfulFilter.length > 0 && rewardfulFilter[0].price},
    {title:onlineStoreFilter.length > 0 && 'Online Store ' + onlineStoreFilter[0].title, price:onlineStoreFilter.length > 0 && onlineStoreFilter[0].price}
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

  useEffect(() => {
    if (packageTypeCRM !== null && packageTypeMarketConnect !== null, packageTypeLineCRM !== null){
      packageTypeCRM === 'Professional' ? setCustomerContact(2000) : packageTypeCRM === 'Enterprise' ? setCustomerContact(5000) : setCustomerContact(1000)
      packageTypeMarketConnect === 'Professional' ? setPaidUsers(5) : packageTypeMarketConnect === 'Enterprise' ? setPaidUsers(10) : setPaidUsers(2)
      packageTypeLineCRM === 'Professional' ? setCustomField(25) : packageTypeLineCRM === 'Enterprise' ? setCustomField(50) : setCustomField(10)
    }
  }, [packageTypeCRM, packageTypeMarketConnect, packageTypeLineCRM])

  useEffect(() => {
    calculateTotalFee();
    calculateTotalPrice();
  }, [isStarter, packageTypeCRM, packageTypeMarketConnect, packageTypeLineCRM, packageTypeRewardful, packageTypeOnlineStore, smsOTP, customerContact, paidUsers, customField, needSMSOTP, addons, estimatedPrice, totalPriceMonthly, totalFee]);

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

        <Card className='p-10'>
          <CardHeader className='px-0 pt-0'>
            <CardTitle className='flex gap-x-[10px] secondary-heading'>
              <Icons.crmIcon />
              CRM
            </CardTitle>
            <CardDescription>CRM system for every business</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.crm.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeCRM === list.title} onCheckedChange={() => handlePackageType(list.title, packageTypeCRM, setPackageTypeCRM)} />
            ))}
          </CardContent>
          {packageTypeCRM ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start p-0'>
                <h2 className="settings-heading text-left">How many customer contacts do I need?</h2>
                <SelectInput label='1,500 Baht/month per 1,000 additional customer contacts' lists={packageTypeCRM === 'Professional' ? customerContactsList.filter(value => value >= 2000) : packageTypeCRM === 'Enterprise' ? customerContactsList.filter(value => value >= 5000) : customerContactsList} onValueChange={handlePackage.customerContact} defaultValue={customerContact} name='customer-contacts'/>
              </CardFooter>
            </>
          ) : null}
        </Card>

        <Card className='p-10'>
          <CardHeader className='px-0 pt-0'>
            <CardTitle className='flex gap-x-[10px] secondary-heading'>
              <Icons.inbioApp width='30' height='30'/>
              MarketConnect
            </CardTitle>
            <CardDescription>Integrate your sales in one place</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.marketConnect.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeMarketConnect === list.title} onCheckedChange={() => handlePackageType(list.title, packageTypeMarketConnect, setPackageTypeMarketConnect)} />
            ))}
          </CardContent>
          {packageTypeMarketConnect ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start p-0'>
                <h2 className="settings-heading text-left">How many sale users do I need?</h2>
                <SelectInput label='900 Baht/month per additional user' lists={packageTypeMarketConnect === 'Professional' ? paidUsersList.filter(value => value >= 5) : packageTypeMarketConnect === 'Enterprise' ? paidUsersList.filter(value => value >= 10) : paidUsersList} onValueChange={handlePackage.paidUser} defaultValue={paidUsers} name='paid-users'/>

                <div className="w-full mt-9 bg-[#F4F4F5] rounded-xl p-5">
                  <div className="flex items-center justify-between">
                    <h2 className="settings-heading text-left">Do you need marketplace or social media API integration?</h2>
                    <Switch onCheckedChange={() => setNeedSocialMedia(!needSocialMedia)} checked={needSocialMedia}/>
                  </div>
                  {needSocialMedia ? (
                    <div className="mt-5">
                      <h2 className="subheading font-medium">How many market channels do I need?</h2>
                      <MarketCheckbox title='Marketplace' list={marketLists.marketplaces}/>
                      <MarketCheckbox title='Social Media' list={marketLists.socialMedia}/>
                    </div>
                  ) : null}
                </div>
              </CardFooter>
            </>
          ) : null}
        </Card>

        <Card className='p-10'>
          <CardHeader className='px-0 pt-0'>
            <CardTitle className='flex gap-x-[10px] secondary-heading'>
              <Icons.lineCRMApp width='30' height='30'/>
              Line CRM
            </CardTitle>
            <CardDescription>Integrate your LineOA user to CRM</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.lineCRM.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeLineCRM === list.title} onCheckedChange={() => {handlePackageType(list.title, packageTypeLineCRM, setPackageTypeLineCRM);handlePackageType(list.title, packageTypeRewardful, () => setPackageTypeRewardful('Starter'))}} />
            ))}
          </CardContent>
          {packageTypeLineCRM ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start p-0'>
                <h2 className="settings-heading text-left">Do you need the custom field?</h2>
                <SelectInput label='Increase your capabilities to collect and connect particular data points to contacts, businesses, and transactions. 10 custom fields included' lists={customFieldList} onValueChange={handlePackage.customField} defaultValue={customField} name='custom-field' />

                <div className="w-full mt-9 bg-[#F4F4F5] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="settings-heading text-left">Do you need phone SMS OTP?</h2>
                    <Switch onCheckedChange={() => setNeedSMSOTP(!needSMSOTP)} checked={needSMSOTP}/>
                  </div>
                  <SelectInput label='Let users fill in mobile phone number and confirm real phone number with SMSStarting at ฿0.60 per SMS OTP' lists={smsOTPList} onValueChange={handlePackage.smsOTP} defaultValue={smsOTP} name='sms-otp' disabled={!needSMSOTP}/>
                </div>
              </CardFooter>
            </>
          ) : null}
        </Card>

        <Card className='p-10'>
          <CardHeader className='px-0 pt-0'>
            <CardTitle className='flex gap-x-[10px] secondary-heading'>
              <Icons.rewardfulApp width='30' height='30'/>
              Rewardful
            </CardTitle>
            <CardDescription>Increase customer engagement with our loyalty program</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.rewardful.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeRewardful === list.title} onCheckedChange={() => handlePackageType(list.title, packageTypeRewardful, setPackageTypeRewardful)} />
            ))}
          </CardContent>
          {packageTypeRewardful ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start gap-y-9 p-0'>
                <div className="border border-[#E4E4E7] py-2 px-3 rounded-md w-full">
                  <p className="subheading">{packageTypeRewardful === 'Professional' ? 'Professional will include a customized function with 5 conditions and 5 tier levels.' : packageTypeRewardful === 'Enterprise' ? 'Enterprise will include a customized function with 10 conditions and 5 tier levels.' : 'Starter will include a standard function with 1 condition and 3 tier levels.'}</p>
                </div>
              </CardFooter>
            </>
          ) : null}
        </Card>

        <Card className='p-10'>
          <CardHeader className='px-0 pt-0'>
            <CardTitle className='flex gap-x-[10px] secondary-heading'>
              <Icons.pageBuilder/>
              Online Store
            </CardTitle>
            <CardDescription>Intergrate page builder and online shop in one place</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            {bundleSelectList.onlineStore.map(list => (
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={packageTypeOnlineStore === list.title} onCheckedChange={() => handlePackageType(list.title, packageTypeOnlineStore, setPackageTypeOnlineStore)} />
            ))}
          </CardContent>
          {packageTypeOnlineStore ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start gap-y-9 p-0'>
                <div className="border border-[#E4E4E7] py-2 px-3 rounded-md w-full">
                  <p className="subheading">{packageTypeOnlineStore === 'Professional' ? 'Online Store Professional will provide up to 10,000 products library.' : packageTypeOnlineStore === 'Enterprise' ? 'Online Store Enterprise will provide up to 100,000 products library.' : 'Online Store Starter will provide 5,000 products library.'}</p>
                </div>
              </CardFooter>
            </>
          ) : null}
        </Card>

        <Card className='p-10'>
          <CardHeader className='px-0 pt-0'>
            <CardTitle className='flex gap-x-[10px] secondary-heading'>
              Addons
            </CardTitle>
            <CardDescription>Intergrate page builder and online shop in one place</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap p-0">
            <BundleSelect size='large' title="API Limit Increase" price='฿10,000/month' checked={addons === 'API Limit Increase'} onCheckedChange={() => handlePackageType('API Limit Increase', addons, setAddons)} width='100%' desc='Service to connect Marketplace, Social Media and other service API.'/>
            <BundleSelect size='large' title="Technical Consulting: Advance" price='Standard offering starting at ฿60,000' checked={addons === 'Technical Consulting'} onCheckedChange={() => handlePackageType('Technical Consulting', addons, setAddons)} width='100%' desc='Five (5) hours of total support may include phone conversations, email-based support, prep work, and any other activities related to the service. Unused hours expire at the end of each month and will not carry over.'/>
            <BundleSelect size='large' title="Monthly Inbound Consulting" price='฿45,000/month' checked={addons === 'Monthly Inbound'} onCheckedChange={() => handlePackageType('Monthly Inbound', addons, setAddons)} width='100%' desc='Access to your Inbound Consultant for up to one hour per month.'/>
            <BundleSelect size='large' title="Ongoing Inbound Consulting" price='฿95,000/month' checked={addons === 'Ongoing Inbound'} onCheckedChange={() => handlePackageType('Ongoing Inbound', addons, setAddons)} width='100%' desc='Access to your Inbound Consultant for up to five hours per month.'/>
            <BundleSelect size='large'title="Premium Consulting" price='฿120,000/month' checked={addons === 'Premium Consulting'} onCheckedChange={() => handlePackageType('Premium Consulting', addons, setAddons)} width='100%' desc='Access to both an Inbound Consultant and a Technical Consultant for up to 5 hours per month with each. The Inbound Consultant and Technical Consultant will work together to find customized solutions for your strategic and technical needs.'/>
            <BundleSelect size='large' title="Business Consulting" price='Standard offering starting at ฿60,000' checked={addons === 'Business Consulting'} onCheckedChange={() => handlePackageType('Business Consulting', addons, setAddons)} width='100%' desc='Five (5) hours of total support per month may include phone conversations, email-based support, prep work, and any other activities related to the service. Unused hours expire at the end of each month and will not carry over.'/>
            <BundleSelect size='large' title="Migration Services" price='฿8,500/month' checked={addons === 'Migration Services'} onCheckedChange={() => handlePackageType('Migration Services', addons, setAddons)} width='100%' desc='Template setup service provides a defined set of templates that will resemble your website and branding. These templates use drag-and-drop functionality so you can easily start creating pages and blog posts without coding knowledge.'/>
          </CardContent>
        </Card>
      </main>

      <PricingResult estimateButton={<PricingEstimate recurringFee={recurringFee} oneTimeFee={oneTimeFee} totalCost={totalFee} estimatedCost={estimatedPrice}/>} totalMonthly={totalPriceMonthly} estimated={estimatedPrice} totalYearly={totalPriceMonthly} commitments={
        <>{packageInfo.map(info => (
            <>{info.condition ? (
                <>{info.filterInfo.map(item => (
                  <ProductSelection key={item.title} title={`${info.titlePrefix} ${item.title}`} price={`฿${item.price.toLocaleString()}/month`} onClose={info.onClose} desc={info.desc}/>
                ))}</>
              ) : null}</>
          ))}</>
      }/>
    </div>
  )
}