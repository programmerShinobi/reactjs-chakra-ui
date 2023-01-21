import React, { useState, useEffect } from 'react';

// API Login
import ApiGetUsers from 'api/users/ApiGetUsers';
import UsersChild from './UsersChild';

const UsersParent = () => {

    const [Users, setUsers] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        ApiGetUsers.getUsers()
            .then((data) => {
                if (!data.results) {
                    throw new Error("Bad Gateway endpoint API")
                }
                setStatus("Success");
                setUsers(data.results);
            })
            .catch((err) => {
                setStatus(err.toString());
            });
    }, []);

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

    const [sortColumn, setSortColumn] = useState(null);
    const [sortDescending, setSortDescending] = useState(true);
    const handleSort = (clickedColumn) => {
        if (sortColumn !== clickedColumn) {
            setSortColumn(clickedColumn);
            setSortDescending(true);
        } else {
            setSortDescending(!sortDescending);
        }
    };

    const handleSearch = (searchTerm) => {
        setUsers(prevUsers => prevUsers.filter(Users.map((user) => user.userFullName.toLowerCase().includes(searchTerm.toLowerCase()))));
    }

    let [searchTerm, setSearchTerm] = useState("")
    const filteredUsers = Users.filter(Users =>
        Users.userFullName.toLowerCase().includes(searchTerm.toLowerCase())
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
            status={status}
        />
    );
}

export default UsersParent;

