import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"

export default function PackageSection({icon, title, desc, content, footer}){
  return (
    <Card className='p-10'>
      <CardHeader className='px-0 pt-0'>
        <CardTitle className='flex gap-x-[10px] secondary-heading'>
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      {content}
      {footer}
    </Card>
  )
}