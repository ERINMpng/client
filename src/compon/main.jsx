import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center, Image,AspectRatio,Card, FormControl,FormLabel,HStack,Radio,RadioGroup} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter} from '../utils/const'
import potato from '../img/potatomain.PNG'
import batat from '../img/batat.jpg'
import pole from '../img/pole.jpg'
import CartItem from '../cartall/CartItem';
import CartItem3 from '../cartall/Cart3';   
import CartItem4 from '../cartall/Cart4';
import News from './News';


const Main = () => {
    return (
        <Box backgroundColor={'#fcfbfa'}>
            <Flex
                align={'center'}
                justify={'space-between'}
                width={'100%'}
                padding={'10px 50px'}
                height='100vh'
                backgroundImage={potato}
                backgroundSize={'cover'}
                id='main'
                >
                    <Box width={'600px'} >
                        <Text color='#f7e3df' fontSize={'80px'}>Spicy with Steam and Starch</Text>
                        <Link to={ShopRouter}><Button colorScheme='whiteAlpha' width={'100%'} height={'100px'} fontSize={'50px'} margin={'30px 0px 0px 0px'}>BUY POTATOES SSS CLASS</Button></Link>
                    </Box>
                </Flex>
                <Flex padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} margin={'50px 0px 50px 0px'}>
                    <Text fontSize={'40px'} color={'#332821'}>Our potatoes...</Text>
                    <Text fontSize={'20px'}>THERE IS NO more tragic vegetable than the potato. Originating in the Peruvian Andes, it was first domesticated by the Quechua-speaking peoples, who could not help but become reliant on a highly nutritional foodstuff that could be grown in large quantities on small plots in regions inhospitable to grains. It enabled the Quechua to maintain strong bodies while suffering the deprecations of the Incas (and their system of forced labor).</Text>
                </Flex>
                <Image src={pole} width={'100%'}></Image>
                <Flex padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} margin={'50px 0px 50px 0px'} id='product'>
                    <Text fontSize={'40px'} color={'#332821'}>Belarusians will approve:</Text>
                </Flex>
                <Flex
                    justify={'center'}
                    align={'center'}
                    flexWrap={'wrap'}
                    gap={'35px'}
                    mt={'50px'}
                    margin={'0px 0px 50px 0px'}
                >
                   <Link to={ShopRouter}> <CartItem /></Link>
                    <Link to={ShopRouter}><CartItem3 /></Link>
                    <Link to={ShopRouter}><CartItem4 /></Link>
                    </Flex>
                    <Flex padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} margin={'30px 0px 20px 0px'}>
                        <Text fontSize={'40px'} color={'#332821'}>Where are your potatoes?</Text>
                        <AspectRatio ratio={16 / 9} width={"100%"} h={500} >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38946.80405791186!2d23.81995275841609!3d52.403499904577785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720559c6df3f967%3A0x2cc7ba71f743e569!2z0JrQsNC80LXQvdC10YYsINCR0YDQtdGB0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1711123453690!5m2!1sru!2sby"  ></iframe>
                        </AspectRatio>
                    </Flex>
                    <Box margin={'50px 0px 20px'} id='services'>
                        <Text fontSize={'40px'} color={'#332821'} textAlign={'center'}>Your feedback</Text>
                        <Text fontSize={'30px'} color={'#332821'} textAlign={'center'}>To our gorgeous product</Text>
                    </Box>
                    <Flex         
                        justify={'center'}
                        align={'center'}
                        flexWrap={'wrap'}
                        gap={'35px'}
                        mt={'50px'}
                        margin={'50px 0px 50px 0px'}>
                        <Card width={'400px'} height={'500px'} backgroundColor={'#faf6f5'} boxShadow='xl' p='6' rounded='md' padding={'30px'} margin={'30px 50px 30px 50px'}>
                            <Text color={'#301407'} fontSize={'20px'}>Marina Marinadovna</Text>
                            <Flex margin={'10px 0px 10px 0px'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#c2927a" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                            </Flex>
                            <Text color={'#301407'} fontSize={'20px'} margin={'25px 0px 25px 0px'}>There are so many interesting things you can make with potatoes. It can serve as an excellent side dish for meat, mushrooms or vegetables. Boiled and served with butter or fried in a pan until golden brown with crispy golden onions.</Text>
                        </Card>
                        <Card width={'400px'} height={'500px'} backgroundColor={'#faf6f5'} boxShadow='xl' p='6' rounded='md' padding={'30px'} margin={'30px 50px 30px 50px'}>
                            <Text color={'#301407'} fontSize={'20px'}>Marina Marinadovna</Text>
                            <Flex margin={'10px 0px 10px 0px'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#c2927a" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                            </Flex>
                            <Text color={'#301407'} fontSize={'20px'} margin={'25px 0px 25px 0px'}>There are so many interesting things you can make with potatoes. It can serve as an excellent side dish for meat, mushrooms or vegetables. Boiled and served with butter or fried in a pan until golden brown with crispy golden onions.</Text>
                        </Card>
                        <Card width={'400px'} height={'500px'} backgroundColor={'#faf6f5'} boxShadow='xl' p='6' rounded='md' padding={'30px'} margin={'30px 50px 30px 50px'}>
                            <Text color={'#301407'} fontSize={'20px'}>Marina Marinadovna</Text>
                            <Flex margin={'10px 0px 10px 0px'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#301407" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                                    <path fill="#c2927a" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/>
                                </svg>
                            </Flex>
                            <Text color={'#301407'} fontSize={'20px'} margin={'25px 0px 25px 0px'}>There are so many interesting things you can make with potatoes. It can serve as an excellent side dish for meat, mushrooms or vegetables. Boiled and served with butter or fried in a pan until golden brown with crispy golden onions.</Text>
                        </Card>
                    </Flex>
                    <Flex justifyContent={'center'} backgroundImage={potato} backgroundSize={'cover'} width={'100%'} height={'600px'} margin={'50px 0px 50px 0px'}>
                        <Flex opacity={0.8} backgroundColor='#171211' width={'1000px'} height={'600px'} margin={'0px 0px 0px 100px'} flexDirection={'column'} justifyContent={'center'}>
                            <Text fontSize={'60px'} color={'#fcf3f0'} margin={'25px 0px 0px 30px'}>Order to your home:</Text>
                            <FormControl margin={'10px 30px 10px 30px'} width={'900px'}>
                                <FormLabel color={'#fcf3f0'} fontSize={'20px'}>Your card number:</FormLabel>
                                <Input backgroundColor={'#fcf3f0'} opacity={'0.3'} type='text' />
                            </FormControl>
                            <FormControl margin={'10px 30px 10px 30px'} width={'900px'}>
                                <FormLabel color={'#fcf3f0'} fontSize={'20px'}>3 numbers on the back:</FormLabel>
                                <Input backgroundColor={'#fcf3f0'} opacity={'0.3'} type='text' />
                            </FormControl>
                            <FormControl margin={'10px 30px 10px 30px'} width={'900px'}>
                                <FormLabel color={'#fcf3f0'} fontSize={'20px'}>Registration date:</FormLabel>
                                <Input backgroundColor={'#fcf3f0'} opacity={'0.3'} type='text' />
                            </FormControl>
                            <FormControl as='fieldset' margin={'10px 30px 10px 30px'}>
                                <FormLabel as='legend' color={'#fcf3f0'}>
                                Which bank do you have a card from?
                                </FormLabel>
                                <RadioGroup defaultValue='Itachi'>
                                    <HStack spacing='24px' color={'#fcf3f0'}>
                                    <Radio value='AlfaBank' color={'#fcf3f0'}>AlfaBank</Radio>
                                    <Radio value='Belarusbank' color={'#fcf3f0'}>Belarusbank</Radio>
                                    </HStack>
                                </RadioGroup>
                                </FormControl>
                                <Button colorScheme='whiteAlpha'  margin={'10px 30px 10px 30px'} width={'300px'} fontSize={'20px'}>SEND</Button>
                        </Flex>
                        <Box width={'400px'}>
                        <Text fontSize={'90px'} color={'#fcf3f0'} margin={'50px 50px 50px 50px'} >WE WILL HELP YOU</Text></Box>
                    </Flex>
                    <Box>
                        <Text fontSize={'50px'} color={'#332821'} textAlign={'center'} >Last news</Text>
                        <News />
                    </Box>
        </Box>
    )}

    export default Main;