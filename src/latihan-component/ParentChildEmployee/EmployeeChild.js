import React from "react";
import DataTable from 'react-data-table-component'

// Chakra imports
import {
    Flex,
    Table,
    Text,
    Input
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const EmployeeChild = ({ columns, sortAscending, sortColumn, handleSort, sortedEmployees, setSearchTerm }) => {
    // const { columns, sortAscending, sortColumn, handleSort, sortedEmployees, setSearchTerm } = props;

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
                    placeholder='Search Employee...'
                    borderRadius='15px'
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <CardBody mb='30px'>
                    <Table variant='simple' color='#fff' borderTopRadius='15px'>
                        <DataTable
                            fixedHeader
                            fixedHeaderScrollHeight="300px"
                            columns={columns}
                            data={sortedEmployees}
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

export default EmployeeChild
