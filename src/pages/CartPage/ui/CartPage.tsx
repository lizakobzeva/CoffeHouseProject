import { getCart } from "entities/Cart/model/selectors/getCart/getCart";
import { useSelector } from "react-redux";
import style from "./CartPage.module.scss";
import { useEffect, useState } from "react";
import Button from "shared/ui/Button";
import { Link } from "react-router-dom";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import Modal from "shared/ui/Modal";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { useAppDispatch } from "app/providers/StoreProvider";
import { ClearCart } from "features/CartOperations/model/services/AddItemInCart/ClearCart";
interface IDictionary {
  [key: string]: Array<number>;
}

const coffeeDictionary: IDictionary = {
  espresso: [50, 70, 85],
  doppio: [130, 175, 215],
  macchiatto: [130, 175, 215],
  cortado: [110, 145, 185],
  cappuccino: [50, 70, 85],
  americano: [50, 70, 85],
  mocha: [135, 180, 225],
  latte: [100, 135, 165],
  breve: [100, 135, 165],
  mochabreve: [135, 180, 225],
  flatwhite: [90, 120, 150],
  bombon: [100, 135, 165],
};

const CartPage = () => {
  const [IsModal, setIsModal] = useState(false);
  const authData = useSelector(getAuthData);
  let { cart } = useSelector(getCart);
  const dispatch = useAppDispatch();

  useEffect(() => {}, [cart]);

  cart = cart ? cart.slice(1) : [];
  let coffeeId: string = "";
  let coffeeSize: number = 0;

  const userData = {
    id: authData?.authData?.id,
    cart: [["", 0]],
  };
  const Chekout = () => {
    setIsModal(true);
    dispatch(ClearCart(userData));
    cart = [[]];
  };
  return (
    <div className={`${style.CartPage} container`}>
      {cart.length > 0 ? (
        <>
          <div className={style.CartBox}>
            <ul className={style.cartList}>
              {cart.map((cartItem) => (
                <li>
                  {(coffeeId = typeof cartItem[0] == "string" && cartItem[0])}{" "}
                  {(coffeeSize = typeof cartItem[1] == "number" && cartItem[1])}{" "}
                  мл.
                  {coffeeDictionary[coffeeId][coffeeSize / 100 - 3]} руб.
                </li>
              ))}
            </ul>
            <Button onClick={Chekout}>Оформить Заказ</Button>
          </div>
          <Modal isOpend={IsModal} onClose={() => setIsModal(false)}>
            <div className={style.CartBox}>
              <h2>Заказ Оформлен</h2>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <div className={style.EmptyCart}>
            <h2>Корзина пуста</h2>
            <Link to={`/`}>
              <Button>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M6 12L11 7M6 12L11 17"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Выбрать кофе
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
