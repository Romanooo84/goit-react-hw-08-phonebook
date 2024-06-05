import { useSelector, } from "react-redux";
import { getItems, getError, getIsLoading } from "../redux/selectror";
import { Button,Table, Thead, Tbody, Tr, Th, Td, TableContainer, } from "@chakra-ui/react"
import { FaDeleteLeft } from "react-icons/fa6";


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
    <hr style={{ margin: '10px 0', border: 'none', borderBottom: '2px solid black' }} />
      {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        <TableContainer>
            <Table variant='striped' colorScheme='teal' size='lg'>
                <Thead>
                    <Tr> 
                        <Th fontSize='15px' color='red' fontFamily="Roboto">Name</Th> 
                        <Th fontSize='15px' color='red' fontFamily="Roboto">Number</Th>
                        <Th fontSize='15px' color='red' fontFamily="Roboto">Action</Th>
                    </Tr>
                </Thead>
            <Tbody>{items && items.map((item) => (
                <Tr id={item.id} key={item.id}>
                        <Td fontSize='15px' color='red' fontFamily="Roboto">{item.name}</Td>
                        <Td fontSize='15px' color='red' fontFamily="Roboto">{item.number}</Td>
                        <Td><Button colorScheme='red' color='red' variant='shadow' size='md' type="submit" rightIcon={<FaDeleteLeft />} onClick={onClick}></Button></Td>
                </Tr>
                ))}</Tbody>
            </Table>
        </TableContainer>
    </div>
)
}
