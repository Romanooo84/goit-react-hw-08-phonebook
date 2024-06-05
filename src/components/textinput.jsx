import { Button, Input, Text, Box,FormControl, FormLabel} from "@chakra-ui/react"
import { IoIosPersonAdd } from "react-icons/io";

export const TextInput = ({onSubmit, nameValue, onChange, numberValue}) => {

    return (
    <div>  
        <Text display='flex' justifyContent='center' mb='30px'fontSize='30px' color='red'>Contacts</Text>
         <form onSubmit={onSubmit}>
            <FormControl display='flex' justifyContent='space-around' alignItems='center'>
                <Box>
                <FormLabel fontSize='20px' color='red'>Name</FormLabel>    
                <Input mt={0.5} borderWidth="2px" borderColor='#59FCF1'
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={nameValue}
                    required
                    onChange={onChange}  
                />
                </Box>
                <Box>
                <FormLabel fontSize='20px' color='red'>Phone number</FormLabel> 
                <Input mt={0.5} borderWidth="2px" borderColor='#59FCF1'
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={numberValue}
                    required
                    onChange={onChange}
                /> 
                </Box> 
                <Box display='flex' alignSelf='flex-end'>
                    <Button colorScheme='red' color='red' variant='outline' size='md' type="submit" rightIcon={<IoIosPersonAdd />} >Add Contact</Button>        
                </Box>  
            </FormControl>
        </form>
    </div>
    )
}