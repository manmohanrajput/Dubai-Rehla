import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../../css/style.css";
import "../../css/reset.css";
import "../../css/responsive.css";
import "../../css/glightbox.css";
import {
  BellIconSvg,
  EditProfileSVG,
  HeartSvg,
  LogoutIconSvg,
  PathSvg,
  ReservationIconSvg,
  ShieldSvg,
  StarSvg,
  TravllerSvg,
  UserIconSvg,
  WalletSvg,
} from "../../assets/svgs";
import { ROUTESCONSTANTS } from "../../constants/authConstants";

function Header() {
  const [isHeaderShown, setIsHeaderShown] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const userData = useSelector((state) => state.userStore);
  const { isAuth } = userData;
  const wrapperRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleToggle = () => {
    setIsHeaderShown(!isHeaderShown);
  };

  const handleLanguageSwitch = () => {
    const newLang = i18n.language === "en" ? "ur" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang); // Save the selected language to local storage
  };
  // const toggleLanguage = () => {
  //   const newLang = i18n.language === 'en' ? 'ur' : 'en';
  //   i18n.changeLanguage(newLang);
  // };

  const toggleLanguage = () => {
    if (currentLanguage === "en") {
      i18n.changeLanguage("ur");
      setCurrentLanguage("ur");
    } else {
      i18n.changeLanguage("en");
      setCurrentLanguage("en");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowNavBar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const HeadNav = [
    {
      title: t("header.editProfile"),
      path: ROUTESCONSTANTS?.EDIT_PROFILE,
      icon: <EditProfileSVG />,
    },
    { title: t("header.myTrips"), path: ROUTESCONSTANTS?.MY_TRIP, icon: <PathSvg /> },
    { title: t("header.myReservation"), path: "", icon: <ReservationIconSvg /> },
    {
      title: t("header.myWallet"),
      path: ROUTESCONSTANTS?.MY_WALLET,
      icon: <WalletSvg />,
    },
    {
      title: t("header.myRates"),
      path: ROUTESCONSTANTS?.MY_RATES,
      icon: <StarSvg />,
    },
    {
      title: t("header.myPreferences"),
      path: ROUTESCONSTANTS?.MY_PREFERENCE,
      icon: <HeartSvg />,
    },
    {
      title: t("header.verification"),
      path: ROUTESCONSTANTS?.VERIFICATION,
      icon: <ShieldSvg />,
    },
    {
      title: t("header.notification"),
      path: ROUTESCONSTANTS?.NOTIFICATIONS,
      icon: <BellIconSvg />,
    },
    {
      title: t("header.registerAsTraveler"),
      path: ROUTESCONSTANTS?.REGISTER_TRAVELER,
      icon: <TravllerSvg />,
    },
    {
      title: t("header.logout"),
      path: ROUTESCONSTANTS?.LOGOUT,
      icon: <LogoutIconSvg />,
    },
  ];

  return (
    <>
      <header className={`header ${isHeaderShown ? "show" : ""}`}>
        <div className="container relative">
          <div className="header_navbar">
            <Link to="/" className="logo">
              <img src="/images/company_lovo.webp" alt="company logo rehla" />
            </Link>
            <ul className="header_menu">
              <li>
                <Link to="/" className="active">
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <Link to="/services">{t("header.services")}</Link>
              </li>
              <li>
                <Link to="/prebooking-trips">{t("header.prebooking")}</Link>
              </li>
              <li>
                <Link to="/tourism-tours">{t("header.tourism")}</Link>
              </li>
              <li>
                <Link to="/news">{t("header.news")}</Link>
              </li>
              <li>
                <Link to="/about-us">{t("header.aboutus")}</Link>
              </li>
              <li>
                <Link to="/contact-us">{t("header.contactus")}</Link>
              </li>
            </ul>
          </div>
          <div className="toggle_grid">
            <ul ref={wrapperRef} className="login_box relative">
              {userData?.userDetails ? (
                <li>
                  <Link
                    to="#"
                    className="login"
                    onClick={() => setShowNavBar(!showNavBar)}
                  >
                    <UserIconSvg />
                    {userData?.userDetails?.Name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="login">
                    {t("Login")}
                  </Link>
                </li>
              )}
              {isAuth && showNavBar && (
                <div className="dropdown_menu">
                  {HeadNav.map((nav) => (
                    <div
                      onClick={() => setShowNavBar(!showNavBar)}
                      className="nav-link-container"
                      key={nav.title}
                    >
                      {nav.icon}
                      <Link to={nav.path} className="text-link">
                        {nav.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              <li>
                <a
                  href="#/"
                  className="language"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLanguage();
                  }}
                >
                  {currentLanguage === "en" ? t("English") : t("عربي")}
                  <img src="/images/internet.svg" alt="language icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
