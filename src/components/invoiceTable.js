import { DataList, Pagination } from "./pagination";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import React, { useState,useEffect  } from 'react';
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function InvoiceTable({invoices_props}) {
  const { t } = useTranslation()
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
        <TableCell>{t('paid_via_qr')}</TableCell>
        <TableCell className="text-right">฿ {formatted_total}</TableCell>
      </TableRow>
    )
  }

  const TableDataMobile = ({name, status, formatted_total}) => {
    return (
      <div className="border-b flex flex-col gap-y-5 py-4">
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center justify-between">
            <h2 className="main-desc">{t('settings.purchase_history.invoice')}</h2>
            <p className="subheading">{name}</p>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="main-desc">{t('settings.purchase_history.status')}</h2>
            <p className="subheading">{status}</p>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="main-desc">{t('settings.purchase_history.method')}</h2>
            <p className="subheading">{t('paid_via_qr')}</p>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="main-desc">{t('settings.purchase_history.amount')}</h2>
            <p className="subheading">฿ {formatted_total}</p>
          </div>
        </div>

        <Button className='btn-with-icon' variant="secondary">
          <Download className="w-4 h-4"/>
          Download Invoice
        </Button>
      </div>
    )
  }

  return (
    <>
      <h2 className="secondary-heading">{t('settings.purchase_history.title')}</h2>
      <p className="main-desc">{t('settings.purchase_history.desc')}</p>
      
      <section className="mt-8">
        <div className="table-invoice-desktop">
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
                <TableData status={invoice.status} name={invoice.name} formatted_total={invoice.total}/>
              )).slice((currentPage - 1) * listPerPage, currentPage * listPerPage)}
            </TableBody>
          </Table>
        </div>

        <div className="md:hidden flex flex-col table-invoice-mobile">
          {invoices_props.message.map((invoice) => (
            <TableDataMobile status={invoice.status} name={invoice.name} formatted_total={invoice.total}/>
          ))}
        </div>

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