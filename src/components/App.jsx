import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "./layout";
import { useDispatch} from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from "../redux/opertations";
import { useEffect, lazy  } from "react";
import { Home } from "pages/Home";
import { Phonebok } from "pages/phonebook";




export const App = () => {

    const dispatch = useDispatch();

    const RegisterPage = lazy(() => import('../pages/Register'));
    const LoginPage = lazy(() => import('../pages/Login'));
   

    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    


    return isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/phone" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/phone" component={<LoginPage />} />
              }
            />
            <Route
              path="/phone"
              element={
                <PrivateRoute redirectTo="/login" component={<Phonebok />} />
              }
            />
          </Route>
        </Routes>
      );
    };
    