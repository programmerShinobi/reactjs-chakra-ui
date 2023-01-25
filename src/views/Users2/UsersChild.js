import React from "react";
import DataTable from 'react-data-table-component'

// Chakra imports
import {
    Flex,
    Table,
    Text,
    Input,
    useToast,
    InputGroup,
    InputLeftElement,
    IconButton
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { SearchIcon } from "@chakra-ui/icons";

const UsersChild = ({ columns, sortedUsers, sortAscending, sortColumn, handleSort, setSearchTerm }) => {
    // const { columns, sortAscending, sortColumn, handleSort, sortedUsers, setSearchTerm } = props;

    return (
        <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
            {/* Authors Table */}
            <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
                <CardHeader p='6px 0px 22px 0px'>
                    <Text fontSize='lg' color='#fff' fontWeight='bold'>
                        Users Table
                    </Text>
                </CardHeader>
                <InputGroup
                    bg='transparent'
                    borderRadius='15px'
                    w='auto'
                    mb='30px'
                    borderColor='rgba(226, 232, 240, 0.3)'>
                    <InputLeftElement
                        children={
                            <IconButton
                                bg='inherit'
                                borderRadius='inherit'
                                _hover='none'
                                _active={{
                                    bg: 'inherit',
                                    transform: 'none',
                                    borderColor: 'transparent'
                                }}
                                _focus={{
                                    boxShadow: 'none',
                                }}
                                icon={
                                    <SearchIcon color='white' w='15px' h='15px' />
                                }></IconButton>
                        }
                    />
                    <Input
                        color='white'
                        fontSize='xs'
                        py='11px'
                        placeholder='Search Users (Full Name)...'
                        borderRadius='inherit'
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </InputGroup>
                <CardBody mb='30px'>
                    <Table variant='simple' color='#fff' borderTopRadius='15px'>
                        <DataTable
                            fixedHeader
                            fixedHeaderScrollHeight="300px"
                            columns={columns}
                            data={sortedUsers}
                            onSort={handleSort}
                            sortAscending={sortAscending}
                            sortColumn={sortColumn}
                            pagination
                            persistTableHead
                        />
                    </Table>
                </CardBody>
            </Card>
        </Flex>
    );

}

export default UsersChild
