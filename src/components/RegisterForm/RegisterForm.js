import { useDispatch } from 'react-redux';
import { register } from '../../redux/opertations';
import { Button, Input, Text, Box } from "@chakra-ui/react"
import { SiGnuprivacyguard } from "react-icons/si";


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box display='flex' mt={20} mb={4} gap='5'>
      <label >
        <Text fontSize='30px' color='red'>Username</Text>
        <Input mt={0.5} type="text" name="name" borderColor='#59FCF1'/>
      </label>
      <label >
        <Text fontSize='30px' color='red'>Email</Text>
       <Input mt={0.5} type="email" name="email" borderColor='#59FCF1' />
      </label>
      <label >
        <Text fontSize='30px' color='red'>Password</Text>
        <Input mt={0.5} type="password" name="password"  borderColor='#59FCF1'/>
        </label>
      </Box>
      <Button colorScheme='red' color='red' variant='outline' size='md' type="submit" rightIcon={<SiGnuprivacyguard/>} >Register</Button>
    </form>
  );
};
