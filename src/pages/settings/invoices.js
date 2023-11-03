import React, { useState,useEffect  } from 'react';
import { user } from "src/client/api";

import InvoiceTable from '../../components/invoiceTable';
export default function Invoices() {
  const [userInvoices,setuserInvoices]=useState(null)
  
  const fetchData = async()=> {
    if( userInvoices ==null ){
      setuserInvoices( await  user.getInvoices( ) )
    }
    
    console.log(userInvoices)
  }
  useEffect(()=>{
    fetchData()
    // if( userInvoices != null ){
      
    //   if( typeof(userInvoices.message) == 'object' ){
    //     console.log(userInvoices)
    //     if( userInvoices.message.length>0 ){
    //       userInvoices.message.forEach(element => {
    //         let temp={
    //           invoice:element.name,
    //           paymentStatus:element.status,
    //           totalAmount:element.formatted_total,
    //           paymentMethod:"Method"
    //          }
    //          invoices.push(temp)
    //          setsendInvoices(invoices)
    //          console.log(sendInvoices)
    //       });
    //     }
    //   }
    // }
  },[] )

    fetchData();
  

  
  return userInvoices ? <InvoiceTable invoices_props={userInvoices}/> : <div>Loading...</div>
}