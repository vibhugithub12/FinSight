import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { itemName: "Home", route: "/" },
  { itemName: "Tracker", route: "/tracker" },
  { itemName: "Contact", route: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [dropDownIcon, setDropDownIcon] = useState("|||");
  const [dropDownVisible, setDropDownVisible] = useState(false);

  // Close dropdown on clicks outside of dropdown
  useEffect(() => {
    const handleClick = (event) => {
      if (dropDownVisible) {
        // Check if click is on the dropdown button or dropdown menu
        const isDropdownButton = event.target.closest("button");
        const isDropdownMenu = event.target.closest(".dropdown-menu");

        if (!isDropdownButton && !isDropdownMenu) {
          setDropDownVisible(false);
          setDropDownIcon("|||");
        }
      }
    };

    // Add event listener to document
    document.addEventListener("mousedown", handleClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [dropDownVisible]); // Close dropdown when route changes

  useEffect(() => {
    setDropDownVisible(false);
    setDropDownIcon("|||");
  }, [location.pathname]);

  const pathName = location.pathname;

  return (
    <div className="fixed bg-primary-light flex justify-between h-16 z-10 top-0 w-full pr-10 md:px-2">
      <NavLink className="self-center" to={"/"}>
        <img src="/logo.png" width={120} alt="" />
      </NavLink>
      <ul className="hidden md:flex w-1/2 items-center justify-end gap-4 px-4">
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.route}
                className={`${
                  item.route == pathName
                    ? "text-gray-700 underline"
                    : "text-black"
                } `}
              >
                {item.itemName}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setDropDownVisible((prev) => !prev);
          if (!dropDownVisible) {
            setDropDownIcon("<-");
          } else {
            setDropDownIcon("|||");
          }
        }}
        className="flex md:hidden rotate-90 text-2xl text-black font-bold"
      >
        {dropDownIcon}
      </button>
      {dropDownVisible && (
        <ul className="md:hidden dropdown-menu fixed text-2xl top-17 text-center right-0 bg-primary-light w-full">
          {navItems.map((item, index) => {
            return (
              <li className="py-2" key={index}>
                <NavLink
                  to={item.route}
                  className={` ${
                    item.route == pathName
                      ? "text-gray-700 underline"
                      : "text-black"
                  } `}
                >
                  {item.itemName}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
