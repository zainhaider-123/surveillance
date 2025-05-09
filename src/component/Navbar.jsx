import { SignInButton, UserButton, useUser, UserProfile } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // ADD useLocation and useNavigate
import { Link as ScrollLink } from "react-scroll";

const NavbarMenu = [
  { id: 1, title: "home", link: "home", type: "scroll" },
  { id: 2, title: "project", link: "project", type: "scroll" },
  { id: 3, title: "about us", link: "aboutus", type: "scroll" },
];

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [click, setClick] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const location = useLocation(); // useLocation hook
  const navigate = useNavigate(); // useNavigate hook

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleProfile = () => setShowProfile(!showProfile);

  return (
    <nav className='text-zinc-100 md:flex justify-between md:items-center relative flex py-2 flex-col md:flex-row md:pt-5 font-bold md:px-0 px-2'>
      <div className='flex justify-between'>
        <Link to="/" className='text-xl font-bold font-display uppercase flex flex-col items-start'>
          surveillance <br /> <span className='font-extralight 70'>system</span>
        </Link>
        <div className='md:hidden flex justify-end'>
          <i className={`${click ? "fas fa-times" : "fas fa-bars"} mt-1.5`} onClick={handleClick} />
        </div>
      </div>

      <div>
        <ul className={`flex md:flex-row flex-col ${click ? "block" : "hidden"} md:flex md:items-center`}>
          {NavbarMenu.map((item) => (
            <li
              key={item.id}
              className="md:ml-8 flex justify-end relative before:content-[''] before:absolute before:left-1/2 before:w-0 before:origin-center md:hover:before:w-full hover:before:left-0 before:-bottom-1 before:h-0.75 before:bg-zinc-100 before:rounded before:transition-all before:duration-200"
            >
              {location.pathname === "/" ? (
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="cursor-pointer uppercase md:mb-0 mb-3"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </ScrollLink>
              ) : (
                <Link
                  to={`/#${item.link}`}
                  className="cursor-pointer uppercase md:mb-0 mb-3"
                  onClick={() => {
                    navigate(`/#${item.link}`);
                    closeMobileMenu();
                  }}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}

          {isSignedIn && (
            <>
              <li className="md:ml-8 md:mb-0 mb-3">
                <Link
                  to="/connect"
                  className="uppercase flex justify-end relative before:content-[''] before:absolute before:left-1/2 before:w-0 before:origin-center md:hover:before:w-full hover:before:left-0 before:-bottom-1 before:h-0.75 before:bg-zinc-100 before:rounded before:transition-all before:duration-200"
                >
                  connect
                </Link>
              </li>
              <li className="md:ml-8 flex justify-end md:mb-0 mb-3">
                <button
                  onClick={toggleProfile}
                  className="uppercase relative before:content-[''] before:absolute before:left-1/2 before:w-0 before:origin-center md:hover:before:w-full hover:before:left-0 before:-bottom-1 before:h-0.75 before:bg-zinc-100 before:rounded before:transition-all before:duration-200"
                >
                  Profile
                </button>
              </li>
            </>
          )}

          <div>
            {isSignedIn ? (
              <div className="md:ml-10 flex items-center justify-end">
                <UserButton />
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="justify-end flex uppercase md:ml-10 md:bg-zinc-100 md:text-zinc-900 md:px-4 md:py-1 rounded-lg hover:text-zinc-100 hover:bg-transparent transition-all duration-300 hover:shadow-[inset_0_0_0_2px_rgba(244,244,245,0.7)]">
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>
        </ul>
      </div>

      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <UserProfile />
            <button onClick={toggleProfile} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
