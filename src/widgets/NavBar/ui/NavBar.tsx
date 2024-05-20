import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import Button from "shared/ui/Button";
import ToggleThemButton from "shared/ui/ToggleThemeButton";
import LangSwitcher from "shared/ui/LangSwitcher";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoginRegisterModal } from "features/AuthByEmail/ui";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { useAppDispatch } from "app/providers/StoreProvider";

import { useSelector } from "react-redux";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import Avatar from "shared/ui/Avatar";

const NavBar = () => {
  const [IsModal, setIsModal] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  const authData = useSelector(getAuthData);

  useEffect(() => {
    setIsModal(false);
  }, [user, authData]);

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
            Coffee
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
          {user ? (
            <Avatar />
          ) : (
            <Button onClick={() => setIsModal(true)}>{t("Log In")}</Button>
          )}
        </div>

        <LoginRegisterModal
          isOpend={IsModal}
          onClose={() => setIsModal(false)}
        />
      </div>
    </div>
  );
};

export default NavBar;
