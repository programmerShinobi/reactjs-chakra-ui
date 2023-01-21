import React from "react";
import DataTable from 'react-data-table-component'

// Chakra imports
import {
    Flex,
    Table,
    Text,
    Input,
    useToast
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const UsersChild = ({ columns, Users, sortedUsers, sortAscending, sortColumn, handleSort, setSearchTerm }) => {
    // const { columns, sortAscending, sortColumn, handleSort, sortedUsers, setSearchTerm } = props;


    // Notification Toast
    // const toast = useToast();
    // const toastIdRef = React.useRef()
    // if (status == "Loading") {
    //     toastIdRef.current = toast({
    //         title: `Failed, invalid email or password..`,
    //         status: "info",
    //         isClosable: true,
    //         // duration: 3000
    //     });
    // } else {
    //     toastIdRef.current = toast({
    //         title: `Server error..`,
    //         description: status,
    //         status: "error",
    //         isClosable: true,
    //         // duration: 3000
    //     });
    // }
    return (
        <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
            {/* Authors Table */}
            <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
                <CardHeader p='6px 0px 22px 0px'>
                    <Text fontSize='lg' color='#fff' fontWeight='bold'>
                        Shinobi Table
                    </Text>
                </CardHeader>
                <Input
                    w={{
                        sm: "128px",
                        md: "200px",
                    }}
                    fontSize='xs'
                    py='11px'
                    mb='30px'
                    color='white'
                    placeholder='Search Users...'
                    borderRadius='15px'
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <CardBody mb='30px'>
                    <Table variant='simple' color='#fff' borderTopRadius='15px'>
                        <DataTable
                            fixedHeader
                            fixedHeaderScrollHeight="300px"
                            columns={columns}
                            // data={Users}
                            data={sortedUsers}
                            onSort={handleSort}
                            sortAscending={sortAscending}
                            sortColumn={sortColumn}
                            pagination
                            selectableRows
                            persistTableHead
                        />
                    </Table>
                </CardBody>
            </Card>
        </Flex>
    );

}

export default UsersChild
