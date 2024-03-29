import { Select, SelectContent, SelectItem, SelectTrigger, SelectGroup, SelectValue } from "src/components/ui/select"
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Checkbox } from "src/components/ui/checkbox";

export default function CustomPricing(){
  const packageTypeList = ['Starter', 'LineOA CRM', 'Enterprise']
  const marketingContactsList = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
  const paidUsersList = [0, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25];
  const loyaltyProgramList = ['No','Standard','Customize']
  const customFieldList = [0,10,25]
  const smsOTPList = [0,5000,18000,60000]
  const apiMessagingList = ['No','Yes']

  const [totalPrice, setTotalPrice] = useState(0);
  const [packageType, setPackageType] = useState(packageTypeList[0])
  const [marketingContact, setMarketingContact] = useState(marketingContactsList[0]);
  const [paidUsers, setPaidUsers] = useState(paidUsersList[0]);
  const [loyaltyProgram, setLoyaltyProgram] = useState(loyaltyProgramList[0])
  const [customField, setCustomField] = useState(customFieldList[0])
  const [smsOTP, setSMSOTP] = useState(smsOTPList[0])
  const [apiMessaging, setAPIMessaging] = useState(apiMessagingList[0])

  useEffect(() => {
    calculateTotalPrice();
  }, [packageType, marketingContact, paidUsers, loyaltyProgram, customField, smsOTP, apiMessaging]);

  const setPackageTypePrice = () => {
    const packageTypeIndex = packageTypeList.indexOf(packageType);
    let packageTypePrice;
    switch (packageTypeIndex){
      case 0: packageTypePrice = 750;
        break
      case 1: packageTypePrice = 6900;
        break
      case 2: packageTypePrice = 21900;
        break
      default: packageTypePrice = 0;
        break
    }
    return packageTypePrice
  }

  const setMarketingContactPrice = () => {
    const marketingContactIndex = marketingContactsList.indexOf(marketingContact);
    let marketingContactPrice;
    switch (marketingContactIndex) {
      case 0: marketingContactPrice = 0;
        break;
      case 1: marketingContactPrice = 1500;
        break;
      case 2: marketingContactPrice = 3000;
        break;
      case 3: marketingContactPrice = 4500;
        break;
      case 4: marketingContactPrice = 5850;
        break;
      case 5: marketingContactPrice = 7200;
        break;
      case 6: marketingContactPrice = 8550;
        break;
      case 7: marketingContactPrice = 9750;
        break;
      case 8: marketingContactPrice = 10950;
        break;
      case 9: marketingContactPrice = 12150;
        break;
      default: marketingContactPrice = 0;
        break;
    }
    return marketingContactPrice
  }

  const setLoyaltyProgramPrice = () => {
    const loyaltyProgramIndex = loyaltyProgramList.indexOf(loyaltyProgram)
    let loyaltyProgramPrice;

    switch (loyaltyProgramIndex){
      case 0: loyaltyProgramPrice = 0;
        break;
      case 1: loyaltyProgramPrice = 1800;
        break;
      case 2: loyaltyProgramPrice = 3500;
        break;
      default: loyaltyProgramPrice = 0;
        break;
    }
    return loyaltyProgramPrice
  }

  const setPaidUsersPrice = () => {
    const paidUsersIndex = paidUsersList.indexOf(paidUsers);
    let paidUsersPrice;

    switch (paidUsersIndex){
      case 0: paidUsersPrice = 0
        break;
      case 1: paidUsersPrice = 900
        break;
      case 2: paidUsersPrice = 1800
        break;
      case 3: paidUsersPrice = 2700
        break;
      case 4: paidUsersPrice = 3600
        break;
      case 5: paidUsersPrice = 4500
        break;
      case 6: paidUsersPrice = 5400
        break;
      case 7: paidUsersPrice = 6300
        break;
      case 8: paidUsersPrice = 7200
        break;
      case 9: paidUsersPrice = 11050
        break;
      case 10: paidUsersPrice = 17250
        break;
      default: paidUsersPrice = 0
        break
    }
    return paidUsersPrice
  }

  const setAPIMessagingPrice = () => {
    const apiMessagingIndex = apiMessagingList.indexOf(apiMessaging);
    let apiMessagingPrice;

    switch (apiMessagingIndex){
      case 0: apiMessagingPrice = 0
        break;
      case 1: apiMessagingPrice = 1000
        break;
      default: apiMessagingPrice = 0
        break;
    }
    return apiMessagingPrice
  }

  const setCustomFieldPrice = () => {
    const customFieldIndex = customFieldList.indexOf(customField)
    let customFieldPrice;

    switch (customFieldIndex){
      case 0: customFieldPrice = 0;
        break;
      case 1: customFieldPrice = 350;
        break;
      case 2: customFieldPrice = 600;
        break;
      default: customFieldPrice = 0;
        break;
    }
    return customFieldPrice
  }

  const setSMSOTPPrice = () => {
    const smsOTPIndex = smsOTPList.indexOf(smsOTP)
    let smsOTPPrice;

    switch (smsOTPIndex){
      case 0: smsOTPPrice = 0;
        break;
      case 1: smsOTPPrice = 3000;
        break;
      case 2: smsOTPPrice = 10000;
        break;
      case 3: smsOTPPrice = 30000;
        break;
      default: smsOTPPrice = 0;
        break;
    }
    return smsOTPPrice
  }

  const calculateTotalPrice = () => {
    const newTotalPrice = setPackageTypePrice() + setMarketingContactPrice() + setPaidUsersPrice() + setAPIMessagingPrice() + setLoyaltyProgramPrice() + setCustomFieldPrice() + setSMSOTPPrice()
    const newTotalPriceExcludingAPI = setPackageTypePrice() + setMarketingContactPrice() + setPaidUsersPrice() + setLoyaltyProgramPrice() + setCustomFieldPrice() + setSMSOTPPrice();
    if (packageType === 'LineOA CRM'){
      setTotalPrice(newTotalPrice);
    } else {
      setTotalPrice(newTotalPriceExcludingAPI);
    }
  };

  const handlePackageType = (index) => {
    if (packageType === index){
      setPackageType(null)
    } else {
      setPackageType(index);
    }
  };

  const handleMarketingContacts = (index) => {
    setMarketingContact(index);
  };

  const handlePaidUsers = (index) => {
    setPaidUsers(index);
  };

  const handleLoyaltyProgram = (index) => {
    setLoyaltyProgram(index)
  }

  const handleCustomField = (index) => {
    setCustomField(index)
  }

  const handleSMSOTP = (index) => {
    setSMSOTP(index)
  }

  const handleAPIMessaging = (index) => {
    setAPIMessaging(index)
  }

  const ProductSelection = ({title, price, desc, onClose}) => {
    return (
      <div className="p-4 border rounded-lg w-full flex flex-col gap-y-1 relative pr-8">
        <h2 className="subheading font-medium">{title}</h2>
        <p className="subheading">{price}</p>
        <p className="main-desc">{desc}</p>

        <X onClick={onClose} className="absolute top-4 right-4 h-4 w-4 cursor-pointer"/>
      </div>
    )
  }

  const BundleLevel = ({id, title, price, checked, onCheckedChange}) => {
    return (
      <label htmlFor={id} name={id} className="border rounded-lg p-4 flex w-fit">
        <div className="pr-4">
          <h2 className="subheading font-medium">{title}</h2>
          <p className="main-desc mt-1">{price}</p>
        </div>
        <Checkbox id={id} className='mt-1' checked={checked} onCheckedChange={onCheckedChange}/>
      </label>
    )
  }

  const SelectInput = ({label, defaultValue, onValueChange, lists, name}) => {
    return (
      <div className="space-y-6 w-full">
        <div className="anim-up flex flex-col">
          <label className="subheading mb-2 font-medium">
            {label}
          </label>
          <Select name={name} defaultValue={defaultValue} onValueChange={onValueChange}>
            <SelectTrigger className="w-full">
              <SelectValue defaultValue={defaultValue}/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="max-h-[400px]">
                {lists.map((list, index) => <SelectItem value={list} key={index} onValueChange={() => onValueChange(list)}>{typeof list !== 'number' ? list : list.toLocaleString()}</SelectItem>)}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    )
  }

  const pricingConditions = [
    {
      title:'Marketing Hub',
      condition:marketingContact && marketingContact !== 1000,
      price:`฿${setMarketingContactPrice().toLocaleString()}/month`,
      desc:`Includes ${marketingContact.toLocaleString()} marketing contacts`,
      onClose:() => handleMarketingContacts(marketingContactsList[0])
    },
    {
      title:'Paid users',
      condition:paidUsers,
      price:`฿${setPaidUsersPrice().toLocaleString()}/month`,
      include:`Includes ${paidUsers} paid users`,
      onClose:() => handlePaidUsers(paidUsersList[0])
    },
    {
      title:'Loyalty Program',
      condition:loyaltyProgram && loyaltyProgram !== 'No',
      price:`฿${setLoyaltyProgramPrice().toLocaleString()}/month`,
      desc:`${loyaltyProgram}`,
      onClose:() => handleLoyaltyProgram(loyaltyProgramList[0])
    },
    {
      title:'Custom Field',
      condition:customField,
      price:`฿${setCustomFieldPrice().toLocaleString()}/month`,
      desc:`Includes ${customField} custom fields`,
      onClose:() => handleCustomField(customFieldList[0]),
    },
    {
      title:'SMS OTP',
      condition:smsOTP,
      price:`฿${setSMSOTPPrice().toLocaleString()}/month`, 
      desc:`Includes ${smsOTP.toLocaleString()} OTPs${smsOTP === 5000 ? ', valid within 12 months' : smsOTP === 18000 || 60000 ? ', valid within 24 months' : ''}`,
      onClose:() => handleSMSOTP(smsOTPList[0])
    },
    {
      title:'LineOA API Messaging',
      condition:apiMessaging && packageType === 'LineOA CRM' && apiMessaging !== 'No',
      price:`฿${setAPIMessagingPrice().toLocaleString()}/month`,
      desc:`Includes API Messaging`,
      onClose:() => handleAPIMessaging(apiMessagingList[0])
    }
  ]

  return (
    <div className="border rounded-2xl p-10 mt-[60px] flex gap-x-10 w-full">
      <main className="flex flex-col gap-y-6 w-full">
        <div className="flex gap-4">
          <BundleLevel id='starter' title='Starter' price='฿750/month' onCheckedChange={() => handlePackageType('Starter')} checked={packageType === 'Starter'}/>
          <BundleLevel id='lineoa' title='LineOA CRM' price='฿6,900/month' onCheckedChange={() => handlePackageType('LineOA CRM')} checked={packageType === 'LineOA CRM'}/>
          <BundleLevel id='enterprise' title='Enterprise' price='฿21,900/month' onCheckedChange={() => handlePackageType('Enterprise')} checked={packageType === 'Enterprise'}/>
        </div>
        {/* <SelectInput label='Package type' lists={packageTypeList} onValueChange={handlePackageType} defaultValue={packageType} name='package-type'/> */}
        <SelectInput label='No. of marketing contacts' lists={marketingContactsList} onValueChange={handleMarketingContacts} defaultValue={marketingContact} name='marketing-contacts'/>
        <SelectInput label='No. of paid users' lists={paidUsersList} onValueChange={handlePaidUsers} defaultValue={paidUsers} name='paid-users'/>
        <SelectInput label='Loyalty Program' lists={loyaltyProgramList} onValueChange={handleLoyaltyProgram} defaultValue={loyaltyProgram} name='loyalty-program'/>
        <SelectInput label='Custom Field' lists={customFieldList} onValueChange={handleCustomField} defaultValue={customField} name='custom-field'/>
        <SelectInput label='No. of SMS OTP' lists={smsOTPList} onValueChange={handleSMSOTP} defaultValue={smsOTP} name='SMS-OTP'/>
        {packageType === 'LineOA CRM' ? (
          <SelectInput label='LineOA API Messaging' lists={apiMessagingList} onValueChange={handleAPIMessaging} defaultValue={apiMessaging} name='API-Messaging'/>
        ) : null}
      </main>
      <section className="w-full">
        <div>
          <h1 className="text-center text-3xl font-semibold">Create a bundle</h1>
          <div className='flex gap-x-2 items-center justify-center mt-4'>
            <h1 className="text-[40px] text-primary font-bold tracking-[-1px]">฿ {totalPrice.toLocaleString()}</h1>
            <div>
              <p className="main-desc">per</p>
              <p className="main-desc">month</p>
            </div>
          </div>
        </div>
        <div className="my-6 flex flex-wrap gap-4">
          {pricingConditions.map(condition => (
            <>
              {condition.condition ? (
                <ProductSelection title={condition.title} price={condition.price} desc={condition.desc} onClose={condition.onClose}/>
              ) : null}
            </>
          ))}
        </div>
      </section>
    </div>
  )
}