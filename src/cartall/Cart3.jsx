import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center, Card, Image, Button} from '@chakra-ui/react';
import fiol from '../img/fiol.jpg'

const CartItem3 = () =>{
    return(
        <Card
        width={'400px'}
        height={'400px'}
        boxShadow='xl' p='6' rounded='md' bg='white'
        >
            <Image width={'352px'} height={'236px'}
                borderRadius={'5px'}
                src={fiol}
            ></Image>
    <Box
        width={'100%'}
    >
        <Heading fontSize={'30px'}>Purple potato</Heading>
    </Box>
    <Box>
        <Text>
        Joint development of Russian and Belarusian ...
        </Text>
    </Box>
    <Box display='flex'>
        <Button  colorScheme='green' variant='solid' margin='10px 10px 10px 50px' width='120px' boxShadow='lg' rounded='md'>
            Buy
        </Button>
            {/* <Button  colorScheme='teal' variant='outline'margin='10px 50px 10px 10px' width='120px'>
                Подробнее...
            </Button> */}
        <Box border='1px' borderColor='green' borderRadius='5px' height='40px' width='120px' margin='10px 50px 10px 10px' >
            <Text color='green' textAlign='center' padding='8px'>Prise: 132$</Text>
        </Box>
    </Box>
        </Card>
    )
}
export default CartItem3;