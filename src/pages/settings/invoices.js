import React, { useState,useEffect  } from 'react';
import { user } from "src/client/api";

import InvoiceTable from '../../components/invoiceTable';
export default function Invoices() {
  const [userInvoices,setuserInvoices]=useState(null)
  
  const fetchData = async()=> {
    if( userInvoices ==null ){
      setuserInvoices( await  user.getInvoices( ) )
    }
  }
  useEffect(()=>{
    fetchData()
  },[] )

    fetchData();

  return userInvoices ? <InvoiceTable invoices_props={userInvoices}/> : <div>Loading...</div>
}