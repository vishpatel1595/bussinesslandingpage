import uuid from "react-uuid"
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Link = (props) => {
  return (
    <NavLink
      to={props.to}>
      {props.children}
    </NavLink>
  )
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const Links = [{ Title: 'Home', to: "/" }, { Title: 'About Us', to: "/AboutUs" }, { Title: 'Team', to: "/team" }];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (

    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>Bussiness Plaza</Box>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => {
                return (
                  <Link key={uuid()} to={link.to}>{link.Title}</Link>
                )
              })}
            </HStack>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => {
              debugger
              return (
                <Link  key={uuid()} to={link.to}>{link.Title}</Link>
              )
            })}
          </Stack>
        </Box>
      ) : null}
    </Box>

  );
}