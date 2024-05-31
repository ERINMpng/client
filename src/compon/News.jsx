import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center, Image,AspectRatio,Card, FormControl,FormLabel,HStack,Radio,RadioGroup} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter, NewsRouter} from '../utils/const'
import potato from '../img/potatomain.PNG'
import batat from '../img/batat.jpg'
import pole from '../img/pole.jpg'
import CartItem from '../cartall/CartItem';
import cat from '../img/cat.jpg'


const News = () => {
    return (
        <Box padding={'30px 100px 30px 100px'} margin={'0px 0px 50px 0px'}>
            <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            >
                <Box
                backgroundImage={cat}
                width={'100%'}
                height={'500px'}
                backgroundSize={'cover'}
                >
                    <Text fontSize={'70px'} color={'white'} margin={'380px 0px 0px 5px'}>Can your cat eat potatoes?</Text>
                </Box>
                <Text margin={'30px 0px 0px 0px'} fontSize={'20px'}>Sprouted potatoes can actually be toxic due to a chemical called solanine. Potatoes and other nightshades, such as eggplants, tomatoes and peppers, have a natural tendency to produce solanine, which is toxic to humans if consumed in large quantities. If potatoes are not stored properly, they begin to produce solanine in their sprouts. The tubers themselves turn green if too much light falls on them, which also indicates the production of solanine...</Text>
                <Text margin={'30px 0px 0px 0px'} color={'#825955'} fontSize={'20px'}><Link to={`${NewsRouter}#newsmain`}>Find out more →</Link></Text>
            </Flex>
        </Box>
    )}

    export default News;