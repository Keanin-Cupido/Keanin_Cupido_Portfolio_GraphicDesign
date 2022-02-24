import { Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaBehance, FaDribbble, FaLinkedin, FaPinterest } from "react-icons/fa";
import Navbar from '../../../components/Navbar'

function NavHeader() {
  return (
    <VStack
        p="2em 4em 2em 4em"
    >
        <Navbar />

        <HStack w="100%" pt="2em" justify="space-between">
            <VStack h="full" justify="space-between" align="left" gridGap="15em">
                <Flex w="100%" direction="column" justify="space-between" align ="left" gridGap="2em">
                    <Flex direction="column">
                        <Heading fontSize="5rem">Hey, I'm Keanin</Heading>
                        <Text fontSize="1.5rem">Graphic Designer</Text>
                    </Flex>
                    <Button w="max-content">HIRE ME</Button>
                </Flex>
                <Flex direction="row" justify="left" align="left" gridGap="2em">
                    <FaBehance />
                    <FaDribbble />
                    <FaLinkedin />
                    <FaPinterest />
                </Flex>
            </VStack>
            <Flex direction="column" justify="center" align ="center" gridGap="2em">
                <FiFacebook />
                <FiInstagram />
                <FiTwitter/>
            </Flex>
        </HStack>
    </VStack>
  )
}

export default NavHeader