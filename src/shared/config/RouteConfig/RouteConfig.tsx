import { AboutPage } from "pages/AboutPage";
import CartPage from "pages/CartPage/ui/CartPage";
import { CoffeePage } from "pages/CoffeePage";
import CoffeeSizePage from "pages/CoffeeSizePage/ui/CoffeeSizePage";

import { MainPage } from "pages/MainPage";
import NotFoundPage from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  COFFEE = "coffee",
  NOT_FOUND = "not_found",
  CART = "cart",
  COFFEESIZE = "cofeesize",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/main",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.CART]: "/cart",
  [AppRoutes.COFFEESIZE]: "/coffeesize/:coffeeid",
  [AppRoutes.COFFEE]: "/",

  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Array<RouteProps> = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    path: RoutePath.coffee,
    element: <CoffeePage />,
  },
  {
    path: RoutePath.cart,
    element: <CartPage />,
  },
  {
    path: RoutePath.cofeesize,
    element: <CoffeeSizePage />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
