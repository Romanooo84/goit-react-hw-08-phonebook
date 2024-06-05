import { NavLink } from 'react-router-dom';
import { Box, Text} from '@chakra-ui/react';


export const AuthNav = () => {
  return (
    <Box display='flex' gap='10'>
      <NavLink  to="/goit-react-hw-08-phonebook/register">
        <Text fontSize='20px' color='red' fontFamily="Roboto">Register</Text>
      </NavLink>
      <NavLink to="/goit-react-hw-08-phonebook/login">
        <Text fontSize='20px' color='red' fontFamily="Roboto">Log In</Text>
      </NavLink>
    </Box>
  );
};