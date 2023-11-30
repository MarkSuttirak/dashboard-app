import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "src/components/ui/table"

export default function PricingTable({data, type, color}){
  return (
    <Table>
      <TableHeader>
        <TableRow className='hover:bg-transparent'>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/4'>{type}</TableHead>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/4'>Free</TableHead>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/4'>Starter</TableHead>
          <TableHead className='main-heading px-0 py-[11px] px-2 w-1/4'>LineOA CRM</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d) => (
          <TableRow key={d.title} className='border-0 hover:bg-transparent'>
            <TableCell className="secondary-desc py-[11px] px-2 w-1/4">{d.title}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-2 w-1/4'>{d.free}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-2 w-1/4'>{d.starter}</TableCell>
            <TableCell className='text-base font-medium py-[11px] px-2 w-1/4'>{d.lineoa}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}