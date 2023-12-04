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

  const crmPriceList = [750,28000,89000];
  const marketConnectPriceList = [750,15900,39000];
  const lineCRMPriceList = [4350, 4600, 5000];
  const rewardfulPriceList = [1500,3500,6500];
  const onlineStorePriceList = [750, 14400, 42000]

  const [totalPriceMonthly, setTotalPriceMonthly] = useState(750);
  const [totalPriceYearly, setTotalPriceYearly] = useState(7500);

  const [isStarter, setIsStarter] = useState(false)
  const [needCustomField, setNeedCustomField] = useState(false)
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
    let workspacePrice, crmPrice, marketConnectPrice, lineCRMPrice, rewardfulPrice, onlineStorePrice; 
    let customerContactPrice, paidUserPrice, smsOTPPrice, customFieldPrice; // Additional price

    if (isStarter){
      workspacePrice = 750
    } else {
      workspacePrice = 0
    }

    switch (packageTypeCRM){
      case 'Starter': crmPrice = crmPriceList[0]; break;
      case 'Professional': crmPrice = crmPriceList[1]; break;
      case 'Enterprise': crmPrice = crmPriceList[2]; break;
      default: crmPrice = 0; break;
    }

    switch (packageTypeMarketConnect){
      case 'Starter': marketConnectPrice = marketConnectPriceList[0]; break;
      case 'Professional': marketConnectPrice = marketConnectPriceList[1]; break;
      case 'Enterprise': marketConnectPrice = marketConnectPriceList[2]; break;
      default: marketConnectPrice = 0; break;
    }

    switch (packageTypeLineCRM){
      case 'Starter': lineCRMPrice = lineCRMPriceList[0]; break;
      case 'Professional': lineCRMPrice = lineCRMPriceList[1]; break;
      case 'Enterprise': lineCRMPrice = lineCRMPriceList[2]; break;
      default: lineCRMPrice = 0; break;
    }

    switch (packageTypeRewardful){
      case 'Starter': rewardfulPrice = rewardfulPriceList[0]; break;
      case 'Professional': rewardfulPrice = rewardfulPriceList[1]; break;
      case 'Enterprise': rewardfulPrice = rewardfulPriceList[2]; break;
      default: rewardfulPrice = 0; break;
    }

    switch (packageTypeOnlineStore){
      case 'Starter': onlineStorePrice = onlineStorePriceList[0]; break;
      case 'Professional': onlineStorePrice = onlineStorePriceList[1]; break;
      case 'Enterprise': onlineStorePrice = onlineStorePriceList[2]; break;
      default: onlineStorePrice = 0; break;
    }

    if (packageTypeCRM){
      customerContactPrice = customerContactsList.indexOf(customerContact) * 1500;
    } else {
      customerContactPrice = 0
    }

    if (packageTypeMarketConnect){
      paidUserPrice = paidUsersList.indexOf(paidUsers) * 900;
    } else {
      paidUserPrice = 0
    }

    if (packageTypeLineCRM){
      switch (smsOTP){
        case 5000: smsOTPPrice = 3000; break;
        case 18000: smsOTPPrice = 10000; break;
        case 60000: smsOTPPrice = 30000; break;
        default: smsOTPPrice = 3000
      }
    } else {
      smsOTPPrice = 0
    }

    if (needCustomField){
      switch (customField){
        case 10: customFieldPrice = 350; break;
        case 25: customFieldPrice = 600; break;
        case 50: customFieldPrice = 1000; break;
        default: customFieldPrice = 350
      }
    } else {
      customFieldPrice = 0
    }

    setTotalPriceMonthly(workspacePrice + crmPrice + marketConnectPrice + lineCRMPrice + rewardfulPrice + onlineStorePrice + customerContactPrice + paidUserPrice + smsOTPPrice + customFieldPrice)
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [
    isStarter,
    packageTypeCRM, 
    packageTypeMarketConnect, 
    packageTypeLineCRM, 
    packageTypeRewardful, 
    packageTypeOnlineStore, 
    smsOTP, 
    customerContact,
    paidUsers,
    customField,
    needCustomField
  ]);

  const handlePackageType = (index, packageType, setPackageType) => {
    if (packageType === index){
      setPackageType(null)
    } else {
      setPackageType(index);
    }
  };

  const handlePackage = {
    customerContact: (index) => setCustomerContact(index),
    paidUser: (index) => setPaidUsers(index),
    smsOTP: (index) => setSMSOTP(index),
    customField: (index) => {
      if (needCustomField){
        setCustomField(index)
      } else {
        setCustomField(0)
      }
    }
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
      <main className="flex flex-col gap-y-4">
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
                <SelectInput label='1,500 Baht/month per 1,000 additional customer contacts' lists={customerContactsList} onValueChange={handlePackage.customerContact} defaultValue={customerContact} name='customer-contacts'/>
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
                <SelectInput label='900 Baht/month per additional user' lists={paidUsersList} onValueChange={handlePackage.paidUser} defaultValue={paidUsers} name='paid-users'/>
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
                <h2 className="settings-heading text-left">Do you need phone SMS OTP?</h2>
                <SelectInput label='Let users fill in mobile phone number and confirm real phone number with SMSStarting at ฿0.60 per SMS OTP' lists={smsOTPList} onValueChange={handlePackage.smsOTP} defaultValue={smsOTP} name='sms-otp'/>
              
                <div className="w-full mt-9 bg-[#F4F4F5] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="settings-heading text-left">Do you need the custom field?</h2>
                    <Switch onCheckedChange={() => setNeedCustomField(!needCustomField)} checked={needCustomField}/>
                  </div>
                  <SelectInput label='Increase your capabilities to collect and connect particular data points to contacts, businesses, and transactions. 10 custom fields included' lists={customFieldList} onValueChange={handlePackage.customField} defaultValue={customField} name='custom-field' disabled={!needCustomField}/>
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
            <BundleSelect title="API Limit Increase" price='฿15,000/month' checked={addons === 'API Limit Increase'} onCheckedChange={() => handlePackageType('API Limit Increase', addons, setAddons)} width='100%'/>
            <BundleSelect title="Starter" price='฿750/month' checked={addons === 'Starter'} onCheckedChange={() => handlePackageType('Starter', addons, setAddons)} width='100%'/>
          </CardContent>
        </Card>
      </main>

      <PricingResult totalMonthly={totalPriceMonthly} totalYearly={1000} commitments={
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