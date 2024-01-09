import { DataList, Pagination } from "./pagination";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import React, { useState,useEffect  } from 'react';
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";

export default function InvoiceTable({invoices_props}) {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1)
  const listPerPage = 6
   
  useEffect(()=>{
    console.log(invoices_props)
  },[] )

  const TableData = ({name, status, formatted_total}) => {
    return (
      <TableRow key={name} className="hover:bg-transparent">
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>method</TableCell>
        <TableCell className="text-right">{formatted_total}</TableCell>
      </TableRow>
    )
  }

  return (
    <>
      <h2 className="secondary-heading">{t('settings.purchase_history.title')}</h2>
      <p className="main-desc">{t('settings.purchase_history.desc')}</p>
      
      <section  className="mt-8">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[240px]">{t('settings.purchase_history.invoice')}</TableHead>
              <TableHead>{t('settings.purchase_history.status')}</TableHead>
              <TableHead>{t('settings.purchase_history.method')}</TableHead>
              <TableHead className="text-right">{t('settings.purchase_history.amount')}</TableHead>
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