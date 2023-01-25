import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers, getAllUsers } from '../../Redux/Actions/reducerAction';
import UsersChild from './UsersChild';
import { Button, Flex } from '@chakra-ui/react';
import EditUser from './EditUser';
import editUser from './EditUser';

const UsersParent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDescending, setSortDescending] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const users = useSelector(state => state.userReducers.users);
    const dispatch = useDispatch();
    const history = useHistory();

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
                <Flex alignSelf='center'>
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
                        onClick={() => handleEdit(row.userId)}>Edit</Button>
                    <Button
                        size='xs'
                        bg='transparent'
                        borderRadius='15px'
                        w='auto'
                        mb='30px'
                        borderColor='rgba(226, 232, 240, 0.3)'
                        onClick={() => handleDelete(row.userId)}>Delete</Button>
                </Flex>
            ),
        },
    ];

    // const editdata = (id) => {
    //     history.push('admin/users/editUser', { state: { id } });
    // }

    const handleDetail = (data) => {
        // Update the selectedData state
        setSelectedData(data);
    }

    const params = useParams()
    // const navigate = useNavigate()
    const handleEdit = (id) => {
        // navigate('/edituser', { state: { id } })
        params = id
        history.push({
            pathname: '/users/editUser/' + params,
        });

        // history.push(`/users/editUser/ ${id}`);
        // history.push({
        //     pathname: '/users/editUser/',
        //     state: { params.id }
        // });

        // history.push({
        //     pathname: '/users/editUser/',
        //     state: { id: params.id }
        // });

        console.info("handle edit :" + id);
    }

    const handleDelete = (id) => {
        // Dispatch deleteData action
        dispatch(deleteUsers(id));
        history.push('/admin/users');
        console.info(id);
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