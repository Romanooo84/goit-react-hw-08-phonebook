import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/goit-react-hw-08-phonebook">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/goit-react-hw-08-phonebook/phone">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};