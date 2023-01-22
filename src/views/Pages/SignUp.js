/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Shinobi

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState, useEffect } from "react";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Switch,
  Text,
  Icon,
  DarkMode,
  useToast,
  FormErrorMessage,
  FormHelperText,
  InputRightElement,
  InputGroup
} from "@chakra-ui/react";

// Icons
import { FaApple, FaFacebook, FaGoogle, HiHome } from "react-icons/fa";
// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

// Assets
import signUpImage from "assets/img/signUpImage.png";
import { NavLink, useHistory } from "react-router-dom";

// API Register
import ApiRegister from "api/auth/ApiRegister";


// Register
function SignUp() {
  const [userFullName, setuserFullName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleInputChangeFullName = (e) => setuserFullName(e.target.value);
  const handleInputChangeEmail = (e) => setuserEmail(e.target.value);
  const handleInputChangePassword = (e) => setuserPassword(e.target.value);
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const isErrorFullName = userFullName === ''
  const isErrorEmail = userEmail === ''
  const isErrorPassword = userPassword === ''

  const history = useHistory();

  // Notification Toast
  const toast = useToast();
  const toastIdRef = React.useRef();

  const handleSubmit = async (data) => {
    data.preventDefault();

    try {
      const result = await ApiRegister.register(userFullName, userEmail, userPassword)

      if (result.savedUser.message == "Success" && result.savedUserPassword.message == "Success") {
        // useEffect for redirect after successful login
        useEffect(() => {
          history.push('/auth/signin');
          toastIdRef.current = toast({
            title: `Success, register successfully`,
            status: "success",
            isClosable: true,
            duration: 3000
          });
        }, [history]);
      } else {
        toastIdRef.current = toast({
          title: `Failed, check again name/email/password`,
          status: "warning",
          isClosable: true,
          duration: 3000
        });
      }
    } catch (error) {
      let errorName = error.name.toString();
      if (errorName == 'TypeError') {
        errorName = 'Failed, check password must be strong enough';
      } else {
        errorName = 'Failed, waiting server'
      }
      toastIdRef.current = toast({
        title: errorName,
        status: "error",
        isClosable: true,
        duration: 3000
      });
    }
  }

  const titleColor = "white";
  const textColor = "gray.400";
  return (
    <Flex position='relative' overflow={{ lg: "hidden" }}>
      <Flex
        flexDirection='column'
        h={{ sm: "initial", md: "unset" }}
        w={{ base: "90%" }}
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        pt={{ sm: "100px", md: "0px" }}
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          flexDirection='column'
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='50px'
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            textAlign='center'
            justifyContent='center'
            align='center'
            mt={{ base: "60px", md: "140px", lg: "200px" }}
            mb='50px'>
            <Text
              fontSize='4xl'
              lineHeight='39px'
              color='white'
              fontWeight='bold'>
              Welcome!
            </Text>
            <Text
              fontSize='md'
              color='white'
              fontWeight='normal'
              mt='10px'
              w={{ base: "100%", md: "90%", lg: "90%", xl: "80%" }}>
              Use these awesome forms to login or create new account in your
              project for free.
            </Text>
          </Flex>
          <GradientBorder p='2px' me={{ base: "none", lg: "30px", xl: "none" }}>
            <Flex
              background='transparent'
              borderRadius='30px'
              direction='column'
              p='40px'
              minW={{ base: "unset", md: "430px", xl: "450px" }}
              w='100%'
              mx={{ base: "0px" }}
              bg={{
                base: "rgb(19,21,56)",
              }}>
              <Text
                fontSize='xl'
                color={textColor}
                fontWeight='bold'
                textAlign='center'
                mb='22px'>
                Register With
              </Text>
              <HStack spacing='15px' justify='center' mb='22px'>
                <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaFacebook}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
                <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaApple}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
                <GradientBorder borderRadius='15px'>
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition='all .25s ease'
                    cursor='pointer'
                    justify='center'
                    align='center'
                    bg='rgb(19,21,54)'
                    w='71px'
                    h='71px'
                    borderRadius='15px'>
                    <Link href='#'>
                      <Icon
                        color={titleColor}
                        as={FaGoogle}
                        w='30px'
                        h='30px'
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
              </HStack>
              <Text
                fontSize='lg'
                color='gray.400'
                fontWeight='bold'
                textAlign='center'
                mb='22px'>
                or
              </Text>
              <form onSubmit={handleSubmit}>
                <FormControl isInvalid={isErrorFullName}>
                  <FormLabel
                    color={titleColor}
                    ms='4px'
                    fontSize='sm'
                    fontWeight='normal'>
                    Name
                  </FormLabel>
                  <GradientBorder
                    h='50px'
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius='20px'>
                    <Input
                      value={userFullName}
                      onChange={handleInputChangeFullName}
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border='transparent'
                      borderRadius='20px'
                      fontSize='sm'
                      size='lg'
                      w={{ base: "100%", md: "346px" }}
                      maxW='100%'
                      h='46px'
                      type='text'
                      placeholder='Your name'
                      isRequired
                    />
                  </GradientBorder>
                  {!isErrorFullName ? (
                    <FormHelperText mb='24px'>
                      Enter the name you'd like.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage mb='24px'>Name is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={isErrorEmail}>
                  <FormLabel
                    color={titleColor}
                    ms='4px'
                    fontSize='sm'
                    fontWeight='normal'>
                    Email
                  </FormLabel>
                  <GradientBorder
                    h='50px'
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius='20px'>
                    <Input
                      type='email'
                      value={userEmail}
                      onChange={handleInputChangeEmail}
                      color={titleColor}
                      bg={{
                        base: "rgb(19,21,54)",
                      }}
                      border='transparent'
                      borderRadius='20px'
                      fontSize='sm'
                      size='lg'
                      w={{ base: "100%", md: "346px" }}
                      maxW='100%'
                      h='46px'
                      placeholder='Your email address'
                      isRequired
                    />
                  </GradientBorder>
                  {!isErrorEmail ? (
                    <FormHelperText mb='24px'>
                      Enter the email you'd like.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage mb='24px'>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={isErrorPassword}>
                  <FormLabel
                    color={titleColor}
                    ms='4px'
                    fontSize='sm'
                    fontWeight='normal'>
                    Password
                  </FormLabel>
                  <GradientBorder
                    h='50px'
                    w={{ base: "100%", lg: "fit-content" }}
                    borderRadius='20px'>
                    <InputGroup size='md'>
                      <Input
                        value={userPassword}
                        onChange={handleInputChangePassword}
                        color={titleColor}
                        bg={{
                          base: "rgb(19,21,54)",
                        }}
                        border='transparent'
                        borderRadius='20px'
                        fontSize='sm'
                        size='lg'
                        w={{ base: "100%", md: "346px" }}
                        maxW='100%'
                        h='46px'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Your password'
                        isRequired
                      />
                      <InputRightElement height='3rem' width='5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClickShowPassword}>
                          {showPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </GradientBorder>
                  {!isErrorPassword ? (
                    <FormHelperText mb='24px'>
                      Enter the password you'd like.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage mb='24px'>Password is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl display='flex' alignItems='center' mb='24px'>
                  <DarkMode>
                    <Switch id='remember-login' colorScheme='brand' me='10px' />
                  </DarkMode>
                  <FormLabel
                    color={titleColor}
                    htmlFor='remember-login'
                    mb='0'
                    fontWeight='normal'>
                    Remember me
                  </FormLabel>
                </FormControl>
                <Button
                  variant='brand'
                  fontSize='10px'
                  type='submit'
                  w='100%'
                  maxW='350px'
                  h='45'
                  mb='20px'
                  mt='20px'>
                  SIGN UP
                </Button>
              </form>
              <Flex
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                maxW='100%'
                mt='0px'>
                <Text color={textColor} fontWeight='medium'>
                  Already have an account?
                  <NavLink to="/auth/signin"
                    color={titleColor}
                    as='span'
                    ms='5px'
                    href='#'
                    fontWeight='bold'>
                    Sign In
                  </NavLink>
                </Text>
              </Flex>
            </Flex>
          </GradientBorder>
        </Flex>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='90px'>
          <AuthFooter />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX='hidden'
          h='1300px'
          maxW={{ md: "50vw", lg: "48vw" }}
          w='960px'
          position='absolute'
          left='0px'>
          <Box
            bgImage={signUpImage}
            w='100%'
            h='1300px'
            bgSize='cover'
            bgPosition='50%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            position='absolute'>
            <Text
              textAlign='center'
              color='white'
              letterSpacing='8px'
              fontSize='20px'
              fontWeight='500'>
              INSPIRED BY THE FUTURE:
            </Text>
            <Text
              textAlign='center'
              color='transparent'
              letterSpacing='8px'
              fontSize='36px'
              fontWeight='bold'
              bgClip='text !important'
              bg='linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)'>
              PROGRAMMER SHINOBI
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignUp;
