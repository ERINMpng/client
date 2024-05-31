import '../App.css';
import CartItem from '../cartall/CartItem';
import { Flex, Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import FooterPage from './foter';
import TopButton from './TopButton';
import CartItem2 from '../cartall/Cart2';    
import { useEffect, useState } from 'react';
import Loader from './Loader';

const ShopPage = () =>{

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false)
        }
        fetchData();
    }, [])

    return(
        <>
            {isLoading ? (
                <Loader />
            ) : (
    
        <Box>
            <NavBar />
    <Flex justify='center' flexDirection='column' padding={'50px 0px 0px 0px'}>
        <Flex
        justify={'center'}
        align={'center'}
        flexWrap={'wrap'}
        gap={'35px'}
        mt={'50px'}
    >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem2 />
    </Flex>
    <TopButton />
    <Box margin={'25px 0px 0px 0px'}>
    <FooterPage /></Box>
    </Flex>
    </Box>)}</>
    )
   
}

export default ShopPage;