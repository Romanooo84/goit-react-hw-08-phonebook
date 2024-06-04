import { TextInput } from "../components/textinput"
import { UsersList } from "../components/users";
import { Filter } from "../components/filter";
import { useDispatch} from "react-redux";
import { addUser,deleteUser,loginUser} from "../redux/opertations";
import { useState, useEffect } from "react";
import { setFilter } from "../redux/userSlice";
import { fetchTasks } from "../redux/opertations"

export const Phonebok = () => {

    const dispatch = useDispatch();
    const [nameValue, setNameValue] = useState('');
    const [numberValue, setNumberValue] = useState('')
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

   

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
        console.log(event.target.parentNode.id)
        dispatch(deleteUser(event.target.parentNode.id));
    }

    return (
        <div>
            <TextInput onSubmit={onSubmit} onChange={onChange} nameValue={nameValue} numberValue={numberValue}/>
            <Filter onChange={onChange}/>
            <UsersList onClick={onClick}/>

        </div>
    )
}