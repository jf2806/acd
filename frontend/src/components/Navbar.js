import { Link } from "react-router-dom";

//assets
import { useState } from "react";
import acd_logo from "../assets/acd_logo.png";
import bars from "../assets/icons/bars.svg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <nav className="bg-acd-yellow fixed w-full z-20 top-0 left-0 border-b border-acd-yellow-dark font-NunitoSans">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo / Name */}
          <Link
            className="flex items-center w-1/2"
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src={acd_logo} className="w-14" />
            <div className="self-center text-3xl whitespace-nowrap pl-2 font-bold">
              AC Diefflen
            </div>
          </Link>

          {/* Navigation md/lg-Screen */}
          <div className="md:flex flex-row items-center justify-end w-1/2 gap-6 hidden">
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="hover:bg-acd-yellow-light p-2 rounded-xl"
              to="/aktuelles"
            >
              Aktuelles
            </Link>

            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="hover:bg-acd-yellow-light p-2 rounded-xl"
              to="/training"
            >
              Training
            </Link>

            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="hover:bg-acd-yellow-light p-2 rounded-xl"
              to="/formulare"
            >
              Formulare
            </Link>

            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="bg-acd-yellow-extradark p-2 rounded-xl hover:bg-acd-yellow border-acd-yellow-extradark border-2 hover:text-black text-acd-yellow"
              to="/kontakt"
            >
              Kontakt
            </Link>
          </div>

          {/* Button sm-Screen */}
          <div
            className="md:hidden flex items-center justify-end w-1/2"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img src={bars} className="w-8" />
          </div>

          {/* Navigation sm-Screen */}
          {showDropdown ? (
            <div className="w-full">
              <div className="flex flex-col pt-2 mt-2 border-t-2 border-acd-yellow-extradark gap-1">
                <Link
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="hover:bg-acd-yellow-light p-2 rounded-xl"
                  to="/aktuelles"
                >
                  Aktuelles
                </Link>
                <div className="border-t-2 border-acd-yellow-dark mx-2" />
                <Link
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="hover:bg-acd-yellow-light p-2 rounded-xl"
                  to="/training"
                >
                  Training
                </Link>
                <div className="border-t-2 border-acd-yellow-dark mx-2" />
                <Link
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="hover:bg-acd-yellow-light p-2 rounded-xl"
                  to="/formulare"
                >
                  Formulare
                </Link>
                <div className="border-t-2 border-acd-yellow-dark mx-2" />
                <Link
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="bg-acd-yellow-extradark p-2 rounded-xl hover:bg-acd-yellow border-acd-yellow-extradark border-2 hover:text-black text-acd-yellow w-fit"
                  to="/kontakt"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
