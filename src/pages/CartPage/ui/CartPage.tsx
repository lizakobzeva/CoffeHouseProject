import { getCart } from "entities/Cart/model/selectors/getCart/getCart";
import { useSelector } from "react-redux";
import style from "./CartPage.module.scss";
import { useEffect } from "react";
import Button from "shared/ui/Button";
import CoffeeSize from "widgets/CoffeeSize";

const CartPage = () => {
  let { cart } = useSelector(getCart);
  useEffect(() => {}, [cart]);

  cart = cart ? cart.slice(1) : [];
  return (
    <div className={`${style.CartPage} container`}>
      <div className={style.CartBox}>
        <ul className={style.cartList}>
          {cart.map((cartItem: string) => (
            <li>{cartItem} 300 мл. 150 руб. </li>
          ))}
        </ul>
        <Button>Оформить Заказ</Button>
      </div>
    </div>
  );
};

export default CartPage;
