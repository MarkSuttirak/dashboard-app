import { ArrowUpRight, DownloadCloud01 } from "@untitled-ui/icons-react/build/cjs";
import HeaderSettings from "../components/headerSettings";
import Spacer from "../components/spacer";
import Table from "../components/table";
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const BillingSettings = () => {
  const tableInfo = [
    {
      invoice: 'Invoice #007',
      billing_date: 'Dec 1, 2022',
      status: 'Paid',
      amount: 'USD $10.00',
    },
    {
      invoice: 'Invoice #007',
      billing_date: 'Nov 1, 2022',
      status: 'Paid',
      amount: 'USD $10.00',
    }
  ]

  return (
    <div className="page-section">
      <div className="dashboard-settings">
        <HeaderSettings />

        <div>
          <h3 className="main-heading">Last 30 days</h3>

          <dl className="mt-5 grid gap-5 grid-cols-2">
            <div
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-16 border"
            >
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="main-heading flex gap-x-2">
                    Basic plan
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                  </h2>
                  <p className="tab-desc">Our most popular plan for small teams</p>
                </div>
                <div>
                  <p className="tab-desc">
                    <span className="text-[40px] font-bold text-black">$20</span> per month</p>
                </div>
              </div>
              <Spacer size={20}/>
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <p className="tab-desc">15 users</p>
                </div>
              </div>
              <div className="absolute bottom-0 border-t px-4 py-4 right-0 w-full text-end">
                <button className="white-outline-btn">
                  Upgrade plan
                  <ArrowUpRight viewBox="-6 0 30 20" width="24" height="24"/>
                </button>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 border"
            >
              <p className="main-heading">Payment method</p>
              <p className="tab-desc">Change how you pay for your plan</p>
              <Spacer size={20}/>
              <div className="px-5 py-4 border rounded-lg flex justify-between items-center">
                <div>
                  <h2 className="subheading">Visa ending in 1234</h2>
                  <p className="tab-desc">Expiry 06/2024</p>
                </div>
                <div>
                  <button className="black-btn black-btn-sm">Edit</button>
                </div>
              </div>
            </div>
          </dl>
        </div>
        <Spacer size={60}/>

        <div className="pb-5 flex items-center justify-between">
          <div>
            <h3 className="main-heading">Billing history</h3>
            <p className="tab-desc">Download your previous plan receipts and usage details</p>
          </div>
          <button
            type="button"
            className="primary-btn"
          >
            <DownloadCloud01 />
            Download all
          </button>
        </div>

        <Table info={tableInfo}/>
      </div>
    </div>
  )
}

export default BillingSettings;