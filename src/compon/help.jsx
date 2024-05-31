import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {HelpRouter} from '../utils/const'

const HelpPage = () =>{
    return(
        <Flex>
            <Text fontSize={'100px'}>У НАС ВСЕ ХОРОШО, ЭТО У ВАС ПРОБЛЕМЫ, ИВАЛИДЫ</Text>
        </Flex>
    )
}

export default HelpPage;