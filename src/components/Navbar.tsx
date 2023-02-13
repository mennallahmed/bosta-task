import navLogo from "../assets/bosta-logo.svg"

const Navbar = () => {
  return (
      <nav
        className={`container mx-auto py-6 px-8 flex-col flex md:flex-row justify-between`}
      >
        <img className="w-[200px] h-[150px] md:w-[120px] md:h-[36px] mx-auto mb-5 md:mb-0 md:mx-0" src={navLogo} alt="navbar logo" />
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-3 lg:gap-8 text-base font-medium">
          <a className="mb-3 md:mb-0 text-secondary text-center" href="/">
            Track Shipment
          </a>
        </div>
      </nav>
  );
};

export default Navbar;
