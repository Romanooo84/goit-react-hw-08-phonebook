import { Input, Text, Box } from "@chakra-ui/react"

export const Filter = ({ onChange }) => {
    return (
        <Box display='flex' flexDirection='column' mt='30' ml='4vw'>
            <Text  fontSize='20px' color='red'>Filtr Contacts</Text>
            <Input mt={0.5} maxWidth='300'
                    type="text"
                    name="filter"
                    id='id'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={onChange }
                />
        </Box>
    )
}