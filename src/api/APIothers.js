// Function to get data from API using GET method
const getData = async () => {
    try {
        const response = await axios.get('https://api.example.com/data');
        const data = response.data;
        // Do something with data
    } catch (error) {
        console.error(error);
    }
};

// Function to post data to API using POST method
const postData = async (data) => {
    try {
        await axios.post('https://api.example.com/data', data);
        // Do something after successful post
    } catch (error) {
        console.error(error);
    }
};

// Function to update data using PUT method
const updateData = async (data) => {
    try {
        await axios.put('https://api.example.com/data/1', data);
        // Do something after successful update
    } catch (error) {
        console.error(error);
    }
};

// Function to delete data using DELETE method
const deleteData = async (id) => {
    try {
        await axios.delete(`https://api.example.com/data/${id}`);
        // Do something after successful delete
    } catch (error) {
        console.error(error);
    }
};
