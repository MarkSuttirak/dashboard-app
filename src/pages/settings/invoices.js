import React, { useState,useEffect  } from 'react';
import { user } from "src/client/api";

import InvoiceTable from '../../components/invoiceTable';
import { Loader2 } from 'lucide-react';
import Loading from 'src/components/ui/loading';
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

  return userInvoices ? <InvoiceTable invoices_props={userInvoices}/> : <Loading />
}