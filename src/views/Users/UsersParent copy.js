import React, { useState, useEffect } from 'react';

// API Login
import ApiGetUsers from 'api/users/ApiGetUsers';
import UsersChild from './UsersChild';

// const UsersParent = () => {
//     const [Users, setUsers] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         ApiGetUsers.getUsers()
//             .then((result) => {
//                 if (!result.data.results) {
//                     throw new Error("Bad Gateway API Users")
//                 }
//                 setUsers(result.data.results);
//                 console.info(result.data.results);
//             })
//             .catch((err) => {
//                 setError(err);
//             });
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }


//     const columns = [
//         {
//             name: 'ID',
//             selector: 'userId',
//             sortable: true,
//         },
//         {
//             name: 'Full Name',
//             selector: 'userFullName',
//             sortable: true,
//         },
//         {
//             name: 'Type',
//             selector: 'userType',
//             sortable: true,
//         },
//         {
//             name: 'Company',
//             selector: 'userCompanyName',
//             sortable: true,
//         },
//         {
//             name: 'Email',
//             selector: 'userEmail',
//             sortable: true,
//         },
//         {
//             name: 'Phone',
//             selector: 'userPhoneNumber',
//             sortable: true,
//         },
//         {
//             name: 'Date',
//             selector: 'userModifiedDate',
//             sortable: true,
//         },
//     ];

//     const [sortColumn, setSortColumn] = useState(null);
//     const [sortAscending, setSortAscending] = useState(true);
//     const handleSort = (clickedColumn) => {
//         if (sortColumn !== clickedColumn) {
//             setSortColumn(clickedColumn);
//             setSortAscending(true);
//         } else {
//             setSortAscending(!sortAscending);
//         }
//     };

//     const handleSearch = (searchTerm) => {
//         setUsers(prevUsers => prevUsers.filter(Users => Users.userFullName.toLowerCase().includes(searchTerm.toLowerCase())));
//     }

//     let [searchTerm, setSearchTerm] = useState("")
//     const filteredUsers = Users.filter(Users =>
//         Users.data.userFullName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const sortedUsers = filteredUsers.sort((a, b) => {
//         if (sortAscending) {
//             return a[sortColumn] > b[sortColumn] ? 1 : -1;
//         } else {
//             return a[sortColumn] < b[sortColumn] ? 1 : -1;
//         }
//     });

//     return (
//         <UsersChild
//             columns={columns}
//             sortAscending={sortAscending}
//             sortColumn={sortColumn}
//             handleSort={handleSort}
//             handleSearch={handleSearch}
//             sortedUsers={sortedUsers}
//             setSearchTerm={setSearchTerm}
//         />
//     );
// }

const UsersParent = () => {

    const [Users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState('');

    useEffect(() => {
        ApiGetUsers.getUsers()
            .then((data) => {
                if (!data.results) {
                    // setIsLoading(false);
                    throw new Error("Bad Gateway API Users")
                }
                // Users = data.results;
                setUsers(data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                setStatus(err.message.toString());
                setError(err);
                setIsLoading(false);
            });
    }, []);

    console.info(status);

    if (isLoading) {
        // setStatus("Loading");
    }

    if (error) {
        // setStatus(error.message.toString());
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
        setUsers(prevUsers => prevUsers.filter(User => User.userFullName.toLowerCase().includes(searchTerm.toLowerCase())));
    }
    console.info("handleSearch : " + handleSearch);

    let [searchTerm, setSearchTerm] = useState("")
    const filteredUsers = Users.filter(User =>
        User.userFullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortAscending) {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    });
    console.info("sortedUsers : " + sortedUsers)

    return (
        <UsersChild
            Users={Users}
            columns={columns}
            sortAscending={sortAscending}
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

