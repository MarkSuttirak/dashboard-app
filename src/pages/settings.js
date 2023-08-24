import { Link } from "react-router-dom";
import Spacer from "../components/spacer";
import SwitchWithDesc from "../components/switchWithDesc";
import Table from "../components/table";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import HeaderSettings from "../components/headerSettings";

const Settings = () => {
  const menus = [
    {
      name: 'My Profile',
      href: '/profile',
    },
    {
      name: 'My details',
      href: '#',
    },
    {
      name: 'Password',
      href: '#',
    },
    {
      name: 'Team',
      href: '#',
    },
    {
      name: 'Plan',
      href: '#',
    },
    {
      name: 'Billing',
      href: '#',
    },
    {
      name: 'Email',
      href: '#',
    },
    {
      name: 'Notifications',
      href: '#',
    }
  ]

  const tableInfo = [
    {
      invoice: 'Invoice #007 - Dec 2022',
      billing_date: 'Dec 1, 2022',
      status: 'Paid',
      amount: 'USD $10.00',
    },
    {
      invoice: 'Invoice #007 - Nov 2022',
      billing_date: 'Nov 1, 2022',
      status: 'Paid',
      amount: 'USD $10.00',
    }
  ]
  return (
    <div className="page-section">
      <div className="dashboard-settings">

        <HeaderSettings />

        <div className="tab-settings">
          <h2 className="main-heading">Settings</h2>
          <p className="tab-desc">We may still send you important notifications about your account outside of your notification settings.</p>
          <SwitchWithDesc title="Comments" desc="These are notifications for comments on your posts and replies to your comments." />

          <hr className="my-5"/>

          <h2 className="subheading">Notification settings</h2>
          <p className="tab-desc">We may still send you important notifications about your account outside of your notification settings.</p>

          <input
            type="text"
            name="test"
            id="test"
            className="form-input"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <section className="head-section">
            <div>
              <h2 className="main-heading">Billing and invoicing</h2>
              <p className="tab-desc">Pick an account plan that fits your workflow.</p>
            </div>
            <button className="secondary-btn">Upgrade</button>
          </section>
        </div>

        <Table info={tableInfo}/>
      </div>
    </div>
  )
}

export default Settings;