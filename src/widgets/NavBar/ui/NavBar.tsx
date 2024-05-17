import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import Button from "shared/ui/Button";
import ToggleThemButton from "shared/ui/ToggleThemeButton";
import LangSwitcher from "shared/ui/LangSwitcher";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginRegisterModal } from "features/AuthByEmail/ui";

const NavBar = () => {
  const [IsModal, setIsModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={classNames(style.navbar, {}, [])}>
      <div className={style.container}>
        <div className={style.settings}>
          <ToggleThemButton />
          <LangSwitcher />
        </div>

        <div className={style.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.link
            }
            to={"/"}
          >
            Main
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.link
            }
            to={"/about"}
          >
            About
          </NavLink>
        </div>

        <div className={style.auth}>
          <Button onClick={() => setIsModal(true)}>{t("Log In")}</Button>
        </div>
        <LoginRegisterModal
          isOpend={IsModal}
          onClose={() => setIsModal(false)}
        />
      </div>
      {/* <BurgerMenu /> */}
    </div>
  );
};

export default NavBar;
