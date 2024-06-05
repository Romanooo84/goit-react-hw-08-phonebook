import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Box } from '@chakra-ui/react';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header >
      <Box display='flex' justifyContent='space-between'>
      <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
       <hr style={{ margin: '10px 0', border: 'none', borderBottom: '2px solid black' }} />
    </header>
  );
};
