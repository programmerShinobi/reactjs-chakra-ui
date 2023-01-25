import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/Actions/reducerAction';
import UsersChild from './UsersChild';
import { Button, Flex } from '@chakra-ui/react';

const UsersParent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDescending, setSortDescending] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const users = useSelector(state => state.userReducers.users);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        dispatch(getAllUsers())
            .then(() => setIsLoading(false))
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const dataUsers = users.results
    const handleSort = (clickedColumn) => {
        if (sortColumn !== clickedColumn) {
            setSortColumn(clickedColumn);
            setSortDescending(true);
        } else {
            setSortDescending(!sortDescending);
        }
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    }

    const columns = [
        {
            name: 'ID',
            selector: 'userId',
            sortable: true,
        },
        {
            name: 'Full Name',
            selector: 'userFullName',
            sortable: true,
        },
        {
            name: 'Company',
            selector: 'userCompanyName',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'userEmail',
            sortable: true,
        },
        {
            name: 'Phone',
            selector: 'userPhoneNumber',
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <Flex justifyItems="center">
                    {/* <Button onClick={() => handleAdd(row)}>Add</Button> */}
                    <Button
                        size='xs'
                        bg='transparent'
                        borderRadius='15px'
                        w='auto'
                        mb='30px'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        onClick={() => handleDetail(row.id)}>Detail</Button>
                    <Button
                        size='xs'
                        bg='transparent'
                        borderRadius='15px'
                        w='auto'
                        mb='30px'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        onClick={() => handleEdit(row.id)}>Edit</Button>
                    <Button
                        size='xs'
                        bg='transparent'
                        borderRadius='15px'
                        w='auto'
                        mb='30px'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        onClick={() => handleDelete(row.id)}>Delete</Button>
                </Flex>
            ),
        },
    ];

    const handleDetail = (data) => {
        // Update the selectedData state
        setSelectedData(data);
    }

    const handleAdd = (data) => {
        // Dispatch addData action
        dispatch(addData(data));
    }

    const handleEdit = (id) => {
        // Dispatch editData action
        dispatch(editData(id, data));
    }

    const handleDelete = (id) => {
        // Dispatch deleteData action
        dispatch(deleteData(id));
    }


    const filteredUsers = dataUsers.filter(user =>
        user.userFullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortDescending) {
            return a[sortColumn] > b[sortColumn] ? -1 : 1;
        } else {
            return a[sortColumn] < b[sortColumn] ? -1 : 1;
        }
    });

    return (
        <UsersChild
            columns={columns}
            sortDescending={sortDescending}
            sortColumn={sortColumn}
            handleSort={handleSort}
            handleSearch={handleSearch}
            sortedUsers={sortedUsers}
            setSearchTerm={setSearchTerm}
        />
    );
}

export default UsersParent;