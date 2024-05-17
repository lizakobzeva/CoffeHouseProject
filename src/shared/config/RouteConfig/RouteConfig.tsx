import { AboutPage } from "pages/AboutPage";
import { CoffeePage } from "pages/CoffeePage";

import { MainPage } from "pages/MainPage";
import NotFoundPage from "pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  COFFEE = "coffee",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.COFFEE]: "/coffee",

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
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
