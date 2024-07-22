import { Link } from "react-router-dom";

// assets
import acd_logo from "../assets/acd_logo.png";
import slb_logo from "../assets/icons/slb.png";
import dlv_logo from "../assets/icons/dlv.png";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full p-4 bg-acd-yellow-dark border-t border-acd-yellow-extradark shadow md:flex md:items-center md:justify-between md:p-6 font-NunitoSans">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo / Name */}
          <Link className="mb-6 md:mb-0" to="/">
            <div className="flex items-center">
              <img src={acd_logo} className="w-14" />
              <div className="self-center text-3xl whitespace-nowrap pl-2 font-bold">
                AC Diefflen
              </div>
            </div>
          </Link>

          {/* Content Grid */}
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            {/* Übersicht-Cell */}
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase">
                Übersicht
              </h2>
              <ul className="font-medium">
                <li className="mb-1">
                  <Link
                    className="hover:underline cursor-pointer"
                    to="/aktuelles"
                  >
                    Aktuelles
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline cursor-pointer"
                    to="/training"
                  >
                    Training
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline cursor-pointer"
                    to="/formulare"
                  >
                    Formulare
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline cursor-pointer"
                    to="/kontakt"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm uppercase font-semibold">Legal</h2>
              <ul className="font-medium">
                <li>
                  <Link
                    className="hover:underline cursor-pointer"
                    to="/impressum"
                  >
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline cursor-pointer"
                    to="/datenschutz"
                  >
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-acd-yellow-extradark sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">von Jonas Fröhlich</span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.slb-saarland.com/" target="_blank">
              <img src={slb_logo} className="w-14 rounded-md" />
            </a>
            <a href="https://www.leichtathletik.de/" target="_blank">
              <img src={dlv_logo} className="w-14 rounded-md" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
