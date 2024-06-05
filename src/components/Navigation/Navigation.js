import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Box, Text } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box display='flex' gap='30'>
        <NavLink to="/goit-react-hw-08-phonebook">
          <Text fontSize='20px' color='red' fontFamily="Roboto">Home</Text>
        </NavLink>
        {isLoggedIn && (
          <NavLink  to="/goit-react-hw-08-phonebook/phone">
           <Text fontSize='20px' color='red' fontFamily="Roboto">Phonebook</Text>
          </NavLink>
          )}
        </Box>
    </nav>
  );
};