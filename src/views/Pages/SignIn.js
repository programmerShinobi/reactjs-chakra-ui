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
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
  useToast
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";

// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";

// API Login
import ApiLogin from "../../api/ApiLogin";
import { NavLink, Redirect, useHistory } from "react-router-dom";

// Router 
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "layouts/Admin";

// Login
function SignIn() {
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await ApiLogin.login(userEmail, userPassword);
      if (result.message != "Login successfully") {
        return setStatus("Warning")
      } else {
        localStorage.setItem('token', result.token);
        setStatus("Success");
      }
    } catch (error) {
      setStatus("Error");
      return notif(error.toString());
    }
  }

  // useEffect for redirect after successful login
  useEffect(() => {
    if (status === 'Success') {
      setTimeout(() => {
        history.push('/admin/dashboard');
        toastIdRef.current = toast({
          title: `Success, login successfully`,
          status: "success",
          isClosable: true,
          duration: 3000
        });
      }, 5000);
      toastIdRef.current = toast({
        title: `Loading ...`,
        status: "info",
        isClosable: true,
        duration: 5000
      });
    }
  }, [status, history]);

  // Notification Toast
  const toast = useToast();
  const toastIdRef = React.useRef()
  function notif() {
    setStatus(status);
    if (status == "Warning") {
      toastIdRef.current = toast({
        title: `Failed, invalid email or password..`,
        status: "warning",
        isClosable: true,
        duration: 3000
      });
    } else if (status == "Error") {
      toastIdRef.current = toast({
        title: `Sorry, server error..`,
        status: "error",
        isClosable: true,
        duration: 3000
      });
    }
  }

  const titleColor = "white";
  const textColor = "gray.400";
  return (
    <Flex position='relative'>
      <Flex
        minH='100vh'
        h={{ base: "120vh", lg: "fit-content" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: "100px", md: "0px" }}
        flexDirection='column'
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px='50px'>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
            mb={{ base: "60px", lg: "95px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Nice to see you!
            </Heading>
            <form onSubmit={handleSubmit}>
              <Text
                mb='36px'
                ms='4px'
                color={textColor}
                fontWeight='bold'
                fontSize='14px'>
                Enter your email and password to sign in
              </Text>
              <FormControl>
                <FormLabel
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                  color='white'>
                  Email
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    value={userEmail}
                    onChange={e => setuserEmail(e.target.value)}
                    color='white'
                    bg='rgb(19,21,54)'
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    h='46px'
                    placeholder='Your email adress'
                  />
                </GradientBorder>
              </FormControl>
              <FormControl>
                <FormLabel
                  ms='4px'
                  fontSize='sm'
                  fontWeight='normal'
                  color='white'>
                  Password
                </FormLabel>
                <GradientBorder
                  mb='24px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius='20px'>
                  <Input
                    value={userPassword}
                    onChange={e => setuserPassword(e.target.value)}
                    color='white'
                    bg='rgb(19,21,54)'
                    border='transparent'
                    borderRadius='20px'
                    fontSize='sm'
                    size='lg'
                    w={{ base: "100%", md: "346px" }}
                    maxW='100%'
                    type='password'
                    placeholder='Your password'
                  />
                </GradientBorder>
              </FormControl>
              <FormControl display='flex' alignItems='center'>
                <DarkMode>
                  <Switch id='remember-login' colorScheme='brand' me='10px' />
                </DarkMode>
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'
                  color='white'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                // onClick={() => setShowToast(true)}
                onClick={notif}
                variant='brand'
                fontSize='10px'
                type='submit'
                w={{ base: "100%", md: "346px" }}
                maxW='100%'
                h='45'
                mb='20px'
                mt='20px'>
                SIGN IN
              </Button>
            </form>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <NavLink to='/auth/signup' color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Sign Up
                </NavLink>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='80px'>
          <AuthFooter />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX='hidden'
          h='100%'
          maxW={{ md: "50vw", lg: "50vw" }}
          minH='100vh'
          w='960px'
          position='absolute'
          left='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
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
              THE VISION UI DASHBOARD
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
