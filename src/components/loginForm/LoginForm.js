import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/opertations'
import { Button, Input, Text, Box } from "@chakra-ui/react"
import { IoIosLogIn } from "react-icons/io";


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
        loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box display='flex' mt={2} mb={4}>
          <label >
            <Text fontSize='30px' color='red'>Email</Text>
            <Input mt={0.5} type="email" name="email" />
          </label>
          <label >
            <Text fontSize='30px' color='red'>Password</Text>
            <Input mt={0.5}  type="password" name="password" />
          </label>
        </Box>
          <Button colorScheme='red' color='red' variant='outline' size='md' type="submit" rightIcon={<IoIosLogIn />}>Log In</Button>
      
    </form>
  );
};
