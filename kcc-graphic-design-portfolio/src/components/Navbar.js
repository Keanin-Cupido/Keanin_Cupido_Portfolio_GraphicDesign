import { Avatar, Flex, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <Flex direction="row" justify="left" align="center" w="100%" gridGap='4em'>
        <Avatar name="Keanin Chad Cupido" src='https://bit.ly/dan-abramov' />

        <Flex direction="row" justify="center" align="center" gridGap='8em'>
            <Link as={ReactLink} to='/'>WORKS</Link>
            <Link as={ReactLink} to='about'>ABOUT</Link>
            <Link as={ReactLink} to='process'>PROCESS</Link>
            <Link as={ReactLink} to='contact'>CONTACT</Link>
        </Flex>
    </Flex>
  )
}

export default Navbar