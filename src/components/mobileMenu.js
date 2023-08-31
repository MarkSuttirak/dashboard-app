import pjob from "../img/pjob.svg";

const MobileMenu = () => {
  return (
    <>
    <header className="mobile-menu header-mobile">
      <div className="nav-btns">
        <img
          src={pjob}
          alt=""
        />
      </div>
    </header>
    <footer className="mobile-menu footer-mobile">
      I am a footer
    </footer>
    </>
  )
}

export default MobileMenu;