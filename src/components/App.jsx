import { Home } from "pages/Home";
import { LoginForm } from "../components/loginForm/LoginForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { AppBar } from "./AppBar/AppBar";
import { useAuth } from "hooks/useAuth";
import { TextInput } from "./textinput"
import { UsersList } from "./users";
import { Filter } from "./filter";
import { useDispatch} from "react-redux";
import { fetchTasks,addUser,deleteUser,loginUser, refreshUser } from "../redux/opertations";
import { useState, useEffect,  } from "react";
import { setFilter } from "../redux/userSlice";

export const App = () => {

    const dispatch = useDispatch();
    const [nameValue, setNameValue] = useState('');
    const [numberValue, setNumberValue] = useState('')
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [refresh, setRefresh] = useState(false)

    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    
    useEffect(() => {
            dispatch(fetchTasks());
       }, [dispatch, refresh]);
    

    const onChange = event => {
        event.preventDefault();
        if (event.target.name === 'name') {
            
            setNameValue(event.target.value);
            setName(event.target.value)
        }
        else if (event.target.name === 'number') {
            setNumberValue(event.target.value);
            setNumber(event.target.value)
        }

        else if (event.target.name === 'filter') {
            dispatch(setFilter(event.target.value));
        }
    
    };

    const onSubmit = event => {
        event.preventDefault();
        dispatch(loginUser({
  
}))
        dispatch(addUser({ name: name, number: number }));
        setName()
        setNumber()
        setNameValue('')
        setNumberValue('')
        setRefresh(!refresh)
    }

    const onClick = event => {
        event.preventDefault();
        dispatch(deleteUser(event.target.parentNode.id));
    }

    return isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
              }
            />
            <Route
              path="/tasks"
              element={
                <PrivateRoute redirectTo="/login" component={<TasksPage />} />
              }
            />
          </Route>
        </Routes>
      );
    };
    