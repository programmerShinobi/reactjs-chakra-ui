import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/Actions/reducerAction';
import UsersChild from './UsersChild';

const UsersParent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDescending, setSortDescending] = useState(true);
    const users = useSelector(state => state.userReducers.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    console.info(users);

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
            name: 'Type',
            selector: 'userType',
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
            name: 'Date',
            selector: 'userModifiedDate',
            sortable: true,
        },
    ];

    const filteredUsers = users.filter(user =>
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