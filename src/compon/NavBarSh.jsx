import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter} from '../utils/const'
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const NavBarSh = () => {
    return (
        <Flex
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
        borderRadius={'8px'}
        padding={'10px 50px'}
        height={'90px'}
        >
            <Flex
                justify={'space-between'}
                width={'90px'}
            >
            <Link to={HomeRouter}>
            <svg width='40px' height='40px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z"/>
            </svg>      
            </Link>
            </Flex>
            <Heading>Potashop</Heading>
        </Flex>
    );
  }
  
  export default NavBarSh;