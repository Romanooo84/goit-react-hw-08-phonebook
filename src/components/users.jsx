import { useSelector, } from "react-redux";
import { getItems, getError, getIsLoading } from "../redux/selectror";


export const UsersList = ({ onClick }) => {
    
    let { items } = useSelector(getItems);
    console.log(items)
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError); 
    const filter = useSelector((state) => state.user.filter)

    if (filter !== '' && items) {
        const filteredData = items.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
        items = filteredData;
    } 
    
return (
     <div>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <div>{items && items.map((item) => (
        <div id={item.id} key={item.id}>
            <p>Name: {item.name}</p>
            <p>Number: {item.number}</p>
            <button onClick={onClick} >Delete</button>
        </div>))}</div>
    </div>
)
}
