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
        userFullName: null,
        userPhoneNumber: null,
        userEmail: null,
        userType: null,
        uspaPasswordhash: null,
        userCompanyName: null,
        usmeType: "default",
        usproJobTitle: null,
        usroRole: null,
        usproBirth: null,
        usproAddr: 1,
        usproGender: null,
        usproMaritalStatus: null,
        usproNationalId: null,
        usmeMembName: null,
        ubpoBonusType: null,
        usmePoints: null,
        ubpoTotalPoints: null,
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
                alert(e);
            })
    }

    return (
        <Flex direction='column' pt={{ base: "120px", md: "75px" }} mx='auto'>
            {/* <Grid templateColumns={{ sm: "1fr", lg: "60% 38%" }} w='auto'> */}
            <Grid w='auto'>
                <Box>
                    <form>
                        <Card p='16px' mt='24px' align='center' justify='center'>
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
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='Email...'
                                            value={datausers.userEmail}
                                            onChange={evenHandler('userEmail')}
                                            type="email"
                                            isRequired
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
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='Password...'
                                            value={datausers.uspaPasswordhash}
                                            onChange={evenHandler('uspaPasswordhash')}
                                            type="password"
                                            isRequired
                                        />

                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* Full Name & Birth Date & National ID & Phone */}
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
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='Full Name...'
                                            value={datausers.userFullName}
                                            onChange={evenHandler('userFullName')}
                                            type="text"
                                            isRequired
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
                                            color='grey'
                                            textcolor='grey'
                                            fontSize='xs'
                                            placeholder='Birth Date...'
                                            value={datausers.usproBirth}
                                            onChange={evenHandler('usproBirth')}
                                            type="date"
                                            isRequired
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
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='National ID...'
                                            value={datausers.usproNationalId}
                                            onChange={evenHandler('usproNationalId')}
                                            type="text"
                                            isRequired
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
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='Phone...'
                                            value={datausers.userPhoneNumber}
                                            onChange={evenHandler('userPhoneNumber')}
                                            type="text"
                                            isRequired
                                        />

                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* Gender & Type & Status & Role */}
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
                                            color='grey'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select gender...'
                                            value={datausers.usproGender}
                                            onChange={evenHandler('usproGender')}
                                            isRequired
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
                                            color='grey'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select type...'
                                            value={datausers.userType}
                                            onChange={evenHandler('userType')}
                                            isRequired
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
                                            color='grey'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select status...'
                                            value={datausers.usproMaritalStatus}
                                            onChange={evenHandler('usproMaritalStatus')}
                                            isRequired
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
                                            color='grey'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder=' Select role...'
                                            value={parseInt(datausers.usroRole)}
                                            onChange={evenHandler('usroRole')}
                                            isRequired
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
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='Company Name..'
                                            value={datausers.userCompanyName}
                                            onChange={evenHandler('userCompanyName')}
                                            type="text"
                                            isRequired
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
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='Job Title..'
                                            value={datausers.usproJobTitle}
                                            onChange={evenHandler('usproJobTitle')}
                                            type="text"
                                            isRequired
                                        />

                                    </GradientBorder>
                                </Flex>
                            </CardBody>
                            {/* Member Name &  Member Points & Bonus type & Bonus Total Points */}
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
                                            color='grey'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select member...'
                                            value={datausers.usmeMembName}
                                            onChange={evenHandler('usmeMembName')}
                                            isRequired
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
                                        <Input
                                            p='22px'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='Member points...'
                                            value={parseInt(datausers.usmePoints)}
                                            onChange={evenHandler('usmePoints')}
                                            type="number"
                                            isRequired
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
                                        <Select
                                            fontSize='xs'
                                            color='grey'
                                            bg='rgb(31, 35, 89)'
                                            border='transparent'
                                            borderRadius='20px'
                                            align='center'
                                            w='100%'
                                            placeholder='Select bonus type...'
                                            value={datausers.ubpoBonusType}
                                            onChange={evenHandler('ubpoBonusType')}
                                            isRequired
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
                                            color='grey'
                                            fontSize='xs'
                                            placeholder='Bonus total points...'
                                            value={parseInt(datausers.ubpoTotalPoints)}
                                            onChange={evenHandler('ubpoTotalPoints')}
                                            type="number"
                                            isRequired
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
