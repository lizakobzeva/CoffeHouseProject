import React from "react";
import style from "./CoffeeSize.module.scss";

const CoffeeSize = () => {
  return (
    <div className={style.CoffeeSize}>
      <div className={style.container}>
        <form>
          <label>
            <input type="radio" name="radio" />
            <span>300 мл</span>
          </label>
          <label>
            <input type="radio" name="radio" />
            <span>400 мл</span>
          </label>
          <label>
            <input type="radio" name="radio" />
            <span>500 мл</span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default CoffeeSize;
