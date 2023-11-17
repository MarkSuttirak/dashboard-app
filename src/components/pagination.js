import { Button } from "src/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Separator } from "./ui/separator"
import { useState } from 'react'

export function Pagination({data, currentPage, setCurrentPage, listPerPage}){
  const totalPage = Math.ceil(data.length / listPerPage)

  const click = {
    firstPage: () => setCurrentPage(1),
    prevPage: () => setCurrentPage(currentPage - 1),
    nextPage: () => setCurrentPage(currentPage + 1),
    lastPage: () => setCurrentPage(totalPage)
  }

  const buttons = [
    {onClick:click.firstPage, icon:<ChevronsLeft viewBox="0 0 24 24" width='16' height='16'/>, disabled:currentPage == 1 ? true : false},
    {onClick:click.prevPage, icon:<ChevronLeft viewBox="0 0 24 24" width='16' height='16'/>, disabled:currentPage == 1 ? true : false},
    {onClick:click.nextPage, icon:<ChevronRight viewBox="0 0 24 24" width='16' height='16'/>, disabled:currentPage == totalPage ? true : false},
    {onClick:click.lastPage, icon:<ChevronsRight viewBox="0 0 24 24" width='16' height='16'/>, disabled:currentPage == totalPage ? true : false}
  ]

  return (
    <section className="flex gap-x-4 items-center justify-end">
      <h2 className="subheading font-medium">Page {currentPage} of {totalPage}</h2>

      <div className="flex gap-x-2">
        {buttons.map(b => (
          <Button variant='outline' className='p-2' onClick={b.onClick} disabled={b.disabled}>
            {b.icon}
          </Button>
        ))}
      </div>
    </section>
  )
}

export function DataList({children, pagination, listPerPage = 10, emptyText = "There is no app you are looking for."}){
  const [currentPage, setCurrentPage] = useState(1)
  const lists = pagination ? listPerPage : null
  return (
    <>
      {pagination ? children.slice((currentPage - 1) * lists, currentPage * lists) : children}

      {children.length < 1 && <p className="main-desc">{emptyText}</p>}

      {pagination && (
        <>
          <Separator className='my-[10px]'/>
          <Pagination data={children} currentPage={currentPage} setCurrentPage={setCurrentPage} listPerPage={lists}/>
        </>
      )}
    </>
  )
}