import { DataList, Pagination } from "./pagination";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import React, { useState,useEffect  } from 'react';
import { Separator } from "./ui/separator";

export default function InvoiceTable({invoices_props}) {
  const [currentPage, setCurrentPage] = useState(1)
  const listPerPage = 6
   
  useEffect(()=>{
    console.log(invoices_props)
  },[] )

  const TableData = ({name, status, formatted_total}) => {
    return (
      <TableRow key={name}>
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>method</TableCell>
        <TableCell className="text-right">{formatted_total}</TableCell>
      </TableRow>
    )
  }

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
              <TableData status={invoice.status} name={invoice.name} formatted_total={invoice.formatted_total}/>
            )).slice((currentPage - 1) * listPerPage, currentPage * listPerPage)}
          </TableBody>
        </Table>

        {listPerPage > 6 && (
          <>
            <Separator className='my-[10px]'/>
            <Pagination data={invoices_props.message} currentPage={currentPage} setCurrentPage={setCurrentPage} listPerPage={6}/>
          </>
        )}
      </section>
    </>
  )
}