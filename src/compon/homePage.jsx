
import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavBar from './NavBar';
import FooterPage from './foter';
import TopButton from './TopButton';
import Main from './main';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { observer } from 'mobx-react-lite';
import { Context } from '../index'
import { useContext } from 'react';

const HomePage = () =>{
    const { store } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const checkAuth = async () =>{
            if(localStorage.getItem('token')){
                await store.checkAuth();
            }
            setIsLoading(false)
        }
        checkAuth();
    }, [store])
    

    //     const fetchData = async () => {
    //         await new Promise(resolve => setTimeout(resolve, 1000));
    //         setIsLoading(false)
    //     }
    //     fetchData();
    // }, [])

    return(
        <>
            {isLoading ? (
                <Loader />
            ) : (
        
        <Box>
        <NavBar />
        <Main />
        <Flex 
            width={"100%"} 
            justify={'center'}> 
            <FooterPage />
            <TopButton />
        </Flex>
        </Box>)}</>
    )
}

export default HomePage;