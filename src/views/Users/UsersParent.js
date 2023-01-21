import React, { useState, useEffect } from 'react';

// API Login
import ApiGetUsers from 'api/users/ApiGetUsers';
import UsersChild from './UsersChild';

const UsersParent = () => {

    const [Users, setUsers] = useState([]);
    // const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [status, setStatus] = useState('');

    useEffect(() => {
        ApiGetUsers.getUsers()
            .then((data) => {
                if (!data.results) {
                    // setIsLoading(false);
                    // throw new Error("Bad Gateway API Users")
                }
                // Users = data.results;
                setUsers(data.results);
                // console.info(data.results)
                // setIsLoading(false);
            })
            .catch((err) => {
                // setStatus(err.message.toString());
                setError(err);
                // setIsLoading(false);
            });
    }, []);

    Users.map((user) => {
        console.info(user.userFullName)
    })

    // console.info(Users.userFullName);

    // if (isLoading) {
    //     // console.info("Loading")
    //     // setStatus("Loading");
    //     return <div>Loading</div>;
    // }

    // if (error) {
    //     // setStatus(error.message.toString());
    //     return <div>Error: {error}</div>;
    // }

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

    // console.info(columns)

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
    // console.info("handleSearch : " + handleSearch);

    let [searchTerm, setSearchTerm] = useState("")
    const filteredUsers = Users.filter(Users =>
        Users.userFullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.info(filteredUsers);

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortDescending) {
            return a[sortColumn] > b[sortColumn] ? -1 : 1;
        } else {
            return a[sortColumn] < b[sortColumn] ? -1 : 1;
        }
    });
    // console.info("sortedUsers : " + sortedUsers)

    return (
        <UsersChild
            Users={Users}
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

