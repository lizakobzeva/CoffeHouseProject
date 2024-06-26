import style from "./LoginRegisterForm.module.scss";
import Button from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "app/providers/StoreProvider";
import { LoginByEmail } from "../../model/services/LoginByEmail/LoginByEmail";
import { useSelector } from "react-redux";
import { getLogin } from "features/AuthByEmail/model/selectors/getLogin/getLogin";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { email, password, error, isLoading } = useSelector(getLogin);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(LoginByEmail(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.centerWrap}>
      {error && <h4 className={style.errorTitle}>Неверный логин или пароль</h4>}
      <h4 className={style.cardTitle}>{t("Log In")}</h4>
      <div className={style.formGroup}>
        <input
          {...register("email", { required: true })}
          type="email"
          className={style.formStyle}
          placeholder={t("Your Email")}
        />
      </div>
      <div className={style.formGroup}>
        <input
          {...register("password", { required: true })}
          type="password"
          className={style.formStyle}
          placeholder={t("Your Password")}
        />
      </div>
      <Button>{t("Submit")}</Button>
      <p>
        <a href="#0" className={style.link}>
          {t("Forgot your password?")}
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
