import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/classNames";

import Router from "./providers/router";
import NavBar from "widgets/NavBar";
import Loader from "shared/ui/Loader";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <Suspense
          fallback={
            <div className="container">
              <Loader />
            </div>
          }
        >
          <Router />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default App;
