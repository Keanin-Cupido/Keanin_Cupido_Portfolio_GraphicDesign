import { Avatar, Flex, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <Flex direction="row" justify="left" align="center" w="100%" gridGap='6em'>
        <Avatar name="Keanin Chad Cupido" src='https://bit.ly/dan-abramov' />

        <Flex direction="row" justify="center" align="center" gridGap='6em' fontWeight="bold">
            <Link as={ReactLink} to='/' fontSize='1.5rem'>WORKS</Link>
            <Link as={ReactLink} to='about' fontSize='1.5rem'>ABOUT</Link>
            <Link as={ReactLink} to='process' fontSize='1.5rem'>PROCESS</Link>
            <Link as={ReactLink} to='contact' fontSize='1.5rem'>CONTACT</Link>
        </Flex>
    </Flex>
  )
}

export default Navbar