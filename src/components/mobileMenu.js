import { BellIcon } from "@heroicons/react/24/outline";
import pjob from "../img/pjob.svg";
import { Link } from "react-router-dom";
import { PlusCircleIcon, HomeIcon, ChatBubbleOvalLeftEllipsisIcon, Bars3Icon, CommandLineIcon } from "@heroicons/react/24/outline";

const MobileMenu = () => {
  const footerMenus = [
    {
      title: "Dashboard",
      link: "/",
      icon: <HomeIcon width='20'/>
    },
    {
      title: "Site & App",
      link: "/about",
      icon: <CommandLineIcon width='20'/>
    },
    {
      title: 'Add',
      link: '/add',
      icon: <PlusCircleIcon width='20'/>
    },
    {
      title: 'Inbox',
      link: '/inbox',
      icon: <ChatBubbleOvalLeftEllipsisIcon width='20'/>
    },
    {
      title: 'Manage',
      link: '/manage',
      icon: <Bars3Icon width='20'/>
    }
  ]
  return (
    <>
    <header className="mobile-menu header-mobile">
      <img
        src={pjob}
        alt=""
      />
      <h2 className="subheading">My site</h2>
      <BellIcon width='24'/>
    </header>
    <footer className="mobile-menu footer-mobile">
      <ul className="flex justify-between w-full">
        {footerMenus.map((menu, index) => (
          <li key={index} className="block text-center" style={{width:`${100 / footerMenus.length}%`}}>
            <Link to={menu.link}>
              <span className="inline-block m-auto">{menu.icon}</span>
              <p className="footer-menu-text">{menu.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
    </>
  )
}

export default MobileMenu;