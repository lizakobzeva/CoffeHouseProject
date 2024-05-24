import { useAppDispatch } from "app/providers/StoreProvider";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";

import { AddItemInCart } from "features/CartOperations/model/services/AddItemInCart/AddItemInCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "shared/ui/Button";

interface AddInCartButtonType {
  coffeeId: string;
  coffeeSize: number;
}

const AddInCartButton = ({ coffeeId, coffeeSize }: AddInCartButtonType) => {
  const dispatch = useAppDispatch();
  const { authData } = useSelector(getAuthData);
  const cart: Array<string> = authData?.cart ? authData?.cart : [];

  const userData = {
    id: authData?.id,
    cart: [...cart, coffeeId],
  };
  const AddInCart = () => {
    console.log(userData);
    dispatch(AddItemInCart(userData));
  };
  return (
    <Link to={"/cart"}>
      <Button type="button" onClick={() => AddInCart()}>
        Add In Cart
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 1C0.447715 1 0 1.44772 0 2C0 2.55228 0.447715 3 1 3H3.20647L5.98522 14.9089C6.39883 16.6816 7.95486 17.9464 9.76471 17.9983V18H17.5874C19.5362 18 21.2014 16.5956 21.5301 14.6747L22.7857 7.33734C22.9947 6.11571 22.0537 5 20.8143 5H5.72686L4.97384 1.77277C4.86824 1.32018 4.46475 1 4 1H1ZM6.19353 7L7.9329 14.4545C8.14411 15.3596 8.95109 16 9.88058 16H17.5874C18.5618 16 19.3944 15.2978 19.5588 14.3373L20.8143 7H6.19353Z"
            fill="currentColor"
          />
          <path
            d="M8 23C9.10457 23 10 22.1046 10 21C10 19.8954 9.10457 19 8 19C6.89543 19 6 19.8954 6 21C6 22.1046 6.89543 23 8 23Z"
            fill="currentColor"
          />
          <path
            d="M19 23C20.1046 23 21 22.1046 21 21C21 19.8954 20.1046 19 19 19C17.8954 19 17 19.8954 17 21C17 22.1046 17.8954 23 19 23Z"
            fill="currentColor"
          />
        </svg>
      </Button>
    </Link>
  );
};

export default AddInCartButton;
