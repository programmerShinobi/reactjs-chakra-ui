// export const addUser = (userData) => {
//     return (dispatch) => {
//         axios.post('/api/users', userData)
//             .then(res => {
//                 dispatch({ type: ADD_USER, payload: res.data });
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
// }
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { createUsers } from '../../../src/Redux/Actions/reducerAction';

// Chakra imports
import { Box, Button, Flex, FormControl, FormLabel, Grid, Input, Select, Text } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GradientBorder from "components/GradientBorder/GradientBorder";

const AddUser = () => {
    // digunakan untuk useHistory ke route yang berbeda
    const history = useHistory();

    // digunakan untuk mengirim action ke store redux
    const dispatch = useDispatch();

    // digunakan untuk mengelola state dari field input
    const [datausers, setusers] = useState({
        userFullName: '',
        userPhoneNumber: '',
        userEmail: '',
        userType: '',
        uspaPasswordhash: '',
        userCompanyName: '',
        usmeType: "default",
        usproJobTitle: '',
        usroRole: '',
        usproBirth: '',
        usproAddr: 1,
        usproGender: '',
        usproMaritalStatus: '',
        usproNationalId: 0,
        usmeMembName: '',
        ubpoBonusType: '',
        usmePoints: 0,
        ubpoTotalPoints: 0,
    })

    // menangani event onChange dari field input
    const evenHandler = nama => event => {
        setusers({ ...datausers, [nama]: event.target.value })
        console.log(datausers)
    }

    // menangani event submit form
    const addData = (e) => {
        e.preventDefault();
        // mengirim action createUsers dengan datausers sebagai payload
        dispatch(createUsers(datausers))
            .then(() => {
                // navigate ke '/users' jika action terselesaikan dengan sukses
                history.push('/admin/users');
            })
            .catch(e => {
                // menampilkan pesan alert dengan error jika terjadi error
                alert(e)
            })
    }

    return (
        <Flex direction='column' pt={{ base: "120px", md: "75px" }} mx='auto'>
            <Grid templateColumns={{ sm: "1fr", lg: "60% 38%" }} w='auto'>
                <Box>
                    <form>
                        <Card p='16px' mt='24px'>
                            <CardHeader>
                                <Flex
                                    justify='space-between'
                                    align='center'
                                    minHeight='60px'
                                    w='100%'>
                                    <Text fontSize='lg' color='#fff' fontWeight='bold'>
                                        New User
                                    </Text>
                                    <Button
                                        onClick={addData}
                                        maxW='135px'
                                        fontSize='10px'
                                        variant='brand'>
                                        ADD A NEW USER
                                    </Button>
                                </Flex>
                            </CardHeader>
                            {/* Email & Password */}
                            <CardBody>
                                <Flex
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>

                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='Email...'
                                            value={datausers.userEmail}
                                            onChange={evenHandler('userEmail')}
                                            type="email"
                                        />

                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>

                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='Password...'
                                            value={datausers.uspaPasswordhash}
                                            onChange={evenHandler('uspaPasswordhash')}
                                            type="password"
                                        />

                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* Full Name & Birth Date */}
                            <CardBody>
                                <Flex
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>

                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='Full Name...'
                                            value={datausers.userFullName}
                                            onChange={evenHandler('userFullName')}
                                            type="text"
                                        />

                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>

                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            textColor='white'
                                            fontSize='xs'
                                            placeholder='Birth Date...'
                                            value={datausers.usproBirth}
                                            onChange={evenHandler('usproBirth')}
                                            type="date"
                                        />

                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* National ID & Phone Number */}
                            <CardBody>
                                <Flex
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>

                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='National ID...'
                                            value={datausers.usproNationalId}
                                            onChange={evenHandler('usproNationalId')}
                                            type="text"
                                        />

                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>

                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='Phone...'
                                            value={datausers.userPhoneNumber}
                                            onChange={evenHandler('userPhoneNumber')}
                                            type="text"
                                        />

                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* Gender & Type & Role */}
                            <CardBody>
                                <Flex
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>
                                        <Select
                                            fontSize='xs'
                                            bg='white'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select gender...'
                                            value={datausers.usproGender}
                                            onChange={evenHandler('usproGender')}
                                        >
                                            <option
                                                value='M'
                                            >Male</option>
                                            <option
                                                value='F'
                                            >Female</option>
                                        </Select>
                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>
                                        <Select
                                            fontSize='xs'
                                            bg='white'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select type...'
                                            value={datausers.userType}
                                            onChange={evenHandler('userType')}
                                        >
                                            <option
                                                value='T'
                                            >Travel</option>
                                            <option
                                                value='C'
                                            >Company</option>
                                            <option
                                                value='I'
                                            >Individual</option>
                                        </Select>
                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>
                                        <Select
                                            fontSize='xs'
                                            bg='white'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select status...'
                                            value={datausers.usproMaritalStatus}
                                            onChange={evenHandler('usproMaritalStatus')}
                                        >
                                            <option
                                                value='S'
                                            >Single</option>
                                            <option
                                                value='M'
                                            >Married</option>
                                        </Select>
                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>
                                        <Select
                                            fontSize='xs'
                                            bg='white'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder=' Select role...'
                                            value={datausers.usroRole}
                                            onChange={evenHandler('usroRole')}
                                        >
                                            <option
                                                value={1}
                                            >Guest</option>
                                            <option
                                                value={2}
                                            >Manager</option>
                                            <option
                                                value={3}
                                            >Office Boy</option>
                                            <option
                                                value={4}
                                            >Admin</option>
                                            <option
                                                value={5}
                                            >User</option>
                                        </Select>

                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* Company Name & Job Title & Role */}
                            <CardBody>
                                <Flex
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>

                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='Company Name..'
                                            value={datausers.userCompanyName}
                                            onChange={evenHandler('userCompanyName')}
                                            type="text"
                                        />

                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>

                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='Job Title..'
                                            value={datausers.usproJobTitle}
                                            onChange={evenHandler('usproJobTitle')}
                                            type="text"
                                        />

                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* Member Name &  Bonus Type*/}
                            <CardBody>
                                <Flex
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>
                                        <Select
                                            fontSize='xs'
                                            bg='white'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select member...'
                                            value={datausers.usmeMembName}
                                            onChange={evenHandler('usmeMembName')}
                                        >
                                            <option
                                                value='SILVER'
                                            >SILVER</option>
                                            <option
                                                value='GOLD'
                                            >GOLD</option>
                                            <option
                                                value='VIP'
                                            >VIP</option>
                                            <option
                                                value='WIZARD'
                                            >WIZARD</option>
                                        </Select>
                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>
                                        <Select
                                            fontSize='xs'
                                            bg='white'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select bonus type...'
                                            value={datausers.ubpoBonusType}
                                            onChange={evenHandler('ubpoBonusType')}
                                        >
                                            <option
                                                value='R'
                                            >Rating</option>
                                            <option
                                                value='P'
                                            >Promote</option>
                                        </Select>
                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* Member Points & Bonus Total Points */}
                            <CardBody>
                                <Flex
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>
                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='Member points...'
                                            value={datausers.usmePoints}
                                            onChange={evenHandler('usmePoints')}
                                            type="number"
                                        />
                                    </GradientBorder>
                                </Flex>
                                <Flex
                                    pl='15px'
                                    direction={{ sm: "column", md: "row" }}
                                    align='center'
                                    w='100%'
                                    justify='center'
                                    py='1rem'>
                                    <GradientBorder
                                        // mb={{ sm: "24px", md: "0px" }}
                                        // me={{ sm: "0px", md: "24px" }}
                                        w='100%'
                                        borderRadius='20px'>
                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='white'
                                            fontSize='xs'
                                            placeholder='Bonus total points...'
                                            value={datausers.ubpoTotalPoints}
                                            onChange={evenHandler('ubpoTotalPoints')}
                                            type="number"
                                        />
                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                        </Card>
                    </form>
                </Box>
            </Grid>
        </Flex>
    )
}

export default AddUser
