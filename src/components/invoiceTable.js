import { DataList, Pagination } from "./pagination";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import React, { useState,useEffect  } from 'react';
export default function InvoiceTable({invoices_props}) {
  const [currentPage, setCurrentPage] = useState(1)
  const listPerPage = 6
   
  useEffect(()=>{
    console.log(invoices_props)
  },[] )

  return (
    <>
      <h2 className="secondary-heading">Invoices</h2>
      <p className="secondary-desc">Update your account settings. Set your preferred language and timezone.</p>
      
      <section  className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices_props.message.map((invoice) => (
              <TableRow key={invoice.name}>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>method</TableCell>
                <TableCell className="text-right">{invoice.formatted_total}</TableCell>
              </TableRow>
            )).slice((currentPage - 1) * listPerPage, currentPage * listPerPage)}
          </TableBody>
        </Table>
        <Pagination data={invoices_props.message} currentPage={currentPage} setCurrentPage={setCurrentPage} listPerPage={6}/>
      </section>
    </>
  )
}