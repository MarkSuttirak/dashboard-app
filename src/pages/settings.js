import SwitchWithDesc from "../components/switchWithDesc";
import Table from "../components/table";

const Settings = () => {
  const menus = [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'My details',
      href: '#',
    },
    {
      name: 'Password',
      href: '#',
    }
  ]
  return (
    <div className="page-section">
      <div className="dashboard-container">
        <h1>Settings</h1>
        <nav className="tabs">
          {menus.map((item) => (
            <a key={item.name} href={item.href} className="tab-menu">
              {item.name}
            </a>
          ))}
        </nav>

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
            <button className="primary-btn">Upgrade</button>
          </section>
        </div>

        <Table />
      </div>
    </div>
  )
}

export default Settings;