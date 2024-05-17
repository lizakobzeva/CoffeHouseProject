import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <section className="section">
      <h2>{t("AboutePage text aaaaaaaaaaa")}</h2>
      <Counter />
    </section>
  );
};

export default AboutPage;
