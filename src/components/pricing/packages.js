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

export default function Packages(){
  const customerContactsList = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
  const paidUsersList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25, 50];
  const smsOTPList = [5000, 18000, 60000]
  const customFieldList = [10,25,50]

  const [totalPriceMonthly, setTotalPriceMonthly] = useState(750);

  const [isStarter, setIsStarter] = useState(false)
  const [needSMSOTP, setNeedSMSOTP] = useState(false)
  const [packageTypeCRM, setPackageTypeCRM] = useState()
  const [packageTypeMarketConnect, setPackageTypeMarketConnect] = useState()
  const [packageTypeLineCRM, setPackageTypeLineCRM] = useState()
  const [packageTypeRewardful, setPackageTypeRewardful] = useState()
  const [packageTypeOnlineStore, setPackageTypeOnlineStore] = useState()
  const [addons, setAddons] = useState()

  const [customerContact, setCustomerContact] = useState(customerContactsList[0]);
  const [paidUsers, setPaidUsers] = useState(paidUsersList[0]);
  const [smsOTP, setSMSOTP] = useState(smsOTPList[0])
  const [customField, setCustomField] = useState(customFieldList[0])

  const calculateTotalPrice = () => {
    const prices = {
      workspace: isStarter ? 750 : 0,
      crm: { Starter: 750, Professional: 28000, Enterprise: 89000 },
      marketConnect: { Starter: 750, Professional: 15900, Enterprise: 39000 },
      lineCRM: { Starter: 4350, Professional: 4600, Enterprise: 5000 },
      rewardful: { Starter: 1500, Professional: 3500, Enterprise: 6500 },
      onlineStore: { Starter: 750, Professional: 14400, Enterprise: 42000 },
    };

    const customerContactPrice = packageTypeCRM ? customerContactsList.indexOf(customerContact) * 1500 : 0;
    const paidUserPrice = packageTypeMarketConnect ? paidUsersList.indexOf(paidUsers) * 900 : 0;
    const smsOTPPrice = packageTypeLineCRM && needSMSOTP && smsOTP ? { 5000: 3000, 18000: 10000, 60000: 30000 }[smsOTP] || 3000 : 0;
    const customFieldPrice = packageTypeLineCRM && customField ? { 10: 350, 25: 600, 50: 1000 }[customField] || 350 : 0;
    const addonPrice = addons ? addonPrices[addons] || 0 : 0;

    const addonPrices = {
      'API Limit Increase': 10000,
      'Technical Consulting': 60000,
      'Monthly Inbound': 45000,
      'Ongoing Inbound': 95000,
      'Premium Consulting': 120000,
      'Business Consulting': 60000,
      'Migration Services': 8500,
    };

    setTotalPriceMonthly(
      prices.workspace +
      (packageTypeCRM ? prices.crm[packageTypeCRM] || 0 : 0) +
      (packageTypeMarketConnect ? prices.marketConnect[packageTypeMarketConnect] || 0 : 0) +
      (packageTypeLineCRM ? prices.lineCRM[packageTypeLineCRM] || 0 : 0) +
      (packageTypeRewardful ? prices.rewardful[packageTypeRewardful] || 0 : 0) +
      (packageTypeOnlineStore ? prices.onlineStore[packageTypeOnlineStore] || 0 : 0) +
      customerContactPrice + paidUserPrice + smsOTPPrice + customFieldPrice + addonPrice
    )
  };  

  useEffect(() => {
    calculateTotalPrice();
  }, [isStarter, packageTypeCRM, packageTypeMarketConnect, packageTypeLineCRM, packageTypeRewardful, packageTypeOnlineStore, smsOTP, customerContact, paidUsers, customField, needSMSOTP, addons]);

  const handlePackageType = (index, packageType, setPackageType) => {
    packageType === index ? setPackageType(null) : setPackageType(index)
  };

  const handlePackage = {
    customerContact: (index) => setCustomerContact(index),
    paidUser: (index) => setPaidUsers(index),
    customField: (index) => setCustomField(index),
    smsOTP: (index) => {needSMSOTP ? setSMSOTP(index) : setSMSOTP(0)}
  };

  const bundleSelectList = {
     crm: [
       {
         title:'Starter',
         price:750,
         variable:packageTypeCRM,
         setVariable:setPackageTypeCRM
       },
       {
         title:'Professional',
         price:28000,
         variable:packageTypeCRM,
         setVariable:setPackageTypeCRM
       },
       {
         title:'Enterprise',
         price:89000,
         variable:packageTypeCRM,
         setVariable:setPackageTypeCRM
       }
     ],
     marketConnect: [
       {
         title:'Starter',
         price:750,
         variable:packageTypeMarketConnect,
         setVariable:setPackageTypeMarketConnect
       },
       {
         title:'Professional',
         price:15900,
         variable:packageTypeMarketConnect,
         setVariable:setPackageTypeMarketConnect
       },
       {
         title:'Enterprise',
         price:39000,
         variable:packageTypeMarketConnect,
         setVariable:setPackageTypeMarketConnect
       }
     ],
     lineCRM: [
       {
         title:'Starter',
         price:4350,
         variable:packageTypeLineCRM,
         setVariable:setPackageTypeLineCRM
       },
       {
         title:'Professional',
         price:4600,
         variable:packageTypeLineCRM,
         setVariable:setPackageTypeLineCRM
       },
       {
         title:'Enterprise',
         price:5000,
         variable:packageTypeLineCRM,
         setVariable:setPackageTypeLineCRM
       }
     ],
     rewardful: [
       {
         title:'Starter',
         price:1500,
         variable:packageTypeRewardful,
         setVariable:setPackageTypeRewardful
       },
       {
         title:'Professional',
         price:3500,
         variable:packageTypeRewardful,
         setVariable:setPackageTypeRewardful
       },
       {
         title:'Enterprise',
         price:6500,
         variable:packageTypeRewardful,
         setVariable:setPackageTypeRewardful
       }
     ],
     onlineStore: [
       {
         title:'Starter',
         price:750,
         variable:packageTypeOnlineStore,
         setVariable:setPackageTypeOnlineStore
       },
       {
         title:'Professional',
         price:14400,
         variable:packageTypeOnlineStore,
         setVariable:setPackageTypeOnlineStore
       },
       {
         title:'Enterprise',
         price:42000,
         variable:packageTypeOnlineStore,
         setVariable:setPackageTypeOnlineStore
       }
     ],
   }

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
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={list.variable === list.title} onCheckedChange={() => handlePackageType(list.title, list.variable, list.setVariable)} />
            ))}
          </CardContent>
          {packageTypeCRM ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start p-0'>
                <h2 className="settings-heading text-left">How many customer contacts do I need?</h2>
                <SelectInput label='1,500 Baht/month per 1,000 additional customer contacts' lists={packageTypeCRM === 'Professional' ? customerContactsList.slice(1, customerContactsList.length) : packageTypeCRM === 'Enterprise' ? customerContactsList.slice(4, customerContactsList.length) : customerContactsList} onValueChange={handlePackage.customerContact} defaultValue={customerContact} name='customer-contacts'/>
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
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={list.variable === list.title} onCheckedChange={() => handlePackageType(list.title, list.variable, list.setVariable)} />
            ))}
          </CardContent>
          {packageTypeMarketConnect ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start p-0'>
                <h2 className="settings-heading text-left">How many sale users do I need?</h2>
                <SelectInput label='900 Baht/month per additional user' lists={packageTypeMarketConnect === 'Professional' ? paidUsersList.slice(3, paidUsersList.length) : packageTypeMarketConnect === 'Enterprise' ? paidUsersList.slice(8, paidUsersList.length) : paidUsersList} onValueChange={handlePackage.paidUser} defaultValue={paidUsers} name='paid-users'/>
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
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={list.variable === list.title} onCheckedChange={() => handlePackageType(list.title, list.variable, list.setVariable)} />
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
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={list.variable === list.title} onCheckedChange={() => handlePackageType(list.title, list.variable, list.setVariable)} />
            ))}
          </CardContent>
          {packageTypeRewardful ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start gap-y-9 p-0'>
                <div className="border border-[#E4E4E7] py-2 px-3 rounded-md w-full">
                  <p className="subheading">Starter will provide a standard function with 1 condition and 3 tier levels included.</p>
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
              <BundleSelect title={list.title} price={`฿${list.price.toLocaleString()}/month`} checked={list.variable === list.title} onCheckedChange={() => handlePackageType(list.title, list.variable, list.setVariable)} />
            ))}
          </CardContent>
          {packageTypeOnlineStore ? (
            <>
              <Separator className='my-10'/>
              <CardFooter className='flex flex-col items-start gap-y-9 p-0'>
                <div className="border border-[#E4E4E7] py-2 px-3 rounded-md w-full">
                  <p className="subheading">Online Store Starter will provide 5,000 products library.</p>
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
            <BundleSelect size='large'title="Premium Consulting" price='฿120,000' checked={addons === 'Premium Consulting'} onCheckedChange={() => handlePackageType('Premium Consulting', addons, setAddons)} width='100%' desc='Access to both an Inbound Consultant and a Technical Consultant for up to 5 hours per month with each. The Inbound Consultant and Technical Consultant will work together to find customized solutions for your strategic and technical needs.'/>
            <BundleSelect size='large' title="Business Consulting" price='Standard offering starting at ฿60,000' checked={addons === 'Business Consulting'} onCheckedChange={() => handlePackageType('Business Consulting', addons, setAddons)} width='100%' desc='Five (5) hours of total support per month may include phone conversations, email-based support, prep work, and any other activities related to the service. Unused hours expire at the end of each month and will not carry over.'/>
            <BundleSelect size='large' title="Migration Services" price='฿8,500/month' checked={addons === 'Migration Services'} onCheckedChange={() => handlePackageType('Migration Services', addons, setAddons)} width='100%' desc='Template setup service provides a defined set of templates that will resemble your website and branding. These templates use drag-and-drop functionality so you can easily start creating pages and blog posts without coding knowledge.'/>
          </CardContent>
        </Card>
      </main>

      <PricingResult totalMonthly={totalPriceMonthly} totalYearly={totalPriceMonthly * 0.9} commitments={
        <>
          {packageTypeCRM ? (
            <>{bundleSelectList.crm.filter(item => item.title === packageTypeCRM).map(item => (
              <ProductSelection title={`CRM ${item.title}`} price={`฿${item.price.toLocaleString()}/month`} onClose={() => setPackageTypeCRM()}/>
            ))}</>
          ) : null}

          {packageTypeMarketConnect ? (
            <>{bundleSelectList.marketConnect.filter(item => item.title === packageTypeMarketConnect).map(item => (
              <ProductSelection title={`Market Connect ${item.title}`} price={`฿${item.price.toLocaleString()}/month`} onClose={() => setPackageTypeMarketConnect()}/>
            ))}</>
          ) : null}

          {packageTypeLineCRM ? (
            <>{bundleSelectList.lineCRM.filter(item => item.title === packageTypeLineCRM).map(item => (
              <ProductSelection title={`Line CRM ${item.title}`} price={`฿${item.price.toLocaleString()}/month`} onClose={() => setPackageTypeLineCRM()}/>
            ))}</>
          ) : null}

          {packageTypeRewardful ? (
            <>{bundleSelectList.rewardful.filter(item => item.title === packageTypeRewardful).map(item => (
              <ProductSelection title={`Rewardful ${item.title}`} price={`฿${item.price.toLocaleString()}/month`} onClose={() => setPackageTypeRewardful()}/>
            ))}</>
          ) : null}

          {packageTypeOnlineStore ? (
            <>{bundleSelectList.onlineStore.filter(item => item.title === packageTypeOnlineStore).map(item => (
              <ProductSelection title={`Online Store ${item.title}`} price={`฿${item.price.toLocaleString()}/month`} onClose={() => setPackageTypeOnlineStore()}/>
            ))}</>
          ) : null}
        </>
      }/>
    </div>
  )
}