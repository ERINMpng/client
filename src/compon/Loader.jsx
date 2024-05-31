import { Flex } from "@chakra-ui/react";

const Loader = () => {
    return(
        <Flex
        w='100%'
        h='100%'
        justify={'center'}
        align={'center'}
        margin={'20% 0 0 0'}
        >
            <div class="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
            </div>
        </Flex>
    )
}
export default Loader;