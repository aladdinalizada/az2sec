// import { Dropdown } from "flowbite-react";
// import { slide as Menu } from "react-burger-menu";
import "../../i18n/i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../firebase";
import { logout as logoutHandle } from "../../redux/store/auth";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    setIsNavOpen(false);
  };
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="w-full h-16 px-3 flex justify-between items-center bg-black text-white sm:px-11 sm:h-20">
      <div>Logo</div>

      <nav>
        <ul className="DESKTOP_MENU hidden gap-x-9 sm:gap-x-3 sm:flex">
          <li>{t("About")}</li>
          <li>{t("Education/TrainingPrograms")}</li>
          <li>{t("News")}</li>
          <li>{t("Contact")}</li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        <div className=" hidden sm:flex p-0.5 w-36 h-12 rounded-2xl border bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]">
          <button className="w-full h-full bg-black rounded-xl hover:bg-transparent transition-all duration-[290ms] ease-out">
            {user ? (
              <span className="text-white">{t("Profile")}</span>
            ) : (
              <Link to="/login">
                <span className="text-white">{t("Login")}</span>
              </Link>
            )}
          </button>
        </div>
        <div className="MOBILE-MENU flex sm:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase text-black">
                <a href="#">{t("About")}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-black">
                <a href="">{t("Education/TrainingPrograms")}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-black">
                <a href="">{t("News")}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-black">
                <a href="">{t("Contact")}</a>
              </li>
              <li className="border-b border-gray-400 my-8 text-black">
                {user ? (
                  <span className="text-black">{user.email}</span>
                ) : (
                  <Link to="/login" onClick={() => setIsNavOpen(false)}>
                    <span className="text-black uppercase">{t("Login")}</span>
                  </Link>
                )}
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-black">
                {user && (
                  <button className="text-black" onClick={handleLogout}>
                    {t("Logout")}
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Header;
