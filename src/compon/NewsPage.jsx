import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center, Image,AspectRatio,Card, FormControl,FormLabel,HStack,Radio,RadioGroup} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter} from '../utils/const'
import NavBar from './NavBar';
import News from './News';
import FooterPage from './foter';
import TopButton from './TopButton';    
import { useEffect, useState } from 'react';
import Loader from './Loader';

const NewsP = () => {

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
            <Flex justify='center' flexDirection='column' padding={'100px 0px 0px 0px'} id='newsmain'>
                <News />
                <News />
                <News />
                <News />
                <News />
            </Flex>
            <TopButton />
            <FooterPage />
        </Box>)}</>
    )}

    export default NewsP;