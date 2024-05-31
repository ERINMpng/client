import {Text, Box, Flex, Grid, Input, Heading, Center, Button} from '@chakra-ui/react';
import '../App.css';
import { useState, useEffect } from 'react';

const TopButton = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handIsScroll = () =>
            {setIsScrolled(window.scrollY > 0)}
            window.addEventListener('scroll', handIsScroll);

            return () => {
                window.removeEventListener('scroll', handIsScroll)
            };
    }, [])
    return (
        <>{isScrolled && (
        <>
        <div className='topb' onClick={()=>{
            window.scrollTo({top:0, behavior: 'smooth'})
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="120px" viewBox="0 0 24 24">
                <path fill="#d1ac9b" d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z"/>
            </svg>
        </div>
        </> 
        )} 
        </> 
    ); 
}

export default TopButton;