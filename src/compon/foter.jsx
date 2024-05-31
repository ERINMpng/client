import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter, NewsRouter} from '../utils/const'
import color from './color.jsx';

const FooterPage = () =>{
    const colorPalet = color();
    const {green, hex} = colorPalet;

    return(
        <Flex
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        borderRadius={'8px'}
        height={'200px'}>
            <Box
            width='100%'
            backgroundColor='#171211'
            height='250px'
            display={'flex'}
            justify={'space-between'}>
                <Box>
                <Link to={`${HomeRouter}#main`}>
                <Heading color={'white'} margin='30px 0px 0px 80px' fontSize='50px'>Potashop</Heading></Link>
                <Text color={'#825955'} margin='20px 0px 0px 80px'>© 2021 “Potato Nika” </Text>
                <Text color={'#825955'} margin='5px 0px 0px 80px'>Privacy policy (there is none)</Text>
                <Text color={'#c4a19d'} margin='20px 0px 0px 80px'><Link to={HelpRouter}>Help is needed?</Link></Text>
                </Box>
                <Flex position={'absolute'} right={'0px'}>
                <Box margin={'50px 150px 0px 0px'}>
                        <Text color={'#c4a19d'} fontSize={'25px'}>Navigation</Text>
                        <Text color={'#825955'}><Link to={ShopRouter}>Shop</Link></Text>
                        <Text color={'#825955'}><Link to={`${HomeRouter}#sevices`}>About</Link></Text>
                        <Text color={'#825955'}><Link to={AuthRouter}>Sign In</Link></Text>
                        <Text color={'#825955'}><Link to={RegisterRouter}>Register</Link></Text>
                        <Text color={'#825955'}><Link to={`${NewsRouter}#newsmain`}>News</Link></Text>
                    </Box>
                    <Box margin={'50px 300px 0px 0px'}>
                        <Text color={'#c4a19d'} fontSize={'25px'}>Contacts</Text>
                        <Text color={'#825955'}>Belarus, 225051</Text>
                        <Text color={'#825955'}>+747 (737) 352-2342</Text>
                        <Text color={'#825955'}>potatoeshop@bestshop.com</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default FooterPage;