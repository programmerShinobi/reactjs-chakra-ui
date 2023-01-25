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
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from "react-router-dom";
import { updateUsers } from '../../Redux/Actions/reducerAction';

// Chakra imports
import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GradientBorder from "components/GradientBorder/GradientBorder";

const editUser = () => {
    // digunakan untuk useHistory ke route yang berbeda
    const history = useHistory();

    // const location = useLocation();
    // const { id } = location.state;

    // const { state } = useLocation();
    // const id = state ? state.userId : null;

    // const location = useLocation();
    // const id = location.state.id;

    // const { state } = useLocation();
    // const { id } = state || {};

    // const { id } = history.location.state || {};
    // const { id } = history.state || {};

    const { id } = useParams();

    console.info("id:" + id)

    // digunakan untuk mengirim action ke store redux
    // const dispatch = useDispatch();

    // digunakan untuk mengelola state dari field input
    // const [datausers, setusers] = useState({
    //     userFullName: '',
    // })

    // useEffect(() => {
    //     dispatch(get(id))
    //         .then((res) => {
    //             setDataUser({
    //                 ...DataUser,
    //                 userId: res.userId,
    //                 userFullName: res.userFullName
    //             })

    //             console.log(res)
    //         })

    // }, [])


    // menangani event onChange dari field input
    // const evenHandler = nama => event => {
    //     setusers({ ...datausers, [nama]: event.target.value })
    //     console.log(datausers)
    // }

    // // fungsi untuk mengirimkan action updateUser ke store redux
    // const updateData = (e) => {
    //     e.preventDefault();
    //     dispatch(updateUsers(datauser.userId, datauser))
    //         .then(() => {
    //             history.push('/admin/users');
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })
    // }

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
                                        Edit User
                                    </Text>
                                    <Button
                                        // onClick={updateData}
                                        maxW='135px'
                                        fontSize='10px'
                                        variant='brand'>
                                        Update data User
                                    </Button>
                                </Flex>
                            </CardHeader>
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
                                            id="userFullName"
                                            // value={datausers.userFullName}
                                            // onChange={evenHandler('userFullName')}
                                            type="text"
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

export default editUser
