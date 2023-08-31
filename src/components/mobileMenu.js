import { BellIcon } from "@heroicons/react/24/outline";
import pjob from "../img/pjob.svg";

const MobileMenu = () => {
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
      I am a footer
    </footer>
    </>
  )
}

export default MobileMenu;