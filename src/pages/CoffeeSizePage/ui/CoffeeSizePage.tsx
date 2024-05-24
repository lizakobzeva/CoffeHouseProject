import { AddInCartButton } from "features/CartOperations/ui";
import style from "./CoffeeSizePage.module.scss";
import CoffeeSize from "widgets/CoffeeSize";
import { useParams } from "react-router-dom";
import { SetStateAction, useState } from "react";

const CoffeeSizePage = () => {
  let { coffeeid } = useParams();
  const [coffeeSize, setCoffeeSize] = useState<number>(300);
  return (
    <div className={`${style.CoffeeSizePage} container`}>
      <div className={style.CoffeeSizePageContainer}>
        <div className={style.CoffeeSize}>
          <div className={style.container}>
            <form>
              <label>
                <input
                  type="radio"
                  name="radio"
                  onClick={() => setCoffeeSize(300)}
                />
                <span>300 мл</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  onClick={() => setCoffeeSize(400)}
                />
                <span>400 мл</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  onClick={() => setCoffeeSize(500)}
                />
                <span>500 мл</span>
              </label>
            </form>
          </div>
        </div>
        <AddInCartButton coffeeId={coffeeid} coffeeSize={coffeeSize} />
      </div>
    </div>
  );
};

export default CoffeeSizePage;
