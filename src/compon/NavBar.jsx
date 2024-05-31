import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter} from '../utils/const'
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react' 
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../index'
import { useContext } from 'react';

const NavBar = () => {

    const prevScrollY = useRef(0); 
    const [isNavBarVisible, setIsNavBarVisible] = useState(true); 
    const location = useLocation();
    const { store } = useContext(Context);
    const [email, setEmail] = useState('');
    
    useEffect(() => { 
        const scroll = () =>{ 
            const currentScrollY = window.scrollY; 
            const scrollDirection = currentScrollY > prevScrollY.current ? "down" : "up"; 
            if(scrollDirection === "down" && currentScrollY > 50){ 
                setIsNavBarVisible(false) 
            }else if(scrollDirection === "up" || currentScrollY <=50){ 
                setIsNavBarVisible(true) 
            } 
            prevScrollY.current = currentScrollY; 
        } 
        window.addEventListener("scroll", scroll); 
 
        return() => window.removeEventListener("scroll", scroll); 
    }, []);


    useEffect(() => {
        const scrollToSection = window.location.hash.substring(1)

        if(scrollToSection){
            const section = document.getElementById(scrollToSection)
            if(section){
                section.scrollIntoView({
                    behavior:"smooth"
                })
            }
        }
    }, [window.location.hash])

    useEffect(() => { 
        setEmail(store.user.email) 
    }, [store])


    return (
        <Flex
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        padding={'20px 50px'}
        backgroundColor='#040404'
        position={'fixed'}
        zIndex={'999'}
        height={'90px'}
        style={{
            
            opacity: isNavBarVisible ? 1 : 0
        }}
        >
            <Flex>
                <Link to={ShopRouter}>
                <Button colorScheme='blackAlpha'>Shop</Button></Link>
                <Link to={`${HomeRouter}#services`}>
                <Button colorScheme='blackAlpha'>About</Button></Link>
                <Link to={`${HomeRouter}#product`}>
                <Button colorScheme='blackAlpha'>Product</Button></Link>
            </Flex>
            <Link to={`${HomeRouter}#main`}>
            <Heading color='white'>Potashop</Heading></Link>
            <Flex
                justify={'space-between'}
                width={'100px'}
                justify-content= 'center'
                margin-left= 'auto'
            >
                {store.isAuth ? (<div>
                    <Flex gap={3} justify={'space-between'}>
                    <Box width={'200px'}>
                        <Flex>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="white" d="M18 2h-6v2h-2v6h2V4h6V2zm0 8h-6v2h6v-2zm0-6h2v6h-2V4zM7 16h2v-2h12v2H9v4h12v-4h2v6H7v-6zM3 8h2v2h2v2H5v2H3v-2H1v-2h2V8z"/>
                    </svg>
                    <button onClick={() => store.logout}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="white" d="M18 4v16h2V4h-2zM4 11v2h8v2h-2v2h2v-2h2v-2h2v-2h-2V9h-2V7h-2v2h2v2H4z"/>
                    </svg></button>
                    </Flex>
                    <Text color='white'>Hi, {email}</Text></Box>
                    </Flex></div>) : (
                <Link to={AuthRouter} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="white" d="M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z"/>
                    </svg>
                </Link>)}
            </Flex>
        </Flex>
    );
  }
  
  export default observer(NavBar);