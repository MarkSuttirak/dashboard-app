import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "src/components/ui/table"

export default function Features({data, type, color}){
  return (
    <Table>
      <TableHeader>
        <TableRow className='hover:bg-transparent'>
          <TableHead style={{color:color}} className='main-heading px-0 py-[11px] w-1/3'>{type}</TableHead>
          <TableHead className='main-heading px-0 py-[11px] w-1/3'>Free trial</TableHead>
          <TableHead className='main-heading px-0 py-[11px] w-1/3'>Pro plan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d) => (
          <TableRow key={d.title} className='border-0 hover:bg-transparent'>
            <TableCell className="secondary-desc py-[11px] px-0 w-1/3">{d.title}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-0 w-1/3'>{d.free}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-0 w-1/3'>{d.pro}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}