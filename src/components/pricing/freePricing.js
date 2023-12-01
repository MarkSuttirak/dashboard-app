import { Button } from "src/components/ui/button";
import { CheckCircledIcon, CrossCircledIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card"

export default function FreePricing(){
  const privileges = ['1 user', 'Free tools', 'Up to 1 dashboard, each with 1 report per dashboard', '1 blog, including Zaviago branding']

  return (
    <Card className='w-1/3'>
      <CardHeader>
        <CardTitle className='text-3xl tracking-[-0.75px] text-[#18181B] font-semibold'>General</CardTitle>
        {/* <CardDescription className="main-desc pt-4">Package for small businesses or personal use.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className='flex gap-x-2 items-center'>
          <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">Free</h1>
          <p className="main-desc">Forever</p>
        </div>

        <a href=''>
          <Button className='btn-with-icon my-6 w-full'>
            <LightningBoltIcon />
            Get started for free
          </Button>
        </a>

        <div className="flex flex-col gap-y-4">
          {privileges.map(p => (
            <div className="flex gap-x-2 subheading font-medium">
              <div className="w-4 mt-[2px]">
                <CheckCircledIcon color='#2CB216' />
              </div>
              <p className="subheading">{p}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}