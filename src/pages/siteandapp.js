import { UserIcon, ArrowLeftOnRectangleIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon, ClipboardDocumentListIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, InboxStackIcon, PencilIcon, ReceiptPercentIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SiteAndApp = () => {
  return (
    <>
      <div className="page-section">
        <header className="dashboard-container bg-white mb-4">
          <h1 className="main-title">Site & App</h1>
        </header>
        <div className="dashboard-container mb-5">
          <h2 className="subheading">WEBSITE</h2>
          <div className="border rounded-lg p-4">
            <p className="tab-desc">To design and publish your site so clients can find your services online, go to your Zaviago account on desktop.</p>
          </div>
        </div>

        <div className="dashboard-container mb-5">
          <h2 className="subheading">MOBILE APPS</h2>
          <div className="border rounded-lg">
            <div className="p-4">
              <h2 className="subheading">Spaces by Zaviago</h2>
              <p className="tab-desc">Invite Code: <span className="text-link">LDGF54</span></p>
              <p className="tab-desc flex items-center">
                <UserIcon width='20' className="inline-block mr-2" />
                1 Member
              </p>
            </div>
            <div className="border-t py-4">
              <button className="w-1/3">
                <div className="flex justify-center mb-2">
                  <PencilIcon width='24'/>
                </div>
                <p className="tab-desc-small">Customise</p>
              </button>
              <button className="w-1/3">
                <div className="flex justify-center mb-2">
                  <UserPlusIcon width='24'/>
                </div>
                <p className="tab-desc-small">Add a Contact</p>
              </button>
              <button className="w-1/3">
                <div className="flex justify-center mb-2">
                  <DevicePhoneMobileIcon width='24'/>
                </div>
                <p className="tab-desc-small">View</p>
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-container mb-5">
          <h2 className="subheading">Get your own mobile app</h2>
          <div className="border rounded-lg p-4">
            <p className="tab-desc mb-2">Increase engagement with a fully branded app to list on the App Store and Google Play.</p>
            <Link className="text-white bg-[#0788F5] inline-flex px-3 py-1 rounded-full text-sm items-center gap-x-1">
              Check it out
            </Link>
          </div>
        </div>

        <div className="dashboard-container mb-5">
          <h2 className="subheading">Get more engagement on Zaviago</h2>
          <p className="tab-desc mb-2">Use these tools to promote and grow your business or community.</p>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center gap-x-3">
              <div>
                <ComputerDesktopIcon width='40'/>
              </div>
              <div>
                <h2 className="subheading">Get your site discovered</h2>
                <p className="tab-desc-small">Let people discover your site on the Spaces by Zaviago app through different features.</p>
              </div>
              <div>
                <ChevronRightIcon width='24'/>
              </div>
            </div>

            <div className="flex justify-between items-center gap-x-3">
              <div>
                <ReceiptPercentIcon width='40'/>
              </div>
              <div>
                <h2 className="subheading">Offer coupons</h2>
                <p className="tab-desc-small">Treat your customers to discounts, free shipping & more.</p>
              </div>
              <div>
                <ChevronRightIcon width='24'/>
              </div>
            </div>
            
            <div className="flex justify-between items-center gap-x-3">
              <div>
                <ClipboardDocumentListIcon width='40'/>
              </div>
              <div>
                <h2 className="subheading">Share a social post</h2>
                <p className="tab-desc-small">Choose a template and customise it to stand out on social media.</p>
              </div>
              <div>
                <ChevronRightIcon width='24'/>
              </div>
            </div>

            <div className="flex justify-between items-center gap-x-3">
              <div>
                <InboxStackIcon width='40'/>
              </div>
              <div>
                <h2 className="subheading">Create an email campaign</h2>
                <p className="tab-desc-small">Engage your audience with offers, newsletters, and more.</p>
              </div>
              <div>
                <ChevronRightIcon width='24'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SiteAndApp;