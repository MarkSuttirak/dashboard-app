import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "src/components/ui/table"

export default function PricingTable({data}){
  return (
    <Table>
      <TableHeader>
        <TableRow className='hover:bg-transparent'>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/5'>Title</TableHead>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/5'>Free</TableHead>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/5'>Starter</TableHead>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/5'>LineOA CRM</TableHead>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/5'>Enterprise</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d) => (
          <TableRow key={d.title} className='border-0 hover:bg-transparent'>
            <TableCell className="secondary-desc py-[11px] px-2 w-1/5">{d.title}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-2 w-1/5'>{d.free}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-2 w-1/5'>{d.starter}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-2 w-1/5'>{d.lineoa}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-2 w-1/5'>{d.lineoa}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}