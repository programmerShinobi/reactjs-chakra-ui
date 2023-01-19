import React, { useState, useEffect } from 'react';
import UsersChild from './UsersChild';

// API Login
import ApiGetUsers from 'api/users/ApiGetUsers';

const UsersParent = () => {
    const [Users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        ApiGetUsers.getUsers()
            .then((result) => {
                if (!result.data.results) {
                    throw new Error("Bad Gateway API Users")
                }
                setUsers(result.data.results);
                console.info(result.data.results);
            })
            .catch((err) => {
                setError(err.toString());
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
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

    const [sortColumn, setSortColumn] = useState(null);
    const [sortAscending, setSortAscending] = useState(true);
    const handleSort = (clickedColumn) => {
        if (sortColumn !== clickedColumn) {
            setSortColumn(clickedColumn);
            setSortAscending(true);
        } else {
            setSortAscending(!sortAscending);
        }
    };

    const handleSearch = (searchTerm) => {
        setUsers(prevUsers => prevUsers.filter(Users => Users.userFullName.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    let [searchTerm, setSearchTerm] = useState("")
    const filteredUsers = Users.filter(Users =>
        Users.data.userFullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortAscending) {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    });

    return (
        <UsersChild
            columns={columns}
            sortAscending={sortAscending}
            sortColumn={sortColumn}
            handleSort={handleSort}
            handleSearch={handleSearch}
            sortedUsers={sortedUsers}
            setSearchTerm={setSearchTerm}
        />
    );
}

export default UsersParent;

