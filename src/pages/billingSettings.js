import HeaderSettings from "../components/headerSettings";
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
          <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3>

          <dl className="mt-5 grid gap-5 grid-cols-2">
            <div
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-16 shadow"
            >
              <p className="main-heading">Basic plan</p>
              <p className="tab-desc">Our most popular plan for small teams</p>
              <div className="absolute bottom-0 border-t px-4 py-4 right-0 w-full">
                <button className="white-outline-btn">
                  Upgrade plan
                </button>
              </div>
            </div>
            <div
              className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-16 shadow"
            >
              <p className="main-heading">Payment method</p>
              <p className="tab-desc">Change how you pay for your plan</p>

              <div className="p-5 border rounded-lg flex justify-between">
                <div>
                  <h2 className="subheading">Visa ending in 1234</h2>
                  <p className="tab-desc">Expiry 06/2024</p>
                </div>
                <div>
                  <button className="black-btn">Edit</button>
                </div>
              </div>
            </div>
          </dl>
        </div>

        <Table info={tableInfo}/>
      </div>
    </div>
  )
}

export default BillingSettings;