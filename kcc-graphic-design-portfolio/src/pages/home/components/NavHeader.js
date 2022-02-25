import { Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaBehance, FaDribbble, FaLinkedin, FaPinterest } from "react-icons/fa";
import Navbar from '../../../components/Navbar'

function NavHeader() {
  return (
    <VStack
        p="2em 4em 2em 4em"
        h={{sm: '100vh', md: '50vh', lg: '50vh'}}
    >
        {/* <Navbar /> */}

        <HStack w="100%" pt="5em" justify="space-between">
            <VStack h="full" justify="space-between" align="left" gridGap="10em">
                <Flex w="100%" direction="column" justify="space-between" align ="left" gridGap="2em">
                    <Flex direction="column">
                        <Heading fontSize="6rem">Hey, I'm Keanin</Heading>
                        <Text fontSize="2rem">Graphic Designer</Text>
                    </Flex>
                    <Button w="max-content" size="lg">HIRE ME</Button>
                </Flex>
                <Flex direction="row" justify="left" align="left" gridGap="2em">
                    <FaBehance size="2.5em"/>
                    <FaDribbble size="2.5em"/>
                    <FaLinkedin size="2.5em"/>
                    <FaPinterest size="2.5em"/>
                </Flex>
            </VStack>
            <Flex direction="column" justify="center" align ="center" gridGap="2em">
                <FiFacebook size="2.5em"/>
                <FiInstagram size="2.5em"/>
                <FiTwitter size="2.5em"/>
            </Flex>
        </HStack>
    </VStack>
  )
}

export default NavHeader