import axios from "axios";

// let token = localStorage.getItem('token');
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJzaGlub2JpcHJvZ3JhbW1lckBnbWFpbC5jb20iLCJ1c2VyRnVsbE5hbWUiOiJGYXFpaCBQcmF0YW1hIE11aHRpIiwidXNlclBob25lTnVtYmVyIjpudWxsLCJpYXQiOjE2NzQ1NDEyMjcsImV4cCI6MTY3NDU0MTQwN30.JAlUDmNiIxrPZZFB3SNMU4Y9oD9_zT2V503HzMrRghw";

export default axios.create({
    baseURL: "http://localhost:3005",
    headers: {
        "Content-Type": "application/json",
        // 'Authorization': token
    },
})