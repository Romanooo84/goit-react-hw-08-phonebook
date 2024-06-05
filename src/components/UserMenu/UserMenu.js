import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/opertations';
import { useAuth } from '../../hooks/useAuth';
import { Button, Box, Text } from "@chakra-ui/react"
import { RiLogoutBoxLine } from "react-icons/ri";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display='flex' alignItems='center' gap='5'>
      <Text fontSize='20px' color='red' fontFamily="Roboto">Welcome, {user.name}</Text>
      <Button colorScheme='red' color='red' variant='outline' size='sm' type="button" rightIcon={<RiLogoutBoxLine />}  onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};