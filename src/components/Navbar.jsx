import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { itemName: "Home", route: "/" },
  { itemName: "Tracker", route: "/tracker" },
  { itemName: "Contact", route: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  const pathName = location.pathname;

  return (
    <div className="fixed bg-primary-light flex justify-between h-16 z-10 top-0 w-full px-2">
      <a href="/" className="self-center">
        <img src="/logo.png" width={120} alt="" />
      </a>
      <ul className="flex w-1/2 items-center justify-end gap-4 px-4">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.route}
                className={`${item.route==pathName?'text-gray-700 underline':'text-black'} `}
              >
                {item.itemName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
