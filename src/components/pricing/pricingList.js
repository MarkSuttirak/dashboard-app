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