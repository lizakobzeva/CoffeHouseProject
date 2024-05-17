import style from "./LoginRegisterForm.module.scss";
import Button from "shared/ui/Button";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  return (
    <form className={style.centerWrap}>
      <h4 className={style.cardTitle}>{t("Sign Up")}</h4>
      <div className={style.formGroup}>
        <input
          type="text"
          name="logname"
          className={style.formStyle}
          placeholder={t("Your Full Name")}
          id="logname"
          autoComplete="off"
        />
      </div>
      <div className={style.formGroup}>
        <input
          type="email"
          name="logemail"
          className={style.formStyle}
          placeholder={t("Your Email")}
          id="logemail"
          autoComplete="off"
        />
        <i className={style.inputIcon}></i>
      </div>
      <div className={style.formGroup}>
        <input
          type="password"
          name="logpass"
          className={style.formStyle}
          placeholder={t("Your Password")}
          id="logpass"
          autoComplete="off"
        />
        <i className={style.inputIcon}></i>
      </div>
      <Button>{t("Submit")}</Button>
    </form>
  );
};

export default RegisterForm;
