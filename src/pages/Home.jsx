import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import logo from '../img/9399201.jpg';




export const Home=()=>{
    return(
        <Box mt='10' display='flex' alignItems='center' flexDirection='column'>
            <Text fontSize='40' color='red' fontFamily="Merienda">
                Your phonebok
            </Text>
            <Image boxSize='350px' src={logo} alt='welcome red' />
        </Box>
    )

}