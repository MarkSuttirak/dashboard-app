import { Input } from "src/components/ui/input";
import { Separator } from "src/components/ui/separator";
import { Button } from "src/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectGroup, SelectValue } from "src/components/ui/select"
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CustomPricing(){
  const packageTypeList = ['Starter', 'LineOA CRM']
  const marketingContactsList = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
  const paidUsersList = [0, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25];
  const loyaltyProgramList = ['No','Standard','Customize']
  const customFieldList = [0,10,25]
  const smsOTPList = [0,5000,18000,60000]

  const [totalPrice, setTotalPrice] = useState(0);
  const [packageType, setPackageType] = useState(packageTypeList[0])
  const [marketingContact, setMarketingContact] = useState(marketingContactsList[0]);
  const [paidUsers, setPaidUsers] = useState(paidUsersList[0]);
  const [loyaltyProgram, setLoyaltyProgram] = useState(loyaltyProgramList[0])
  const [customField, setCustomField] = useState(customFieldList[0])
  const [smsOTP, setSMSOTP] = useState(smsOTPList[0])

  useEffect(() => {
    calculateTotalPrice();
  }, [packageType, marketingContact, paidUsers, loyaltyProgram, customField, smsOTP]);

  const setPackageTypePrice = () => {
    const packageTypeIndex = packageTypeList.indexOf(packageType);
    let packageTypePrice;
    switch (packageTypeIndex){
      case 0: packageTypePrice = 750;
        break
      case 1: packageTypePrice = 6900;
        break
      default: packageTypePrice = 750;
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
    const paidUsersPrice = paidUsersList.indexOf(paidUsers) * 900;
    return paidUsersPrice
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
    const newTotalPrice = setPackageTypePrice() + setMarketingContactPrice() + setPaidUsersPrice() + setLoyaltyProgramPrice() + setCustomFieldPrice() + setSMSOTPPrice();
    setTotalPrice(newTotalPrice);
  };

  const handlePackageType = (index) => {
    setPackageType(index);
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

  const ProductSelection = ({title, price, desc, onClose}) => {
    return (
      <div className="p-4 border rounded-lg w-fit flex flex-col gap-y-1 relative">
        <h2 className="subheading font-medium">{title}</h2>
        <p className="subheading">{price}</p>
        <p className="main-desc">{desc}</p>
      </div>
    )
  }

  const SelectInput = ({label, defaultValue, onValueChange, lists, name}) => {
    return (
      <div className="space-y-6 w-full">
        <div className="anim-up flex flex-col">
          <label className="subheading mb-2 font-medium">
            {label}
          </label>
          <Select className='form-input' name={name} defaultValue={defaultValue} onValueChange={onValueChange}>
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

  return (
    <>
      <div className='flex gap-x-2 items-center'>
        <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">฿ {totalPrice.toLocaleString()}</h1>
        <div>
          <p className="main-desc">per</p>
          <p className="main-desc">month</p>
        </div>
      </div>
      <div className="my-6 flex flex-wrap gap-4">
        {marketingContact && marketingContact !== 1000 ? (
          <ProductSelection title='Marketing Hub' price={`฿${setMarketingContactPrice().toLocaleString()}/month`} desc={`Includes ${marketingContact.toLocaleString()} marketing contacts`}/>
        ) : null}

        {paidUsers ? (
          <ProductSelection title='Paid users' price={`฿${setPaidUsersPrice().toLocaleString()}/month`} desc={`Includes ${paidUsers} paid users`}/>
        ) : null}

        {loyaltyProgram && loyaltyProgram !== 'No' ? (
          <ProductSelection title='Loyalty program' price={`฿${setLoyaltyProgramPrice().toLocaleString()}/month`} desc={`${loyaltyProgram}`}/>
        ) : null}

        {customField ? (
          <ProductSelection title='Custom Field' price={`฿${setCustomFieldPrice().toLocaleString()}/month`} desc={`Includes ${customField} custom fields`}/>
        ) : null}

        {smsOTP ? (
          <ProductSelection title='SMS OTP' price={`฿${setSMSOTPPrice().toLocaleString()}/month`} desc={`Includes ${smsOTP} OTPs${smsOTP === 5000 ? ', valid within 12 months' : smsOTP === 18000 || 60000 ? ', valid within 24 months' : ''}`}/>
        ) : null}
      </div>
      <main className="flex flex-col gap-y-6">
        <SelectInput label='Package type' lists={packageTypeList} onValueChange={handlePackageType} defaultValue={packageType} name='package-type'/>
        <SelectInput label='No. of marketing contacts' lists={marketingContactsList} onValueChange={handleMarketingContacts} defaultValue={marketingContact} name='marketing-contacts'/>
        <SelectInput label='No. of paid users' lists={paidUsersList} onValueChange={handlePaidUsers} defaultValue={paidUsers} name='paid-users'/>
        <SelectInput label='Loyalty Program' lists={loyaltyProgramList} onValueChange={handleLoyaltyProgram} defaultValue={loyaltyProgram} name='loyalty-program'/>
        <SelectInput label='Custom Field' lists={customFieldList} onValueChange={handleCustomField} defaultValue={customField} name='custom-field'/>
        <SelectInput label='No. of SMS OTP' lists={smsOTPList} onValueChange={handleSMSOTP} defaultValue={smsOTP} name='SMS-OTP'/>
      </main>
    </>
  )
}